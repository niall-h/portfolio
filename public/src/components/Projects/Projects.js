import React from "react";
import NavBar from "../Home/NavBar/NavBar";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
  Container,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import gameAI from "./2048.jpg";
import portfolio from "./portfolio.png";
import sandiegozooseeker from "./sandiegozoo.jpg";
import surfstore from "./surfstore.jpg";

const projectList = {
  "San Diego ZooSeeker": {
    image: sandiegozooseeker,
    shortDescription:
      "A companion app for the San Diego Zoo that lets you select different exhibits and plan a customized itinerary for your trip.",
    github: "https://github.com/niall-h/san-diego-zooseeker",
  },
  SurfStore: {
    image: surfstore,
    shortDescription:
      "A cloud-based file storage service like Dropbox that lets multiple clients concurrently connect and sync files to and from the cloud",
    github: "https://github.com/niall-h/surfstore",
  },
  Portfolio: {
    image: portfolio,
    shortDescription:
      "This is my web portfolio and you're looking at it right now! This web application is built using React, MaterialUI and some custom CSS.",
    github: "https://github.com/niall-h/portfolio-website",
  },
  "2048 AI": {
    image: gameAI,
    shortDescription:
      "An AI that plays the famous game, 2048, better than me. But then, I'm also too lazy to think 3 steps ahead when I play.",
    github: "https://github.com/niall-h/2048ai",
  },
};

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ProjectCard = ({ name, img, shortDescription, github }) => {
  return (
    <Box
      sx={{
        transitionDuration: "0.5s",
        "&:hover": {
          boxShadow: "-20px 20px #cdcdcd",
          transitionDuration: "0.5s",
        },
      }}
    >
      <Card>
        <CardMedia component="img" height="300" image={img} alt="project" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={github} size="medium" color="primary">
            More Info
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default function Projects() {
  return (
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="center">
        <NavBar />
        <Box width="80vw" sx={{ mt: { xs: 20, md: 20 }, mb: 5 }}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3" align="center">
              Projects
            </Typography>
          </ThemeProvider>
          <Box height={50}></Box>
          <Grid container direction="row" alignItems="stretch" spacing={5}>
            {Object.keys(projectList).map((projectName) => {
              return (
                <Grid key={projectName} item md={4}>
                  <ProjectCard
                    name={projectName}
                    img={projectList[projectName].image}
                    shortDescription={projectList[projectName].shortDescription}
                    github={projectList[projectName].github}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
