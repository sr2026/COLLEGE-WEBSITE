import "./Attendance.css";
import Sidebar from "./Sidebar";
import Card from "../../../components/Card/Card";

function Attendance() {

  const attendanceData = [
    {
      subject: "Java",
      attendance: "90%"
    },
    {
      subject: "DBMS",
      attendance: "85%"
    },
    {
      subject: "Operating System",
      attendance: "88%"
    },
    {
      subject: "Computer Networks",
      attendance: "80%"
    },
    {
      subject: "React",
      attendance: "95%"
    }
  ];

  return (
    <div className="attendance-container">

      <Sidebar />

      <div className="attendance-content">

        <h1>Attendance Report</h1>

        <div className="attendance-cards">

          <Card
          title="Total Classes"
          value="120"
          />
          
          <Card
          title="Attended"
          value="102"
          />
          
          <Card
          title="Absent"
          value="18"
          />
          
          <Card
          title="Attendance"
          value="85%"
          />

        </div>

        <div className="attendance-table">

          <table>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Attendance</th>
              </tr>
            </thead>

            <tbody>

              {
                attendanceData.map((item, index) => (

                  <tr key={index}>
                    <td>{item.subject}</td>
                    <td>{item.attendance}</td>
                  </tr>

                ))
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Attendance;