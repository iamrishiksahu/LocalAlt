import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Rating,
  useTheme,
  TextField,
  styled
} from "@mui/material";


const StyledBox = styled(Box)`
  display: flex;
  flexDirection: column;
  padding:1%;
`;

const Order = ({ order_id, order_date, status, items }) => {
  const theme = useTheme();
  console.log(items);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.main,
      }}
    >

      <CardContent>
        <StyledBox>
          <Box>IMG</Box>
          <Box>
            {/* <Typography sx={{ fontSize: 14 }}>{title}</Typography> */}
            {/* <Typography sx={{ mb: "1.5rem" }}>
            Quantity: {Number(quantity)}
          </Typography> */}
            <Typography variant="h5" component="div">
              {status}
            </Typography>

            <Typography variant="h5" component="div">
              {order_date}
            </Typography>
            <Typography variant="h5" component="div">
              {order_id}
            </Typography>

            {/* {items.map((item) => (
            <Product
              key={item.product_id}
              product_id={item.product_id}
              product_name={item.product_name}
              quantity={item.quantity}
              price_per_item={item.price_per_item}
            />
          ))} */}
          </Box>

        </StyledBox>
      </CardContent>
    </Card>
  );
};

const OrdersPage = () => {
  //fetching order details
  // const baseUrl = "https://localhost:5000";
  // const [OrdersPage, setOrdersPage] = useState([]);

  // useEffect(() => {
  //   axios.get(baseUrl).then((response) => {
  //     setOrdersPage(response.data);
  //   });
  // });

  const [productList, setProductList] = useState([
    {
      order_id: "ORD123456",
      order_date: "2023-11-03 10:30:00",
      status: "Pending",
      items: [
        {
          product_id: 101,
          product_name: "Shampoo",
          quantity: 2,
          price_per_item: 8.99,
        },
        {
          product_id: 102,
          product_name: "Conditioner",
          quantity: 1,
          price_per_item: 7.99,
        },
      ],
      total_amount: 25.97,
    },
    {
      order_id: "ORD123457",
      order_date: "2023-11-04 15:15:00",
      status: "Shipped",
      items: [
        {
          product_id: 103,
          product_name: "Soap",
          quantity: 5,
          price_per_item: 2.49,
        },
        {
          product_id: 104,
          product_name: "Toothbrush",
          quantity: 3,
          price_per_item: 1.99,
        },
      ],
      total_amount: 18.42,
    },
    {
      order_id: "ORD123458",
      order_date: "2023-11-05 09:45:00",
      status: "Delivered",
      items: [
        {
          product_id: 101,
          product_name: "Shampoo",
          quantity: 3,
          price_per_item: 8.99,
        },
        {
          product_id: 105,
          product_name: "Toothpaste",
          quantity: 2,
          price_per_item: 3.49,
        },
      ],
      total_amount: 31.46,
    },
    {
      order_id: "ORD123459",
      order_date: "2023-11-07 14:20:00",
      status: "Shipped",
      items: [
        {
          product_id: 102,
          product_name: "Conditioner",
          quantity: 1,
          price_per_item: 7.99,
        },
      ],
      total_amount: 7.99,
    },
    {
      order_id: "ORD123460",
      order_date: "2023-11-08 11:10:00",
      status: "Pending",
      items: [
        {
          product_id: 103,
          product_name: "Soap",
          quantity: 4,
          price_per_item: 2.49,
        },
        {
          product_id: 104,
          product_name: "Toothbrush",
          quantity: 2,
          price_per_item: 1.99,
        },
      ],
      total_amount: 11.94,
    },
    {
      order_id: "ORD123461",
      order_date: "2023-11-10 08:55:00",
      status: "Shipped",
      items: [
        {
          product_id: 101,
          product_name: "Shampoo",
          quantity: 2,
          price_per_item: 8.99,
        },
      ],
      total_amount: 17.98,
    },
    {
      order_id: "ORD123462",
      order_date: "2023-11-12 16:40:00",
      status: "Pending",
      items: [
        {
          product_id: 102,
          product_name: "Conditioner",
          quantity: 1,
          price_per_item: 7.99,
        },
        {
          product_id: 104,
          product_name: "Toothbrush",
          quantity: 1,
          price_per_item: 1.99,
        },
      ],
      total_amount: 9.98,
    },
  ]);

  return (
    <div>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(1, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
      >
        {productList.map(({ order_id, order_date, status, items }) => (
          <Order
            key={order_id}
            order_id={order_id}
            order_date={order_date}
            status={status}
            items={items}
          ></Order>
        ))}
      </Box>
    </div>
  );
};

export default OrdersPage;
