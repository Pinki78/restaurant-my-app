import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ButtonType from "../components/button-box/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { registerUser, clearError } from "../redux-store/store-redux-componets/registrationSlice";
import { useLocation, useNavigate } from "react-router-dom";


const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { error, currentUser, loading } = useSelector(
    (state) => state.registrationReducer
  );

    const navigate = useNavigate();
  const location = useLocation();

  // ✅ Show toast for error or success
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    } else if (currentUser) {
      toast.success("Registration successful!");
    }
  }, [error, currentUser, dispatch]);

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(registerUser(values));
      resetForm(); // reset immediately, toast will handle feedback
       navigate("/");

    },
  });

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <ToastContainer position="top-right" />
      <Form onSubmit={formik.handleSubmit}>
        {/* Name */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.name && formik.errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <div className="input-group">
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.password && formik.errors.password}
            />
            <span
              className="input-group-text"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <div className="input-group">
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword
              }
            />
            <span
              className="input-group-text"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <Form.Control.Feedback type="invalid">
              {formik.errors.confirmPassword}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <ButtonType
          type="submit"
          ButtonName={loading ? "Registering..." : "Register"}
        />
      </Form>
    </div>
  );
};

export default RegistrationForm;
