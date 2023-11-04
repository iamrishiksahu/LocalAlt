import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
} from "@mui/material";

const VendorProductItem = ({
  id,
  product_name,
  subtitle,
  price,
  quantity,
  description,
  category,
  subcategory,
  reviews_count,
  rating,
  images, // Include images in props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // console.log(id)
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{product_name}</Typography>
        <Typography>${price.toFixed(2)}</Typography>
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
          <Typography>Product ID: {id}</Typography>
          <Typography>Subtitle: {subtitle}</Typography>
          <Typography>Quantity: {quantity}</Typography>
          <Typography>Category: {category}</Typography>
          <Typography>Sub Category: {subcategory}</Typography>

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

export default VendorProductItem