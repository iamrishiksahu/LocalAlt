import React, { useState } from "react";
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
                sx={{ 
                    margin: {md: '4rem', xs: '1rem', sm: '1rem'}
                }}
            >
                <Outlet />
            </Box>
        </Box >
    )
};

export default HomePage;
