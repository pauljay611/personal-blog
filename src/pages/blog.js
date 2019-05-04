import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from "../components/layout"
import Blog from "../components/Blog/index"
import SEO from "../components/seo"
import 'react-fontawesome'

const BlogContainer = styled.div`
	padding: 0 4%;
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BlogContainer>
        <h3>Latest Posts</h3>
        <Blog data={data}></Blog>
      </BlogContainer>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
			      title
            excerpt
            tags
            date(formatString: "DD MMMM, YYYY")
		      }
		      fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`