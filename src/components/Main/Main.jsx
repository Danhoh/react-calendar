import React from "react";
import Calendar from "./Calendar/Calendar";
import styles from "./Main.css";


export default function Main() {
  return (
    <main className={styles.main}>
      <Calendar />
    </main>
  )
}