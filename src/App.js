import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Grid />
      </Box>
    </Box>
  );
}

export default App;
