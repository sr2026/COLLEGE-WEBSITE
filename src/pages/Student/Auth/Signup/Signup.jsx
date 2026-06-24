import "./Signup.css";
import Navbar from "../../../../components/Navbar/Navbar";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Signup() {

  const [user, setUser] = useState({
    name: "",
    collegeCode: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [nameError, setNameError] = useState("");
  const [collegeCodeError, setCollegeCodeError] =useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {

    setUser({...user,[e.target.name]: e.target.value});

  };

  const handleSignup = async () => {

    try {

      const response = await axios.post("http://192.168.11.226:3000/api/auth/signup",
        {
          name: user.name,
          college_code: user.collegeCode,
          email: user.email,
          password: user.password,
          confirm_password:
            user.confirmPassword
        }
      );

      toast.success(response.data.message || "Signup Successful");

      setUser({
        name: "",
        collegeCode: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      navigate("/login");

    } catch (error) {

      console.log(error);

      toast.error( error.response?.data?.message || "Signup Failed" );

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setNameError("");
    setCollegeCodeError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let valid = true;

    if (!user.name.trim()) {

      setNameError("Name is required");
      valid = false;

    }

    if (!user.collegeCode.trim()) {

      setCollegeCodeError( "College Code is required" );

      valid = false;

    }

    if (!user.email.trim()) {

      setEmailError("Email is required");
      valid = false;

    } else if (
      !user.email.includes("@") ||
      !user.email.includes(".")
    ) {

      setEmailError("Enter valid email");
      valid = false;

    }

    if (!user.password.trim()) {

      setPasswordError( "Password is required" );

      valid = false;

    }

    if (!user.confirmPassword.trim()) {

      setConfirmPasswordError("Confirm password is required");


      valid = false;

    } else if (
      user.password !==
      user.confirmPassword
    ) {

      setConfirmPasswordError( "Passwords do not match" );

      valid = false;

    }

    if (!valid) return;

    await handleSignup();

  };

  return (
    <>
      <Navbar />

      <div className="signup-page">

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          <h1>Create Account</h1>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleChange}
          />

          {nameError && (
            <p className="error">
              {nameError}
            </p>
          )}

          <input
            type="text"
            name="collegeCode"
            placeholder="Enter College Code"
            value={user.collegeCode}
            onChange={handleChange}
          />

          {collegeCodeError && (
            <p className="error">
              {collegeCodeError}
            </p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
          />

          {emailError && (
            <p className="error">
              {emailError}
            </p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
          />

          {passwordError && (
            <p className="error">
              {passwordError}
            </p>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
          />

          {confirmPasswordError && (
            <p className="error">
              {confirmPasswordError}
            </p>
          )}

          <Button
            text="Signup"
            type="submit"
          />

          <p className="login-link">

            Already have an account?{" "}

            <span
              onClick={() =>
                navigate("/login")
              }
            >
              Login
            </span>

          </p>

        </form>

      </div>
    </>
  );
}

export default Signup;