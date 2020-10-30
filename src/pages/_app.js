import { Global, css } from "@emotion/core";
import { ThemeProvider, CSSReset, ColorModeProvider, Stack, IconButton } from "@chakra-ui/core";
import UserProvider from "../context/userContext";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Link from "next/link";

import theme from "../theme";

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<UserProvider>
				<ColorModeProvider value="dark">
					<CSSReset />
					<Global
						styles={css`
							html,
							body,
							#__next {
								height: 100%;
							}
						`}
					/>
					<Component {...pageProps} />
                    <DarkModeSwitch />
                    <Stack position="fixed" top="10px" left="1rem" isInline>
                        <Link href="/">
                            <IconButton mr={2} icon="question-outline" isRound size="sm" />
                        </Link>
                        <Link href="/score">
                            <IconButton icon="star" isRound size="sm" />
                        </Link>
                    </Stack>
				</ColorModeProvider>
			</UserProvider>
		</ThemeProvider>
	);
};

export default MyApp;
