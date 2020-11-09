import React, { useState } from "react"
import { Button, Container, Heading } from "theme-ui"
import { LaunchList } from "../components/LaunchList"
import { LaunchListREST } from "../components/LaunchListREST"

import SEO from "../components/seo"

const Launches = () => {
  const [double, setDouble] = useState()

  return (
    <Container>
      <SEO title="SpaceX Launches" />
      <Heading>SpaceX Launches</Heading>

      <LaunchList />
      {double ? <LaunchList /> : null}

      <Heading>Using REST</Heading>
      <LaunchListREST />
      {double ? <LaunchListREST /> : null}

      <Button onClick={() => setDouble(true)}>Double the list</Button>
    </Container>
  )
}

export default Launches
