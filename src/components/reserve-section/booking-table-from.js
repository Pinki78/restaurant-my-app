import { useState, useRef } from "react";
import { BoookingInputData } from "../../api-data/form-data/booking-form-data";

import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import TimeApp from "./time";

const BookingTableForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({});
  const inputRefs = useRef({});

  // Handle form submission
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Submit logic here
      console.log("Form submitted:", formData);
    }
    setValidated(true);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Safe function to trigger showPicker if supported
  const handlePickerClick = (name) => {
    const input = inputRefs.current[name];
    if (input?.showPicker) {
      input.showPicker();
    }
  };

  return (
    <>   
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
              <Form.Control
            ref={(el) => (inputRefs.current[item.Inputname] = el)}
            type={item.type}
            name={item.Inputname}
        //    onClick={() => inputRefs.current[item.Inputname]?.showPicker?.()}
           onClick={() => handlePickerClick(item.Inputname)}
            // onFocus={() =>
            //   inputRefs.current[item.Inputname]?.showPicker?.()
            // }
            onChange={handleChange}
            required
          />

            /* TEXT/NUMBER INPUTS */
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
<TimeApp  />

</>
  );
};

export default BookingTableForm;
