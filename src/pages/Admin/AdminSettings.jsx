import "./AdminSettings.css";
import AdminSidebar from "./AdminSidebar";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminSettings() {

  const navigate = useNavigate();

  const [showProfile, setShowProfile] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showLogout, setShowLogout] =
    useState(false);

  const [admin, setAdmin] = useState({
    name: "Admin User",
    email: "admin@gmail.com",
    phone: "9876543210"
  });

  const [passwordData, setPasswordData] =
    useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });

  const handlePasswordChange = (e) => {

    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });

  };

  return (

    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-content">

        <h1 className="page-title">
          Settings
        </h1>

        <div className="stats-grid">

          <Card
            title="Admin Name"
            value={admin.name}
            subtitle="Account Owner"
          />
          <Card
            title="Email"
            value={admin.email}
            subtitle="Primary Email"
          />

          <Card
            title="Phone"
            value={admin.phone}
            subtitle="Contact Number"
          />

        </div>

        <div className="settings-section">

          <h2>
            Quick Actions
          </h2>

          <div className="action-buttons">

            <Button
              text="Edit Profile"
              onClick={() =>
                setShowProfile(true)
              }
            />

            <Button
              text="Change Password"
              onClick={() =>
                setShowPassword(true)
              }
            />

            <Button
              text="Notifications"
              onClick={() =>
                navigate("/Notices")
              }
            />

            <Button
              text="Logout"
              onClick={() =>
                setShowLogout(true)
              }
            />

          </div>

        </div>

        <div className="system-card">

          <h2>
            System Information
          </h2>

          <div className="info-row">
            <span>Portal Version</span>
            <span>1.0</span>
          </div>

          <div className="info-row">
            <span>Academic Year</span>
            <span>2026</span>
          </div>

          <div className="info-row">
            <span>Last Login</span>
            <span>Today</span>
          </div>

        </div>

      </div>

      {showProfile && (

        <Modal>

          <h2>Edit Profile</h2>

          <input
            type="text"
            placeholder="Admin Name"
            value={admin.name}
            onChange={(e) =>
              setAdmin({
                ...admin,
                name: e.target.value
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={admin.email}
            onChange={(e) =>
              setAdmin({
                ...admin,
                email: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={admin.phone}
            onChange={(e) =>
              setAdmin({
                ...admin,
                phone: e.target.value
              })
            }
          />

          <div className="modal-buttons">

            <button
              className="close-btn"
              onClick={() =>
                setShowProfile(false)
              }
            >
              Save
            </button>

          </div>

        </Modal>

      )}

      {showPassword && (

        <Modal>

          <h2>
            Change Password
          </h2>

          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
          />

          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
          />

          <div className="modal-buttons">

            <button
              className="close-btn"
              onClick={() =>
                setShowPassword(false)
              }
            >
              Close
            </button>

          </div>

        </Modal>

      )}

      {showLogout && (

        <Modal>

          <h2>
            Logout
          </h2>

          <p>
            Are you sure you want to logout?
          </p>

          <div className="modal-buttons">

            <button
              className="close-btn"
              onClick={() =>
                setShowLogout(false)
              }
            >
              Cancel
            </button>

            <button
              className="save-btn"
              onClick={() =>
                navigate("/Login")
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

export default AdminSettings;