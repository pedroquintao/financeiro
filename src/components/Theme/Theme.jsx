import { ThemeProvider } from '@emotion/react'

const theme = {
    colors: {
        black:'#000',
        white: '#FFF',

        dark: {
            a: '#94A684',
            b: '#AEC3AE',
        },
        
        neutral: {
            a: '#E4E4D0',
            b: '#FFEEF4'
        }
    },
    
    fontFamily: "'Montserrat', 'sans-serif'"
}

export const Theme = ({ children }) => {
    return (
            <ThemeProvider theme={theme}>
                { children }
            </ThemeProvider>
        )
}
