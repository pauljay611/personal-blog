import React from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import Home from "../components/home/index"
import SEO from "../components/seo"
import 'react-fontawesome'

const HomeContainer = styled.div`
  padding: 0 21%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`resume`, `javascript`, `react`, `vue`, `paul yang`]} />
    <HomeContainer>
      <Home></Home>
    </HomeContainer>
  </Layout>
)

export default IndexPage
