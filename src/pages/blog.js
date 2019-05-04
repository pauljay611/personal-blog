import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from "../components/layout"
import Blog from "../components/blog/index"
import Tag from "../components/blog/tag"
import SEO from "../components/seo"
import 'react-fontawesome'

const BlogContainer = styled.div`
	padding: 0 4%;
`
const findTag = () => {
  console.log(1234)
}
const BlogPage = ({ data }) => {
  const tags = ['ReactJS', 'VueJS', 'VanillaJS', 'NodeJS', 'GraphQL']
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BlogContainer>
        <h3>Latest Posts </h3>
        <Tag>TAGS : <span>All</span></Tag>
        <Blog data={data} findTag={findTag}></Blog>
      </BlogContainer>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC } 
      ) {
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