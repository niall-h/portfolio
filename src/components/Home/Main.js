import React from "react";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import { Box } from "@material-ui/core";

const Main = () => {
  return (
    <Box sx={{ width: "100vw", height: "90vh" }}>
      <NavBar />
      <Content />
    </Box>
  );
};

export default Main;
