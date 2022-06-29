import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({children, ...props}) => {
  return (
    <div className={classes.containerBtn}>
      <a href="#"  {...props} className={classes.MyBtn}>
        <span>{children}</span>
        <i></i>
      </a>
    </div>
  );
};

export default MyButton;
