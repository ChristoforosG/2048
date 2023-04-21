import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Welcome To 2048</Typography>
        <IconButton>
          <RestartAltIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
