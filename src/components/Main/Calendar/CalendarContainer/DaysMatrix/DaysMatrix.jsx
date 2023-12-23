import React from "react";
import styles from "./DaysMatrix.css"


export default function DaysMatrix(props) {
  const geterateMatrix = () => {
    let daysCount = props.daysCount ? props.daysCount : 30;
    const rowsCount = Math.ceil(daysCount / 7);
    const matrix = (function () {
      let arr = [];

      for (let i = 0; i < rowsCount; i++) {
        arr.push(new Array());
      }
      return arr;
    })();
    const weekDaysCount = 7;

    for (let i = 0; i < rowsCount; i++) {
      for (let j = 0; j < weekDaysCount; j++) {
        if (daysCount > 0) {
          matrix[i].push(<DayCell>{i * 7 + j + 1}</DayCell>);
          daysCount--;
        } else {
          break;
        }
      }
    }
    return matrix.map(e => {
      return (
        <div>{e}</div>
      )
    });
  }
  return (
    <div>
      {geterateMatrix()}
    </div>
  )
}

function DayCell(props) {
  return (
    <span className={styles['day-cell']}>
      {props.children ? props.children : 'day'}
    </span>
  )
}