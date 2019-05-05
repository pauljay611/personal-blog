import React from "react"
import { Link, graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from "../components/layout"
import Blog from "../components/blog/index"
import Tag from "../components/blog/tag"
import SEO from "../components/seo"
import 'react-fontawesome'

const BlogContainer = styled.div`
	padding: 0 4%;
`

const BlogPage = ({ data }) => {
	const group = data.allMarkdownRemark.group.map((tag, key) => {
		return <Link to={`/tags/${tag.fieldValue}/`}><span key={key}>{tag.fieldValue}({tag.totalCount})</span></Link>
	})
	return (
		<Layout>
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
			<BlogContainer>
				<h3>Latest Posts </h3>
				<Tag>TAGS : <Link to={`/tags`}><span>All</span></Link>{group}</Tag>
				<Blog data={data}></Blog>
			</BlogContainer>
		</Layout>
	)
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
	  group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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