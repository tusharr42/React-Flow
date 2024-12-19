import React from "react";
import { Button, Box } from "@mui/material";
import { signOut } from "next-auth/react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#002855",
    color: "white",
    padding: "10px 20px",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  };

  const handleSignOut = () => {
    signOut({
      callbackUrl: "/login", // Redirect to login page after sign-out
    });
  };

  const leftNavStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const reactFlowTextStyle = {
    fontSize: "26px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #ffffff, #ff69b4)", // White to pinkish-purple gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    cursor: "pointer",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const navLinkItemStyle = {
    cursor: "pointer",
    fontWeight: "500",
    transition: "color 0.3s",
  };

  const navLinkHover = {
    color: "#e0e0e0",
  };

  const rightNavStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  return (
    <nav style={navbarStyle}>
      {/* Left Side - Logo and Links */}
      <div style={leftNavStyle}>
        <div style={reactFlowTextStyle}>
          <Image
            src="/assets/removebg.png" // Path to your image file
            alt="React Flow"
            width={120} // Set the width you want
            height={60} // Set the height you want
            style={{
              objectFit: "contain",
              marginTop: "10px",
            }}
          />
        </div>
        <ul style={navLinksStyle}>
          <li
            style={navLinkItemStyle}
            onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Services ▾
          </li>
          <li
            style={navLinkItemStyle}
            onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Discover ▾
          </li>
          <li
            style={navLinkItemStyle}
            onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Resources ▾
          </li>
          <li
            style={navLinkItemStyle}
            onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Labs ▾
          </li>
          <li
            style={navLinkItemStyle}
            onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Settings ▾
          </li>
        </ul>
      </div>

      {/* Right Side - Icons and Buttons */}
      <Box style={rightNavStyle}>
        <AccountCircleIcon style={{ fontSize: "28px", cursor: "pointer" }} />
        <HelpOutlineIcon style={{ fontSize: "28px", cursor: "pointer" }} />
        <MailOutlineIcon style={{ fontSize: "28px", cursor: "pointer" }} />
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          style={{
            color: "white",
            borderColor: "white",
            textTransform: "none",
            fontSize: "12px",
            padding: "5px 10px",
          }}
          onClick={handleSignOut}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#002855";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "white";
          }}
        >
          Sign Out
        </Button>
      </Box>
    </nav>
  );
}

function PrimaryNavBar() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "0px", color: "#002855" }}></div>
    </div>
  );
}

export default PrimaryNavBar;
