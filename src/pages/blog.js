import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    // ...
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage