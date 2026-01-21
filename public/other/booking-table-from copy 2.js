import { useState, useRef, } from "react";
import { BoookingInputData } from "../../src/api-data/form-data/booking-form-data";

import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingTableFrom = () => {
  const [validated, setValidated] = useState(false);
 const [formData, setFormData] = useState({}); // ✅ REQUIRED
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const inputRefs = useRef({});

  return (
    <>
     <Form>
  <Row className="mb-3">
    {BoookingInputData.map((item) => (
      <Form.Group as={Col} md="4" key={item.id}>

        {/* SELECT */}
        {item.type === "select" ? (
          <Form.Select
            name={item.Inputname}
            onChange={handleChange}
            required
          >
            <option value="">{item.label}</option>
            {item.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>

        /* TEXTAREA */
        ) : item.type === "textarea" ? (
          <Form.Control
            as="textarea"
            rows={3}
            name={item.Inputname}
            placeholder={item.label}
            onChange={handleChange}
            required
          />

        /* DATE & TIME */
        ) : item.type === "date" || item.type === "time" ? (
           <DatePicker
    selected={formData[item.Inputname]}
    onChange={(date) =>
      setFormData((prev) => ({ ...prev, [item.Inputname]: date }))
    }
    showTimeSelect={item.type === "time"} // time picker if needed
    timeIntervals={15}                    // 15 min step for time
    dateFormat={item.type === "time" ? "HH:mm" : "dd-MM-yyyy"}
    placeholderText={item.label}
    className="form-control"
    isClearable
  />

        /* INPUT */
        ) : (
          <Form.Control
            type={item.type}
            name={item.Inputname}
            placeholder={item.label}
            onChange={handleChange}
            required
          />
        )}

        <Form.Control.Feedback type="invalid">
          {item.errorText}
        </Form.Control.Feedback>

      </Form.Group>
    ))}
  </Row>

  <Button type="submit">Submit</Button>
</Form>

    </>
  );
};

export default BookingTableFrom;
