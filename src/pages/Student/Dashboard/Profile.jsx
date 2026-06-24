import "./Profile.css";
import Sidebar from "./Sidebar";
import Modal from "../../../components/Modal/Modal";
import { useState } from "react";

function Profile() {

  const [student, setStudent] = useState({
    name: "Satya",
    email: "Satya@gmail.com",
    phone: "9876543210",
    course: "B.Tech CSE",
    semester: "8th Semester",
    address: "Bhubaneswar, Odisha",
    rollNo: "220123456",
    cgpa: "10"
  });

  const [showModal, setShowModal] =
    useState(false);

  return (
    <div className="profile-container">

      <Sidebar />

      <div className="profile-content">

        <div className="profile-card">

          <div className="profile-details">

            <h1>Student Information</h1>

            <div className="info-box">
              <strong>Name:</strong>
              <span>{student.name}</span>
            </div>

            <div className="info-box">
              <strong>Roll Number:</strong>
              <span>{student.rollNo}</span>
            </div>

            <div className="info-box">
              <strong>Email:</strong>
              <span>{student.email}</span>
            </div>

            <div className="info-box">
              <strong>Phone:</strong>
              <span>{student.phone}</span>
            </div>

            <div className="info-box">
              <strong>Course:</strong>
              <span>{student.course}</span>
            </div>

            <div className="info-box">
              <strong>Semester:</strong>
              <span>{student.semester}</span>
            </div>

            <div className="info-box">
              <strong>CGPA:</strong>
              <span>{student.cgpa}</span>
            </div>

            <div className="info-box">
              <strong>Address:</strong>
              <span>{student.address}</span>
            </div>

            <button
              className="edit-btn"
              onClick={() => setShowModal(true)}
            >
              Edit Profile
            </button>

          </div>

        </div>

      </div>

      {showModal && (

        <Modal>

          <h2>Edit Profile</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={student.email}
            onChange={(e) =>
              setStudent({
                ...student,
                email: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Enter Phone Number"
            value={student.phone}
            onChange={(e) =>
              setStudent({
                ...student,
                phone: e.target.value
              })
            }
          />

          <textarea
            rows="4"
            placeholder="Enter Address"
            value={student.address}
            onChange={(e) =>
              setStudent({
                ...student,
                address: e.target.value
              })
            }
          ></textarea>

          <div className="modal-buttons">

            <button
              className="close-btn"
              onClick={() =>
                setShowModal(false)
              }
            >
              Cancel
            </button>

            <button
              className="save-btn"
              onClick={() =>
                setShowModal(false)
              }
            >
              Save
            </button>

          </div>

        </Modal>

      )}

    </div>
  );
}

export default Profile;