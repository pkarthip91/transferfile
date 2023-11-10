import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import mb from "../../assets/img/logo/apple-touch-icon.png";
import { Button, Drawer, IconButton, List, Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function TopBar(props: Props) {
  const { window } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const menuOptions: string[] = ["Home", "Showcase", "Learn", "News", "Tools"];
  const drawerWidth = 240;

  const handleDeveloperPortalClick = () => {
   // window.open(process.env.REACT_APP_DEVELOPER_PORTAL_URL, "_blank");
    handleClose();
  };

  const handleMgaugeClick = () => {
   // window.open(process.env.REACT_APP_MGAUGE_URL, "_blank");
    handleClose();
  };

  const handleMpulseClick = () => {
   // window.open(process.env.REACT_APP_MPULSE_URL, "_blank");
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      {/* <Avatar
            sx={{
              marginLeft: "auto",
              marginRight: "10px",
              borderRadius: "0",
              width: "40px",
              height: "40px",
              textAlign: 'right'
            }}
            alt="Maybank Logo"
            src={mb}
          />
      <Divider /> */}
      <List>
      {menuOptions.map((option, index) => (
            <div className="main-menu" key={index}>
              {option === "Home" ? (
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button className="menu-item">
                    {option}
                  </Button>
                </Link>
              ) : option === "Showcase" ? (
                <Link to="/showcase" style={{ textDecoration: "none" }}>
                  <Button className="menu-item">
                    {option}
                  </Button>
                </Link>
              ) : option === "Learn" ? (
                <Link to="/learn" style={{ textDecoration: "none" }}>
                  <Button className="menu-item">
                    {option}
                  </Button>
                </Link>
              ) : option === "News" ? (
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <Button className="menu-item">
                    {option}
                  </Button>
                </Link>
              ) : (
                <Button className="menu-item"
                  aria-controls={`menu-${index}`}
                  aria-haspopup="true"
                  onClick={(event) => {
                    setAnchorEl(event.currentTarget);
                    setActiveMenu(option);
                  }}
                >
                  {option}
                </Button>
              )}

              <Menu
                id={`menu-${index}`}
                anchorEl={anchorEl}
                open={activeMenu === option}
                onClose={handleClose}
              >
                <div style={{ padding: 5 }}>
                  {option === "Tools"
                    ? [
                        <MenuItem
                          sx={{
                            fontSize: 13,
                            fontFamily: "Manjari, sans-serif",
                          }}
                          key="developerPortal"
                          onClick={handleDeveloperPortalClick}
                        >
                          Developer portal
                        </MenuItem>,
                        <MenuItem
                          sx={{
                            fontSize: 13,
                            fontFamily: "Manjari, sans-serif",
                          }}
                          key="mgauge"
                          onClick={handleMgaugeClick}
                        >
                          mGauge
                        </MenuItem>,
                        <MenuItem
                          sx={{
                            fontSize: 13,
                            fontFamily: "Manjari, sans-serif",
                          }}
                          key="mpulse"
                          onClick={handleMpulseClick}
                        >
                          mPulse
                        </MenuItem>,
                      ]
                    : []}{" "}
                </div>
              </Menu>
            </div>
          ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  

  return (
    <AppBar component="nav">
    <AppBar
    className="shadow-none header-sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="header-border">
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            sx={{
              marginLeft: "auto",
              marginRight: "10px",
              borderRadius: "0",
              width: "40px",
              height: "40px",
              textAlign: "right"
            }}
            alt="Maybank Logo"
            src={mb}
          />
          <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography
              sx={{
                ml: 0.5,
                fontSize: 22,
                height: "100%",
                mt: "7px",
                mb: "auto",
                display: { xs: "none", md: "flex" },
                fontFamily: "Manjari, sans-serif",
                fontWeight: 700,
                color: "#fff",
                textDecoration: "none",
                lineHeight: 1
              }}
            >
              Developers Maybank
            </Typography>
          </Link>
          
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {menuOptions.map((option, index) => (
            <div className="main-menu" key={index}>
              {option === "Home" ? (
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button className="menu-item">
                    {option}
                  </Button>
                </Link>
              ) : option === "Showcase" ? (
                <Link to="/showcase" style={{ textDecoration: "none" }}>
                  <Button className="menu-item">
                    {option}
                  </Button>
                </Link>
              ) : option === "Learn" ? (
                <Link to="/learn" style={{ textDecoration: "none" }}>
                  <Button className="menu-item">
                    {option}
                  </Button>
                </Link>
              ) : option === "News" ? (
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <Button className="menu-item">
                    {option}
                  </Button>
                </Link>
              ) : (
                <Button className="menu-item"
                  aria-controls={`menu-${index}`}
                  aria-haspopup="true"
                  onClick={(event) => {
                    setAnchorEl(event.currentTarget);
                    setActiveMenu(option);
                  }}
                >
                  {option}
                </Button>
              )}

              <Menu
                id={`menu-${index}`}
                anchorEl={anchorEl}
                open={activeMenu === option}
                onClose={handleClose}
              >
                <div style={{ padding: 5 }}>
                  {option === "Tools"
                    ? [
                        <MenuItem
                          sx={{
                            fontSize: 13,
                            fontFamily: "Manjari, sans-serif",
                          }}
                          key="developerPortal"
                          onClick={handleDeveloperPortalClick}
                        >
                          Developer portal
                        </MenuItem>,
                        <MenuItem
                          sx={{
                            fontSize: 13,
                            fontFamily: "Manjari, sans-serif",
                          }}
                          key="mgauge"
                          onClick={handleMgaugeClick}
                        >
                          mGauge
                        </MenuItem>,
                        <MenuItem
                          sx={{
                            fontSize: 13,
                            fontFamily: "Manjari, sans-serif",
                          }}
                          key="mpulse"
                          onClick={handleMpulseClick}
                        >
                          mPulse
                        </MenuItem>,
                      ]
                    : []}{" "}
                </div>
              </Menu>
            </div>
          ))}
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
            
    </AppBar>
  );
}
export default TopBar;
