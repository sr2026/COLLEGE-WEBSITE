import "./Setting.css";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { toast } from "react-toastify";

function Settings() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      user.name.trim() === "" ||
      user.email.trim() === "" ||
      user.password.trim() === ""
    ) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Settings Updated Successfully");
  };

  return (
    <div className="settings-container">

      <Sidebar />

      <div className="settings-content">

        <form
          className="settings-form"
          onSubmit={handleSubmit}
        >

          <h1>Account Settings</h1>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={user.password}
            onChange={handleChange}
          />

          <button type="submit">
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
}

export default Settings;