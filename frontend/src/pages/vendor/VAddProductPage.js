import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  Input

} from "@mui/material";
import { Link } from "react-router-dom";
import ImageUpload from "../../components/ImageUpload";

const VAddProductPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      subtitle: data.get("subtitle"),
      Description: data.get("Description"),
      quantity: data.get("quantity"),
      category: data.get("category"),
    });

  };

  return (
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
          ADD PRODUCT
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>


          <TextField
            margin="normal"
            required
            fullWidth
            id="product_name"
            label="Product Name"
            name="product_name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="subtitle"
            label="Product Subtitle"
            name="subtitle"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"

            id="description"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            label="Price"
            type="number"
            id="price"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="quantity"
            label="Quantity"
            type="number"
            id="quantity"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="category"
            label="Category"
            type="string"
            id="category"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="sub_category"
            label="Sub Category"
            type="string"
            id="sub_category"
          />
          <ImageUpload />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Product
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2">
                Cancel
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default VAddProductPage;
