import React, { useEffect, useRef, useState } from "react";
import "../../style/timepicker.css";

const ITEM_HEIGHT = 40;
const BUFFER_ITEMS = 2;

const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, "0")
);
const ampmOptions = ["AM", "PM"];

const TimePicker = ({ onClose }) => {
  const now = new Date();

  const [hour, setHour] = useState(((now.getHours() + 11) % 12) + 1);
  const [minute, setMinute] = useState(
    now.getMinutes().toString().padStart(2, "0")
  );
  const [ampm, setAmpm] = useState(now.getHours() >= 12 ? "PM" : "AM");

  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const ampmRef = useRef(null);

  // Initialize scroll positions on mount
  useEffect(() => {
    hourRef.current.scrollTop = (hour - 1 + BUFFER_ITEMS) * ITEM_HEIGHT;
    minuteRef.current.scrollTop = (parseInt(minute) + BUFFER_ITEMS) * ITEM_HEIGHT;
    ampmRef.current.scrollTop =
      ampm === "AM" ? BUFFER_ITEMS * ITEM_HEIGHT : (BUFFER_ITEMS + 1) * ITEM_HEIGHT;
  }, []);

  // Generic scroll handler for hours and minutes
  const handleScroll = (list, setter) => (e) => {
    const index = Math.round(e.target.scrollTop / ITEM_HEIGHT) - BUFFER_ITEMS;
    setter(list[Math.max(0, Math.min(index, list.length - 1))]);
  };

  // AM/PM scroll handler
  const handleAmpmScroll = () => {
    const scrollTop = ampmRef.current.scrollTop;
    const index = Math.round((scrollTop - BUFFER_ITEMS * ITEM_HEIGHT) / ITEM_HEIGHT);
    setAmpm(index <= 0 ? "AM" : "PM");
  };

  // Click handler
  const handleClick = (value, setter, ref, list = null) => {
    setter(value);
    if (list) {
      const index = list.indexOf(value);
      ref.current.scrollTop = (index + BUFFER_ITEMS) * ITEM_HEIGHT;
    } else {
      ref.current.scrollTop =
        value === "AM" ? BUFFER_ITEMS * ITEM_HEIGHT : (BUFFER_ITEMS + 1) * ITEM_HEIGHT;
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
            onScroll={handleScroll(hours, setHour)}
          >
            {[...Array(BUFFER_ITEMS)].map((_, i) => (
              <div key={`h-top-${i}`} className="wheel-item"></div>
            ))}
            {hours.map((h) => (
              <div
                key={h}
                className={`wheel-item ${h === hour ? "selected" : ""}`}
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
            onScroll={handleScroll(minutes, setMinute)}
          >
            {[...Array(BUFFER_ITEMS)].map((_, i) => (
              <div key={`m-top-${i}`} className="wheel-item"></div>
            ))}
            {minutes.map((m) => (
              <div
                key={m}
                className={`wheel-item ${m === minute ? "selected" : ""}`}
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
          <div className="wheel ampm-wheel" ref={ampmRef} onScroll={handleAmpmScroll}>
            {ampmOptions.map((ap) => (
              <div
                key={ap}
                className={`wheel-item ${ap === ampm ? "selected" : ""}`}
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
