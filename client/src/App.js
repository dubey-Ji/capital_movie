import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/HomePage/Home";
import FormLogin from "./components/FormLogin";
import FormSignUp from "./components/FormSignUp";
import LatestPage from "./components/LatestPage";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import PopularPage from "./components/PopularPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/latest">
          <LatestPage />
        </Route>
        <Route path="/popular">
          <PopularPage />
        </Route>
        <Route path="/login">
          <FormLogin />
        </Route>
        <Route path="/signup">
          <FormSignUp />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
