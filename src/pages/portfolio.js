import React from "react"

import Layout from "../components/layout"
import Portfolio from "../components/portfolio/index"
import SEO from "../components/seo"

import styled from 'styled-components';
import { graphql } from "gatsby";

const PortfolioContainer = styled.div`
    padding: 0 21%;
`

const PortfolioPage = ({ data }) => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PortfolioContainer>
            <Portfolio data={data}></Portfolio>
        </PortfolioContainer>
    </Layout>
)

export default PortfolioPage

export const query = graphql`
query {
		allImageSharp {
        	edges {
                node {
                ... on ImageSharp {
                    sizes(maxWidth:300) {
                        src
                        originalName
                    }
                }
            }
        }
    }
}

`