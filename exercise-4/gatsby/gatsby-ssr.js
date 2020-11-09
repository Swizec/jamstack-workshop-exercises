/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
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
