import { Box, Button, Rating, Typography, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProductWithId } from '../../api/productApis'
import HeaderProgress from '../../components/HeaderProgress'

const ProductPage = () => {

  const { id } = useParams()
  const [data, setData] = useState({})


  useEffect(() => {

    getSingleProductWithId({ id }).then((res) => {

      if (res.isError) {
        alert('Error Occurred!')
      } else {
        setData(res)
      }
    })

  }, [])


  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      {data == {} ? <HeaderProgress /> :


        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
          }}>

          <Box>

            <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', mb: '1rem' }}>
              <img src={data?.images?.[0]} alt='product_image'
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }} />
            </Box>

            <Card sx={{
              padding: '1rem'
            }}>

              <Typography variant='body'>Seller</Typography>
              {/* <Typography variant='h6'>{data?.store_name + data?.locality}</Typography> */}

              <Box sx={{
                display: 'flex',
                gap: '1rem'
              }}>

                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span class="material-symbols-outlined">
                    pin_drop
                  </span>
                  <Typography>Locate Store</Typography>

                </Box>

                <Box sx={{
                  display: 'flex'
                }}>
                  <span class="material-symbols-outlined">
                    call
                  </span>
                  <Typography>Call Store</Typography>

                </Box>

              </Box>



            </Card>

          </Box>



          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <Typography variant='h5' sx={{ fontWeight: '500' }}>{data?.product_name}</Typography>
            <Typography>{data?.subtitle}</Typography>
            <Rating value={data?.rating} />
            <Typography sx={{
              fontSize: '0.75rem',
              backgroundColor: 'background.main',
              width: 'max-content',
              padding: '0.1rem 1rem',
              borderRadius: '2rem'
            }}>{data?.category}</Typography>
            <Typography variant='h4'>₹{data?.price}</Typography>
            <Typography>{data?.description}</Typography>

            <Box sx={{
              mt: '2rem',
              display: 'flex',
              gap: '1rem'
            }}>


              <Button variant={'contained'} sx={{
                width: 'max-content'
              }}>Buy Now</Button>
              <Button variant={'outlined'} sx={{
                width: 'max-content'
              }}>Visit Store</Button>

            </Box>

          </Box>

        </Box>

      }

    </Box>

  )
}

export default ProductPage