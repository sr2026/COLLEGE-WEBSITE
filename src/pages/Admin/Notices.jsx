import "./Notices.css";
import AdminSidebar from "./AdminSidebar";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { toast } from "react-toastify";


function Notices() {

  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Internal Exam Schedule",
      date: "22-06-2026"
    }
  ]);

  const [showModal, setShowModal] = useState(false);

  const [editId, setEditId] = useState(null);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSave = () => {

    if (!title || !date) {
      toast.error("Fill all fields");
      return;
    }

    if (editId) {

      setNotices(

        notices.map((notice) =>

          notice.id === editId
            ? {
                ...notice,
                title,
                date
              }
            : notice

        )

      );

    } else {

      const newNotice = {
        id: Date.now(),
        title,
        date
      };

      setNotices([
        ...notices,
        newNotice
      ]);

    }

    setTitle("");
    setDate("");

    setEditId(null);

    setShowModal(false);
  };

  const handleEdit = (notice) => {

    setTitle(notice.title);
    setDate(notice.date);

    setEditId(notice.id);

    setShowModal(true);
  };

  const handleDelete = (id) => {

    setNotices(

      notices.filter(
        (notice) => notice.id !== id
      )

    );
  };

  const handleAddNotice = () => {

    setTitle("");
    setDate("");

    setEditId(null);

    setShowModal(true);
  };

  return (
    <div className="notice-container">

      <AdminSidebar />

      <div className="notice-content">

        <div className="notice-header">

          <h1>Notice Management</h1>

          <Button
            text="➕ Create Notice"
            onClick={handleAddNotice}
          />

        </div>

        <table>

          <thead>

            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {notices.map((notice) => (

              <tr key={notice.id}>

                <td>{notice.title}</td>

                <td>{notice.date}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEdit(notice)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(notice.id)
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
              ? "Edit Notice"
              : "Create Notice"}

          </h2>

          <input
            type="text"
            placeholder="Notice Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
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

export default Notices;