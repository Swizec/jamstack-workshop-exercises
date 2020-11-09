import React from "react"
import { Container, Heading } from "theme-ui"
import { LaunchList } from "../components/LaunchList"

import SEO from "../components/seo"

const Launches = () => {
  return (
    <Container>
      <SEO title="SpaceX Launches" />
      <Heading>SpaceX Launches</Heading>

      <LaunchList />
    </Container>
  )
}

export default Launches
