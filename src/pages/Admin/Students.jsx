import "./Students.css";
import AdminSidebar from "./AdminSidebar";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { toast } from "react-toastify";

function Students() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Satya",
      roll: "220123",
      course: "CSE",
      email: "satya@gmail.com",
      password: "Satya0123"
    },
    {
      id: 2,
      name: "Sya",
      roll: "223",
      course: "CE",
      email: "stya@gmail.com",
      password: "sya223"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {

    if (!name || !roll || !course || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    if (editId) {

      setStudents(
        students.map((student) =>
          student.id === editId
            ? {
                ...student,
                name,
                roll,
                course,
                email,
                password
              }
            : student
        )
      );

      toast.success("Student updated successfully");

    } else {

      const newStudent = {
        id: Date.now(),
        name,
        roll,
        course,
        email,
        password
      };

      setStudents([...students, newStudent]);

      toast.success("Student added successfully");
    }

    setName("");
    setRoll("");
    setCourse("");
    setEmail("");
    setPassword("");

    setEditId(null);
    setShowModal(false);
  };

  const handleEdit = (student) => {

    setName(student.name);
    setRoll(student.roll);
    setCourse(student.course);
    setEmail(student.email);
    setPassword(student.password);

    setEditId(student.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {

    setStudents(
      students.filter((student) => student.id !== id)
    );

    toast.success("Student deleted successfully");
  };

  const handleAddStudent = () => {

    setName("");
    setRoll("");
    setCourse("");
    setEmail("");
    setPassword("");

    setEditId(null);
    setShowModal(true);
  };

  return (
    <div className="students-container">

      <AdminSidebar />

      <div className="students-content">

        <div className="students-header">

          <h1>Students Management</h1>

          <Button
            text="➕ Add Student"
            onClick={handleAddStudent}
          />

        </div>

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Course</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr key={student.id}>

                <td>{student.name}</td>
                <td>{student.roll}</td>
                <td>{student.course}</td>
                <td>{student.email}</td>
                <td>{student.password}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(student.id)}
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
            {editId ? "Edit Student" : "Add Student"}
          </h2>

          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Roll Number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />

          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="modal-buttons">

            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>

            <button
              className="save-btn"
              onClick={handleSave}
            >
              {editId ? "Update" : "Save"}
            </button>

          </div>

        </Modal>

      )}

    </div>
  );
}

export default Students;