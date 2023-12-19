import React from "react";
import Calendar from "./Calendar/Calendar";
import styles from "./Main.css";


export default function Main() {
  for (let i = 0; i < 10; i++) {
    console.log(`Logging... ${i}`);
  }

  return (
    <main className={styles.main}>
      <Calendar />
    </main>
  )
}