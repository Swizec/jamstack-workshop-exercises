import { ThemeProvider } from "theme-ui";
import sketchy from "theme-ui-sketchy-preset";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={sketchy}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Architects+Daughter"
                />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
