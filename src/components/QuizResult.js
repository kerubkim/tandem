import { Stack, Heading, Flex, Spinner, IconButton } from "@chakra-ui/core";
import Leaderboard from "./Leaderboard";
import { useUser } from "../context/userContext";
import firebase from "../firebase";
import Link from "next/link"; 

const QuizResult = ({ score, maxScore }) => {
	const { user } = useUser();
	const [result, setResult] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(true);
	const [step, setStep] = React.useState(0);
    const [format, setFormat] = React.useState(null);

	React.useEffect(() => {
		firebase.getUserResult(user).then((res) => {
			setResult(res);
		});
	}, []);

    React.useEffect(() => {
        if(result) {
            	const temp = [
				{
					title: "Total score of",
					data: `${result.entry.score}%`,
				},
                {
                    title: "Scoring the same with",
                    data: result.sameScore,
                    sub: "other trivia takers.",
                },
				{ title: "Scoring higher than", data: result.lowScore, sub: "other people." },
			];
            setFormat(temp);
			setIsLoading(false);

        }
    }, [step, result]);

	if (isLoading) {
		return (
			<Flex align="center" justify="center">
				<Spinner />
			</Flex>
		);
	}

    const _onNext = () => {
        if(step < format.length - 1) {
            return setStep(prevState => prevState + 1);
        }
    }

	return (
		<Flex width="100%" align="center" justify="center" direction="column">
			<Heading>{format[step].title}</Heading>
			<Heading fontSize="10vw" align="center">{format[step].data}</Heading>
            <Heading>{format[step].sub}</Heading>
            {step !== format.length - 1 ?
            <IconButton icon="chevron-right" onClick={() => _onNext()} mt={8} size="sm" isRound />
                : <Link href="/score">
                    <IconButton icon="chevron-right" mt={8} size="sm" isRound />
                </Link>}
		</Flex>
	);
};

export default QuizResult;
