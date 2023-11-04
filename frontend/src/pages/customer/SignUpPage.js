import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Typography,

} from "@mui/material";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
      location: data.get("location"),
      phone: data.get("phone"),
    });
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

          {/* <Typography variant="h4" align="center">LocalAlt</Typography> */}
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
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="body1">
            Register
          </Typography>
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="location"
              label="Location"
              type="string"
              id="location"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone"
              type="number"
              id="phone"

            />
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
              <Typography align="center" mt={'10rem'}> Already Registerd ?</Typography>
            </Link>

          </Box>
        </Box>

      </Box>

    </Box>
  );
};

export default SignUpPage;
