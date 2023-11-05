import React, { useState } from "react";
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
import VHeader from './VHeader'
import { addProduct } from "../../api/productApis";

import { initializeApp, getApps } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

//firebase setup:
// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVdo0lgjLhsSO5StQbo3n7I2ttiTkDY_8",
  authDomain: "localalt.firebaseapp.com",
  projectId: "localalt",
  storageBucket: "localalt.appspot.com",
  messagingSenderId: "428319982093",
  appId: "1:428319982093:web:de298ea66185bc6e20cb44",
  measurementId: "G-DRXP89W3Z2"
};


if (!getApps().length) {
  initializeApp(firebaseConfig);
}


const VAddProductPage = () => {



  //image upload:
  const [currentFile, setCurrentFile] = useState(undefined);
  const [imageURL, setImageURL] = useState("");

  const selectFile = (event) => {
    setCurrentFile(event.target.files[0]);
  };

  const upload = () => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${currentFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, currentFile);

    uploadTask.on(
      "state_changed",
      snapshot => { },
      error => {
        console.log(error);
      },
      () => {
        getDownloadURL(storageRef).then(url => {
          setImageURL(url);
        });
      }
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const postData = {
      product_name: data.get("product_name"),
      subtitle: data.get("subtitle"),
      description: data.get("description"),
      price: parseInt(data.get('price')),
      quantity: parseInt(data.get("quantity")),
      images: [imageURL],
      category: data.get("category"),
      subcategory: data.get('sub_category'),
      availability: Boolean('true'),
      rating: parseInt('3.5'),
      reviews_count: parseInt('10'),
      store_id: 'store_zGL8PUJJ3NcdruVeFGDJG91hLBF2',
    };

    // console.log(postData);

    try {
      await addProduct(postData);
      alert('Product upload successful');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert('Error: ' + err.message);
      } else {
        alert('An error occurred: ' + err.message);
      }
    }
  };

  return (

    <>

      <VHeader title={'Add Product'} />


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
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^0-9]/g, '');
              }}
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


            {/* image upload */}
            <div className="mg20">
              <label htmlFor="btn-upload">
                <input
                  id="btn-upload"
                  name="btn-upload"
                  style={{ display: 'none' }}
                  type="file"
                  accept="image/*"
                  onChange={selectFile} />
                <Button
                  className="btn-choose"
                  variant="outlined"
                  component="span" >
                  Choose Image
                </Button>
              </label>
              <div className="file-name">
                {currentFile ? currentFile.name : null}
              </div>
              <Button
                className="btn-upload"
                color="primary"
                variant="contained"
                component="span"
                disabled={!currentFile}
                sx={{
                  mt: '1rem'
                }}
                onClick={upload}>
                Upload
              </Button>

              {imageURL && (
                <div>
                  <img className="preview" src={imageURL} alt="" style={{ width: '100px', height: '100px' }} />
                </div>
              )}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
            </Button>

          </Box>
        </Box>
      </Container>
    </>

  );
};

export default VAddProductPage;
