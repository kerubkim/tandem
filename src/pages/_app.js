import { Global, css } from "@emotion/core";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import UserProvider from "../context/userContext";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

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
				</ColorModeProvider>
			</UserProvider>
		</ThemeProvider>
	);
};

export default MyApp;
