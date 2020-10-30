import {Stack, Flex} from "@chakra-ui/core";
import {Container} from '../components/Container';
import {Main} from "../components/Main";
import Leaderboard from "../components/Leaderboard";

const Score = () => {
    return (
        <Container>
            <Main>
                <Flex height="100%" direction="column" justify="flex-start">
                    <Leaderboard />
                </Flex>
            </Main>
        </Container>
    )
}

export default Score;
