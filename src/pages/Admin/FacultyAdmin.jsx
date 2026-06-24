import "./FacultyAdmin.css";
import AdminSidebar from "./AdminSidebar";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { React } from "react";


function FacultyAdmin() {

  const [faculty, setFaculty] = useState([
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      department: "Computer Science",
      qualification: "Ph.D",
      email: "rajesh@gmail.com"
    }
  ]);

  const [showModal, setShowModal] = useState(false);

  const [editId, setEditId] = useState(null);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [qualification, setQualification] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {

    if (
      !name ||
      !department ||
      !qualification ||
      !email
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {

      setFaculty(

        faculty.map((item) =>

          item.id === editId
            ? {
                ...item,
                name,
                department,
                qualification,
                email
              }
            : item

        )

      );

    } else {

      const newFaculty = {
        id: Date.now(),
        name,
        department,
        qualification,
        email
      };

      setFaculty([
        ...faculty,
        newFaculty
      ]);

    }

    setName("");
    setDepartment("");
    setQualification("");
    setEmail("");

    setEditId(null);

    setShowModal(false);
  };

  const handleEdit = (item) => {

    setName(item.name);
    setDepartment(item.department);
    setQualification(item.qualification);
    setEmail(item.email);

    setEditId(item.id);

    setShowModal(true);
  };

  const handleDelete = (id) => {

    setFaculty(

      faculty.filter(
        (item) => item.id !== id
      )

    );
  };

  const handleAddFaculty = () => {

    setName("");
    setDepartment("");
    setQualification("");
    setEmail("");

    setEditId(null);

    setShowModal(true);
  };

  return (

    <div className="faculty-container">

      <AdminSidebar />

      <div className="faculty-content">

        <div className="faculty-header">

          <h1>Faculty Management</h1>

          <Button
            text="➕ Add Faculty"
            onClick={handleAddFaculty}
          />

        </div>

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Qualification</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {faculty.map((item) => (

              <tr key={item.id}>

                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.qualification}</td>
                <td>{item.email}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEdit(item)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(item.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {showModal && (

        <Modal>

          <h2>

            {editId
              ? "Edit Faculty"
              : "Add Faculty"}

          </h2>

          <input
            type="text"
            placeholder="Faculty Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e) =>
              setQualification(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <div className="modal-buttons">

            <button
              className="close-btn"
              onClick={() =>
                setShowModal(false)
              }
            >
              Close
            </button>

            <button
              className="save-btn"
              onClick={handleSave}
            >
              {editId
                ? "Update"
                : "Save"}
            </button>

          </div>

        </Modal>

      )}

    </div>

  );
}

export default FacultyAdmin;