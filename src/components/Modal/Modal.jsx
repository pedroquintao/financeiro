import styled from "@emotion/styled";
import { Card } from "../Card/Card";

const StyledBackground = styled.div`
    
`

const Modal = ( { children, backgroundColor } ) => {
    return (
        <StyledBackground>
            <Card backGroundColor={backgroundColor}>
                { children }
            </Card>
        </StyledBackground>
    )
}

export default Modal;