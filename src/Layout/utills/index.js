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
} from "@mui/material";


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
    <Card sx={{ width: 300, height: 280, boxShadow: 1, marginBottom: 3 }}>
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
