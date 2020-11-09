import React from "react"
import { useQuery } from "react-query"
import { Spinner, Text, Link } from "theme-ui"

export const LaunchListREST = () => {
  const { isLoading, error, data } = useQuery(
    ["launches-past"],
    async () => {
      const res = await fetch(
        "https://api.spacex.land/rest/launches-past?limit=10"
      )
      return res.json()
    },
    {
      staleTime: 5 * 60 * 1000,
    }
  )

  if (isLoading) {
    return <Spinner />
  } else if (error) {
    return <Text>{error.message}</Text>
  } else {
    return (
      <ul>
        {data.map(launch => (
          <li>
            <Link href={launch.links.article_link}>{launch.mission_name}</Link>{" "}
            - {launch.rocket.rocket_name}
          </li>
        ))}
      </ul>
    )
  }
}
