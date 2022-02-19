import React from "react";
// import styles from "./Main.module.css";
import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import Logo from "./logo-name.png";

const data = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "My Story",
    href: "/my-story",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
    height: "10vh",
    lineHeight: "100px",
    zIndex: "1000",
  },
  logoButton: {
    width: "300px",
    height: "100%",
    background: "none !important",
  },
  logo: {
    position: "relative",
    width: "100%",
  },
  menuButton: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "normal",
    fontSize: "18px",
    marginLeft: "40px",
  },
  toolbar: {
    margin: "0 5vw",
    display: "flexbox",
    justifyContent: "space-between",
    zIndex: "1000",
  },
}));

const NavBar = () => {
  const { header, logoButton, logo, menuButton, toolbar } = useStyles();

  const getMenuButtons = () => {
    return data.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "black",
            to: href,
            component: NavLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Button
          disableRipple
          component={Link}
          className={logoButton}
          to="/home"
        >
          <img className={logo} src={Logo} alt="logo"></img>
        </Button>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};

export default NavBar;
