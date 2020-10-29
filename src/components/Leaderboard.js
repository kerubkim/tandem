import { Spinner, Stack, Flex, Avatar, Text, Heading } from "@chakra-ui/core";
import firebase from "../firebase";

const Leaderboard = ({ fullHeight }) => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [entries, setEntries] = React.useState(null);

	React.useEffect(() => {
		const unsubscribe = () => {
			firebase.getLeaderboard().then((res) => {
				setEntries(res);
				setIsLoading(false);
			});
		};

		return unsubscribe();
	}, [entries]);

	if (isLoading) {
		return (
			<Flex height="60vh" justify="center" align="center">
				<Spinner color="green.500" />
			</Flex>
		);
	}

	return (
		<Stack>
			<Stack spacing={6} py="5rem" px="1.5rem" maxHeight="80vh" overflowY="scroll">
				<Heading as="h6" size="lg">
				    Scoreboard	
				</Heading>
				{entries.map((entry, index) => (
					<Flex key={index} width="100%" align="center" justify="space-between">
						<Avatar name={entry.name} src={""} size={"md"} />
						<Text as="h6" isTruncated>
							{entry.name}
						</Text>
						<Text as="h6">{entry.score}%</Text>
					</Flex>
				))}
			</Stack>
		</Stack>
	);
};

export default Leaderboard;

Leaderboard.defaultProps = {
	fullHeight: false,
};
