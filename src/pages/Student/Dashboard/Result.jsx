import Card from "../../../components/Card/Card";
import "./Result.css";
import Sidebar from "./Sidebar";

function Results() {

  const resultData = [
    {
      subject: "Java",
      grade: "A"
    },
    {
      subject: "DBMS",
      grade: "B"
    },
    {
      subject: "Operating System",
      grade: "A"
    },
    {
      subject: "Computer Networks",
      grade: "O"
    },
    {
      subject: "ASD",
      grade: "E"
    }
  ];

  return (
    <div className="results-container">

      <Sidebar />

      <div className="results-content">

        <h1>Academic Results</h1>

        <div className="result-cards">

          <Card 
          title="CGPA"
          value="10"
          />

          <Card 
          title="Semester"
          value="8th"
          />

          <Card 
          title="Backlogs"
          value="0" 
          />
        </div>

        <div className="results-table">

          <table>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody>

              {
                resultData.map((item, index) => (

                  <tr key={index}>
                    <td>{item.subject}</td>
                    <td>{item.grade}</td>
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

export default Results;