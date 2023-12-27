import React, { useContext, useState } from "react";
import styles from "./CalendarContainer.css";
import DaysMatrix from "./DaysMatrix/DaysMatrix";
import Slider from "../../../generic/Slider/Slider";
import { AppContext } from "../../../Layout/Layout";



export default function CalendarContainer() {
  const years = [2020, 2021, 2022, 2023, 2024];
  const leapYears = [2040, 2036, 2032, 2028, 2024, 2020, 2016]; // весокосные года
  const appContext = useContext(AppContext);
  const mounthMap = {
    'January': 31,
    'February': leapYears.includes(years[appContext.currentDate.yearID]) ? 29 : 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31,
  }


  return (
    <div className={styles['calendar-container']}>
      <div className={styles['calendar-container__controls']}>
        <Slider // mounth
          values={Object.keys(mounthMap)}
          valueID={appContext.currentDate.mounthID}
          sliderPopUpButtonHandler={(id => {
            appContext.setContextValue(prev => {
              return {
                ...prev,
                currentDate: {
                  ...prev.currentDate,
                  mounthID: id,
                }
              }
            })
          })}
          style={{
            marginRight: '20px',
          }}
        />
        <Slider // year
          values={years}
          valueID={appContext.currentDate.yearID}
          sliderPopUpButtonHandler={(id => {
            appContext.setContextValue(prev => {
              return {
                ...prev,
                currentDate: {
                  ...prev.currentDate,
                  yearID: id,
                }
              }
            })
          })}
        />
      </div>
      <DaysMatrix
        daysCount={Object.values(mounthMap)[appContext.currentDate.mounthID]}
        selectedDay={appContext.currentDate.dayID}
        clickCellHandler={(id => {
          appContext.setContextValue(prev => {
            return {
              ...prev,
              currentDate: {
                ...prev.currentDate,
                dayID: id,
              }
            }
          })
        })}
      />
    </div>
  )
}