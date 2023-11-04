import React from 'react';
import { Card, CardContent, Typography, Button, styled, Box, Grid, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
const VHomePage = () => {
  const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-around;
    padding: 5%;
    height: 300px;
  `;

  const StyledCard = styled(Card)`
  width: 45%;
  display: flex;
  flex-direction: column;
  `;

  const theme = useTheme();
  return (
    <StyledBox>
      <StyledCard
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.main,
        }}>
        <CardContent>
          <Typography variant="h6">Manage SHOP</Typography>

          <Link to="/vendor/manage-store" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" fullWidth>
              Shop
            </Button>
          </Link>
        </CardContent>
      </StyledCard>
      <StyledCard
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.main,
        }}>
        <CardContent>
          <Typography variant="h6">Manage PRODUCTS</Typography>

          <Link to="/vendor/manage-products" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" fullWidth>
              Products
            </Button>
          </Link>
        </CardContent>
      </StyledCard>
    </StyledBox >
  );
};

export default VHomePage;
