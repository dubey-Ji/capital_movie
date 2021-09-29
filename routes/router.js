const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../database/config");

const User = require("../models/useSchema");

const authenticate = require("../middleware/authenticate");

router.post("/userlogin", async (req, res) => {
  const { email, password } = req.body;
  let userToken;
  if (!email || !password) {
    return res.status(402).json({ error: "Please fill all the field" });
  }

  try {
    const userLogin = await User.findOne({ email: email });

    if (!userLogin) {
      return res.status(400).json({ message: "Invalid Credentials" });
    } else {
      const passMatched = await bcrypt.compare(password, userLogin.password);

      userToken = await userLogin.generateAuthToken();
      console.log(userToken);
      res.cookie("jwtoken", userToken, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!passMatched) {
        return res.status(400).json({ message: "Invalid Credentials" });
      } else {
        return res.status(200).json({ message: "Login successful" });
      }
    }
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return res.status(402).json({ error: "Please fill all the field" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password does not match" });
    } else {
      const user = new User({
        name,
        email,
        password,
        cpassword,
      });

      await user.save();

      res.status(201).json({ message: "User registered successfuly" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/addfavourite", async (req, res) => {
  const { id } = req.body;
  const response = await User.insertMany({ favourites: "id" });
  console.log(response);
  if (response.insertedCount) {
    res.status(200).json("added successfully");
  }
});

router.get("/userlogout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});

module.exports = router;
