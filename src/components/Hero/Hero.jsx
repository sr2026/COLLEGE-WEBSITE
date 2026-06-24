import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-content">

        <h1>WELCOME TO GLOBAL UNIVERSITY</h1>

        <p>
          Empowering students through innovation,
          excellence and quality education.
        </p>

        <div className="hero-buttons">

          <button
            className="apply-btn"
            onClick={() => navigate("/Admission")}
          >
            Apply Now
          </button>

          <button
            className="explore-btn"
            onClick={() => navigate("/Course")}
          >
            Explore More
          </button>

        </div>

        <div className="hero-stats">

          <div className="stat-box">
            <h2>25+</h2>
            <p>Years of Excellence</p>
          </div>

          <div className="stat-box">
            <h2>10000+</h2>
            <p>Students</p>
          </div>

          <div className="stat-box">
            <h2>200+</h2>
            <p>Faculty Members</p>
          </div>

          <div className="stat-box">
            <h2>100%</h2>
            <p>Placement Rate</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;