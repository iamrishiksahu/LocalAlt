import React from 'react';
import { Card, CardContent, Typography, Button, styled, Box, Grid } from '@mui/material';

const VHomePage = () => {
  const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-around;
    padding: 5%;
    height: 300px;
  `;

  const StyledCard = styled(Card)`
  width: 45%;
  height: 100%; /* Set the height to 100% */
  display: flex;
  flex-direction: column;
  `;

  return (
    <StyledBox>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Manage SHOP</Typography>

          <Button variant="contained" color="primary" fullWidth>
            Shop
          </Button>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Manage PRODUCTS</Typography>

          <Button variant="contained" color="primary" fullWidth>
            Products
          </Button>
        </CardContent>
      </StyledCard>
    </StyledBox >
  );
};

export default VHomePage;
