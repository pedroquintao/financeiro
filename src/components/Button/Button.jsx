import styled from "@emotion/styled";
import { useContext } from "react";
import { ColorHandlerContext } from "../../context/ColorHandlerContext";

const StyledPrimaryButton = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    background-color: ${props => props.colorHandler('solid')};
    padding: 1em 2em;
    width: 3rem;
    border: 2px solid ${props => props.colorHandler('solid')};
    border-radius: ${props => props.theme.spacing.xs};

    &:hover {
        background-color: ${props => props.colorHandler('hover')};
        border-color: ${props => props.colorHandler('hover')};
        cursor: pointer;
    }
`

const StyledSecondaryButton = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.colorHandler('solid')};
    font-weight: 700;
    background-color: transparent;
    padding: 1em 2em;
    width: 3rem;
    border: 2px solid ${props => props.colorHandler('solid')};
    border-radius: ${props => props.theme.spacing.xs};

    &:hover {
        color: ${props => props.colorHandler('hover')};
        border-color: ${props => props.colorHandler('hover')};
        cursor: pointer;
    }
`

export const Button = ( { children, buttonType = 'secundary', resourcesType, onClick } ) => {

    const { colorHandler } = useContext(ColorHandlerContext)

    return (
        <>
            {buttonType === 'primary' ?
                <StyledPrimaryButton onClick={onClick}
                                     buttonType={buttonType}
                                     resourcesType={resourcesType}
                                     colorHandler={colorHandler}>
                    { children }
                </StyledPrimaryButton>
            :
                <StyledSecondaryButton onClick={onClick}
                                       buttonType={buttonType}
                                       resourcesType={resourcesType}
                                       colorHandler={colorHandler}>
                    { children }
                </StyledSecondaryButton>
            }
        </>
    )
}