import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout/Layout";

const reactRoot = document.querySelector('#root');

function App() {
  return (
    <>
      <Layout />
    </>);
}

ReactDOM.render(<App />, reactRoot);