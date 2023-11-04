import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {

        allVariants: {
            fontFamily: 'Inter, sans-serif',
            color:"rgba(0,0,0,0.7)"
        },
        body1: {}

    },
    palette: {
        primary: {
            main: '#EB594C', //violet
            light: '#ffafa8',
            dark: '#ba3d32',
        },
        secondary: {
            main: '#e63fa7',//magenta
            light: '#ff36bb',
            dark: '#b20276',
        },
        background: {
            main: "#f0f0f0", //grey
            secondary: '#f5fcff'
        },
        text: {
            main: '#000000090'
        }
    },
})