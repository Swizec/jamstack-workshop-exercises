/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from "react"
import { QueryCache, ReactQueryCacheProvider } from "react-query"

const queryCache = new QueryCache()

export const wrapRootElement = ({ element }) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {element}
    </ReactQueryCacheProvider>
  )
}
