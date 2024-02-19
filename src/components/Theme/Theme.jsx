import { ThemeProvider } from '@emotion/react'

const theme = {
    colours: {
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
    }
}

export const Theme = ({ children }) => {
    return (
            <ThemeProvider theme={theme}>
                { children }
            </ThemeProvider>
        )
}
