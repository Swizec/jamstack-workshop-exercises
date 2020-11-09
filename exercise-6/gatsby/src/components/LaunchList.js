import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { gql, useQuery } from "@apollo/client"
import { Link, Spinner, Text } from "theme-ui"

const Launches = ({ launches }) => (
  <ul>
    {launches.map(launch => (
      <li>
        <Link href={launch.links.article_link}>{launch.mission_name}</Link> -{" "}
        {launch.rocket.rocket_name}
      </li>
    ))}
  </ul>
)

export const LaunchList = ({ limit = 10 }) => {
  const staticLaunches = useStaticQuery(graphql`
    query LaunchesPast {
      spacex {
        launchesPast(limit: 10) {
          mission_name
          links {
            article_link
            video_link
          }
          rocket {
            rocket_name
          }
        }
      }
    }
  `)

  const { loading, error, data } = useQuery(
    gql`
      query LaunchesPast($limit: Int!) {
        launchesPast(limit: $limit) {
          mission_name
          links {
            article_link
            video_link
          }
          rocket {
            rocket_name
          }
        }
      }
    `,
    {
      variables: {
        limit,
      },
    }
  )

  if (loading) {
    return (
      <>
        <Launches launches={staticLaunches.spacex.launchesPast} />
        <Spinner />
      </>
    )
  } else if (error) {
    return (
      <>
        <Launches launches={staticLaunches.spacex.launchesPast} />
        <Text>{error.message}</Text>
      </>
    )
  } else {
    return <Launches launches={data.launchesPast} />
  }
}
