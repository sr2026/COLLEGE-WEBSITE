import "./Login.css";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {

    try {

      const response = await axios.post("http://192.168.11.226:3000/api/auth/login",
        {
          email,
          password
        }
      );

      console.log(response?.data?.data?.token);

      toast.success(response.data.message || "Login Successful");

      localStorage.setItem("token",`${response?.data?.data?.token}`)

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      toast.error(error.response?.data?.message || "Login Failed");

    }

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let valid = true;

    if (!email.trim()) {

      setEmailError("Email is required");

      valid = false;

    }

    else if (
      !email.includes("@") ||
      !email.includes(".")
    ) {

      setEmailError("Enter valid email");

      valid = false;

    }

    if (!password.trim()) {

      setPasswordError("Password is required");

      valid = false;

    }

    if (!valid) return;

    await loginUser();

  };

  return (
  <div className="login-page">

    <form
      className="login-form"
      onSubmit={handleLogin}
    >

      <h1>Student/Admin Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      {emailError && (
        <p className="error">
          {emailError}
        </p>
      )}

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      {passwordError && (
        <p className="error">
          {passwordError}
        </p>
      )}

      <Button
        text="Login"
        type="submit"
      />

    </form>

  </div>
  );
}

export default Login;
