import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../Typography";

function ShowcaseContent() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        bgcolor: "#F0F1F2",
        height: 800,
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: 55,
            mb: { xs: 5, md: 10 },
            color: "#000000",
            fontFamily: "Lexend, sans-serif",
            border: "8px solid black",
            padding: 10,
            textShadow: "2px 2px 0px rgb(254,199,0)",
          }}
        >
          Coming Soon ...
        </Typography>
        <div>
          <Typography
            sx={{
              fontSize: 30,
              mb: 14,
              color: "#000000",
              fontFamily: "Lexend, sans-serif",
              width: "100%",
            }}
          >
            Get ready! Something really cool is coming!
          </Typography>

          {/* <Button
            style={{
              backgroundColor: "rgb(254,199,0)",
              color: "black",
              borderRadius: 30,
            }}
            size="large"
            variant="contained"
            component="a"
            href="https://github.maybank.com/MSS-DB/web-form-app/blob/main/README.md"
            sx={{ mt: { xs: "5px", md: 8 } }}
          >
            Get Started
          </Button> */}
        </div>
      </Container>
    </Box>
  );
}

export default ShowcaseContent;
