import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "../Button";
import Typography from "../Typography";
import Grid from "@mui/material/Unstable_Grid2";
import NewsOne from "../../assets/img/main/news1.png";
import NewsTwo from "../../assets/img/main/news2.png";
import NewsThree from "../../assets/img/main/news3.png";
import { Zoom } from "react-awesome-reveal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#000000",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

function LatestNews() {

  // const handleDeveloperPortalClick = () => {
  //   window.open(process.env.REACT_APP_DEVELOPER_PORTAL_URL, "_blank");
  // };

  const handleMgaugeClick = () => {
    window.open(process.env.REACT_APP_MGAUGE_URL, "_blank");
  };

  // const handleMpulseClick = () => {
  //   window.open(process.env.REACT_APP_MPULSE_URL, "_blank");
  // };

  return (
    <Box className="guidlines-section-main"
      component="section"
      sx={{
        display: "flex",
        bgcolor: "#000000",
        height: "100%",
        pb: 12,
      }}
    >


      <Container maxWidth="xl">

        <div className="guidlines-section news-section">
          <Grid alignItems="center" xs={12}>
            <Item
              style={{
                height: "100%",
              }}
            >
              <Zoom triggerOnce={true}>
              <div className="text-center">
                {/* Add your content */}
                <Typography className="animate__animated animate__pulse" variant="h1" component="h2"
                  sx={{
                    fontFamily: "Manjari, sans-serif",
                    fontSize: 40,
                    fontWeight: 600,
                    color: "#fff",
                    zIndex: 1, // Ensure the content is on top
                  }}
                >
                  Latest <span className="banner-text-grd"> News</span>
                </Typography>
              </div>
              </Zoom>
            </Item>
          </Grid>


          {/* Grid */}
          <Grid
            container
            spacing={7}
            columns={{ xs: 4, md: 12 }}
            justifyContent="center"
            style={{ height: "100%" }}
          >
            <Grid xs={12}>
              <Item
                style={{
                  height: "100%",
                }}
              >
                <div className="box-grid text-white">
                  <Grid
                    container
                    spacing={2}
                    columns={{ xs: 4, md: 12 }}
                  >

                    <Grid className="grid-custom" md={4}>
                    <Zoom triggerOnce={true}>
                      <div className="grid-column">
                        <div className="box-grid-img">
                          <img src={NewsOne} loading="lazy" alt="news" />
                        </div>
                        <div className="box-grid-content">
                          <span>15/10/2023</span>
                          <h4>5 technology trends that are redefining</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                          <a href="/">Read more</a>
                        </div>
                      </div>
                      </Zoom>
                    </Grid>

                    <Grid className="grid-custom" md={4}>
                    <Zoom triggerOnce={true}>
                      <div className="grid-column">
                        <div className="box-grid-img">
                          <img src={NewsTwo} loading="lazy" alt="news" />
                        </div>
                        <div className="box-grid-content">
                          <span>15/10/2023</span>
                          <h4>5 technology trends that are redefining</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                          <a href="/">Read more</a>
                        </div>
                      </div>
                      </Zoom>
                    </Grid>

                    <Grid className="grid-custom" md={4}>
                    <Zoom triggerOnce={true}>
                      <div className="grid-column">
                        <div className="box-grid-img">
                          <img src={NewsThree} loading="lazy" alt="news" />
                        </div>
                        <div className="box-grid-content">
                          <span>15/10/2023</span>
                          <h4>5 technology trends that are redefining</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                          <a href="/">Read more</a>
                        </div>
                      </div>
                      </Zoom>
                    </Grid>
                  </Grid>
                </div>
              </Item>

              <Button variant="outlined" className="btn-theme"
                    size="medium"
                    component="a"
                    key="developerPortal"
                    onClick={handleMgaugeClick}
                  >
                    More News
                  </Button>

            </Grid>


          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default LatestNews;
