import React, { useContext, useState, useEffect, useRef } from "react";
import Button from "../Button/Button";
import styles from "./Slider.css";
import cn from "classnames";
import { AppContext } from "../../Layout/Layout";


export default function Slider({ values, ...rest }) {
  const appContext = useContext(AppContext);
  const sliderValues = values ? values : ['...'];
  let [popUpVisability, setpopUpVisability] = useState(false);
  let [sliderButtonValue, setSliderButtonValue] = useState(sliderValues[0]);

  const ButtonHandler = () => {
    setpopUpVisability(!popUpVisability);
  }

  return (
    <div className={styles["slider"]}>
      <Button
        value={sliderButtonValue}
        onClick={ButtonHandler}
      />
      <SliderPopUp
        className={(() => {
          return popUpVisability ? styles.enabled : styles.disabled;
        })()}
        values={sliderValues}
        sliderButtonHandler={(val) => {
          setSliderButtonValue(val);
          setpopUpVisability(!popUpVisability);
        }}
      />
    </div>
  )
}

function SliderPopUp(props) {
  const containerRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        console.log("You clicked outside of me!");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef.current]);

  return (
    <div className={cn(styles['slider-pup-up'], props.className)}>
      <ul className={styles['slider-title-pup-up__ul']}>
        {props.values.map((val, i) => {
          return (
            <li className={styles['slider-title-pup-up__li']}>
              <Button
                ref={containerRef}
                value={val}
                style={{
                  display: 'block',
                  margin: '0 auto',
                  width: '100%',
                }}
                onClick={() => {
                  props.sliderButtonHandler(props.values[i]);
                }}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
