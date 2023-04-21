import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { execute } from "../GameRules/blocks";
import { numberColours } from "../Styles/defaultStyles";

const Grid = () => {
  const dimension = 540;
  const separator = 6;
  const radius = 2;
  const squareSX = (number) => {
    return {
      height: (dimension - 4 * separator) / 4,
      width: (dimension - 4 * separator) / 4,
      backgroundColor: numberColours[number],
      borderRadius: radius,
      textAlign: "center",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    };
  };
  const fontSX = { fontWeight: "bold", fontSize: 24 };
  const [state, setState] = useState([
    ["", "2", "", ""],
    ["", "", "4", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ]);
  const handleKeyPress = (value) => setState(execute([...state], value.key));
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  return (
    <Box
      sx={{
        height: dimension,
        width: dimension,
        backgroundColor: "#C2C2C2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        borderRadius: radius,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box sx={squareSX(state[0][0])}>
          <Typography sx={fontSX}>{state[0][0]}</Typography>
        </Box>
        <Box sx={squareSX(state[0][1])}>
          <Typography sx={fontSX}>{state[0][1]}</Typography>
        </Box>
        <Box sx={squareSX(state[0][2])}>
          <Typography sx={fontSX}>{state[0][2]}</Typography>
        </Box>
        <Box sx={squareSX(state[0][3])}>
          <Typography sx={fontSX}>{state[0][3]}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box sx={squareSX(state[1][0])}>
          <Typography sx={fontSX}>{state[1][0]}</Typography>
        </Box>
        <Box sx={squareSX(state[1][1])}>
          <Typography sx={fontSX}>{state[1][1]}</Typography>
        </Box>
        <Box sx={squareSX(state[1][2])}>
          <Typography sx={fontSX}>{state[1][2]}</Typography>
        </Box>
        <Box sx={squareSX(state[1][3])}>
          <Typography sx={fontSX}>{state[1][3]}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box sx={squareSX(state[2][0])}>
          <Typography sx={fontSX}>{state[2][0]}</Typography>
        </Box>
        <Box sx={squareSX(state[2][1])}>
          <Typography sx={fontSX}>{state[2][1]}</Typography>
        </Box>
        <Box sx={squareSX(state[2][2])}>
          <Typography sx={fontSX}>{state[2][2]}</Typography>
        </Box>
        <Box sx={squareSX(state[2][3])}>
          <Typography sx={fontSX}>{state[2][3]}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box sx={squareSX(state[3][0])}>
          <Typography sx={fontSX}>{state[3][0]}</Typography>
        </Box>
        <Box sx={squareSX(state[3][1])}>
          <Typography sx={fontSX}>{state[3][1]}</Typography>
        </Box>
        <Box sx={squareSX(state[3][2])}>
          <Typography sx={fontSX}>{state[3][2]}</Typography>
        </Box>
        <Box sx={squareSX(state[3][3])}>
          <Typography sx={fontSX}>{state[3][3]}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Grid;
