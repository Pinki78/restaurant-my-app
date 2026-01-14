import React, { useState } from "react";
// var DateTimeField = require('react-bootstrap-datetimepicker');
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const TimeApp = () => {
  const [time, setTime] = useState(new Date());

  return (
    // <div className="container mt-5">
    //   <h4>Select Time (24h format)</h4>
    //    <DatePicker
    //     selected={time}
    //     onChange={(date) => setTime(date)}
    //     showTimeSelect
    //     showTimeSelectOnly
    //     timeIntervals={15}
    //     timeCaption="Time"
    //     dateFormat="HH:mm" // 24-hour format
    //   />
    //   <p>Selected time: {time.toLocaleTimeString()}</p>
    // </div>

    <div style={{ padding: "50px" }}>
      <h4>Select Time (24h format)</h4>
      <DatePicker
        selected={time}
        onChange={(date) => setTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}         // Step in minutes
        timeCaption="Time"
        dateFormat="HH:mm"          // 24-hour format
        className="form-control"    // Makes it look like an input
        popperPlacement="bottom"    // Popup below input
      />
      <p>Selected time: {time.toLocaleTimeString([], { hour12: false })}</p>
    </div>
  );
};

export default TimeApp;
