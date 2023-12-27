import React, { useContext, useState, useEffect, forwardRef, useRef } from "react";
import Button from "../Button/Button";
import styles from "./Slider.css";
import cn from "classnames";
import { AppContext } from "../../Layout/Layout";
import classNames from "classnames";

export default function Slider({
  values, valueID, className, sliderButtonHandler,
  sliderPopUpButtonHandler, ...rest }) {
  const appContext = useContext(AppContext);
  const sliderValues = values ? values : ['...'];
  const [popUpVisability, setPopUpVisability] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (appContext.mouseDown && !containerRef.current.contains(appContext.target)) {
      setPopUpVisability(false);
    }
  }, [appContext.mouseDown]);

  const genericSliderButtonHandler = () => {
    sliderButtonHandler && sliderButtonHandler();
    setPopUpVisability(!popUpVisability);
  }

  const genericSliderPopUpButtonHandler = (id) => {
    sliderPopUpButtonHandler && sliderPopUpButtonHandler(id);
    setPopUpVisability(!popUpVisability);
  }

  return (
    <div ref={containerRef} className={classNames(styles["slider"], className)} {...rest}>
      <Button
        value={values[valueID]}
        onClick={genericSliderButtonHandler}
      />
      <SliderPopUp
        className={(() => {
          return popUpVisability ? styles.enabled : styles.disabled;
        })()}
        values={sliderValues}
        sliderPopUpButtonHandler={genericSliderPopUpButtonHandler}
      />
    </div>
  )
}

function SliderPopUp({ sliderPopUpButtonHandler, ...rest }) {

  return (
    <div className={cn(styles['slider-pop-up'], rest.className)}>
      <ul className={styles['slider-title-pop-up__ul']}>
        {rest.values.map((val, i) => {
          return (
            <li
              key={i}
              className={styles['slider-title-pop-up__li']}
            >
              <Button
                value={val}
                style={{
                  display: 'block',
                  margin: '0 auto',
                  width: '100%',
                }}
                onClick={() => {
                  sliderPopUpButtonHandler(i);
                }}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
