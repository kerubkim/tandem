import { Spinner, Stack, Flex, Avatar, Text, Heading } from "@chakra-ui/core";
import firebase from "../firebase";

const Leaderboard = ({fullHeight}) => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [entries, setEntries] = React.useState(null);

	React.useEffect(() => {
		firebase.getLeaderboard().then((res) => {
			setEntries(res);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return (
			<Flex height="100vh" justify="center" align="center">
				<Spinner color="green.500" />
			</Flex>
		);
	}

	return (
		<Stack height={fullHeight ? "100vh" : "60vh"}>
			<Stack spacing={6} py="5rem">
				<Heading as="h6" size="lg">Leaderboard</Heading>
				{entries.map((entry, index) => (
					<Flex key={index} align="center" justify="space-between">
						<Flex align="center" justify="center">
							<Heading as="h6" size="lg" mr={index === 0 ? 5 : 8}>
                                 {index === 0 ?
								index + 1 : null}
							</Heading>
							<Avatar name={entry.name} size={"md"} />
						</Flex>
						<Text as="h6" isTruncated>{entry.name}</Text>
						<Text as="h6">
							{entry.score} / {entry.maxScore}
						</Text>
					</Flex>
				))}
			</Stack>
		</Stack>
	);
};

export default Leaderboard;

Leaderboard.defaultProps = {
    fullHeight: false
}
