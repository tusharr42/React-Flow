'use client';
import React from 'react';
import PrimaryNavBar from '../Global/PrimaryNavbar';
import SecondaryNavBar from '../Global/SecondaryNavbar';
import Sidebar from '../Global/Sidebar';
import Footer from '../Global/Footer'; // Import the Footer component

const DashboardPage = () => {
  // Ensures the body is fixed and scroll-free
  const bodyStyle = {
    margin: 0,
    padding: 0,
    height: '100vh',
    overflow: 'hidden',
  };

  // Container for the dashboard layout
  const dashboardContainer = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
  };

  // Layout for the sidebar and content area
  const dashboardStyle = {
    display: 'flex',
    flex: 1, // Takes up the remaining height
    flexDirection: 'row',
    marginTop: '0', // Remove any unnecessary margins
  };

  // Content area that adjusts dynamically
  const contentStyle = {
    flex: 1, // Take remaining width
    padding: '20px',
    overflow: 'auto', // Allows scrolling within content, if needed
    backgroundColor: '#f4f4f4',
    marginBottom: '40px', // Reserve space for the footer
  };

  return (
    <div style={bodyStyle}>
      <div style={dashboardContainer}>
        {/* Fixed Nav Bars */}
        <PrimaryNavBar />
        <SecondaryNavBar />
        
        {/* Sidebar and Content */}
        <div style={dashboardStyle}>
          <Sidebar />
          <div style={contentStyle}>
            <h2>Dashboard Content</h2>
            <p>This is the main content area of your dashboard.</p>
            <p>Ensure all the content remains visible here without being hidden by the sidebar.</p>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default DashboardPage;
