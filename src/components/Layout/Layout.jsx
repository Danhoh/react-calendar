import React, { createContext, useState } from "react"
import Header from "../Header/Header"
import styles from "./Layout.css"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"

export const AppContext = createContext(null);


export default function Layout() {
  const [contextValue, setContextValue] = useState({ mouseDown: false });

  return (
    <div
      onMouseDown={() => {
        setContextValue({ mouseDown: true });
      }}
      onMouseUp={() => {
        setContextValue({ mouseDown: false });
      }}
    >
      <AppContext.Provider value={contextValue}>
        <Header />
        <Main />
        <Footer />
      </AppContext.Provider>
    </div>

  )
}