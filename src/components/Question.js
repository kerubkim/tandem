import PropTypes from "prop-types";
import { Stack, Heading, RadioGroup, Radio, Text } from "@chakra-ui/core";

const Question = ({ q, onSaveAnswer }) => {
	const [userAnswer, setUserAnswer] = React.useState(null);

	React.useEffect(() => {
		setUserAnswer(null);
	}, [q]);

	const _onChangeAnswer = (e) => {
		setUserAnswer(e.target.value);
		onSaveAnswer(q, e.target.value);
	};

	return (
		<Stack spacing={4}>
			<Heading as={"h4"}>{q.label}</Heading>
			<RadioGroup value={userAnswer} onChange={(e) => _onChangeAnswer(e)}>
				{q.options.map((o) => (
					<Radio key={o} value={o} isDisabled={userAnswer}>
						<Text color={!userAnswer ? "white.500" : o === q.answer ? "green.500" : "red.400"}>{o}</Text>
					</Radio>
				))}
			</RadioGroup>
			{userAnswer ? <Text>{q.desc}</Text> : null}
		</Stack>
	);
};

export default Question;

Question.propTypes = {
	q: PropTypes.object.isRequired,
	onSaveAnswer: PropTypes.func.isRequired,
};
