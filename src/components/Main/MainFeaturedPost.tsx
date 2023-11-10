import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "../Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Zoom } from "react-awesome-reveal";



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


interface MainFeaturedPostProps {
  post: {
    description: string;
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          padding: "10% 20% 0",
          overflow: "hidden", // Add this to hide the overflowing wave
        }}
      >


        {/* Add your content */}
        <Typography className="animate__animated animate__fadeInLeft" variant="h1" component="h2"
          sx={{
            fontFamily: "Manjari, sans-serif",
            fontSize: 55,
            fontWeight: 600,
            color: "#fff",
            zIndex: 1, // Ensure the content is on top
          }}
        >
          Welcome to the <span className="banner-text-grd animate__animated animate__swing animate__infinite-3"> Developer’s</span> Playground
        </Typography>
        {/* Add your content */}

        <Typography variant="subtitle1"
          sx={{
            fontFamily: "Manjari, sans-serif",
            fontSize: 18,
            fontWeight: 400,
            color: "#EBEBEB",
            padding: "10px 15%",
            zIndex: 1, // Ensure the content is on top
          }}
        >
        Join us in shaping the future of technology and design. Together, let's build experiences that resonate, inspire, and leave a lasting impact. Welcome to the world of endless possibilities.
        </Typography>

        <Button variant="outlined" className="btn-theme">
          All Showcase
        </Button>
        {/* <div className="btn-center">
        <a href="#learnSection" className="btn-down" id="learnSection">
          <KeyboardArrowDownIcon />
        </a>
      </div> */}

        {/* Add your content */}
        <Typography className="animate__animated animate__fadeInUp sub-title-banner" variant="h1" component="h2"
          sx={{
            fontFamily: "Manjari, sans-serif",
            fontSize: 20,
            fontWeight: 600,
            color: "#fff",
            textTransform: "uppercase",
            marginTop: "80px",
            zIndex: 1, // Ensure the content is on top
          }}
        >
          Developer with  <span className="banner-text-grd"> MayBank</span>
        </Typography>
        {/* Add your content */}
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          padding: "0 25% 0",
          overflow: "hidden", // Add this to hide the overflowing wave
        }}
      >
        <Carousel
          arrows={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={7000}
          className="custom-carousel"

        >
          
<Zoom triggerOnce={true}> 
          <div className="grid-carsoule animate__animated animate__fadeInUp">
            <a href="/">Backstage</a>
          </div>
          </Zoom>
          <Zoom triggerOnce={true}>
          <div className="grid-carsoule animate__animated animate__fadeInUp">
            <a href="/">mGauge</a>
          </div>
          </Zoom>
          
          <Zoom triggerOnce={true}>
          <div className="grid-carsoule animate__animated animate__fadeInUp">
            <a href="/">M-Pulse</a>
          </div>
          </Zoom>
          <Zoom triggerOnce={true}>
          <div className="grid-carsoule animate__animated animate__fadeInUp">
            <a href="/">Low Code</a>
          </div>
          </Zoom>
        </Carousel>;
      </Box>

    </Box>
  );
}
