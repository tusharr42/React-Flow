import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import InfoIcon from "@mui/icons-material/Info";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RoundaboutRightIcon from "@mui/icons-material/RoundaboutRight";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import TabsPage from "..";

export default function ProcessBox() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          width: "100%",
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
          }}
        >
          <SettingsSuggestIcon />
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", flex: 1, marginLeft: "10px" }}
          >
            New Process
          </Typography>
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
            width: "15%",
            justifyContent: "center",
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
            <Button sx={{ marginRight: 2, padding: 1 }} variant="outlined">
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
            <SettingsSuggestIcon />
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
            <InfoIcon />
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
          <TabsPage />
        </Box>
      </Box>
    </>
  );
}
