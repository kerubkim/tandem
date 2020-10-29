import { useState } from "react";
import { Flex, Heading, Input, Stack, IconButton, Spinner } from "@chakra-ui/core";
import NamePrompt from "./NamePrompt";
import Quiz from "./Quiz";
import {useUser} from "../context/userContext";
import firebase from "../firebase";

const Trivia = () => {
    const {user} = useUser();
	const [name, setName] = useState("");
	const [isQuizTime, setIsQuizTime] = useState(false);
	const _onNameSubmit = (name) => {
		setName(name);
		setIsQuizTime(true);
	};

	const _onQuizFinish = (totalCorrect, maxScore) => {
        const tempUser = {user, name};
        firebase.saveTriviaEntry(tempUser, "seasonOne", totalCorrect, maxScore);
	};

	return (
		<Flex width="100%" justify="center" align="center" direction="column">
			{!isQuizTime ? <NamePrompt onSubmit={_onNameSubmit} /> : <Quiz onQuizFinish={_onQuizFinish} />}
		</Flex>
	);
};

export default Trivia;
