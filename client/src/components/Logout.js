import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const callLogout = () => {
    fetch("http://localhost:8000/userlogout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      dispatch({ type: "USER", payload: false });
      history.push("/login", { resplace: true });
    });
  };

  useEffect(() => {
    callLogout();
  }, []);

  return (
    <>
      <h1>Logout Page</h1>
    </>
  );
};

export default Logout;
