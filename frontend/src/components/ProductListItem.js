import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom' 

const ProductListItem = ({ data }) => {

    const navigate = useNavigate();
    return (
        <Card 
        onClick={() => navigate(`/product/${data.id}`)}
        sx={{ width: '100%', display: 'flex', gap: '1rem', padding: '1rem', boxSizing: 'border-box'}}>

            {/* LEFT SIDE (MIMAGE CONTAINER) */}
            <Box sx={{ width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={data.images[0]} alt='product_image'
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                    }} />
            </Box>

            {/* RIGHT SIDE (DESCRIPTION CONTAINER) */}

            <Box>

                <Typography variant='h6'>{data.title}</Typography>
                <Typography variant='h6'>₹{data.price}</Typography>
                <Typography variant='h6'>{data.shop_name}</Typography>
                <Typography variant='h6'>{data.shop_area}</Typography>
                <Typography variant='h6'>{data.distance}</Typography>
            </Box>


        </Card>
    )
}

export default ProductListItem