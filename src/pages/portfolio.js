import React from "react"

import Layout from "../components/layout"
import Portfolio from "../components/portfolio/index"
import SEO from "../components/seo"

import styled from 'styled-components';

const PortfolioContainer = styled.div`
    padding: 0 4%;
`

const PortfolioPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PortfolioContainer>
            <Portfolio></Portfolio>
        </PortfolioContainer>
    </Layout>
)

export default PortfolioPage