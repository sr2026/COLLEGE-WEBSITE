import "./Admindb.css";
import AdminSidebar from "./AdminSidebar";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Admindb() {

  const navigate = useNavigate();

  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-content">

        <div className="welcome-banner">

          <div>
            <h1>Welcome Back, Admin 👋</h1>

            <p>
              Manage students, admissions, faculty,
              notices and university activities.
            </p>
          </div>

        </div>

        <div className="stats-grid">

          <Card
            title="Students"
            value="1250"
            subtitle="Registered"
          />

          <Card
            title="Admissions"
            value="320"
            subtitle="This Year"
          />

          <Card
            title="Faculty"
            value="85"
            subtitle="Teaching Staff"
          />

          <Card
            title="Notices"
            value="12"
            subtitle="Published"
          />

        </div>

        <div className="dashboard-grid">

          <div className="dashboard-box">

            <div className="box-header">
              <h2>Recent Admissions</h2>
            </div>

            <div className="list-item">
              <span>Rahul Sharma</span>
              <span className="pending">
                Pending
              </span>
            </div>

            <div className="list-item">
              <span>Priya Das</span>
              <span className="approved">
                Approved
              </span>
            </div>

            <div className="list-item">
              <span>Amit Kumar</span>
              <span className="approved">
                Approved
              </span>
            </div>

            <div className="list-item">
              <span>Sneha Patel</span>
              <span className="pending">
                Pending
              </span>
            </div>

          </div>

          <div className="dashboard-box">

            <div className="box-header">
              <h2>Latest Notices</h2>
            </div>

            <div className="notice-item">
              📢 Internal Exam Schedule Released
            </div>

            <div className="notice-item">
              📢 Annual Tech Fest Registration Open
            </div>

            <div className="notice-item">
              📢 Placement Drive Next Week
            </div>

            <div className="notice-item">
              📢 Library Timings Updated
            </div>

          </div>

        </div>

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <div className="action-buttons">

            <Button
              text="➕ Add Student"
              onClick={() => navigate("/Students")}
            />

            <Button
              text="📢 Create Notice"
              onClick={() => navigate("/Notices")}
            />

            <Button
              text="📝 Review Admissions"
              onClick={() => navigate("/AdmissionsAdmin")}
            />

            <Button
              text="👨‍🏫 Add Faculty"
              onClick={() => navigate("/FacultyAdmin")}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Admindb;