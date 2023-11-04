import React, { useContext, useEffect, useState } from 'react'
import ProductListItem from './ProductListItem'
import { Box } from '@mui/material'
import ProductContext from '../context/ProductsContext'
import HeaderProgress from './HeaderProgress'

const AllProducts = () => {

    const { productList, setProductList } = useContext(ProductContext)

    return (
        <Box sx={{
            display: 'grid',
            gap: { xs: '1rem', sm: '1rem', md: '1rem' },
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },


        }}>

            {productList.length > 0 ? productList.map((item, idx) => {

                return (
                    <ProductListItem key={idx} data={item} />
                )
            }) : <HeaderProgress />}

        </Box>
    )
}

export default AllProducts