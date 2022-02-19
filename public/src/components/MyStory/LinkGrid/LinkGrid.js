import React from "react";
import { styled, Box, ButtonBase, Typography } from "@material-ui/core";
import contactImage from "./contact.jpg";
import homeImage from "./home.jpg";
import projectsImage from "./projects.jpg";
import { Link } from "react-router-dom";

const images = [
  {
    url: homeImage,
    title: "Home",
    width: "25%",
    href: "/home",
  },
  {
    url: projectsImage,
    title: "Projects",
    width: "25%",
    href: "/projects",
  },
  {
    url: contactImage,
    title: "Contact Me",
    width: "25%",
    href: "/contact",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 500,
  [theme.breakpoints.down("sm")]: {
    width: "60% !important", // Overrides inline-style
    height: 300,
    margin: "20px 0",
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "none",
    },
    "& .MuiText": {
      backgroundColor: "grey",
      borderRadius: "20px",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  borderRadius: "20px",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.3,
  transition: theme.transitions.create("opacity"),
  borderRadius: "20px",
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: "43%",
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
  borderRadius: "20px",
}));

export default function LinkGrid() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "white",
        width: "100%",
        height: "100vh",
        backgroundImage: "linear-gradient(rgb(129, 196, 202), white)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "80%",
          justifyContent: "space-evenly",
          margin: "auto",
        }}
      >
        {images.map((image) => (
          <ImageButton
            component={Link}
            focusRipple
            key={image.title}
            style={{
              width: image.width,
              borderRadius: "20px",
              boxShadow: "-20px 10px 40px black",
            }}
            to={image.href}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                className="MuiText"
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                <div
                  style={{
                    fontSize: "25px",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  {image.title}
                </div>
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </Box>
  );
}
