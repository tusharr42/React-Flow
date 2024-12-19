import React, { useState } from "react";
import { Card, CardContent, TextField, Tabs, Tab, Box } from "@mui/material";

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

  return (
    <Card sx={{ width: 400, boxShadow: 1, borderRadius: 1 }}>
      <CardContent>
        {/* Search Bar */}
        <TextField
          fullWidth
          label="Search..."
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
          sx={{ marginTop: 2, display: "flex", flexDirection: "row", gap: 2 }}
        >
          {tabValue === 0 && (
            <>
              <div>MongoDb</div>
              <div>SQL</div>
              <div>Appwrite</div>
            </>
          )}

          {tabValue === 1 && (
            <>
              <div>Map</div>
              <div>Set Property</div>
              <div>Message</div>
              <div>Notify</div>
              <div>Program Command</div>
            </>
          )}

          {tabValue === 2 && (
            <>
              <div>try and catch</div>
              <div>start</div>
              <div>stop</div>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default TabsPage;
