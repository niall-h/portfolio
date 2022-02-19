import React from "react";
import { Button, Box, Grid, makeStyles } from "@material-ui/core";
import Portrait from "./portrait.jpg";

const useStyles = makeStyles(() => ({
  portrait: {
    display: "block",
    height: "50vh",
    width: "50%",
    maxWidth: "500px",
    objectFit: "cover",
    border: "2px solid black",
    boxShadow: "-20px 20px 50px black",
    transitionDuration: "0.5s",
    "&:hover": {
      width: "51%",
      transitionDuration: "0.5s",
    },
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 700,
    fontSize: 50,
    color: "black",
  },
  text: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: 1.7,
    textAlign: "left",
  },
  bridgeBurma: {
    fontWeight: 400,
    color: "#A25522",
  },
}));

export default function Content() {
  const { container, bridgeBurma, portrait, title, text } = useStyles();

  return (
    <Box
      className={container}
      height="90vh"
      marginTop="10vh"
      display="flex"
      alignItems="center"
    >
      <Grid container spacing={2}>
        <Grid
          item
          container
          direction="row"
          display="flex"
          justify="center"
          alignItems="center"
          md={5}
        >
          <img src={Portrait} alt="portrait" className={portrait}></img>
        </Grid>
        <Grid
          item
          container
          direction="row"
          display="flex"
          justify="center"
          alignItems="center"
          md={6}
        >
          <Box>
            <h1 className={title}>Hello, I'm Nyan Min Htet!</h1>
            <h2 className={text}>
              I'm an aspiring software engineer based in San Diego, CA. I'm
              currently a junior studying Computer Science at
              <span
                className={text}
                style={{ fontWeight: 500, color: "#1B69CE" }}
              >
                {" "}
                University of California, San Diego
              </span>
              .
            </h2>
            <h2 className={text}>
              I specialize in front-end web development which includes working
              with HTML, CSS, and Javascript , along with frameworks like
              ReactJS and MaterialUI. I'm also currently working at{" "}
              <a
                className={bridgeBurma}
                href="https://www.bridgeburma.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Bridge Burma
              </a>{" "}
              as a Software Engineer Intern.
            </h2>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
