"use client";
import React from "react";
import Image from "next/image";
import ResponsiveAppBar from "../Global/Header/index.js";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/signup");
  };

  return (
    <div style={{ position: "relative", width: "1400px", height: "600px" }}>
      <ResponsiveAppBar />
      
    </div>
  );
};

export default HomePage;