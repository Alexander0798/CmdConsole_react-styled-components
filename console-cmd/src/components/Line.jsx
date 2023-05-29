import styled from "styled-components";

const StyledLine = styled.div`
    font-size: 1.5rem;
    color: ${({ color }) => color || 'white'};
`;
const Line = (props) => {
    return <StyledLine {...props} />;
};
export default Line;
