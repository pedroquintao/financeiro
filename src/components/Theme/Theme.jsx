import { ThemeProvider } from '@emotion/react'

const theme = {
    colors: {
        black:'#000',
        white: '#FFF',

        dark: {
            a: '#94A684',
            b: '#AEC3AE',
            c: '#bdbdbd'
        },
        
        neutral: {
            a: '#E4E4D0',
            b: '#faf8f0',
            c: '#FFFBEE'
        }
    },

    spacing: {
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px'
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
