import React, { useState, useRef, useEffect } from "react";
// var DateTimeField = require('react-bootstrap-datetimepicker');
import DatePicker from "react-datepicker";


const TimeApp = () => {
  const [time, setTime] = useState(new Date());
  const timeListRef = useRef(null);
const [open, setOpen] = useState(false);

// Add active class dynamically
  useEffect(() => {
    const timeList = document.querySelector(".react-datepicker__time-list");
    if (!timeList) return;

    const handleScroll = () => {
      const items = Array.from(
        timeList.querySelectorAll(".react-datepicker__time-list-item")
      );

      const scrollTop = timeList.scrollTop;
      const listHeight = timeList.clientHeight;

      // center position
      const center = scrollTop + listHeight / 2;

      items.forEach((item) => {
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;

        if (center >= itemTop && center < itemTop + itemHeight) {
          item.classList.add("active-time");
        } else {
          item.classList.remove("active-time");
        }
      });
    };

    timeList.addEventListener("scroll", handleScroll);

    // Initial call
    handleScroll();

    return () => {
      timeList.removeEventListener("scroll", handleScroll);
    };
  }, [time]);

  return (

   
<>
      
<DatePicker
  selected={time}
  onChange={(date) => setTime(date)}
  showTimeSelect
  showTimeSelectOnly
  timeIntervals={15}
  timeCaption="Time"
  dateFormat="hh:mm aa"
  className="form-control"
  popperPlacement="bottom"
  open={open}
  onClickOutside={() => setOpen(false)}
  onSelect={() => setOpen(false)}
  onFocus={() => setOpen(true)}

/>
      {/* <p>Selected time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p> */}

  </>
  );
};

export default TimeApp;
