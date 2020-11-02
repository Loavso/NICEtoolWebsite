import * as React from 'react'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const index = ({data}: Props) => {
    return(
    <div>
        Hello World!
    </div>
)}

export default index