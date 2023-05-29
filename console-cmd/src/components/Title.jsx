import styled from "styled-components";
const StyledTitle = styled.h1`
    color: ${(props) => props.color};
    font-size: 1.8rem;
    margin: ${({margin}) => margin || '0'}
`;
const Title = (props) => {
    return <StyledTitle {...props} />;
};
export default Title;
