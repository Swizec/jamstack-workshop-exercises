import React from "react"
import { gql, useQuery } from "@apollo/client"
import { Link, Spinner, Text } from "theme-ui"

export const LaunchList = () => {
  const { loading, error, data } = useQuery(gql`
    {
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
  `)

  if (loading) {
    return <Spinner />
  } else if (error) {
    return <Text>{error.message}</Text>
  } else {
    return (
      <ul>
        {data.launchesPast.map(launch => (
          <li>
            <Link href={launch.links.article_link}>{launch.mission_name}</Link>{" "}
            - {launch.rocket.rocket_name}
          </li>
        ))}
      </ul>
    )
  }
}
