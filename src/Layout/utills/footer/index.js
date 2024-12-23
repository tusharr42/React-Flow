import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#323295", // Blue background
        color: "white", // White text color
        padding: "20px 0",
        position: "relative",
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {/* Platform Section */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Platform</Typography>
          <Link href="#" color="inherit" display="block">
            Boomi Enterprise Platform
          </Link>
          <Link href="#" color="inherit" display="block">
            Why Boomi
          </Link>
          <Link href="#" color="inherit" display="block">
            iPaaS pricing & editions
          </Link>
          <Link href="#" color="inherit" display="block">
            Compliance
          </Link>
          <Link href="#" color="inherit" display="block">
            What is iPaaS?
          </Link>
        </Grid>

        {/* Solutions Section */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Solutions</Typography>
          <Link href="/" color="inherit" display="block">
            Manufacturing
          </Link>
          <Link href="/" color="inherit" display="block">
            Healthcare & Life Sciences
          </Link>
          <Link href="/" color="inherit" display="block">
            Retail
          </Link>
          <Link href="/" color="inherit" display="block">
            Financial Services
          </Link>
          <Link href="/" color="inherit" display="block">
            Higher Education
          </Link>
          <Link href="/" color="inherit" display="block">
            Public Sector
          </Link>
          <Link href="/" color="inherit" display="block">
            Software Providers
          </Link>
        </Grid>

        {/* Connectors Section */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Connectors</Typography>
          <Link href="/" color="inherit" display="block">
            Salesforce
          </Link>
          <Link href="/" color="inherit" display="block">
            SAP
          </Link>
          <Link href="/" color="inherit" display="block">
            NetSuite
          </Link>
          <Link href="/" color="inherit" display="block">
            Workday
          </Link>
          <Link href="/" color="inherit" display="block">
            ServiceNow
          </Link>
          <Link href="/" color="inherit" display="block">
            AWS
          </Link>
          <Link href="/" color="inherit" display="block">
            All Connectors
          </Link>
        </Grid>

        {/* Resources Section */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Resources</Typography>
          <Link href="/" color="inherit" display="block">
            Events & Webinars
          </Link>
          <Link href="/" color="inherit" display="block">
            Blog
          </Link>
          <Link href="/" color="inherit" display="block">
            Case Studies
          </Link>
          <Link href="/" color="inherit" display="block">
            Training
          </Link>
          <Link href="/" color="inherit" display="block">
            Community
          </Link>
          <Link href="/" color="inherit" display="block">
            Documentation
          </Link>
          <Link href="/" color="inherit" display="block">
            All Resources
          </Link>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ marginTop: "20px" }}>
        &copy; 2024 ReactFlow All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
