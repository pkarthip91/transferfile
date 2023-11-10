import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import CurvyLine from "../../assets/img/productCurvyLines.png";
import wave from "../../assets/img/svg/wave_white.svg";

const defaultTheme = createTheme();

const NewsMain = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{ width: "100%", height: "950px", backgroundColor: "#000000" }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden", // Add this to hide the overflowing wave
          }}
        >
          {/* Add the SVG wave here */}
          <img
            src={wave}
            alt="wave"
            style={{
              width: "100%",
              height: "auto",
              position: "absolute",
              bottom: 0, // Position at the bottom
              left: 0,
              zIndex: 99,
            }}
          />

          {/* Add the curved lines background */}
          <img
            src={CurvyLine}
            alt="curvy lines"
            style={{
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.7,
            }}
          />

          {/* Add your content */}
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: 55,
              fontWeight: 600,
              color: "#fff",
              padding: "20%",
              zIndex: 1, // Ensure the content is on top
            }}
          >
            News Page
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default NewsMain;
