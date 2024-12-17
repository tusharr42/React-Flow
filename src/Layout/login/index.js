"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"; 
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./login.css";


const LoginPage = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});
  const router = useRouter();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Email validation
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\d]\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = "Email is invalid or starts with a number";
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      validationErrors.password =
        "Password must have at least 6 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    // Set validation errors
    setErrors(validationErrors);

    // If no errors, proceed to sign-in logic
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (res?.ok) {
          toast.success("Login successful!");
          console.log("Login successful!");
          setTimeout(() => {
            router.replace("/dashboard");
          }, 2000);
        } else {
          toast.error("Input Correct Credentials.");
          console.log("Input Correct Credentials.");
        }
      } catch (error) {
        toast.error("An unexpected error occurred.");
        console.log("An unexpected error occurred.");
      }
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
            name="email"
            placeholder="Email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
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
        <h2 className="welcome-text">ReactFlow AI Agents</h2>
        <p className="signup-text">
          Fill up personal information and start your journey with us.
        </p>
        <button className="signup-btn">Sign Up</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
