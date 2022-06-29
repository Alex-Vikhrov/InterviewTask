import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <ul className={classes.navBar__links}>
        <li>
          <Link className={classes.a} to="/about">
            About the site
          </Link>
        </li>
        <li>
          <Link className={classes.a} to="/posts">
            Table Posts
          </Link>
        </li>
        <li>
          <Link className={classes.a} to="/graph">
            View Graph 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
