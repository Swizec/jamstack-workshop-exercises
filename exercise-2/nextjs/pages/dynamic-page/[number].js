import Head from "next/head";
import { useRouter } from "next/router";

import { Box, Button, Container, Heading, useColorMode } from "theme-ui";
const modes = ["light", "dark", "deep"];

const DynamicPage = () => {
    const router = useRouter();
    const [mode, setMode] = useColorMode();

    const { number } = router.query;

    function cycleMode() {
        const i = (modes.indexOf(mode) + 1) % modes.length;
        setMode(modes[i]);
    }

    return (
        <Container>
            <Head>
                <title>Dynamic page {number}</title>
            </Head>

            <Heading>Dynamic page {number}</Heading>

            <p>This is a dynamic page generated at build time</p>

            <p>You can change themes 👇</p>
            <Box sx={{ textAlign: "center" }}>
                <Button onClick={cycleMode}>Cycle theme</Button>
            </Box>
        </Container>
    );
};

export default DynamicPage;
