import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  if (state) {
    return (
      <>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "transparent" }}
        >
          <div class="container-fluid">
            <Link
              class="navbar-brand"
              to="/"
              style={{ color: "red", fontWeight: "500" }}
            >
              CapitalMovies
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style={{ color: "white" }}>Discover</span>
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link class="dropdown-item" to="/popular">
                        Popular
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/latest">
                        Latest
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                        Favourites
                      </Link>
                    </li>
                  </ul>
                </li>
                <Link to="/logout" className="btnLogin">
                  Logout
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "transparent" }}
        >
          <div class="container-fluid">
            <Link
              class="navbar-brand"
              to="/"
              style={{ color: "red", fontWeight: "500" }}
            >
              CapitalMovies
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style={{ color: "white" }}>Discover</span>
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link class="dropdown-item" to="/popular">
                        Popular
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/latest">
                        Latest
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                  </ul>
                </li>
                <Link to="/login" className="btnLogin">
                  Login
                </Link>
                <Link to="/signup" className="btnSignup">
                  SignUp
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default Navbar;
