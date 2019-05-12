import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components';
import React from "react"

const NavBar = styled.div`
    a {
      margin-left: 4%;
      &:hover {
        color: #fff
      }
    }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      width: '100%',
      background: `#363636`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/portfolio">Portfolio</Link>
      </NavBar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
