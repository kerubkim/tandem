import PropTypes from "prop-types";
import { Stack, Heading, Radio } from "@chakra-ui/core";
import firebase from "../firebase";
import Question from "./Question";

const Quiz = ({ onQuizFinish }) => {
	const [questions, setQuestions] = React.useState(null);
	const [questionNumber, setQuestionNumber] = React.useState(0);
	const [totalCorrect, setTotalCorrect] = React.useState(0);

	const _saveAnswer = (q, answer) => {
		setTotalCorrect((prevState) => (q.answer === answer ? prevState + 1 : prevState));
		setQuestionNumber((prevState) => prevState + 1);
	};

	React.useEffect(() => {
        if(questions && questions.length > 0 && questionNumber === questions.length) {
		onQuizFinish(totalCorrect, questions.length);
        }
	}, [questionNumber]);

	React.useEffect(() => {
		firebase.getAllQuestions("seasonOne").then((qs) => setQuestions(qs));
	}, []);

	return <Stack>{!questions ? <Heading>Quiz</Heading> : questionNumber === questions.length ? <Heading>Result {totalCorrect}</Heading> : <Question q={questions[questionNumber]} onSaveAnswer={_saveAnswer} />}</Stack>;
};

export default Quiz;

Quiz.propTypes = {
	onQuizFinish: PropTypes.func.isRequired,
};