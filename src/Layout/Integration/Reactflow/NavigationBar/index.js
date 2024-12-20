import React from "react"; // React import
import { useRouter } from "next/navigation";
// import Flow from '../Flow'
import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProcessBox from "@/Layout/utills/innerDashboardRows";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

function NavigationBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
        position: "fixed",
        background: "white",
        width: "-webkit-fill-available",
        zIndex: "100",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "48px",
        }}
      >
        <Box>
          <IconButton>
            <HomeIcon sx={{ fontSize: "28px", color: "#002855" }} />
          </IconButton>
        </Box>

        {/* Menu Icon */}
        <Box>
          <IconButton>
            <MoreVertIcon sx={{ fontSize: "24px", color: "#555555" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
