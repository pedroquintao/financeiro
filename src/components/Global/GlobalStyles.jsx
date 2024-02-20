import { Global } from "@emotion/react"

const styles = theme => {
    return {
        html: {
            fontFamily: theme.fontFamily
        },
        body: {
            margin: 0,
            backgroundColor: theme.colors.neutral.b
        }
    }
}

export const GlobalStyles = () => {
    return (
        <Global styles={styles}/>
    )
}