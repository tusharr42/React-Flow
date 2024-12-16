"use client"
import React, { useState } from "react";
import "./login.css";

const LoginPage = () => {
  // State for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Email validation
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      validationErrors.password =
        "Password must have at least 6 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    // Set validation errors
    setErrors(validationErrors);

    // If no errors, you can proceed
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      // Further form submission logic (e.g., API call)
    }
  };

  return (
    <div className="container">
      {/* Left Side: Sign In */}
      <div className="login-section">
        <h2 className="title">Sign in to Account</h2>
        <div className="social-icons">
          <button className="social-btn">f</button>
          <button className="social-btn">in</button>
          <button className="social-btn">G</button>
        </div>
        <p className="text">or use your email account</p>
        <form className="form" onSubmit={handleSubmit}>
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}

          {/* Options */}
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-link">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>
      </div>

      {/* Right Side: Sign Up */}
      <div className="signup-section">
        <h2 className="welcome-text">Hello, Friend!</h2>
        <p className="signup-text">
          Fill up personal information and start your journey with us.
        </p>
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default LoginPage;
