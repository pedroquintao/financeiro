import { ThemeProvider } from '@emotion/react'

const theme = {
    colours: {

    }
}

export const Theme = ({ children }) => {
    return (
            <ThemeProvider theme={theme}>
                { children }
            </ThemeProvider>
        )
}
