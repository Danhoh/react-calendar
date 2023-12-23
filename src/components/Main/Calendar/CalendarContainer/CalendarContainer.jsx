import React, { useContext } from "react";
import styles from "./CalendarContainer.css";
import DaysMatrix from "./DaysMatrix/DaysMatrix";
import Slider from "../../../generic/Slider/Slider";


export default function CalendarContainer() {
  let mounthList = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

  return (
    <div className={styles['calendar-container']}>
      <Slider values={mounthList} />
      <Slider values={['2020', '2021', '2022', '2023']} />
      <DaysMatrix />
    </div>
  )
}