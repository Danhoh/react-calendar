import React from "react";
import ReactDOM from "react-dom";

const reactRoot = document.querySelector('#root');

function App() {
  return <h1>Hello world!</h1>;
}

ReactDOM.render(<App />, reactRoot);