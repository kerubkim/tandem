import {Stack, Heading, Flex} from "@chakra-ui/core";
import Leaderboard from "./Leaderboard";

const QuizResult = ({score, maxScore}) => {
    return (
            <Flex width="100%" align="center" justify="center" direction="column">
                <Heading>You scored</Heading>
                <Heading fontSize="10vw" align="center">{(score / maxScore) * 100}%</Heading>
            </Flex>
    )
}

export default QuizResult;
