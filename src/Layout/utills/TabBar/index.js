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
  ListItemIcon,
} from "@mui/material";

function TabBar() {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const TabItem = ({ label, nodeType }) => (
    <ListItem
      sx={{
        padding: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        "&:hover": { backgroundColor: "#f0f0f0" },
      }}
      onDragStart={(event) => onDragStart(event, nodeType)}
      draggable
    >
      <ListItemIcon sx={{ minWidth: 30, display: "flex", alignItems: "center" }}>
        <img
          src={`/assets/${label.toLowerCase().replace(" ", "")}.png`}
          style={{ width: "25px", height: "auto", marginRight: "8px" }}
        />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );

  const tabContent = [
    [
      { label: "MongoDb", nodeType: "MongoDbConnectorNode" },
      { label: "SQL", nodeType: "SQLConnectorNode" },
      { label: "Appwrite", nodeType: "AppwriteConnectorNode" },
    ],
    [
      { label: "Map", nodeType: "MapNode" },
      { label: "Set Property", nodeType: "SetPropertyNode" },
      { label: "Message", nodeType: "MessageNode" },
      { label: "Notify", nodeType: "NotifyNode" },
      { label: "Program Command", nodeType: "ProgramCommandNode" },
    ],
    [
      { label: "Try Catch", nodeType: "TryCatchNode" },
      { label: "Start", nodeType: "StartNode" },
      { label: "Stop", nodeType: "StopNode" },
    ],
  ];

  return (
    <Card
      sx={{
        width: 280,
        height: 345,
        boxShadow: 1,
        marginBottom: 3,
        position: "absolute",
        top: "275px",
        marginLeft: "70px",
      }}
    >
      <CardContent>
        <TextField
          fullWidth
          label="Search all steps"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ marginBottom: 2 }}
        />
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Connect" />
          <Tab label="Execute" />
          <Tab label="Logic" />
        </Tabs>
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
              <TabItem key={index} label={item.label} nodeType={item.nodeType} />
            ))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TabBar;
