import React from "react"
import Layout from "../components/layout"
// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMarkdownRemark
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? "" : "s"
		} tagged with "${tag}"`

	return (
		<Layout>
			<div style={{ "padding": "0 4%" }}>
				<h1>{tagHeader}</h1>
				<ul>
					{edges.map(({ node }) => {
						const { slug } = node.fields
						const { title } = node.frontmatter
						return (
							<li key={slug}>
								<Link to={slug}>{title}</Link>
							</li>
						)
					})}
				</ul>
				{/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
				<Link to="/blog">Back to Blog</Link>
			</div>
		</Layout>
	)
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`