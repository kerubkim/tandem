import { Flex  } from "@chakra-ui/core";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import firebase from "../firebase";
import Trivia from "../components/Trivia";
import SEO from "../components/SEO";

const Index = () => {
	React.useEffect(() => {
		firebase.signIn();
	});

	return (
		<Container>
            <SEO />
			<Main>
				<Flex height="100%" direction="column" justify="center">
					<Trivia />
				</Flex>
			</Main>
		</Container>
	);
};

export default Index;
