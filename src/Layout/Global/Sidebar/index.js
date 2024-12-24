'use client';
import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LayersIcon from '@mui/icons-material/Layers';
import ComponentsPanel from '../ComponentsPannel'; // Make sure the path is correct

const Sidebar = () => {
  const [isClose, setIsClose] = useState(true); // Sidebar starts closed
  const [isComponentsPanelOpen, setIsComponentsPanelOpen] = useState(false); // Tracks visibility of the ComponentsPanel

  // On component mount, check local storage
  useEffect(() => {
    const savedState = localStorage.getItem('sidebarState');
    if (savedState !== null) {
      setIsClose(JSON.parse(savedState)); // Restore state from local storage
    }
  }, []);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    const newState = !isClose;
    setIsClose(newState);
    localStorage.setItem('sidebarState', JSON.stringify(newState)); // Save state
  };

  // Toggle the ComponentsPanel visibility
  const toggleComponentsPanel = () => {
    setIsComponentsPanelOpen(prevState => !prevState); // Toggle the visibility
  };

  // Sidebar styles
  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: isClose ? '60px' : '220px',
    transition: 'width 0.3s ease',
    height: 'calc(100vh - 80px)',
    boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)',
    paddingTop: '10px',
    position: 'relative',
    paddingBottom: '30px',
  };

  const iconContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: isClose ? 'center' : 'flex-start',
    gap: '20px',
    marginBottom: 'auto',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    color: '#333',
    fontWeight: 500,
    fontSize: '14px',
    padding: '10px 8px',
    transition: 'background-color 0.3s',
    width: '100%',
  };

  const closeButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isClose ? 'center' : 'flex-start',
    cursor: 'pointer',
    color: '#555',
    fontSize: '14px',
    padding: '5px',
    position: 'absolute',
    bottom: '120px',
    left: 0,
    right: 0,
  };

  const chevronStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#555',
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={iconContainer}>
          {/* Create New */}
          <div style={itemStyle}>
            <Tooltip title="Create New" placement="right">
              <IconButton>
                <AddCircleOutlineIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            {!isClose && <Typography>Create New</Typography>}
          </div>

          {/* Process Library */}
          <div style={itemStyle}>
            <Tooltip title="Process Library" placement="right">
              <IconButton>
                <MenuBookIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            {!isClose && <Typography>Process Library</Typography>}
          </div>

          {/* Component Explorer */}
          <div style={itemStyle} onClick={toggleComponentsPanel}>
            <Tooltip title="Component Explorer" placement="right">
              <IconButton>
                <LayersIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            {!isClose && <Typography>Component Explorer</Typography>}
          </div>
        </div>

        {/* Open/Close Sidebar */}
        <div style={closeButtonStyle} onClick={toggleSidebar}>
          <Tooltip title={isClose ? 'Expand' : 'Collapse'} placement="right">
            <IconButton>
              <Typography style={chevronStyle}>{isClose ? '»' : '«'}</Typography>
            </IconButton>
          </Tooltip>
          {!isClose && <Typography>Close Sidebar</Typography>}
        </div>
      </div>

      {/* Conditionally render the ComponentsPanel */}
      {isComponentsPanelOpen && (
        <div
          style={{
            position: 'fixed',
            top: '146px', // Adjust based on your header height
            left: isClose ? '60px' : '220px', // Sidebar width, adjust dynamically based on isClose state
            width: '290px',
            height: 'calc(100vh - 80px)',
            backgroundColor: '#fff',
            boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)',
            padding: '10px',
            transition: 'left 0.3s ease', // Smooth transition when sidebar opens/closes
          }}
        >
          <ComponentsPanel />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
