import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <Box style={{
            margin: 0,
            padding: 0,
        }}>
            <Header />
            <Box
                style={{ margin: '4rem' }}
            >
                <Outlet  />
            </Box>
        </Box >
    )
};

export default HomePage;
