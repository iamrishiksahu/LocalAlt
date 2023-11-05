import React, { useContext, useRef, useState } from 'react'
import { TextField, Box, IconButton, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { getAllProduct, searchProductsByQuery } from '../api/productApis';
import { ProductListData } from '../utils/data';
import ProductContext from '../context/ProductsContext';
import { getPlaceNameWithLatLong } from '../api/mapApis';
import { useTheme } from '@emotion/react';
import HeaderProgress from './HeaderProgress';


const Header = () => {

    const searchRef = useRef()
    const theme = useTheme();

    const { productList, setProductList } = useContext(ProductContext)
    const [currentLocation, setCurrentLocation] = useState('Locate')
    const [showLocationProgress, setShowLocationProgress] = useState(false)
    const [showProgress, setShowProgress] = useState(false)


    const navigate = useNavigate();
    const [location, setLocation] = useState()

    const successHandler = async (position) => {
        const lat = (position.coords.latitude);
        const lon = (position.coords.longitude);

        // console.log(lat, lon)
        const res = await getPlaceNameWithLatLong({ lat, lon })
        // console.log(res)
        if (res.isError) {
            alert('Error Detecting Location!')
        } {

            setCurrentLocation(res)
        }
        setShowLocationProgress(false)

    };

    const errorHandler = (err) => {
        alert(err.code + ":" + err.message);
        setShowLocationProgress(false)

    }

    const searchWithQuery = async () => {
        const query = searchRef.current.value;
        setShowProgress(true)
        if (query == '') {
            const list = await getAllProduct()
            await setProductList(list)
        } else {
            const list = await searchProductsByQuery({ query: query })
            await setProductList(list)
        }
        setShowProgress(false)
    }


    const handleLocationClick = (e) => {
        e.preventDefault()
        setShowLocationProgress(true)
        navigator.geolocation.getCurrentPosition(
            successHandler, errorHandler,
            { enableHighAccuracy: true, maximumAge: 10000 });

    }

    return (
        <Box
            sx={{
                height: { md: '10vh', xs: '7vh', sm: '7vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                maxWidth: '100vw',
                backgroundColor: theme.palette.primary.main,
                boxShadow: '10px 0 30px #00000030',
            }}
        >
            {showProgress ? <HeaderProgress /> : <></>}

            {/* Logo and Location */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '1rem',
                    marginRight: '1rem'

                }}>

                <img src="/logo192.png" alt="logo" width="35px" onClick={() => navigate('/')} />

                <Box sx={{
                    display: 'flex',
                    backgroundColor: 'background.main',
                    padding: { md: '0.5rem 2rem', sm: '0.25rem', xs: '0.25rem' },
                    borderRadius: '5rem',
                    cursor: 'pointer',
                    transition: 'all 200ms ease'

                }}

                    onClick={handleLocationClick}

                >

                    <Box sx={{
                        width: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '1rem',
                        display: { "md": 'flex', "sm": 'none', "xs": 'none' }
                    }}>

                        {showLocationProgress ? <CircularProgress size={'1rem'} /> : <Typography sx={{
                            overflow: 'hidden',

                        }}>{currentLocation.substring(0, 10)}</Typography>}
                    </Box>

                    <span className="material-symbols-outlined"
                        style={{
                            color: '#ba3d32',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '50%',

                        }}>
                        location_on
                    </span>

                </Box>




            </Box>

            {/* Search box */}


            <TextField
                variant="outlined"
                placeholder="Search"
                size="small"
                inputRef={searchRef}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        searchWithQuery()
                    }
                }}
                sx={{
                    backgroundColor: '#f0f0f0',
                    border: '1px solid #afafaf',
                    width: '50%',
                    borderRadius: '2rem',
                    marginRight: '0.5rem',
                    "& fieldset": { border: 'none' }
                }}
            />

            {/* Account and Orders */}
            <Box
                sx={{
                    display: 'flex', gap: { md: '1rem', xs: '0rem', sm: '0rem' },
                }}
            >

                <IconButton aria-label="account"

                    onClick={() => navigate('/account')}
                    sx={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                    <span className="material-symbols-outlined"
                        style={{
                            fontSize: '2rem',

                        }}>
                        account_circle
                    </span>
                    <Typography sx={{
                        fontSize: '0.75rem',
                        color: 'white',
                        display: { md: 'block', xs: 'none', sm: 'none' },

                    }}>Accounts</Typography>

                </IconButton>
                {/* 
                <IconButton aria-label="orders"
                    onClick={() => navigate('/orders')}
                    sx={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                    <span className="material-symbols-outlined"
                        style={{
                            fontSize: '2rem',
                        }}>
                        favorite
                    </span>
                    <Typography sx={{
                        fontSize: '0.75rem',
                        color: 'white',
                        display: { md: 'block', xs: 'none', sm: 'none' },
                    }}>Wishlist</Typography>

                </IconButton> */}


            </Box>

        </Box>
    )
}

export default Header

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
        label: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
];