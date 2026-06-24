import React, { useState } from "react";
import "./Course.css";
import Navbar from "../../../components/Navbar/Navbar";

const courses = [
  { name: "B.Tech", duration: "4 Years", category: "Engineering" },
  { name: "M.Tech", duration: "2 Years", category: "Engineering" },
  { name: "BCA", duration: "3 Years", category: "Computer" },
  { name: "MCA", duration: "2 Years", category: "Computer" },
  { name: "MBA", duration: "2 Years", category: "Management" },
  { name: "BBA", duration: "3 Years", category: "Management" },
];

function Courses() {
  const [filter, setFilter] = useState("All");

  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((course) => course.category === filter);

  return (
    <>
      <Navbar />


    <section className="courses">
      <div className="overlay"></div>

      <div className="courses-container">
        <div className="heading">
          <p>OUR COURSES</p>
          <h1>Explore Our Programs</h1>
          <span>
            Choose from a wide range of undergraduate and postgraduate
            programs.
          </span>
        </div>


        <div className="content">

          <div className="filters">
            <button
              className={filter === "All" ? "active" : ""}
              onClick={() => setFilter("All")}
            >
              All
            </button>

            <button
              className={filter === "Engineering" ? "active" : ""}
              onClick={() => setFilter("Engineering")}
            >
              Engineering
            </button>

            <button
              className={filter === "Computer" ? "active" : ""}
              onClick={() => setFilter("Computer")}
            >
              Computer
            </button>

            <button
              className={filter === "Management" ? "active" : ""}
              onClick={() => setFilter("Management")}
            >
              Management
            </button>
          </div>
 
          <div className="cards">
            {filteredCourses.map((course, index) => (
              <div className="card" key={index}>
                <h2>{course.name}</h2>
                <p className="duration">
                  Duration: {course.duration}
                </p>

                <hr />

                <p className="description">
                  Professional program designed for career growth and industry
                  skills.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Courses;