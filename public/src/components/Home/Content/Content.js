import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
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
  indeed: {
    fontWeight: 400,
    color: "#2164f4",
  },
  brigeBurma: {
    fontWeight: 400,
    color: "#e28743",
  },
}));

export default function Content() {
  const { indeed, bridgeBurma, portrait, title, text } = useStyles();

  return (
    <Box height="90vh" marginTop="10vh" display="flex" alignItems="center">
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
              I'm an aspiring software engineer based in San Diego, CA. I'm a
              senior studying Computer Science at
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
              I love writing meaningful software and applications that go out to
              the real world and make an impact on people's lives. I'm
              previously interned for{" "}
              <a
                className={indeed}
                href="https://www.indeed.com/about?hl=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Indeed
              </a>{" "}
              as a UX Developer and{" "}
              <a
                className={bridgeBurma}
                href="https://www.bridgeburma.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                BridgeBurma
              </a>{" "}
              as a Full-Stack Software Engineer.
            </h2>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
