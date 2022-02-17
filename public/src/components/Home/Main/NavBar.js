import React from "react";
// import styles from "./Main.module.css";
import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
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
        backgroundColor: "transparent",
        height: "100px",
        lineHeight: "100px",
    },
    logoButton: {
        width: "20vw",
        height: "100%",
        "&:hover": {
            backgroundColor: "transparent",
        },
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
                        component: RouterLink,
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
                <Button disableRipple className={logoButton} href="/home">
                    <img className={logo} src={Logo} alt="logo"></img>
                </Button>
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    return (
        <header>
            <AppBar className={header} position="relative">
                {displayDesktop()}
            </AppBar>
        </header>
    );
};

export default NavBar;
