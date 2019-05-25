import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"

const BlogContainer = styled.div`
	padding: 0 21%;
`

export default ({ data }) => {
	const post = data.markdownRemark
	return (
		<Layout>
			<BlogContainer>
				<h1>{post.frontmatter.title}</h1>
				<p>{post.frontmatter.date}</p>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</BlogContainer>
		</Layout>
	)
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
		title
		date
      }
    }
  }
`