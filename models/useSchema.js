const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },

  password: {
    type: String,
  },
  cpassword: {
    type: String,
  },
  favourites: [],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Hashing Password
userSchema.pre("save", async function (next) {
  // Run only when password is changed
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// Generating Token

userSchema.methods.generateAuthToken = async function () {
  try {
    let userToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: userToken });
    await this.save();
    return userToken;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
