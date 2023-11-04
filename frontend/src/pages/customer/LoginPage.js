import React, { useContext } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  useTheme
} from "@mui/material";
import { Link } from "react-router-dom";
import { login } from "../../api/productApis";
import { useNavigate } from 'react-router-dom';
import Modal from "../../components/Modal";
import AuthContext from "../../context/AuthContext";

const LoginPage = () => {
  const theme = useTheme()
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  

  //submit button
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const postData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await login(postData);
      setUser(response.data);
      navigate('/');
      console.log(user);

    } catch (err) {
      alert('Invalid credentials!');
    }
  };

  return (
    <Box component="main" >
      <Box sx={{
        height: '100vh',
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>


            <Typography align="center"> <Modal /></Typography>



            <Link className="link-text" to="/signup" variant="body2">
              <Typography align="center" mt={'10rem'}> Don't have an account? Sign Up</Typography>
            </Link>

          </Box>
        </Box>

      </Box>
    </Box>


  );
};

export default LoginPage;
