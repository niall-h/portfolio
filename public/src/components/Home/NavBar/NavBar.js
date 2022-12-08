import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import Logo from "./logo.png";

const data = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  // {
  //   label: "Contact",
  //   href: "/contact",
  // },
  {
    label: "My Story",
    href: "/my-story",
  },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box mb={10}>
      <AppBar position="fixed" color="white">
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                height: 80,
                my: 0,
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton size="large" onClick={handleOpen} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  display: { xs: "block", md: "none" },
                  width: "100vw",
                }}
              >
                <Box width="100vw">
                  {data.map((item) => (
                    <MenuItem key={item} component={NavLink} to={item.href}>
                      <Typography textAlign="center">{item.label}</Typography>
                    </MenuItem>
                  ))}
                </Box>
              </Menu>
            </Box>
            <Button disableRipple component={Link} to="/home">
              <Avatar
                variant="square"
                src={Logo}
                alt="logo"
                style={{ height: 70, width: 70 }}
              ></Avatar>
            </Button>
            <Box
              sx={{
                my: 4,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
              }}
            >
              {data.map((item) => (
                <Box mx={3}>
                  <Button
                    {...{
                      key: item.label,
                      to: item.href,
                      component: NavLink,
                    }}
                  >
                    <Typography variant="body1">{item.label}</Typography>
                  </Button>
                </Box>
              ))}
              {/* ------------------------------------------------------ */}
              {/* To delete when contact form is finished */}
              <Box mx={3}>
                <Button
                  {...{
                    key: "contact",
                    href: "mailto:niallhtet@gmail.com",
                  }}
                >
                  <Typography variant="body1">Contact</Typography>
                </Button>
              </Box>
              {/* ------------------------------------------------------ */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
