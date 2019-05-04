import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components';

const ArticlesBlock = styled.div`
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	background-color: rgba(255, 255, 255, 1);
	padding: 0 2%;
	margin: 2% 0;
	h3 {
		margin: 4% 0 2% 0;
	}
	a {
		color: #000;
	}
`
const Tag = styled.p`
    span {
        margin-right: 1%;
        background-color: #E5E5E5
    }

`

const Blog = (props) => {
    const articles = props.data.allMarkdownRemark.edges.map((article, key) => {
        const tags = article.node.frontmatter.tags.map((tag, key) => {
            return <span key={key}>{tag}</span>
        })
        return <ArticlesBlock key={key}>
            <Link to={article.node.fields.slug}>
                <h3>{article.node.frontmatter.title}</h3>
                <p>{article.node.frontmatter.excerpt}</p>
                <p>{article.node.frontmatter.date}</p>
            </Link>
            <Tag>{tags}</Tag>
        </ArticlesBlock>
    })
    return (
        <>
            {articles}
        </>
    )
}
export default Blog