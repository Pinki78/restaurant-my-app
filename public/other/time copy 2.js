// time.jsx
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form,} from "react-bootstrap";
const TimeApp = ({ value, onChange,  }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const timeList = document.querySelector(".react-datepicker__time-list");
    if (!timeList) return;

    const handleScroll = () => {
      const items = timeList.querySelectorAll(
        ".react-datepicker__time-list-item"
      );
      const center = timeList.scrollTop + timeList.clientHeight / 2;

      items.forEach((item) => {
        const top = item.offsetTop;
        const height = item.offsetHeight;
        item.classList.toggle(
          "active-time",
          center >= top && center < top + height
        );
      });
    };

    timeList.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => timeList.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
   
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
      onClick={() => setOpen(true)}
      onClickOutside={() => setOpen(false)}
      onSelect={() => setOpen(false)}
    />
    
  );
};

export default TimeApp;
