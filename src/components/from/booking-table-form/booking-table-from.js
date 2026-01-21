// BookingTableForm.jsx
import { useState, useRef } from "react";
import { BoookingInputData } from "../../../api-data/form-data/booking-form-data";
import { Button, Col, Form, Row } from "react-bootstrap";
import TimeApp from "./time";
import axios from "axios";
import ButtonType from "../../button-box/button";
const BookingTableForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    people: "",
    date: "",
    time: "",
  });

  const inputRefs = useRef({});


    const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    if (
      !formData.time ||
      Object.keys(formData).length < BoookingInputData.length
    ) {
      return;
    }

    try {
      await axios.post(
        "https://restaurants-my-app-default-rtdb.asia-southeast1.firebasedatabase.app/bookings.json",
        formData
      );

      alert("Booking submitted successfully!");

      // reset form
      setFormData({
        name: "",
        email: "",
        people: "",
        date: "",
        time: "",
      });

      setValidated(false);
    } catch (err) {
      console.error("Error saving booking:", err);
      alert("Failed to submit booking!");
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePickerClick = (name) => {
    const input = inputRefs.current[name];
    if (input?.showPicker) input.showPicker();
  };

  const handleTimeChange = (time) => {
    setFormData((prev) => ({
      ...prev,
      time,
    }));
  };

  return (
    <Form  noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        {BoookingInputData.map((item) => (
          <Form.Group as={Col} md={item.type === "textarea" ? 12 : 6} key={item.id} className="mb-3">
            {item.type === "select" ? (
              <Form.Select
                name={item.Inputname}
                onChange={handleChange}
                required
                 value={formData[item.Inputname] || ""}
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
                 value={formData[item.Inputname] || ""}
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
                 value={formData[item.Inputname] || ""}
                onClick={() => handlePickerClick(item.Inputname)}
                onChange={handleChange}
                required
              />
            ) : item.label === "Time" ? (
              <>
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
              </>
            ) : (
              <Form.Control
                type={item.type}
                name={item.Inputname}
                 value={formData[item.Inputname] || ""}
                placeholder={item.label}
                onChange={handleChange}
                required
              />
            )}

            {item.Inputname !== "time" && (
              <Form.Control.Feedback type="invalid">
                {item.errorText}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        ))}
      </Row>

      <ButtonType  ButtonType="submit" 
      ButtonName='Submit'
      ClassBtn2='bx-button-2'
      />
    </Form>
  );
};

export default BookingTableForm;
