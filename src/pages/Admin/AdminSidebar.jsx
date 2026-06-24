import "./AdminSidebar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "../../components/Modal/Modal";

function AdminSidebar() {

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {

    try {

      const token = localStorage.getItem("token");

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
      <div className="admin-sidebar">

        <h2>
          GLOBAL
          <br />
          UNIVERSITY
        </h2>

        <ul>

          <li onClick={() => navigate("/Admindb")}>
            🏠 Dashboard
          </li>

          <li onClick={() => navigate("/Students")}>
            👨‍🎓 Students
          </li>

          <li onClick={() => navigate("/AdmissionsAdmin")}>
            📝 Admissions
          </li>

          <li onClick={() => navigate("/ResultAdmin")}>
            📚 Results
          </li>

          <li onClick={() => navigate("/Notices")}>
            📢 Notices
          </li>

          <li onClick={() => navigate("/FacultyAdmin")}>
            👨‍🏫 Faculty
          </li>

          <li onClick={() => navigate("/AdminSettings")}>
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

        <Modal>

          <h2>LOGOUT</h2>

          <p>
            Are You Sure You Want To Logout?
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

        </Modal>

      )}

    </>
  );
}

export default AdminSidebar;