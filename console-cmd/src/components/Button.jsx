import styled, { keyframes } from "styled-components";
const rotateAnimation = keyframes`
0%{
    transform: rotateZ(0deg)'
}
100% {
    transform: rotateZ(360deg);
}`;
const StyledButton = styled.button`
    padding: 0.63rem 0.94rem;
    font-size: 0.94rem;
    cursor: pointer;
    background: transparent;
    color: ${({ color }) => color || "white"};
    border: 1px solid ${({ color }) => color || "white"};
    align-self: ${({ align }) => align || "stretch"};
    &: hover {
        animation: ${rotateAnimation} 1.5s infinite linear;
    }
`;

const Button = (props) => {
    return <StyledButton {...props} />;
};
export default Button;
