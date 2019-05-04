import React from "react"

import Layout from "../components/layout"
import Resume from "../components/resume/index"
import SEO from "../components/seo"
import 'react-fontawesome'

const ResumePage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Resume></Resume>
    </Layout>
)

export default ResumePage