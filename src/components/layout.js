import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Layout = ({ isHomePage, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
        }
      }
    }
  `)
  const title = data.wp.generalSettings.title
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout
