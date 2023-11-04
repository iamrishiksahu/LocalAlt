import React, { useContext, useEffect, useState } from 'react'
import ProductListItem from './ProductListItem'
import { Box } from '@mui/material'
import ProductContext from '../context/ProductsContext'
import HeaderProgress from './HeaderProgress'
import { getAllProduct } from '../api/productApis'


const AllProducts = () => {

    const { productList, setProductList } = useContext(ProductContext)
    const [showProgress, setShowProgress] = useState(false)

    useEffect(() => {
        setShowProgress(true)
        getAllProduct().then((data) => {
            setProductList(data)
            setShowProgress(false)
        }).catch(err => {
            console.log(err)
            setShowProgress(false)
        }) 

    }, [])

    useEffect(() => {

    }, [productList])

    return (

        <Box sx={{
            display: 'grid',
            gap: { xs: '1rem', sm: '1rem', md: '1rem' },
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },


        }}>

            {showProgress ? <HeaderProgress /> : (
                <>
                    {
                        productList?.length > 0 ? productList.map((item, idx) => {
                            const itemData = item
                            console.log(itemData);
                            return (
                                <ProductListItem key={idx} item={itemData} />
                            )
                        }) : <HeaderProgress />
                    }
                </>

            )}



        </Box>
    )
}

export default AllProducts