import React, { createContext, useEffect, useState } from "react"
import Header from "../Header/Header"
import styles from "./Layout.css"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"

export const AppContext = createContext(null);


export default function Layout() {
  const years = [2020, 2021, 2022, 2023, 2024];
  const date = new Date();

  const [contextValue, setContextValue] = useState(
    {
      mouseDown: false,
      target: null,
      currentDate: {
        dayID: date.getDate(),
        mounthID: date.getMonth(),
        yearID: years.indexOf(date.getFullYear()),
      }
    }
  );
  useEffect(() => {
    console.log('contextValue', contextValue.currentDate);
  });

  return (
    <div
      className={styles['layout']}
      onMouseDown={(e) => {
        setContextValue({ ...contextValue, mouseDown: true, target: e.target });
      }}
      onMouseUp={(e) => {
        setContextValue({ ...contextValue, mouseDown: false, target: e.target });
      }}
    >
      <AppContext.Provider value={{ ...contextValue, setContextValue: setContextValue }}>
        <Header />
        <Main />
        <Footer />
      </AppContext.Provider>
    </div>

  )
}