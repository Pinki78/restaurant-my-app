import React, { useEffect, useRef, useState } from "react";
import "../../style/timepicker.css";

const ITEM_HEIGHT = 40;
const BUFFER_ITEMS = 2; // top + bottom buffer

const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, "0")
);
const ampmOptions = ["AM", "PM"];

const TimePicker = ({ onClose }) => {
  const now = new Date();

  // State for selected values
  const [hour, setHour] = useState(((now.getHours() + 11) % 12) + 1);
  const [minute, setMinute] = useState(
    now.getMinutes().toString().padStart(2, "0")
  );
  const [ampm, setAmpm] = useState(now.getHours() >= 12 ? "PM" : "AM");

  // State for active indexes
  const [hourIndex, setHourIndex] = useState(hour - 1);
  const [minuteIndex, setMinuteIndex] = useState(parseInt(minute));
  const [ampmIndex, setAmpmIndex] = useState(ampm === "AM" ? 0 : 1);

  // Refs
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const ampmRef = useRef(null);

  // Dynamically order AM/PM list so active item is always top
  const ampmList = ampm === "AM" ? ["AM", "PM"] : ["PM", "AM"];

  // Initialize scroll positions
  useEffect(() => {
    // Smoothly scroll to default selection
    hourRef.current.scrollTo({ top: (hourIndex + BUFFER_ITEMS) * ITEM_HEIGHT, behavior: "smooth" });
    minuteRef.current.scrollTo({ top: (minuteIndex + BUFFER_ITEMS) * ITEM_HEIGHT, behavior: "smooth" });
    ampmRef.current.scrollTo({ top: (ampmIndex + BUFFER_ITEMS) * ITEM_HEIGHT, behavior: "smooth" });
  }, []);

  // Generic scroll handler
  const handleScroll = (list, setter, setIndex) => (e) => {
    const index = Math.round(e.target.scrollTop / ITEM_HEIGHT) - BUFFER_ITEMS;
    const safeIndex = Math.max(0, Math.min(index, list.length - 1));
    setter(list[safeIndex]);
    setIndex(safeIndex);
  };

  // AM/PM scroll handler with smooth snapping
//   const handleAmpmScroll = () => {
//     const scrollTop = ampmRef.current.scrollTop;
//     let index = Math.round(scrollTop / ITEM_HEIGHT);
//     index = Math.max(0, Math.min(index, 1)); // clamp 0 or 1
//     setAmpm(ampmList[index]);
//     setAmpmIndex(index);

//     // Snap smoothly to the exact position
//     ampmRef.current.scrollTo({ top: (index + BUFFER_ITEMS) * ITEM_HEIGHT, behavior: "smooth" });
//   };

const handleAmpmScroll = () => {
  const scrollTop = ampmRef.current.scrollTop;
  const index = Math.round(scrollTop / ITEM_HEIGHT); // 0 = AM, 1 = PM
  const safeIndex = Math.max(0, Math.min(index, 1));

  // Update state
  setAmpm(ampmOptions[safeIndex]);
  setAmpmIndex(safeIndex);

  // Smoothly snap to center
  ampmRef.current.scrollTo({ top: (safeIndex + BUFFER_ITEMS) * ITEM_HEIGHT, behavior: "smooth" });
};

  // Click handler
  const handleClick = (value, setter, ref, list = null) => {
    setter(value);
    if (list) {
      const index = list.indexOf(value);
      ref.current.scrollTo({ top: (index + BUFFER_ITEMS) * ITEM_HEIGHT, behavior: "smooth" });
    } else {
      // For AM/PM wheel
      const index = value === "AM" ? 0 : 1;
      ref.current.scrollTo({ top: (index + BUFFER_ITEMS) * ITEM_HEIGHT, behavior: "smooth" });
      setAmpmIndex(index);
    }
  };

  return (
    <div className="tp-overlay">
      <div className="tp-modal">
        <h4>Select Time</h4>

        <div className="tp-wheel">
          {/* HOURS */}
          <div
            className="wheel"
            ref={hourRef}
            onScroll={handleScroll(hours, setHour, setHourIndex)}
          >
            {[...Array(BUFFER_ITEMS)].map((_, i) => (
              <div key={`h-top-${i}`} className="wheel-item"></div>
            ))}
            {hours.map((h, i) => (
              <div
                key={h}
                className={`wheel-item ${i === hourIndex ? "active selected" : ""}`}
                onClick={() => handleClick(h, setHour, hourRef, hours)}
              >
                {h}
              </div>
            ))}
            {[...Array(BUFFER_ITEMS)].map((_, i) => (
              <div key={`h-bottom-${i}`} className="wheel-item"></div>
            ))}
          </div>

          {/* MINUTES */}
          <div
            className="wheel"
            ref={minuteRef}
            onScroll={handleScroll(minutes, setMinute, setMinuteIndex)}
          >
            {[...Array(BUFFER_ITEMS)].map((_, i) => (
              <div key={`m-top-${i}`} className="wheel-item"></div>
            ))}
            {minutes.map((m, i) => (
              <div
                key={m}
                className={`wheel-item ${i === minuteIndex ? "active selected" : ""}`}
                onClick={() => handleClick(m, setMinute, minuteRef, minutes)}
              >
                {m}
              </div>
            ))}
            {[...Array(BUFFER_ITEMS)].map((_, i) => (
              <div key={`m-bottom-${i}`} className="wheel-item"></div>
            ))}
          </div>

          {/* AM/PM */}
          {/* <div
            className="wheel ampm-wheel"
            ref={ampmRef}
            onScroll={handleAmpmScroll}
          >
            {ampmList.map((ap, i) => (
              <div
                key={ap}
                className={`wheel-item ${ap === ampm ? "active selected" : ""} ${
                  ap === "PM" && ap === ampm ? "pm-selected" : ""
                }`}
                onClick={() => handleClick(ap, setAmpm, ampmRef)}
              >
                {ap}
              </div>
            ))}
          </div> */}

<div
  className="wheel ampm-wheel"
  ref={ampmRef}
  onScroll={handleAmpmScroll}
>
  {ampmOptions.map((ap, i) => (
    <div
      key={ap}
      className={`wheel-item ${
        i === ampmIndex ? "active selected" : ""
      } ${ap === "PM" && i === ampmIndex ? "pm-selected" : ""}`}
    >
      {ap}
    </div>
  ))}
</div>




        </div>

        <div className="tp-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onClose}>
            OK ({hour}:{minute} {ampm})
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
