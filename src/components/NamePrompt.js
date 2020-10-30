import { useState } from "react";
import PropTypes from "prop-types";
import { Stack, Heading, Input, IconButton } from "@chakra-ui/core";

const NamePrompt = ({ onSubmit }) => {
	const [name, setName] = useState("");

	return (
		<>
			<Stack spacing={3} mb={5}>
				<Heading as="h3">Before we begin, what is your name?</Heading>
				<Input onChange={(e) => setName(e.target.value)} value={name} placeholder="Hi, my name is ..." />
			</Stack>
			<IconButton variant="outline" icon={"chevron-right"} isRound isDisabled={name.length <= 0 ? true : false } onClick={() => onSubmit(name)} />
		</>
	);
};

export default NamePrompt;

NamePrompt.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
