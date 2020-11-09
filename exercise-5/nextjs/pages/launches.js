import Head from "next/head";
import { Container, Heading, Link } from "theme-ui";

async function getLaunches(limit) {
    const res = await fetch(
        `https://api.spacex.land/rest/launches-past?limit=${limit}`
    );
    return res.json();
}

export async function getServerSideProps() {
    const launches = await getLaunches(10);

    return {
        props: {
            launches,
        },
    };
}

const Launches = ({ launches }) => {
    return (
        <Container>
            <Head>
                <title>SpaceX Launches</title>
            </Head>

            <Heading>SpaceX Launches</Heading>
            <ul>
                {launches.map((launch) => (
                    <li>
                        <Link href={launch.links.article_link}>
                            {launch.mission_name}
                        </Link>{" "}
                        - {launch.rocket.rocket_name}
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Launches;
