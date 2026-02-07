import { useFormik } from "formik";
import * as yup from "yup";
import { Form, InputGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import ButtonType from "../../components/button-box/button";
import { loginUser } from "../../redux-store/store-redux-componets/logInauthSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import { Link } from "react-router-dom";

import GoogleLogin from "../../assets/firebase/GoogleLogin";
import FacebookLoginButton from "../../assets/firebase/facebookLogin";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.loginReducer);

  const [showPassword, setShowPassword] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Validation schema
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  // Formik
  const formikForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,

    onSubmit: (values) => {
      dispatch(loginUser(values));
      scrollToTop();
    },
  });

  return (
    <>
      <Form
        className="bx-login-form-group"
        noValidate
        onSubmit={formikForm.handleSubmit}
      >
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

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="password"
              value={formikForm.values.password}
              onChange={formikForm.handleChange}
              onBlur={formikForm.handleBlur}
              isInvalid={
                formikForm.touched.password && !!formikForm.errors.password
              }
            />

            <InputGroup.Text
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </InputGroup.Text>
            <Form.Control.Feedback type="invalid">
              {formikForm.errors.password}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        {/* Button */}
        <ButtonType
          type="submit"
          ButtonName={loading ? "Logging in..." : "Login"}
        />
      </Form>
      <Link to="/forgot-password" className="bx-forgot" onClick={scrollToTop}>
        Forgot password
      </Link>

      <div className="bx-group-social-media d-flex mt-3">
        <GoogleLogin /> <FacebookLoginButton facebookClass="ms-2" />
      </div>

      <h6 className=" mt-4 mb-3">
        Don't have an account?{" "}
        <Link to="/create-registration" onClick={scrollToTop}>
          Sign Up
        </Link>
      </h6>

      {/* Error toast */}

      {user && <p className="text-success">Login successful!</p>}

      <ToastContainer />
    </>
  );
};

export default LoginForm;
