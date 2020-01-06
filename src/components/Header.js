import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

const S = {}

S.Header = styled.header`
  margin-bottom: 1rem;

  nav {
    display: flex;
    justify-content: space-between;
  }
`

const Header = ({ title }) => {
  return (
    <S.Header>
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        ></Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/now">Now</Link>
      </nav>
    </S.Header>
  )
}

export default Header
