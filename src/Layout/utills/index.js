import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Tabs,
  Tab,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon, // Import ListItemIcon for positioning the icon
} from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AddIcon from "@mui/icons-material/Add";
import MessageIcon from "@mui/icons-material/Message";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import TerminalIcon from "@mui/icons-material/Terminal";

function TabsPage() {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle Tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Reusable TabItem component
  const TabItem = ({ label }) => (
    <ListItem
      sx={{
        padding: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        "&:hover": { backgroundColor: "#f0f0f0" },
      }}
    >
      {/* Check if the label is "Map" to add the icon */}
      {label === "Map" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/map.jpg"
            style={{ width: "25px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      {label === "Set Property" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/setproperty.png"
            style={{ width: "25px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      {label === "Message" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/message.png"
            style={{ width: "25px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      {label === "Notify" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/notify.png"
            style={{ width: "25px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      {label === "Program Command" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/program.png"
            style={{ width: "25px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      {label === "MongoDb" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/mongodb.svg"
            style={{ width: "28px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      {label === "SQL" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/sql2.webp"
            style={{ width: "25px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      {label === "Appwrite" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/appwrite.png"
            style={{ width: "25px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      {label === "Try and Catch" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/try1.jpg"
            style={{ width: "28px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      {label === "Start" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/start.jpg"
            style={{ width: "28px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      {label === "Stop" && (
        <ListItemIcon
          sx={{ minWidth: 30, display: "flex", alignItems: "center" }}
        >
          <img
            src="/assets/stop.webp"
            style={{ width: "28px", height: "auto", marginRight: "8px" }}
          />
        </ListItemIcon>
      )}
      <ListItemText primary={label} />
    </ListItem>
  );

  // Content for each tab
  const tabContent = [
    ["MongoDb", "SQL", "Appwrite"],
    ["Map", "Set Property", "Message", "Notify", "Program Command"],
    ["Try and Catch", "Start", "Stop"],
  ];

  return (
    <Card
      sx={{
        width: 280,
        height: 310,
        boxShadow: 1,
        marginBottom: 3,
        position: "absolute",
        top: "282px",
        left: "457px",
      }}
    >
      <CardContent>
        {/* Search Bar */}
        <TextField
          fullWidth
          label="Search all steps"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ marginBottom: 2 }}
        />

        {/* Tabs */}
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Connect" />
          <Tab label="Execute" />
          <Tab label="Logic" />
        </Tabs>

        {/* Tab Content */}
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            height: 200,
            overflowY: "auto",
          }}
        >
          <List>
            {tabContent[tabValue].map((item, index) => (
              <TabItem key={index} label={item} />
            ))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TabsPage;
