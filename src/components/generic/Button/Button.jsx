import React from "react";
import styles from "./Button.css";
import classNames from "classnames";


export default function Button(props) {
  const { className, ...rest } = props;
  return (
    <button className={classNames(styles.Button, className)} {...rest}>
      {props.value ? props.value : "Button"}
    </button>
  )
}