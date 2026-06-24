import "./AdmissionsAdmin.css";
import AdminSidebar from "./AdminSidebar";
import Button from "../../components/Button/Button";
import { useState } from "react";


function AdmissionsAdmin() {

  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      course: "B.Tech",
      status: "Pending"
    },
    {
      id: 2,
      name: "Priya Das",
      email: "priya@gmail.com",
      course: "MBA",
      status: "Pending"
    }
  ]);

  const approveApplication = (id) => {

    setApplications(

      applications.map((app) =>

        app.id === id
          ? {
              ...app,
              status: "Approved"
            }
          : app

      )

    );

  };

  const rejectApplication = (id) => {

    setApplications(

      applications.map((app) =>

        app.id === id
          ? {
              ...app,
              status: "Rejected"
            }
          : app

      )

    );

  };

  const deleteApplication = (id) => {

    setApplications(

      applications.filter(
        (app) => app.id !== id
      )

    );

  };

  return (

    <div className="admission-admin-container">

      <AdminSidebar />

      <div className="admission-admin-content">

        <div className="page-header">

          <h1>Admission Applications</h1>

        </div>

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {applications.map((app) => (

              <tr key={app.id}>

                <td>{app.name}</td>

                <td>{app.email}</td>

                <td>{app.course}</td>

                <td>

                  <span
                    className={
                      app.status === "Approved"
                        ? "approved"
                        : app.status === "Rejected"
                        ? "rejected"
                        : "pending"
                    }
                  >
                    {app.status}
                  </span>

                </td>

                <td className="action-cell">

                  <Button
                    text="Approve"
                    onClick={() =>
                      approveApplication(app.id)
                    }
                  />

                  <Button
                    text="Reject"
                    onClick={() =>
                      rejectApplication(app.id)
                    }
                  />

                  <Button
                    text="Delete"
                    onClick={() =>
                      deleteApplication(app.id)
                    }
                  />

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default AdmissionsAdmin;