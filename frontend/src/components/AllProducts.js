import React, { useState } from 'react'
import ProductListItem from './ProductListItem'
import { Box } from '@mui/material'

const AllProducts = () => {

    const [productList, setProductList] = useState([
        {
          "product_id": "P12345",
          "product_name": "Product A",
          "product_subtitle": "An amazing product for your needs",
          "product_price": 29.99,
          "product_images": ["https://m.media-amazon.com/images/I/31zsXvd1u5L._AC_SR400,600_AGcontrast_.jpg"],
          "quantity_ofprods": 100,
          "description": "Product A is a high-quality example product. It has great features and is perfect for your needs.",
          "category": "Electronics",
          "sub_category": "Smartphones",
          "online": true,
          "reviews_count": 25,
          "rating": 4.5,
          "distance": '4km',
          "store_name": 'BIT CC Store',
        },
        {
          "product_id": "P67890",
          "product_name": "Product B",
          "product_subtitle": "A versatile and affordable product",
          "product_price": 19.99,
          "product_images": ["https://m.media-amazon.com/images/I/31zsXvd1u5L._AC_SR400,600_AGcontrast_.jpg"],
          "quantity_ofprods": 50,
          "description": "Product B is a versatile and affordable product with a range of applications.",
          "category": "Home & Garden",
          "sub_category": "Kitchen Appliances",
          "online": true,
          "reviews_count": 10,
          "rating": 4.0,
          "distance": '4km',
          "store_name": 'BIT CC Store',
        },
        {
          "product_id": "P67890",
          "product_name": "Product B",
          "product_subtitle": "A versatile and affordable product",
          "product_price": 19.99,
          "product_images": ["https://m.media-amazon.com/images/I/31zsXvd1u5L._AC_SR400,600_AGcontrast_.jpg"],
          "quantity_ofprods": 50,
          "description": "Product B is a versatile and affordable product with a range of applications.",
          "category": "Home & Garden",
          "sub_category": "Kitchen Appliances",
          "online": true,
          "reviews_count": 10,
          "rating": 4.0,
          "distance": '4km',
          "store_name": 'BIT CC Store',
        },
        {
          "product_id": "P67890",
          "product_name": "Product B",
          "product_subtitle": "A versatile and affordable product",
          "product_price": 19.99,
          "product_images": ["https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg"],
          "quantity_ofprods": 50,
          "description": "Product B is a versatile and affordable product with a range of applications.",
          "category": "Home & Garden",
          "sub_category": "Kitchen Appliances",
          "online": true,
          "reviews_count": 10,
          "rating": 4.0,
          "distance": '4km',
          "store_name": 'BIT CC Store',
        },
        {
          "product_id": "P54321",
          "product_name": "Product C",
          "product_subtitle": "The latest innovation in technology",
          "product_price": 49.99,
          "product_images": ["https://m.media-amazon.com/images/I/31zsXvd1u5L._AC_SR400,600_AGcontrast_.jpg"],
          "quantity_ofprods": 75,
          "description": "Product C is the latest innovation in technology, offering advanced features and functionality.",
          "category": "Electronics",
          "sub_category": "Gadgets",
          "online": true,
          "reviews_count": 30,
          "rating": 4.8,
          "distance": '4km',
          "store_name": 'BIT CC Store',
        }
      ])

      if(5 == 0){
        setProductList()
      }

    return (
        <Box sx={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },

        }}>

            {productList.map((item, idx) => {

                return (
                    <ProductListItem key={idx} data={item} />
                )
            })}

        </Box>
    )
}

export default AllProducts