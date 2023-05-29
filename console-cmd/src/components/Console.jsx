import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";
import { useState } from "react";
const StyledConsole = styled.textarea`
    width: 100%;
    min-height: 70vh;
    background: black;
    font-size: 1.5rem;
    resize: none;
    color: ${({ color }) => color || "white"};
`;
const Console = ({ color, ...props }) => {
    const [lines, setLines] = useState(["C/users>"]);
    const onKeyPress = (evt) => {
        if (evt.charCode === 13) {
            setLines([...lines, "C/users>"])
        }
        if (evt.charCode === 8) {
            console.log('1221212121')
        }
        console.log(setLines)
    }
    return (
        <Flex>
            <Flex direction="column" margin="0 0.63rem 0">
                {lines.map((line, index) => {
                    return (
                        <Line color={color} key={index}>
                            {line}
                        </Line>
                    );
                })}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
        </Flex>
    );
};
export default Console;
