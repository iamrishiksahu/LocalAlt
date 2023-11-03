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
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Product = ({
  product_id,
  product_name,
  product_subtitle,
  product_price,
  product_image,
  quantity_ofprods,
  description,
  category,
  sub_category,
  online,
  reviews_count,
  rating,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.main,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary.main}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {product_name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary.main}>
          ${Number(product_price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />

        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {product_id}</Typography>
          <Typography>Supply Left: {quantity_ofprods}</Typography>
          <Typography>Sub Category: {sub_category}</Typography>
          <Typography>product_subtitle: {product_subtitle}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const VManageProducts = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  //calls backend to grab data

  const [data, setData] = useState([
    {
      "product_id": "P12345",
      "product_name": "Example Product",
      "product_subtitle": "A fantastic product for your needs",
      "product_price": 29.99,
      "product_image": "product_image_url.jpg",
      "quantity_ofprods": 100,
      "description": "This is a high-quality example product description. It includes all the important details about the product and its features.",
      "category": "Electronics",
      "sub_category": "Smartphones",
      "online": true,
      "reviews_count": 25,
      "rating": 4.5
    }

  ]);
  // console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      {/* {data || !isLoading ? ( */}
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        {data.map(
          ({
            product_id,
            product_name,
            product_subtitle,
            product_price,
            product_image,
            quantity_ofprods,
            description,
            category,
            sub_category,
            online,
            reviews_count,
            rating,
          }) => (
            <Product
              key={product_id}
              product_id={product_id}
              product_name={product_name}
              product_subtitle={product_subtitle}
              product_price={product_price}
              product_image={product_image}
              quantity_ofprods={quantity_ofprods}
              description={description}
              category={category}
              sub_category={sub_category}
              online={online}
              reviews_count={reviews_count}
              rating={rating}
            />
          )
        )}
      </Box>
      {/* ) : (
        <>Loading...</>
      )} */}
    </Box>
  );
};

export default VManageProducts;
