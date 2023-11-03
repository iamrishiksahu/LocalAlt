import React, { useContext, useEffect, useState } from 'react'
import ProductListItem from './ProductListItem'
import { Box } from '@mui/material'
import ProductContext from '../context/ProductsContext'
import { ProductListData } from '../utils/data'

const AllProducts = () => {

    const { productList, setProductList } = useContext(ProductContext)

    console.log(productList)


    return (
        <Box sx={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },


        }}>

            {productList ? productList.map((item, idx) => {

                return (
                    <ProductListItem key={idx} data={item} />
                )
            }) : <></>}

        </Box>
    )
}

export default AllProducts