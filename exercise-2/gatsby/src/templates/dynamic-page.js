import React from "react"

import SEO from "../components/seo"

import { Box, Button, Container, Heading, useColorMode } from "theme-ui"
const modes = ["light", "dark", "deep"]

const DynamicPage = ({ pageContext }) => {
  const [mode, setMode] = useColorMode()

  function cycleMode() {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <Container>
      <SEO title={`Dynamic page ${pageContext.pageNumber}`} />

      <Heading>Dynamic page {pageContext.pageNumber}</Heading>

      <p>This is a dynamic page generated at build time</p>

      <p>You can change themes 👇</p>
      <Box sx={{ textAlign: "center" }}>
        <Button onClick={cycleMode}>Cycle theme</Button>
      </Box>
    </Container>
  )
}

export default DynamicPage
