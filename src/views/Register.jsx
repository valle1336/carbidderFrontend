import React from "react";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <div>Hejsan från Register</div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create User</button>
      </form>
    </>
  );
}
export default Register;
