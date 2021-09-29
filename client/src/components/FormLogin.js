import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const FormLogin = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/userlogin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("Login Successful");
      dispatch({ type: "USER", payload: true });
      console.log("Login Successful");
      history.push("/");
    }
  };

  return (
    <>
      <section id="form">
        <form action="">
          <h1 className="formTitle">Sign In</h1>
          <input
            type="email"
            name="email"
            placeholder="example@domain.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btnStyle" onClick={handleLoginClick}>
            Sign In
          </button>
          <h6 style={{ color: "#fff" }}>New User</h6>
          <Link
            to="/signup"
            style={{
              opacity: "1",
              fontSize: "0.9rem",
              color: "#b3b3b3",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Sign Up
          </Link>
        </form>
      </section>
    </>
  );
};

export default FormLogin;
