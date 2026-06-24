import "./Contact.css";
import Navbar from "../../../components/Navbar/Navbar";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/Button/Button";


function Contact() {

  const [message, setMessage] = useState({
    name: "",
    email: "",
    phonenumber: "",
    text: ""
  });

  const handleChange = (e) => {

    setMessage({
      ...message,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !message.name.trim() ||
      !message.email.trim() ||
      !message.phonenumber.trim()||
      !message.text.trim()
    ) {

      toast.error("Please fill all fields");
      return;

    }

    toast.success("Message Sent Successfully");

    setMessage({
      name: "",
      email: "",
      phonenumber: "",
      text: ""
    });

  };

  return (
    <>
      <Navbar />

      <div className="contact-page">

        <div className="contact-info">

          <h1>Contact Us</h1>

          <p>
            📍 Global University,
            Bhubaneswar, Odisha
          </p>

          <p>
            📞 +91 9876543210
          </p>

          <p>
            ✉ info@globaluniversity.com
          </p>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={message.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={message.email}
            onChange={handleChange}
          />

          <input
            type="float"
            name="phonenumber"
            placeholder="Your Phone Number"
            value={message.phonenumber}
            onChange={handleChange}
          />

          <textarea
            name="text"
            placeholder="Your Message"
            value={message.text}
            onChange={handleChange}
          />

          <Button 
          text="Send Message"
          type="submit"
          />

        </form>

      </div>
    </>
  );
}

export default Contact;