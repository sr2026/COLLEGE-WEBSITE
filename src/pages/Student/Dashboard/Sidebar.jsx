import "./Sidebar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Sidebar() {

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.post("http://192.168.11.226:3000/api/auth/logout",{},
        {headers: {Authorization:`Bearer ${token}`}}
      );

      localStorage.clear();

      toast.success("Logged Out Successfully");

      navigate("/login");

    } catch (error) {

      console.log(error);

      localStorage.clear();

      toast.success("Logged Out Successfully");

      navigate("/login");

    }

  };

  return (
    <>
      <div className="sidebar">

        <h2>
          GLOBAL
          <br />
          UNIVERSITY
        </h2>

        <ul>

          <li onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </li>

          <li onClick={() => navigate("/dashboard/profile")}>
            🧑🏻 Profile
          </li>

          <li onClick={() => navigate("/dashboard/attendance")}>
            📗 Attendance
          </li>

          <li onClick={() => navigate("/dashboard/result")}>
            📝 Result
          </li>

          <li onClick={() => navigate("/dashboard/note")}>
            📚 Note
          </li>

          <li onClick={() => navigate("/dashboard/setting")}>
            ⚙️ Settings
          </li>

        </ul>

        <div className="logout-container">

          <button
            className="logout-btn"
            onClick={() =>
              setShowLogoutModal(true)
            }
          >
            Logout
          </button>

        </div>

      </div>

      {showLogoutModal && (

        <div className="modal-overlay">

          <div className="logout-modal">

            <h2>Logout</h2>

            <p>
              Are you sure you want to logout?
            </p>

            <div className="logout-buttons">

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowLogoutModal(false)
                }
              >
                Cancel
              </button>

              <button
                className="confirm-logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Sidebar;