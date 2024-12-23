import React, { useState } from "react";
import { Box, Typography, TextField, Grid, IconButton } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import InfoIcon from "@mui/icons-material/Info";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RoundaboutRightIcon from "@mui/icons-material/RoundaboutRight";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AppsIcon from "@mui/icons-material/Apps";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import TabBar from "../tabBar/index";
import { red } from "@mui/material/colors";

export default function ProcessBox() {
  const [showTabs, setShowTabs] = useState(false);
  const [closeTabs, setCloseTabs] = useState(true);

  const handleClick = () => {
    setShowTabs((prevState) => !prevState);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          position: "fixed",
          top: "200px",
          width: "-webkit-fill-available",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 1,
            border: "1px solid #ccc",
            flexGrow: 1,
            justifyContent: "space-between",
            height: "43px",
            background: "white",
          }}
        >
          <SettingsSuggestIcon />
          <TextField
            id="outlined-size-small"
            size="small"
            sx={{ width: "400px" }}
          />
          <Typography variant="body1" sx={{ fontWeight: "normal" }}>
            Process
          </Typography>
          <InfoIcon />
          <FolderCopyIcon />
          <ContentPasteIcon />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 1,
            border: "1px solid #ccc",
            width: "9%",
            justifyContent: "center",
            background: "white",
            marginLeft: "21px",
            marginRight: "15px",
          }}
        >
          <LocalDrinkIcon />
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Test
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack spacing={1} direction="row">
            <Button
              sx={{ marginRight: 2, padding: 1, background: "white" }}
              variant="outlined"
            >
              Save & Close
            </Button>
            <Button
              sx={{ marginRight: 2, padding: 1, width: "120px" }}
              variant="contained"
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex", // Use flexbox to align items horizontally
          flexDirection: "row", // Align children (icons and TabsPage) in a row
          padding: 2,
          width: "100%",
        }}
      >
        {/* Left side with icon buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 2,
            gap: 2,
            width: "8%", // You can adjust the width as needed
            position: "absolute",
            top: "263px",
          }}
        >
          {/* Add clickable icons with rounded borders */}
          <IconButton
            sx={{
              borderRadius: "50%",
              padding: "10px",
              border: "1px solid #ccc",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
            onClick={handleClick}
          >
            <RoundaboutRightIcon />
          </IconButton>

          <IconButton
            sx={{
              borderRadius: "50%",
              padding: "10px",
              border: "1px solid #ccc",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <EqualizerIcon />
          </IconButton>

          <IconButton
            sx={{
              borderRadius: "50%",
              padding: "10px",
              border: "1px solid #ccc",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <AppsIcon />
          </IconButton>

          <IconButton
            sx={{
              borderRadius: "50%",
              padding: "10px",
              border: "1px solid #ccc",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <FolderCopyIcon />
          </IconButton>
        </Box>

        {/* Right side with TabsPage */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 1,
            flexGrow: 1,
          }}
        >
          {showTabs && <TabBar />}
        </Box>
      </Box>
    </>
  );
}
