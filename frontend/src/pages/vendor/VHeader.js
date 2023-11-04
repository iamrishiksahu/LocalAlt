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
                    height: '10vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    maxWidth: '100vw',
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: '10px 0 30px #00000010',
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

                    <Typography variant='h6'>{title} </Typography>

                </Box>



                {/* Account and Orders */}
                <Box
                    sx={{ display: 'flex', gap: '1rem' }}
                >
                    {format(new Date(), 'MMM dd, yyyy - hh:mm:a')}

                </Box>

            </Box>

            



    )
}

export default VHeader