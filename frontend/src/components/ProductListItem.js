import React from 'react'

import { Box, Card, Typography, CardContent, CardActions, Button, Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const ProductListItem = ({ data }) => {

    const navigate = useNavigate();
    return (

        <>

            <Card onClick={() => navigate(`/product/${data.id}`)} sx={{ cursor: 'pointer' }}>
                <Box sx={{ width: '100%', display: 'flex', gap: '1rem', padding: '1rem', boxSizing: 'border-box' }}>



                    {/* RIGHT SIDE (DESCRIPTION CONTAINER) */}

                    <CardContent>


                        {/* LEFT SIDE (MIMAGE CONTAINER) */}
                        <Box sx={{ width: '100%', height: '160px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', mb: '1rem'}}>
                            <img src={data.product_images[0]} alt='product_image'
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