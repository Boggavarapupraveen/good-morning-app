import React, { useState } from "react";
import axios from "axios";
import bgImage from "./assets/goodmorning.webp";

function App() {
  const [formData, setFormData] = useState({
    name: "B.Naga Praveen Chowdary",
    phone: "6300410115",
    email: "123ec0015@iiitk.ac.in"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users", formData);
    alert("Good Morning unstop! Data submitted");
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "50px"
      }}
    >
      <h1 style={{ color: "white", textAlign: "center" }}>
        🌞 Good Morning unstop
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(39, 54, 104, 0.9)",
          padding: "20px",
          width: "300px",
          margin: "auto",
          borderRadius: "8px"
        }}
      >
        <input name="name" placeholder="Name"
          value={formData.name} onChange={handleChange} required /><br /><br />

        <input name="phone" placeholder="Phone"
          value={formData.phone} onChange={handleChange} required /><br /><br />

        <input name="email" placeholder="Email"
          value={formData.email} onChange={handleChange} required /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
