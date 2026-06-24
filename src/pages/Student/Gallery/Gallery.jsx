import "./Gallery.css";
import Navbar from "../../../components/Navbar/Navbar";
import { useState } from "react";

import collegebuilding from "../../../assets/college building.jpg";
import classroom from "../../../assets/classroom.jpg";
import lecturehall from "../../../assets/lecture-hall.jpg";

function Gallery() {

  const [category, setCategory] = useState("All");

  const images = [
    {
      image: collegebuilding,
      title: "Main Campus",
      category: "Campus"
    },
    {
      image: classroom,
      title: "Smart Classroom",
      category: "Classroom"
    },
    {
      image: lecturehall,
      title: "Lecture Hall",
      category: "Events"
    },
    {
      image: collegebuilding,
      title: "Sports Ground",
      category: "Sports"
    }
  ];

  const filteredImages =
    category === "All"
      ? images
      : images.filter(
          (item) => item.category === category
        );

  return (
    <>
      <Navbar />

      <div className="gallery-page">

        <h1>College Gallery</h1>

        <div className="gallery-buttons">

          <button onClick={() => setCategory("All")}>
            All
          </button>

          <button onClick={() => setCategory("Campus")}>
            Campus
          </button>

          <button onClick={() => setCategory("Classroom")}>
            Classroom
          </button>

          <button onClick={() => setCategory("Events")}>
            Events
          </button>

          <button onClick={() => setCategory("Sports")}>
            Sports
          </button>

        </div>

        <div className="gallery-container">

          {filteredImages.map((item, index) => (
            <div
              className="gallery-card"
              key={index}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <p>{item.category}</p>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Gallery;