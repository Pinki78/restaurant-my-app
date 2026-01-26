import * as formik from "formik";
import * as yup from "yup";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { submitContactForm } from "../../redux-store/store-redux-componets/contactStort";

const ContactForm = (props) => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.contactReducer,
  );

  const validationSchema = yup.object({
    fullname: yup.string().required("Fullname is required"),

    email: yup
      .string()
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email address"),

    number: yup
      .string()
      .required("Number is required")
      .matches(/^[0-9]+$/, "Only numbers allowed")
      .min(10, "Must be at least 10 digits"),

    message: yup
      .string()
      .notRequired() // ✅ optional textarea
      .max(500, "Maximum 500 characters"),
  });

   // Optional: Load saved data when component mounts
//   useEffect(() => {
//     const savedData = localStorage.getItem("contactFormData");
//     if (savedData) {
//       formikForm.setValues(JSON.parse(savedData));
//     }
//   }, []);

  const formikForm = formik.useFormik({
    initialValues: {
      fullname: "",
      email: "",
      number: "",
      message: "",
    },

    validationSchema,

    onSubmit: (values, { resetForm }) => {
      dispatch(submitContactForm(values));
      localStorage.setItem("contactFormData", JSON.stringify(values));

      // Show toast messages
      toast.success("Form submitted successfully!"); // ✅ success toast

      resetForm(); // clear form after submission
      localStorage.removeItem("contactFormData"); // <-- clear after submit
      console.log('values :'  , values );
      
    },
  });

  // Show error toast if there is an error from Redux
  if (error) {
    toast.error(error);
  }


  return (
    <>
      <div className="bx-contact-form">
        <Form noValidate onSubmit={formikForm.handleSubmit}>
          {/* Name */}
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              value={formikForm.values.fullname}
              onChange={formikForm.handleChange}
              onBlur={formikForm.handleBlur}
              isInvalid={
                formikForm.touched.fullname && !!formikForm.errors.fullname
              }
            />
            <Form.Control.Feedback type="invalid">
              {formikForm.errors.fullname}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formikForm.values.email}
              onChange={formikForm.handleChange}
              onBlur={formikForm.handleBlur}
              isInvalid={formikForm.touched.email && !!formikForm.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formikForm.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Number */}
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="number"
              value={formikForm.values.number}
              onChange={formikForm.handleChange}
              onBlur={formikForm.handleBlur}
              isInvalid={
                formikForm.touched.number && !!formikForm.errors.number
              }
            />
            <Form.Control.Feedback type="invalid">
              {formikForm.errors.number}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Message */}
          <Form.Group className="mb-3">
            <Form.Label>Message (optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formikForm.values.message}
              onChange={formikForm.handleChange}
              onBlur={formikForm.handleBlur}
              isInvalid={
                formikForm.touched.message && !!formikForm.errors.message
              }
            />
            <Form.Control.Feedback type="invalid">
              {formikForm.errors.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>

          {/* {success && (
            <p className="text-success mt-2">Message sent successfully!</p>
          )}

          {error && <p className="text-danger mt-2">{error}</p>} */}
        </Form>

        {/* Toast Container */}
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

      </div>
    </>
  );
};

export default ContactForm;
