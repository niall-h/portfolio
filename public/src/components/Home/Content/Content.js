import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  Box,
  Grid,
  makeStyles,
  Typography,
  Link,
  ThemeProvider,
  Container,
} from "@material-ui/core";
import Portrait from "./portrait2.jpeg";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
  portrait: {
    display: "block",
    height: "50vh",
    width: "80%",
    maxWidth: "500px",
    objectFit: "cover",
    transitionDuration: "0.5s",
    "&:hover": {
      boxShadow: "-20px 20px #cdcdcd",
      transitionDuration: "0.5s",
    },
  },
}));

export default function Content() {
  const { portrait, title, text } = useStyles();

  return (
    <Container maxWidth="xl">
      <Box
        sx={{ mt: 10, height: { xs: "65rem", md: "90vh" } }}
        display="flex"
        alignItems="center"
      >
        <Grid container spacing={2}>
          <Grid item container direction="row" display="flex" md={1}></Grid>
          <Grid
            item
            container
            direction="row"
            display="flex"
            justify="center"
            md={4}
          >
            <Box display="flex" justifyContent="center" mb={{ xs: 4, md: 0 }}>
              <img src={Portrait} alt="portrait" className={portrait}></img>
            </Box>
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
            <Box mx={5}>
              <ThemeProvider theme={theme}>
                <Typography variant="h2">Hello, I'm Nyan Min Htet!</Typography>
                <br></br>
                <Typography variant="h6">
                  I'm an aspiring software engineer based in San Diego, CA. I'm
                  a senior studying Computer Science at University of
                  California, San Diego.
                </Typography>
                <br></br>
                <Typography variant="h6">
                  I love writing meaningful software and applications that go
                  out to the real world and make an impact on people's lives.
                  I've previously interned for{" "}
                  <Link
                    href="https://www.indeed.com/about?hl=en"
                    underline="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"Indeed"}
                  </Link>{" "}
                  as a UX Developer and{" "}
                  <Link
                    href="https://www.bridgeburma.com/"
                    underline="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"BridgeBurma"}
                  </Link>{" "}
                  as a Full-Stack Software Engineer.
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
          <Grid item container direction="row" display="flex" md={1}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}
