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

  export default VendorProductItem