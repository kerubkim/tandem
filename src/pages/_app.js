import { Global, css } from "@emotion/core";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<ColorModeProvider value="dark">
				<CSSReset />
				<Global
					styles={css`
						#__next {
							height: 100%;
						}
					`}
				/>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ThemeProvider>
	);
}

export default MyApp;
