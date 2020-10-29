import { useState } from "react";
import { Flex, Heading, Input, Stack, IconButton } from "@chakra-ui/core";
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
		console.log(name);
	};

	const _onQuizFinish = (totalCorrect, maxScore) => {
        console.log(user);
        const tempUser = {user, name};
		console.log("total", totalCorrect);
        firebase.saveTriviaEntry(tempUser, "seasonOne", totalCorrect, maxScore);
	};

	return (
		<Flex minHeight="50vh" justifyContent="center" alignItems="center" direction="column">
			{!isQuizTime ? <NamePrompt onSubmit={_onNameSubmit} /> : <Quiz onQuizFinish={_onQuizFinish} />}
		</Flex>
	);
};

export default Trivia;
