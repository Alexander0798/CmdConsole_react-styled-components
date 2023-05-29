import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";
const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background: black;
    color: white;
`;

function App() {
    return (
        <AppWrapper>
            <Flex justify="center">
                <Title color="green" margin="0 0 1.5rem 0">
                    Console Cmd 2023 R.A.V
                </Title>
            </Flex>

            <Flex direction="column">
                <Console color="green" />
                <Button color={"green"} align="flex-end">Отправить</Button>
            </Flex>
        </AppWrapper>
    );
}

export default App;
