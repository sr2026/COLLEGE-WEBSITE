import "./ResultAdmin.css";
import AdminSidebar from "./AdminSidebar";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { useState } from "react";

function ResultAdmin() {

  const [results, setResults] = useState([
    {
      id: 1,
      name: "Satya",
      roll: "220123",
      subject: "DBMS",
      marks: "85"
    }
  ]);

  const [showModal, setShowModal] = useState(false);

  const [editId, setEditId] = useState(null);

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");

  const handleSave = () => {

    if (
      !name ||
      !roll ||
      !subject ||
      !marks
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {

      setResults(

        results.map((item) =>

          item.id === editId
            ? {
                ...item,
                name,
                roll,
                subject,
                marks
              }
            : item

        )

      );

    } else {

      const newResult = {
        id: Date.now(),
        name,
        roll,
        subject,
        marks
      };

      setResults([
        ...results,
        newResult
      ]);
    }

    setName("");
    setRoll("");
    setSubject("");
    setMarks("");

    setEditId(null);

    setShowModal(false);
  };

  const handleEdit = (item) => {

    setName(item.name);
    setRoll(item.roll);
    setSubject(item.subject);
    setMarks(item.marks);

    setEditId(item.id);

    setShowModal(true);
  };

  const handleDelete = (id) => {

    setResults(

      results.filter(
        (item) => item.id !== id
      )

    );
  };

  const handleAddResult = () => {

    setName("");
    setRoll("");
    setSubject("");
    setMarks("");

    setEditId(null);

    setShowModal(true);
  };

  return (

    <div className="result-container">

      <AdminSidebar />

      <div className="result-content">

        <div className="result-header">

          <h1>Result Management</h1>

          <Button
            text="➕ Add Result"
            onClick={handleAddResult}
          />

        </div>

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {results.map((item) => (

              <tr key={item.id}>

                <td>{item.name}</td>
                <td>{item.roll}</td>
                <td>{item.subject}</td>
                <td>{item.marks}</td>

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
              ? "Edit Result"
              : "Add Result"}
          </h2>

          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Roll Number"
            value={roll}
            onChange={(e) =>
              setRoll(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Marks"
            value={marks}
            onChange={(e) =>
              setMarks(e.target.value)
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

export default ResultAdmin;