import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./MainFeaturedPost";

const mainFeaturedPost = {
  title: "React-NodeJs-MSSQL Template",
  description:
    "Start your next project on the right foot with our React-NodeJs-MSSQL Starter Kit today, and watch your development process accelerate like never before!",
};

const defaultTheme = createTheme();

export default function MainPost() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
          height: { xs: "550px", md: "950px" },
        }}
      >
        <MainFeaturedPost post={mainFeaturedPost} />
      </Container>
    </ThemeProvider>
  );
}
