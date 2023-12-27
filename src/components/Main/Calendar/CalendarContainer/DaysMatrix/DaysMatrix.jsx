import React from "react";
import styles from "./DaysMatrix.css"
import classNames from "classnames";


export default function DaysMatrix({ selectedDay,
  clickCellHandler, className, ...rest }) {
  function genericClickCellHandler(id) {
    return () => {
      clickCellHandler && clickCellHandler(id);
    }
  }
  const geterateMatrix = () => {
    let daysCount = rest.daysCount ? rest.daysCount : 30;
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
          const dayNumber = i * 7 + j + 1;
          matrix[i].push(
            <DayCell
              className={classNames(className, selectedDay == dayNumber && styles['selected-day'])}
              key={dayNumber}
              clickCellHandler={genericClickCellHandler(dayNumber)}
            >
              {dayNumber}
            </DayCell>
          );
          daysCount--;
        } else {
          break;
        }
      }
    }
    return matrix.map((e, i) => {
      return (
        <div key={i}>{e}</div>
      )
    });
  }
  return (
    <div {...rest}>
      {geterateMatrix()}
    </div>
  )
}

function DayCell({ children, className, clickCellHandler, ...rest }) {
  return (
    <span
      className={classNames(className, styles['day-cell'])}
      onClick={clickCellHandler}
      {...rest}
    >
      {children ? children : '0'}
    </span>
  )
}