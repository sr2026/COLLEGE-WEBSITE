import "./Faculty.css";
import Navbar from "../../../components/Navbar/Navbar";
import { useState } from "react";

function Faculty() {

  const [category, setCategory] = useState("All");

  const faculty = [
    {
      name: "Ramesh Agarwal",
      teachingexperience: "10 Years",
      category: "Engineering"
    },
    {
      name: "Suresh Kumar",
      teachingexperience: "4 Years",
      category: "Engineering"
    },
    {
      name: "Selema Gomez",
      teachingexperience: "2 Years",
      category: "Engineering"
    },
    {
      name: "Jennifer Lee",
      teachingexperience: "5 Years",
      category: "Computer"
    },
    {
      name: "Kyle Johnson",
      teachingexperience: "2 Years",
      category: "Computer"
    },
    {
      name: "Emily Clark",
      teachingexperience: "3 Years",
      category: "Management"
    },
    {
      name: "Alina Das",
      teachingexperience: "2 Years",
      category: "Computer"
    },
    {
      name: "Sourav Ganguly",
      teachingexperience: "2 Years",
      category: "Management"
    },
    {
      name: "Manoj Mishra",
      teachingexperience: "3 Years",
      category: "Management"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="faculty-page">

        <h1>Our Faculty</h1>

        <div className="faculty-container">

          {faculty.map((faculty, index) => (
            <div
              className="faculty-card"
              key={index}
            >

              <h2>{faculty.name}</h2>

              <p>
                {faculty.category}
                {faculty.teachingexperience && ` - ${faculty.teachingexperience}`}
              </p>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Faculty;