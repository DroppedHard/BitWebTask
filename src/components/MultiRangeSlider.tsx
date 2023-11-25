import { useCallback, useEffect, useState, useRef, Dispatch, SetStateAction } from "react";
import "./multiRangeSlider.css";
import { MultiRangedSlideFields } from "../interfaces/ComponentInterface";

const MultiRangeSlider = ({ min, max }:MultiRangedSlideFields) => {
  const [minVal, setMinVal]:[number, Dispatch<SetStateAction<number>>] = useState(min);
  const [maxVal, setMaxVal]:[number, Dispatch<SetStateAction<number>>] = useState(max);
  const minValRef:React.MutableRefObject<number> = useRef(min);
  const maxValRef:React.MutableRefObject<number> = useRef(max);
  const range:React.MutableRefObject<any> = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value:number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={event => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left appearance-none"
        style={{ zIndex: minVal > max ? 100 : 5 }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={event => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right appearance-none"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
