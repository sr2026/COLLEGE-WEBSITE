import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Card from "../../../components/Card/Card";
import Modal from "../../../components/Modal/Modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const [showDropdown, setShowDropdown] =
    useState(false);

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    const closeDropdown = () => {
      setShowDropdown(false);
    };

    document.addEventListener(
      "click",
      closeDropdown
    );

    return () => {
      document.removeEventListener(
        "click",
        closeDropdown
      );
    };

  }, []);

  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="dashboard-content">

        <div className="dashboard-header">

          <h1>Student Dashboard</h1>

          <div className="student-info">

            <p>Welcome, Satya</p>

            <div
              className="profile-menu"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <img
                src="https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png"
                alt="student"
                onClick={() =>
                  setShowDropdown(!showDropdown)
                }
              />

              {showDropdown && (

                <div className="dropdown-menu">

                  <p onClick={() => navigate("/dashboard/profile")}>
                  My Profile
                  </p>

                  <p onClick={() => {setShowDropdown(false); setShowLogoutModal(true);}}>
                    Logout
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

        <div className="stats-container">

          <Card
            title="Attendance"
            value="100%"
            subtitle="This Month"
          />

          <Card
            title="Current Semester"
            value="8th"
            subtitle="B.Tech CSE"
          />

          <Card
            title="CGPA"
            value="10"
            subtitle="Overall"
          />

          <Card
            title="Notifications"
            value="3"
            subtitle="New"
          />

        </div>

        <div className="dashboard-row">

          <div className="dashboard-box">

            <div className="box-header">
              <h3>Latest Notices</h3>
            </div>

            <div className="notice-item">
              <span>Internal Exam Schedule</span>
              <span>10 March 2026</span>
            </div>

            <div className="notice-item">
              <span>Tech Fest 2026</span>
              <span>06 Jan 2026</span>
            </div>

            <div className="notice-item">
              <span>Library Book Issue</span>
              <span>05 May 2026</span>
            </div>

          </div>

          <div className="dashboard-box">

            <div className="box-header">
              <h3>Upcoming Events</h3>
            </div>

            <div className="notice-item">
              <span>Seminar on AI</span>
              <span>15 June 2026</span>
            </div>

            <div className="notice-item">
              <span>Sports Day</span>
              <span>20 November 2026</span>
            </div>

            <div className="notice-item">
              <span>Hackathon</span>
              <span>25 June 2026</span>
            </div>

          </div>

        </div>

      </div>

      {showLogoutModal && (

        <Modal>

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
              onClick={() =>
                navigate("/login")
              }
            >
              Logout
            </button>

          </div>

        </Modal>

      )}

    </div>
  );
}

export default Dashboard;