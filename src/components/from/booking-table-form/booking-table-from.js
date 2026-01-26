// BookingTableForm.jsx
import { useState, useRef } from "react";
import { BoookingInputData } from "../../../api-data/form-data/booking-form-data";
import { Button, Col, Form, Row } from "react-bootstrap";
import TimeApp from "./time";
import ButtonType from "../../button-box/button";

import { ToastContainer, toast } from "react-toastify";

import { submitBookingStore } from "../../../assets/firebase/bookFormFirebaseFunctions";

const BookingTableForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    members: "",
    children: "",
    date: "",
    time: "",
    message: "",
  });

  const inputRefs = useRef({});

  // Map input field names to normalized keys
  const normalizeName = (name) => {
    switch (name) {
      case "Your Name":
        return "name";
      case "members":
        return "members";
      case "children":
        return "children";
      case "Date":
        return "date";
      case "Time":
        return "time";
      case "Message":
        return "message";
      default:
        return name;
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    name = normalizeName(name);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTimeChange = (time) => {
    setFormData((prev) => ({ ...prev, time }));
  };

  const handlePickerClick = (name) => {
    const input = inputRefs.current[name];
    if (input?.showPicker) input.showPicker();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    console.log("Form data before submit:", formData);

    // Total people = members + children
    const people = Number(formData.members || 0) + Number(formData.children || 0);

    const { name, date, time } = formData;
  if (!name || !people || !date || !time) {
    toast.error("Please fill all fields");
    return;
  }
    try {
      const docId = await submitBookingStore({ ...formData, people });
      // alert("Booking submitted! ID: " + docId);
// Show toast messages
      toast.success("Booking submitted! ID" + docId); // ✅ success toast

      // Reset form
      setFormData({
        name: "",
        members: "",
        children: "",
        date: "",
        time: "",
        message: "",
      });
      setValidated(false);
    } catch (error) {
      // Show error toast
    toast.error(error?.message || "Failed to submit booking");
      console.error("Error submitting booking:", error);
      // alert("Failed to submit booking. Please try again.");
    }
  };

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        {BoookingInputData.map((item) => (
          <Form.Group
            as={Col}
            md={item.type === "textarea" ? 12 : 6}
            key={item.id}
            className="mb-3"
          >
            {item.type === "select" ? (
              <Form.Select
                name={item.Inputname}
                onChange={handleChange}
                required
                value={formData[normalizeName(item.Inputname)] || ""}
              >
                <option value="">{item.label}</option>
                {item.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Form.Select>
            ) : item.type === "textarea" ? (
              <Form.Control
                as="textarea"
                rows={3}
                value={formData[normalizeName(item.Inputname)] || ""}
                name={item.Inputname}
                placeholder={item.label}
                onChange={handleChange}
                required
              />
            ) : item.type === "date" ? (
              <Form.Control
                ref={(el) => (inputRefs.current[item.Inputname] = el)}
                type="date"
                name={item.Inputname}
                value={formData[normalizeName(item.Inputname)] || ""}
                onClick={() => handlePickerClick(item.Inputname)}
                onChange={handleChange}
                required
              />
            ) : item.label === "Time" ? (
              <div
                className={`custom-time-field ${
                  validated && !formData.time ? "is-invalid" : ""
                }`}
              >
                <TimeApp value={formData.time} onChange={handleTimeChange} />
                <Form.Control.Feedback type="invalid">
                  {item.errorText}
                </Form.Control.Feedback>
              </div>
            ) : (
              <Form.Control
                type={item.type}
                name={item.Inputname}
                value={formData[normalizeName(item.Inputname)] || ""}
                placeholder={item.label}
                onChange={handleChange}
                required
              />
            )}

            {item.Inputname !== "Time" && (
              <Form.Control.Feedback type="invalid">
                {item.errorText}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        ))}
      </Row>

      <ButtonType ButtonType="submit" ButtonName="Submit" ClassBtn2="bx-button-2" />
    </Form>
    <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    
    </>
    
  );
};

export default BookingTableForm;
