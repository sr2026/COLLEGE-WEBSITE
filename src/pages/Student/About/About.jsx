import "./About.css";
import Navbar from "../../../components/Navbar/Navbar";

function About() {

  const features = [
    "25+ Years of Excellence",
    "10000+ Students",
    "300+ Faculty Members",
    "100% Placement Record"
  ];

  return (
    <>
      <Navbar />

      <div className="about">

        <h1>ABOUT GLOBAL UNIVERSITY</h1>

        <p className="about-text">
          Global University is committed to providing
          quality education, innovation, and research
          opportunities to students from around the world.
        </p>

        <div className="mission-vision">

          <div className="box">
            <h2>Our Mission</h2>
            <p>
              To empower students through education
              and prepare them for successful careers.
            </p>
          </div>

          <div className="box">
            <h2>Our Vision</h2>
            <p>
              To become a globally recognized institution
              known for academic excellence.
            </p>
          </div>

        </div>

        <h2 className="feature-heading">
          Why Choose Us?
        </h2>

        <div className="feature-container">

          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
            >
              {feature}
            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default About;