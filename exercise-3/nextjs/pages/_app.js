import { ThemeProvider } from "theme-ui";
import sketchy from "theme-ui-sketchy-preset";
import Head from "next/head";

const theme = {
    ...sketchy,
    colors: {
        ...sketchy.colors,
        modes: {
            light: {
                ...sketchy.colors,
            },
            dark: {
                text: "#fff",
                background: "#000",
                copyBackground: "hsl(167, 6%, 42%)",
                primary: "#0ff",
                secondary: "#b0f",
                accent: "#f0b",
                muted: "#111",
                gray: "#999",
                lightgray: "#444",
            },
            deep: {
                text: "hsl(210, 50%, 96%)",
                background: "hsl(230, 25%, 18%)",
                primary: "hsl(260, 100%, 80%)",
                secondary: "hsl(290, 100%, 80%)",
                highlight: "hsl(260, 20%, 40%)",
                purple: "hsl(290, 100%, 80%)",
                muted: "hsla(230, 20%, 0%, 20%)",
                gray: "hsl(210, 50%, 60%)",
            },
        },
    },
};

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
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
