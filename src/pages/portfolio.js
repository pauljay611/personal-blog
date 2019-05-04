import React from "react"

import Layout from "../components/layout"
import Portfolio from "../components/portfolio/index"
import SEO from "../components/seo"

const PortfolioPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Portfolio></Portfolio>
    </Layout>
)

export default PortfolioPage