import React from "react";
import Header from "../components/Header";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Box
        style={{ margin: '4rem' }}
      >
        <Typography variant="h3">Products</Typography>
      </Box>
    </Box >
  )
};

export default HomePage;
