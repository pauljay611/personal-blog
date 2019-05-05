import React from "react"
import Layout from "../components/layout"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
	data: {
		allMarkdownRemark: { group },
		site: {
			siteMetadata: { title },
		},
	},
}) => (
		<Layout>
			<div style={{ "padding": "0 4%" }}>
				<Helmet title={title} />
				<div>
					<h1>All Tags</h1>
					<ul>
						{group.map(tag => (
							<li key={tag.fieldValue}>
								<Link to={`/tags/${tag.fieldValue}/`}>
									{tag.fieldValue} ({tag.totalCount})
                            </Link>
							</li>
						))}
					</ul>
					<Link to="/blog">Back to latest posts</Link>
				</div>
			</div>
		</Layout>
	)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`