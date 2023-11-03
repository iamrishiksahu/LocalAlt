import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    palette: {
        primary: {
            main: '#2a1250', //violet
            light: '#564375',
            dark: '#8000ff',
        },
        secondary: {
            main: '#e63fa7',//magenta
            light: '#ff36bb',
            dark: '#b20276',
        },
        background: {
            main: "#f0f0f0", //grey
        }
    },
})