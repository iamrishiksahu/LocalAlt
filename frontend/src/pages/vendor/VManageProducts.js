import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
} from "@mui/material";

const Product = ({
  product_id,
  product_name,
  product_subtitle,
  product_price,
  quantity_ofprods,
  description,
  category,
  sub_category,
  online,
  reviews_count,
  rating,
  product_image, // Include product_image in props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{product_name}</Typography>
        <Typography>${product_price.toFixed(2)}</Typography>
        <Rating value={rating} readOnly />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse in={isExpanded}>
        <CardContent>
          <Typography>Product ID: {product_id}</Typography>
          <Typography>Subtitle: {product_subtitle}</Typography>
          <Typography>Quantity: {quantity_ofprods}</Typography>
          <Typography>Category: {category}</Typography>
          <Typography>Sub Category: {sub_category}</Typography>
          <Typography>Online: {online ? "Yes" : "No"}</Typography>
          <Typography>Reviews Count: {reviews_count}</Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            DELETE
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const VManageProducts = () => {
  const [data, setData] = useState([
    {
      "product_id": "P12345",
      "product_name": "Product A",
      "product_subtitle": "An amazing product for your needs",
      "product_price": 29.99,
      "product_image": "product_a_image.jpg",
      "quantity_ofprods": 100,
      "description": "Product A is a high-quality example product. It has great features and is perfect for your needs.",
      "category": "Electronics",
      "sub_category": "Smartphones",
      "online": true,
      "reviews_count": 25,
      "rating": 4.5
    },
    {
      "product_id": "P67890",
      "product_name": "Product B",
      "product_subtitle": "A versatile and affordable product",
      "product_price": 19.99,
      "product_image": "product_b_image.jpg",
      "quantity_ofprods": 50,
      "description": "Product B is a versatile and affordable product with a range of applications.",
      "category": "Home & Garden",
      "sub_category": "Kitchen Appliances",
      "online": true,
      "reviews_count": 10,
      "rating": 4.0
    },
    {
      "product_id": "P54321",
      "product_name": "Product C",
      "product_subtitle": "The latest innovation in technology",
      "product_price": 49.99,
      "product_image": "product_c_image.jpg",
      "quantity_ofprods": 75,
      "description": "Product C is the latest innovation in technology, offering advanced features and functionality.",
      "category": "Electronics",
      "sub_category": "Gadgets",
      "online": true,
      "reviews_count": 30,
      "rating": 4.8
    }
  ]);

  console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      {data ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
        >
          {data.map((product) => (
            <Product key={product.product_id} {...product} />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default VManageProducts;
