import Head from "next/head";
import { Container, Heading, Link, Spinner, Text } from "theme-ui";
import { dehydrate } from "react-query/hydration";
import { QueryCache, useQuery } from "react-query";

async function getLaunches(key, limit) {
    const res = await fetch(
        `https://api.spacex.land/rest/launches-past?limit=${limit}`
    );
    return res.json();
}

export async function getServerSideProps() {
    const queryCache = new QueryCache();
    await queryCache.prefetchQuery(["launches-past", 10], getLaunches);

    return {
        props: {
            dehydratedState: dehydrate(queryCache),
        },
    };
}

const LaunchList = ({ limit = 10 }) => {
    const { isLoading, error, data } = useQuery(
        ["launches-past", limit],
        getLaunches,
        {
            staleTime: 5 * 60 * 1000,
        }
    );

    if (isLoading) {
        return <Spinner />;
    } else if (error) {
        return <Text>{error.message}</Text>;
    } else {
        return (
            <ul>
                {data.map((launch) => (
                    <li>
                        <Link href={launch.links.article_link}>
                            {launch.mission_name}
                        </Link>{" "}
                        - {launch.rocket.rocket_name}
                    </li>
                ))}
            </ul>
        );
    }
};

const Launches = () => {
    return (
        <Container>
            <Head>
                <title>SpaceX Launches</title>
            </Head>

            <Heading>SpaceX Launches</Heading>
            <LaunchList limit={10} />
        </Container>
    );
};

export default Launches;
