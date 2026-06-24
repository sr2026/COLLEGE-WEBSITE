import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar({ showLogout = false }) {

  const navigate = useNavigate();

  const handleLogout = () => {

    navigate("/login");

  };

  return (
    <nav className="navbar">

      <h2>GLOBAL UNIVERSITY</h2>

      <ul className="nav-links">

        <li onClick={() => navigate("/")}>
          Home
        </li>

        <li onClick={() => navigate("/about")}>
          About
        </li>

        <li onClick={() => navigate("/course")}>
          Course
        </li>

        <li onClick={() => navigate("/faculty")}>
          Faculty
        </li>

        <li onClick={() => navigate("/gallery")}>
          Gallery
        </li>

        <li onClick={() => navigate("/contact")}>
          Contact
        </li>

        <li onClick={() => navigate("/Admission")}>
          Admission
        </li>


      </ul>

      {showLogout ? (

        <button
          className="login-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      ) : (

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

      )}

    </nav>
  );
}

export default Navbar;