import React from 'react'
import { Box, TextField, Typography, useTheme } from '@mui/material'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const VHeader = ({ title }) => {

    const theme = useTheme()
    const navigate = useNavigate()


    return (

        <Box
            sx={{
                height: {md: '10vh', xs: '7vh'},
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '1.5rem',
                justifyContent: {md: 'space-around', xs: 'flex-start'},
                maxWidth: '100vw',
                backgroundColor: theme.palette.primary.main,
                boxShadow: '10px 0 30px #00000080',
            }}
        >

            {/* Logo and Location */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '1rem'

                }}>

                <img src="/logo192.png" alt="logo" width="50px" onClick={() => navigate('/vendor/home')} />

                <Typography variant='body1' sx={{ color: 'white' }} >{title} </Typography>

            </Box>



            {/* Account and Orders */}
            <Box
                sx={{ display: 'flex', gap: '1rem' }}
            >
                <Typography sx={{ color: 'white',
                display: {md: 'block', xs: 'none'}
             }}> {format(new Date(), 'MMM dd, yyyy - hh:mm:a')}
                </Typography>

            </Box>

        </Box>





    )
}

export default VHeader