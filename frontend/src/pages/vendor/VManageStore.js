import React from 'react'
import VHeader from './VHeader'
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import {Container,Grid,TextField,Button,Box,Typography,Input} from "@mui/material";
import { Link } from "react-router-dom";
import MyLocationIcon from '@mui/icons-material/MyLocation';
//import { getPlaceNameWithLatLong } from '../api/mapApis';

const VManageStore = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    const postData = {
      store_name: data.get("store_name"),
      address: data.get("address"),
      store_owner: data.get("store_owner"),
      uid: data.get("uid"),
      city: data.get("city"),
      locality: data.get("locality"),
      longitude: data.get('longitude'),
      latitude: data.get('latitude'),
      contact: data.get('contact'),
    };

    <IconButton
      color="primary"
      aria-label="Detect Location"
      // onClick={handleDetectLocation}
    >
      <MyLocationIcon />
    </IconButton>

    console.log(postData);

    //await addStore(postData);
  };

  return (
    <div>
      <Container component="main" maxWidth="sm">

<Box
  sx={{
    boxShadow: 3,
    borderRadius: 2,
    px: 4,
    py: 6,
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <Typography component="h1" variant="h5">
    Manage Store Details
  </Typography>
  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>


  <TextField
  margin="normal"
  required
  fullWidth
  id="store_name"
  label="Store Name"
  name="store_name"
  autoFocus
/>

<TextField
  margin="normal"
  required
  fullWidth
  id="address"
  label="Address"
  name="address"
/>

<TextField
  margin="normal"
  required
  fullWidth
  id="store_owner"
  label="Store Owner"
  name="store_owner"
/>

<TextField
  margin="normal"
  required
  fullWidth
  id="city"
  label="City"
  name="city"
/>

<TextField
  margin="normal"
  required
  fullWidth
  id="locality"
  label="Locality"
  name="locality"
/>

<TextField
  margin="normal"
  required
  fullWidth
  id="contact"
  label="Contact"
  name="contact"
/>
<TextField
  margin="normal"
  required
  sx={{width: "43%", marginRight: "2%"}}
  id="latitude"
  label="Latitude"
  name="latitude"
/>
<TextField
  margin="normal"
  required
  sx={{width: "43%"}}
  id="longitude"
  label="Longitude"
  name="longitude"
/>
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 3, mb: 2 }}
    >
      Update Store Details
    </Button>
  </Box>
</Box>
</Container>
    </div>
  )
}

export default VManageStore