import "./Note.css";
import Sidebar from "./Sidebar";
import Modal from "../../../components/Modal/Modal";
import Button from "../../../components/Button/Button";
import { useState } from "react";

function Notes() {

  const [showModal, setShowModal] = useState(false);

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const [notesData, setNotesData] = useState([
    {
      subject: "Java Programming",
      description: "Week 1 Notes & Assignments"
    },
    {
      subject: "Database Management System",
      description: "ER Diagram, SQL Queries & Normalization"
    },
    {
      subject: "React JS",
      description: "Components, Props, State & Hooks"
    }
  ]);

  const saveMaterial = () => {

    if (
      !subject.trim() ||
      !description.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {

      const updatedData = [...notesData];

      updatedData[editIndex] = {
        subject,
        description
      };

      setNotesData(updatedData);

    } else {

      setNotesData([
        ...notesData,
        {
          subject,
          description
        }
      ]);

    }

    setSubject("");
    setDescription("");
    setEditIndex(null);
    setShowModal(false);
  };

  const editMaterial = (index) => {

    setSubject(notesData[index].subject);

    setDescription(
      notesData[index].description
    );

    setEditIndex(index);

    setShowModal(true);
  };

  const deleteMaterial = (index) => {

    const updatedData =
      notesData.filter(
        (_, i) => i !== index
      );

    setNotesData(updatedData);
  };

  return (
    <div className="notes-container">

      <Sidebar />

      <div className="notes-content">

        <div className="notes-header">

          <h1>Study Materials</h1>

          <Button
            text="Add Material"
            onClick={() => {
              setSubject("");
              setDescription("");
              setEditIndex(null);
              setShowModal(true);
            }}
          />

        </div>

        <div className="notes-grid">

          {notesData.map((note, index) => (

            <div
              className="note-card"
              key={index}
            >

              <div className="note-icon">
                📘
              </div>

              <h3>{note.subject}</h3>

              <p>{note.description}</p>

              <div className="note-buttons">

                <Button
                  text="Edit"
                  className="btn-green"
                  onClick={() =>
                    editMaterial(index)
                  }
                />

                <Button
                  text="Delete"
                  className="btn-red"
                  onClick={() =>
                    deleteMaterial(index)
                  }
                />

              </div>

            </div>

          ))}

        </div>

        {showModal && (

          <Modal>

            <h2>
              {editIndex !== null
                ? "Edit Material"
                : "Add Material"}
            </h2>

            <input
              type="text"
              placeholder="Subject Name"
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
            />

            <textarea
              rows="4"
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            ></textarea>

            <div className="modal-buttons">

              <Button
                text="Close"
                className="btn-red"
                onClick={() =>
                  setShowModal(false)
                }
              />

              <Button
                text="Save"
                className="btn-green"
                onClick={saveMaterial}
              />

            </div>

          </Modal>

        )}

      </div>

    </div>
  );
}

export default Notes;