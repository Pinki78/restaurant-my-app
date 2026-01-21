import React, { useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import { FaRegClock } from "react-icons/fa";

const TimeApp = ({ value, onChange }) => {
  const timeListRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const timeList = document.querySelector(".react-datepicker__time-list");
    if (!timeList) return;

    const handleScroll = () => {
      const items = Array.from(
        timeList.querySelectorAll(".react-datepicker__time-list-item")
      );

      const center = timeList.scrollTop + timeList.clientHeight / 2;

      items.forEach((item) => {
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;

        // item.classList.toggle(
        //   "active-time",
        //   center >= itemTop && center < itemTop + itemHeight
        // );
      });
    };

    timeList.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => timeList.removeEventListener("scroll", handleScroll);
  }, [value]);

  return (
     <div className="time-input-wrapper">
      
    <DatePicker
      selected={value}
      onChange={onChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="hh:mm aa"
      className="form-control"
      open={open}
      onFocus={() => setOpen(true)}
      onClickOutside={() => setOpen(false)}
      onSelect={() => setOpen(false)}
       placeholderText="Select Time" 
    />
    <FaRegClock className="time-icon" />
    </div>
  );
};

export default TimeApp;
