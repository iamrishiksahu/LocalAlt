import React, { useContext } from "react";
import {
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
import { setLocalUserData } from "../../utils/localUserData";

const LoginPage = () => {
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
      // console.log(response);
      setLocalUserData(response)
      setUser(response);
      if (response.role == 1) {
        navigate('/vendor/home')
      } else {
        navigate('/')
      }

    } catch (err) {
      alert('Invalid credentials!');
      console.log(err);
    }
  };

  return (
    <Box component="main" >
      <Box sx={{
        height: '100vh',
        display: 'grid',
        gap: '2rem',
        backgroundColor: '#f5fcff',
        gridTemplateColumns: { md: '1fr 1fr', xs: '1fr' }
      }}>


        <Box sx={{
          margin: 'auto',
          marginTop: '3rem',
          padding: { md: '6rem 0 0 8rem', sm: '3rem', xs: '3rem' }
        }}>
          <Typography variant="h4" align="left">LocalAlt</Typography>
          <Typography variant="body1" align="left" sx={{ width: { md: '50%', xs: '80%' } }} mt={'1rem'} mb={'1rem'}>LocalAlt - A platform to make products in your local shops and outlets visible to you online!</Typography>

          <img width={'300px'} src="/images/login-hero.png" alt="login hero" />

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
          <img src="/logo192.png" alt="logo" width="50px" style={{marginBottom: '2rem'}} />
          <Typography component="h1" variant="body1" sx={{ fontSize: '30px' }}>
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
              <Typography align="center" mt={'5rem'}> Don't have an account? Sign Up</Typography>

            </Link>

          </Box>
        </Box>

      </Box>
    </Box>


  );
};

export default LoginPage;
