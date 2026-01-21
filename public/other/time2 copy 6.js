import React, { useEffect, useRef, useState } from "react";
import "../../style/timepicker.css";

const ITEM_HEIGHT = 40;
const BUFFER_ITEMS = 2;

const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
const ampmOptions = ["AM", "PM"];

const TimePicker = ({ onClose }) => {
  const now = new Date();

  // Selected state
  const [hour, setHour] = useState(((now.getHours() + 11) % 12) + 1);
  const [minute, setMinute] = useState(now.getMinutes().toString().padStart(2, "0"));
  const [ampm, setAmpm] = useState(now.getHours() >= 12 ? "PM" : "AM");

  // Active indexes for highlighting
  const [hourIndex, setHourIndex] = useState(hour - 1);
  const [minuteIndex, setMinuteIndex] = useState(parseInt(minute));
  const [ampmIndex, setAmpmIndex] = useState(ampm === "AM" ? 0 : 1);

  // Refs
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const ampmRef = useRef(null);
// AM/PM wheel height = 2 items visible (height = 80px if each 40px)
const AMPM_WHEEL_VISIBLE = 2; // number of visible items

// Calculate scrollTop for only 2 items
const getAmpmScrollTop = (index) => {
  const wheelHeight = AMPM_WHEEL_VISIBLE * ITEM_HEIGHT; // 2 * 40 = 80
  return index * ITEM_HEIGHT - (wheelHeight / 2 - ITEM_HEIGHT / 2);
};

  // Scroll to current time on mount
  useEffect(() => {
    hourRef.current.scrollTo({ top: (hourIndex + BUFFER_ITEMS) * ITEM_HEIGHT, behavior: "smooth" });
    minuteRef.current.scrollTo({ top: (minuteIndex + BUFFER_ITEMS) * ITEM_HEIGHT, behavior: "smooth" });
    ampmRef.current.scrollTo({ top: (ampmIndex + BUFFER_ITEMS) * ITEM_HEIGHT, behavior: "smooth" });
  }, []);
useEffect(() => {
  // scroll AM/PM wheel to selected item
  ampmRef.current.scrollTo({
    top: getAmpmScrollTop(ampmIndex),
    behavior: "smooth",
  });
}, []);

  // Generic scroll handler for hours/minutes
  const handleScroll = (list, setter, setIndex) => (e) => {
    const index = Math.round(e.target.scrollTop / ITEM_HEIGHT) - BUFFER_ITEMS;
    const safeIndex = Math.max(0, Math.min(index, list.length - 1));
    setter(list[safeIndex]);
    setIndex(safeIndex);
  };

  // AM/PM scroll handler
const handleAmpmScroll = () => {
  const scrollTop = ampmRef.current.scrollTop;
  const index = Math.round(scrollTop / ITEM_HEIGHT);
  const safeIndex = Math.max(0, Math.min(index, 1));
  setAmpm(ampmOptions[safeIndex]);
  setAmpmIndex(safeIndex);

  // snap smoothly
  ampmRef.current.scrollTo({
    top: getAmpmScrollTop(safeIndex),
    behavior: "smooth",
  });
};

  // Click handler for hours/minutes/AMPM
const handleClick = (value, setter, ref) => {
  const index = value === "AM" ? 0 : 1;
  setter(value);
  setAmpmIndex(index);
  ref.current.scrollTo({
    top: getAmpmScrollTop(index),
    behavior: "smooth",
  });
};


  return (
    <div className="tp-overlay">
      <div className="tp-modal">
        <h4>Select Time</h4>

        <div className="tp-wheel">
          {/* HOURS */}
          <div className="wheel" ref={hourRef} onScroll={handleScroll(hours, setHour, setHourIndex)}>
            {[...Array(BUFFER_ITEMS)].map((_, i) => <div key={`h-top-${i}`} className="wheel-item"></div>)}
            {hours.map((h, i) => (
              <div
                key={h}
                className={`wheel-item ${i === hourIndex ? "active selected" : ""}`}
                onClick={() => handleClick(h, setHour, hourRef, hours)}
              >
                {h}
              </div>
            ))}
            {[...Array(BUFFER_ITEMS)].map((_, i) => <div key={`h-bottom-${i}`} className="wheel-item"></div>)}
          </div>

          {/* MINUTES */}
          <div className="wheel" ref={minuteRef} onScroll={handleScroll(minutes, setMinute, setMinuteIndex)}>
            {[...Array(BUFFER_ITEMS)].map((_, i) => <div key={`m-top-${i}`} className="wheel-item"></div>)}
            {minutes.map((m, i) => (
              <div
                key={m}
                className={`wheel-item ${i === minuteIndex ? "active selected" : ""}`}
                onClick={() => handleClick(m, setMinute, minuteRef, minutes)}
              >
                {m}
              </div>
            ))}
            {[...Array(BUFFER_ITEMS)].map((_, i) => <div key={`m-bottom-${i}`} className="wheel-item"></div>)}
          </div>

          {/* AM/PM */}
          <div className="wheel ampm-wheel" ref={ampmRef} onScroll={handleAmpmScroll}>
            {ampmOptions.map((ap, i) => (
              <div
                key={ap}
                className={`wheel-item ${i === ampmIndex ? "active selected" : ""} ${
                  ap === "PM" && i === ampmIndex ? "pm-selected" : ""
                }`}
                onClick={() => handleClick(ap, setAmpm, ampmRef)}
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
