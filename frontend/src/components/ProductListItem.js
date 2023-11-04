import React from 'react'

import { Box, Card, Typography, CardContent, CardActions, Button, Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const ProductListItem = ({ item }) => {

    const navigate = useNavigate();
    let data = []
    if(item.data != undefined){
        data = item.data
    }else{
        data = item;
    }

    return (
        <>

            <Card onClick={() => navigate(`/product/${data.product_id}`)} sx={{ 
                cursor: 'pointer' ,
                transition: 'all 200ms ease',
                boxShadow: {md: '0 0 2rem #00000010', sm: '0 0 1rem #00000010', xs: '0 0 1rem #00000010'},
                '&:hover': {
                    scale: '1.02',

                    boxShadow: {md: '0 0 10rem #00000010', sm: '0 0 2rem #00000010', xs: '0 0 1rem #00000010'}
                }
        }}>
                <Box sx={{ width: '100%', display: 'flex', gap: {md: '1rem', xs: '0px', sm: '0px'}, padding: '1rem', boxSizing: 'border-box' }}>



                    {/* RIGHT SIDE (DESCRIPTION CONTAINER) */}

                    <CardContent sx={{
                        padding: {md: '1rem', xs: '0px', sm: '0px'}
                    }}>


                        {/* LEFT SIDE (MIMAGE CONTAINER) */}
                        <Box sx={{ width: '100%', height: '160px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', mb: '1rem'}}>
                            <img src={data?.images?.[0]} alt='product_image'
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }} />
                        </Box>
                        <Typography variant="h6">{data.product_name}</Typography>
                        <Typography>₹{data.product_price}</Typography>
                        <Rating value={data.rating} readOnly />
                        <Typography>{data.store_name + ' (' + data.distance + ')'}</Typography>
                        <Typography mt='1.5rem' variant="body2">{data.description}</Typography>
                        <CardActions>
                            <Button
                                variant="outlined"
                                size="small"
                            >
                                View More
                            </Button>
                        </CardActions>
                    </CardContent>


                </Box>


            </Card>

        </>

    )
}

export default ProductListItem