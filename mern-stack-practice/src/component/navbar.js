import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const style = {
    color: "#bd2904",
    fontWeight: "bold",
  };
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <NavLink
          className="navbar-brand"
          exact
          to="/"
          activeClassName="font-weight-bold"
        >
          Exercise Managerment
        </NavLink>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              to="/exercises"
              exact
              className="nav-link"
              activeClassName=" badge badge-light text-dark"
            >
              Exercises
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/create-exercise"
              activeClassName="badge badge-light text-dark"
              className="nav-link"
            >
              Create exercises
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/create-user"
              activeClassName="badge badge-light text-dark"
              className="nav-link"
            >
              Create user
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
