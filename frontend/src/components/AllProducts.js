import React, { useState } from 'react'
import ProductListItem from './ProductListItem'
import { Box } from '@mui/material'

const AllProducts = () => {

    const [productList, setProductList] = useState([{
        id: '2325245',
        title: 'product title',
        price: '100',
        title: 'RS Retails',
        shop_area: 'Lalpur',
        distance: '2.3km',
        images: ['https://rukminim2.flixcart.com/image/416/416/xif0q/air-conditioner-new/q/l/z/-original-imagn9twufudm57a.jpeg?q=70']
    },
    {
        title: 'product title',
        price: '100',
        title: 'RS Retails',
        shop_area: 'Lalpur',
        distance: '2.3km',
        images: ['']
    },
    {
        title: 'product title',
        price: '100',
        images: ['']
    },
    {
        title: 'product title',
        price: '100',
        images: ['']
    },
    {
        title: 'product title',
        price: '100',
        images: ['']
    },
    {
        title: 'product title',
        price: '100',
        images: ['']
    },
    {
        title: 'product title',
        price: '100',
        images: ['']
    },
    {
        title: 'product title',
        price: '100',
        images: ['']
    },
    {
        title: 'product title',
        price: '100',
        images: ['']
    },
    {
        title: 'product title',
        price: '100',
        images: ['']
    }, {
        title: 'product title',
        price: '100',
        images: ['']
    },

    ])

    return (
        <Box sx={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: '1rem',
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