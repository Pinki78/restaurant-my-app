import React, { useState, useRef, useEffect } from "react";
// import "./timepicker.css";

export default function TimePickerPopup() {

  // 🔥 Get current time
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const isPM = currentHour >= 12;

  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState(currentHour % 12 || 12);
  const [minute, setMinute] = useState(String(currentMinute).padStart(2, "0"));
  const [period, setPeriod] = useState(isPM ? "PM" : "AM");

  const openPicker = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

    setHour(h % 12 || 12);
    setMinute(String(m).padStart(2, "0"));
    setPeriod(h >= 12 ? "PM" : "AM");
    setOpen(true);
  };

  return (
    <>
      <input
        className="form-control"
        value={`${hour}:${minute} ${period}`}
        readOnly
        onClick={openPicker}
      />

      {open && (
        <div className="tp-overlay">
          <div className="tp-modal">
            <h4>Hello</h4>

            <div className="tp-columns">
              <select value={hour} onChange={e => setHour(e.target.value)}>
                {[...Array(12)].map((_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>

              <span>:</span>

              <select value={minute} onChange={e => setMinute(e.target.value)}>
                {[...Array(60)].map((_, i) => (
                  <option key={i}>
                    {String(i).padStart(2, "0")}
                  </option>
                ))}
              </select>

              <select value={period} onChange={e => setPeriod(e.target.value)}>
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>

            <div className="tp-actions">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button onClick={() => setOpen(false)}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
