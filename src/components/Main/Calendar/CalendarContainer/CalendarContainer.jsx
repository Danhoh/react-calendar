import React from "react";
import styles from "./CalendarContainer.css"
import MounthTitle from "./MounthTitle/MounthTitle";


export default function CalendarContainer() {
  return (
    <div className={styles['calendar-container']}>
      <MounthTitle />
    </div>
  )
}