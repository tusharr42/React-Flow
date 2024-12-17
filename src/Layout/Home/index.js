"use client";
import React from "react";
import Image from "next/image";
import ResponsiveAppBar from "../Global/Header/page.js";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/signup");
  };

  return (
    <div style={{ position: "relative", width: "1400px", height: "600px" }}>
      <ResponsiveAppBar />
      <div style={{ height: "83%" }}>
        <video
          src="/assets/building1.mp4"
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "48px",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        React Flow 2025
      </div>
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 255, 0.7), rgba(0, 255, 255, 0.7), rgba(128, 0, 128, 0.7), rgba(238, 130, 238, 0.7), rgba(255, 165, 0, 0.7), rgba(0, 0, 0, 0.7))",
          color: "white",
          padding: "20px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          width: "100%",
        }}
      >
        Registration is now open now
        <button
          onClick={handleRedirect}
          style={{
            backgroundColor: "#CD5C5C" || "transparent",
            color: "#CCCCFF",
            padding: "10px 20px",
            fontSize: "18px",
            fontWeight: "bold" || "normal",
            border: "none",
            borderRadius: "19px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
