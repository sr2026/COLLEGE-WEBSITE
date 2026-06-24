import "./Admission.css";
import Navbar from "../../../components/Navbar/Navbar";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/Button/Button";


function Admission() {

  const [student, setStudent] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    category: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !student.fullName ||
      !student.email ||
      !student.phone ||
      !student.course
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Application Submitted Successfully");

    setStudent({
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      category: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      course: ""
    });
  };

  return (
    <>
      <Navbar />

      <div className="admission-page">

        <form
          className="admission-form"
          onSubmit={handleSubmit}
        >

          <div className="form-header">

            <h1>Admission Form</h1>

            <p>
              Please fill in the details below to apply
            </p>

          </div>

          <div className="form-grid">

            <div>
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={student.fullName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={student.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Phone Number *</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={student.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={student.dob}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Gender *</label>
              <select
                name="gender"
                value={student.gender}
                onChange={handleChange}
              >
                <option value="">
                  Select Gender
                </option>

                <option>Male</option>
                <option>Female</option>
                <option>Other</option>

              </select>
            </div>

            <div>
              <label>Category *</label>
              <select
                name="category"
                value={student.category}
                onChange={handleChange}
              >
                <option value="">
                  Select Category
                </option>

                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>

              </select>
            </div>

          </div>

          <div className="full-width">

            <label>Address *</label>

            <textarea
              name="address"
              placeholder="Enter your address"
              value={student.address}
              onChange={handleChange}
            />

          </div>

          <div className="location-grid">

            <div>
              <label>City *</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                value={student.city}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>State *</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state"
                value={student.state}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Pincode *</label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter pincode"
                value={student.pincode}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="full-width">

            <label>Course Applying For *</label>

            <select
              name="course"
              value={student.course}
              onChange={handleChange}
            >
              <option value="">
                Select Course
              </option>

              <option>B.Tech</option>
              <option>BCA</option>
              <option>MCA</option>
              <option>MBA</option>
              <option>BBA</option>
              <option>M.Tech</option>

            </select>

          </div>

          <Button 
           text="Apply Now"
           type="submit"
          />

        </form>

      </div>
    </>
  );
}

export default Admission;