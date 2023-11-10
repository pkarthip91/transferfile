import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <AppBar
      sx={{
        top: "auto",
        bottom: 0,
        background: "rgb(254,199,0)",
        zIndex: 2,
      }}
    >
      <Toolbar>
        <Typography
          variant="body2"
          color="black"
          align="center"
          sx={{ flexGrow: 1 }}
        >
          &copy; {new Date().getFullYear()} Maybank
        </Typography>
        <Link variant="body2" color="inherit" href="#"></Link>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
