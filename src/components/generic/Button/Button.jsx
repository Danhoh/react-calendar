import React from "react";


export default function Button(props) {
  return (
    <button>
      {props.title ? props.title : "Button"}
    </button>
  )
}