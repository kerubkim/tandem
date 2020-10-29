import { Link as ChakraLink, Text, Code, Icon, List, ListIcon, ListItem } from "@chakra-ui/core";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import firebase from "../firebase";
import Trivia from "../components/Trivia";

const Index = () => {
	React.useEffect(() => {
		firebase.signIn();
	});

	return (
		<Container>
			<Main>
                <Trivia />
            </Main>
		</Container>
	);
};

export default Index;
