import "./Slider.css";
import { AppContext } from "./AppContext";
import { useState, useContext, useEffect, useRef } from "react";

function Slider({ isActive, id }) {
  const { toggleItemActive } = useContext(AppContext);
  let active = isActive ? 2 : 1;
  const [sliderValue, setSliderValue] = useState(active);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty(
        "--color-slider",
        sliderValue === 2 ? "var(--color-red-700)" : "var(--color-neutral-300)"
      );
    }
  }, [sliderValue]);

  const sliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
  };

  return (
    <input
      onClick={() => toggleItemActive(id)}
      className='cursor-pointer'
      onChange={sliderChange}
      type='range'
      min={1}
      max={2}
      step={1}
      defaultValue={sliderValue}
      ref={sliderRef}
    />
  );
}

export default Slider;
