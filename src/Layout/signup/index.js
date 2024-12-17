"use client";

import React, { useEffect, useState } from "react";
import { Box, Paper, TextField, MenuItem, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from "@mui/system";

// Background Styling
const Background = styled("div")({
  backgroundImage: "linear-gradient(to right, #8f3f95, #f77958)",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  padding: "0 40px",
  color: "white",
});

// Logo Styling
const LogoContainer = styled("div")({
  position: "absolute",
  top: "20px",
  left: "40px",
  fontSize: "32px",
  fontWeight: "bold",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  letterSpacing: "1px",
  textTransform: "uppercase",
});

// Left Side Text Styling
const TextContent = styled("div")({
  maxWidth: "500px",
  paddingRight: "20px",
  color: "white",
  fontFamily: "Arial, sans-serif",
});

// Form Styling
const FormContainer = styled(Paper)({
  padding: "30px",
  maxWidth: "450px",
  width: "100%",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
});

const StyledTextField = styled(TextField)({
  marginBottom: "20px",
});

const StyledHeading = styled(Typography)({
  fontWeight: "bold",
  fontSize: "36px",
  marginBottom: "20px",
});

const StyledSubHeading = styled(Typography)({
  fontSize: "18px",
  marginBottom: "15px",
});

const StyledListItem = styled(Typography)({
  fontSize: "16px",
  marginBottom: "10px",
  fontWeight: "bold",
});

// Styled Submit Button
const StyledButton = styled("button")({
  backgroundColor: "#4e5df0", // Default blue color
  color: "#fff", // White text color
  fontWeight: "bold",
  textTransform: "uppercase",
  border: "none",
  borderRadius: "30px", // Rounded edges
  padding: "10px 0",
  fontSize: "14px",
  cursor: "pointer",
  width: "100%", // Full width
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#000", // Changes to black on hover
    color: "#fff",
  },
});

const SignUp = () => {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    phoneNumber: "",
    country: "",
    password: "",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryList = data
          .map((country) => ({
            value: country.cca2,
            label: country.name.common,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setCountries(countryList);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Handle successful registration
      } else {
        alert(data.message); // Handle error message from API
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Background>
      {/* Logo at the Top Left */}
      <LogoContainer>React Flow</LogoContainer>

      {/* Left Side Text Content */}
      <TextContent>
        <StyledHeading>Try React Flow free for 30 days</StyledHeading>
        <StyledSubHeading>
          Learn why over 20,000 of the world’s leading organizations trust React Flow’s intelligent integration and
          automation platform for their digital transformation journey.
        </StyledSubHeading>
        <StyledListItem>&#x2022; Ease-of-use and crowd-sourced intelligence</StyledListItem>
        <StyledListItem>&#x2022; Scalable and secure cloud-native architecture</StyledListItem>
        <StyledListItem>
          &#x2022; Industry-leading innovation delivered through continuous updates
        </StyledListItem>
        <StyledListItem>
          &#x2022; 10X Leader in the Gartner® Magic Quadrant™ for Integration Platform
        </StyledListItem>
        <StyledListItem>
          &#x2022; Best-in-class customer satisfaction rating and direct renewal rate
        </StyledListItem>
      </TextContent>

      {/* Right Side Form */}
      <FormContainer elevation={3}>
        <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
          Sign Up
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <StyledTextField
            label="First Name *"
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <StyledTextField
            label="Last Name *"
            fullWidth
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <StyledTextField
            label="Business Email Address *"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <StyledTextField
            label="Company Name *"
            fullWidth
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <StyledTextField
            label="Job Title"
            fullWidth
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <StyledTextField
            label="Phone Number *"
            fullWidth
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <StyledTextField
            select
            label="Country *"
            fullWidth
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
          <StyledTextField
            type="password"
            label="Password *"
            fullWidth
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography variant="body2">
                I agree to the{" "}
                <a href="#" style={{ color: "#1976d2", textDecoration: "none" }}>
                  React Flow Master Services Agreement terms and conditions
                </a>
              </Typography>
            }
          />
          <Box mt={3}>
            <StyledButton type="submit">Submit</StyledButton>
          </Box>
        </form>
      </FormContainer>
    </Background>
  );
};

export default SignUp;
