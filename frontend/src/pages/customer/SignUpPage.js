import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  FormControl, FormControlLabel, Checkbox, FormLabel, Radio, RadioGroup
} from "@mui/material";
import { Link } from "react-router-dom";
import { addUser } from "../../api/userApi";



const SignUpPage = () => {

  //role button
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    // console.log(selectedValue);
  };

  //submit button
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const postData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      role: selectedValue,
      contact: data.get("phone"),
      locality: data.get("location"),
      longitude: "",
      latitude: "",
      address: {
        address_line_1: '',
        address_line_2: '',
        city: '',
        pincode: '',
      },
    };

    // console.log(postData);

    try {
      await addUser(postData);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert('User already exists');
      } else {
        alert('An error occurred: ' + err.message);
      }
    }
  };

  return (
    <Box component="main" >
      <Box sx={{
        height: 'max-content',
        display: 'grid',
        gap: '2rem',
        backgroundColor: `linear-gradient(135deg, blue, red)`,
        gridTemplateColumns: { md: '1fr 1fr', xs: '1fr' }
      }}>


        <Box sx={{
          padding: { md: '8rem 0 0 8rem', sm: '1rem', xs: '1rem' }
        }}>

          <Typography variant="h4" align="left">LocalAlt</Typography>
          <Typography variant="body1" align="left" width={'50%'} mt={'1rem'} mb={'1rem'}>LocalAlt - A platform to make products in your local shops and outlets visible to you online!</Typography>
          <img width={'450px'} src="/images/login-hero.png" alt="login hero" />
        </Box>


        <Box
          sx={{
            boxShadow: { md: '0 0 4rem 0 #00000020', xs: '0 0 5rem #00000020' },
            borderRadius: 2,
            height: 'max-content',
            backgroundColor: '#fff',
            px: 4,
            py: 6,
            width: { md: '60%', sm: '100%' },
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="body1" sx={{ fontSize: '30px' }}>
            Sign up
          </Typography>

          <FormControl component="fieldset" sx={{ display: "flow", mt: '1rem' }}

          >
            <FormControlLabel
              control={<Checkbox checked={selectedValue === "0"} onChange={handleChange} value="0" />}
              label="Customer"
            />
            <FormControlLabel
              control={<Checkbox checked={selectedValue === "1"} onChange={handleChange} value="1" />}
              label="Vendor"
            />
          </FormControl>




          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="cpassword"
            />

            <Box sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>

              <TextField
                margin="normal"
                required
                fullWidth
                name="locality"
                label="Locality"
                type="string"
                id="locality"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Contact Number"
                type="number"
                id="phone"

              />

            </Box>



            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>


            <Link className="link-text" to="/login" variant="body2">
              <Typography align="center" mt={'2rem'}> Already Registerd ?</Typography>
            </Link>

          </Box>
        </Box>

      </Box>

    </Box >
  );
};

export default SignUpPage;
