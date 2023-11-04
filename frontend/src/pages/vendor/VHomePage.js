import React from 'react';
import { Card, CardContent, Typography, Button, styled, Box, Grid, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import VHeader from './VHeader';
const VHomePage = () => {
  const StyledBox = styled(Box)`
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

    <Box  sx={{
      backgroundColor: '#F5FCFF',
      height: '100vh'
    }}>
      <VHeader title={'Home'} />

      <StyledBox sx={{
        display: 'grid',
        justifyContent: 'center',
        gap: '1rem',
        gridTemplateColumns: { md: '1fr 1fr', xs: '1fr' }
      }} >

        <Box sx={{
          width: '100%',
        }}>

          <StyledCard
            sx={{
              backgroundImage: "none",
              backgroundColor: theme.palette.background.main,
              borderRadius: '1rem',
              boxSizing: 'border-box',
              width: '100%',
              height: '232px',
              margin: 'auto',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding: '2rem',
              background: 'linear-gradient(248deg, #EB4CB6 -1.84%, #FF634D 106.47%)',
              boxShadow: '0px 4px 50px 1px #336aea20'
            }}>
            <Typography variant="h4" color={'white'}>My Shop</Typography>

            <Link to="/vendor/manage-store" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" sx={{
                color: theme.palette.primary.main, fontWeight: '600', boxShadow: '0 0 5rem #00000050', backgroundColor: 'white',
                '&:hover': {
                  color: '#ffffff',
                }
              }} fullWidth>
                Manage Shop
              </Button>
            </Link>
          </StyledCard>

        </Box>


        <Box sx={{
          width: '100%',
        }}>
          <StyledCard
            sx={{
              backgroundImage: "none",
              backgroundColor: theme.palette.background.main,
              borderRadius: '1rem',
              width: '100%',

              height: '232px',
              flexShrink: 0,
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding: '2rem',
              background: 'linear-gradient(248deg, #EB4CB6 -1.84%, #FF634D 106.47%)',
              boxShadow: '0px 4px 50px 1px #336aea20'
            }}>
            <Typography variant="h4" color={'white'}>Products</Typography>

            <Link to="/vendor/manage-products" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" sx={{
                color: theme.palette.primary.main, fontWeight: '600', boxShadow: '0 0 5rem #00000050', backgroundColor: 'white',
                '&:hover': {
                  color: '#ffffff',
                }
              }} fullWidth>
                Manage Products
              </Button>
            </Link>
          </StyledCard>
        </Box>

      </StyledBox >


    </Box >

  );
};

export default VHomePage;
