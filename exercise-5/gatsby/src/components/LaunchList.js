import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "theme-ui"

// export const LaunchList = ({ limit = 10 }) => {
//   const { loading, error, data } = useQuery(
//     gql`
//       query LaunchesPast($limit: Int!) {
//         launchesPast(limit: $limit) {
//           mission_name
//           links {
//             article_link
//             video_link
//           }
//           rocket {
//             rocket_name
//           }
//         }
//       }
//     `,
//     {
//       variables: {
//         limit,
//       },
//     }
//   )

//   if (loading) {
//     return <Spinner />
//   } else if (error) {
//     return <Text>{error.message}</Text>
//   } else {
//     return (
//       <ul>
//         {data.launchesPast.map(launch => (
//           <li>
//             <Link href={launch.links.article_link}>{launch.mission_name}</Link>{" "}
//             - {launch.rocket.rocket_name}
//           </li>
//         ))}
//       </ul>
//     )
//   }
// }

export const LaunchList = ({ limit = 10 }) => {
  const data = useStaticQuery(graphql`
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

  return (
    <ul>
      {data.spacex.launchesPast.map(launch => (
        <li>
          <Link href={launch.links.article_link}>{launch.mission_name}</Link> -{" "}
          {launch.rocket.rocket_name}
        </li>
      ))}
    </ul>
  )
}
