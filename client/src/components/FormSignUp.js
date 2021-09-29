import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const FormSignUp = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleUserInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    try {
      const { name, email, password, cpassword } = user;

      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });

      const data = await response.json();

      if (data.status === 402 || !data) {
        window.alert("Invalid registeration");
        console.log("Invalid Registeration");
      } else {
        window.alert("Valid registeration");
        console.log("valid registeration");
        history.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section id="form">
        <form action="">
          <h1 className="formTitle">Sign Up</h1>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleUserInput}
          />
          <input
            type="email"
            name="email"
            placeholder="example@domain.com"
            value={user.email}
            onChange={handleUserInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleUserInput}
          />
          <input
            type="password"
            name="cpassword"
            placeholder="Password"
            value={user.cpassword}
            onChange={handleUserInput}
          />
          <button className="btnStyle" onClick={handleSubmitClick}>
            Sign Up
          </button>
          <h6 style={{ color: "#fff" }}>Already User</h6>
          <Link
            to="/login"
            style={{
              opacity: "1",
              fontSize: "0.9rem",
              color: "#b3b3b3",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Sign in
          </Link>
        </form>
      </section>
    </>
  );
};

export default FormSignUp;
