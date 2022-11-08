import React from "react";
import NavBar from "../Home/NavBar/NavBar";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Modal,
  Fade,
} from "@material-ui/core";
import gameAI from "./2048.jpg";
import portfolio from "./portfolio.png";
import sandiegozooseeker from "./sandiegozoo.jpg";

const projectList = {
  "San Diego ZooSeeker": {
    image: sandiegozooseeker,
    shortDescription:
      "Hi this is the project Description for san diego zooseeker.",
    longDescription:
      "Hi this is the project Description for san diego zooseeker. Hi this is the project Description for san diego zooseeker. Hi this is the project Description for san diego zooseeker.",
    github: "https://github.com/niall-h/san-diego-zooseeker",
  },
  "Portfolio Website": {
    image: portfolio,
    shortDescription:
      "Hi this is the project Description for portfolio website.",
    longDescription:
      "Hi this is the project Description for portfolio website. Hi this is the project Description for portfolio website. Hi this is the project Description for portfolio website.",
    github: "https://github.com/niall-h/portfolio-website",
  },
  "2048 AI Game Engine": {
    image: gameAI,
    shortDescription: "Hi this is the project Description for 2048 AI.",
    longDescription:
      "Hi this is the project Description for 2048 AI. Hi this is the project Description for 2048 AI. Hi this is the project Description for 2048 AI.",
    github: "https://github.com/niall-h/portfolio-website",
  },
};

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ProjectCard = ({ name, img, shortDescription, longDescription }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Card onClick={handleOpen} sx={{ width: 300, height: 300 }}>
        <CardActionArea>
          <CardMedia component="img" height="300" image={img} alt="project" />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {shortDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyles}>
            <img
              src={img}
              style={{
                height: "40%",
                width: "100%",
                objectFit: "cover",
              }}
              alt="project"
            />
            <Typography variant="h6" component="h2">
              {name}
            </Typography>
            <Typography sx={{ mt: 2 }}>{longDescription}</Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default function Projects() {
  return (
    <Box sx={{ width: "100vw", height: "90vh" }}>
      <NavBar />
      <Box
        width="80vw"
        height="90vh"
        marginTop="10vh"
        marginLeft="20vh"
        display="flex"
        alignItems="center"
      >
        <Grid container direction="row" alignItems="stretch" spacing={5}>
          {Object.keys(projectList).map((projectName) => {
            return (
              <Grid key={projectName} item md={4}>
                <ProjectCard
                  name={projectName}
                  img={projectList[projectName].image}
                  shortDescription={projectList[projectName].shortDescription}
                  longDescription={projectList[projectName].longDescription}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
