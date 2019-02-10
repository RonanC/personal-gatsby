import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { extractLastStringInPath } from '../helpers'

const PORTFOLIO_LISTING_QUERY = graphql`
  query PortfolioItemListing {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___startDate] }
      filter: { frontmatter: { category: { eq: "portfolio" } } }
    ) {
      edges {
        next {
          id
        }
        node {
          excerpt
          frontmatter {
            title
            coverImage
            startDate(formatString: "MMM YYYY")
            endDate(formatString: "MMM YYYY")
            technologies
            goals
            projectLink
            gitLink
          }
        }
      }
    }
  }
`

const PortfolioItem = styled.article`
  border-radius: 4px;
  margin-bottom: 2rem;

  h1 {
    font-weight: 900;
  }

  h2 {
    color: #2a2a57;
    font-weight: 100;
    margin-bottom: 0;
  }

  h5 {
    color: grey;
  }

  p {
    font-size: 18px;
  }

  a,
  a :visited {
    text-decoration: none;
    color: #aeafe8;

    strong {
      color: #9056d4;
      font-weight: bold;
    }
  }

  hr {
    margin: 75px 0 50px 0;
    background: #aeafe8;
    height: 1.5px;
  }

  .read-more {
    font-family: 'Open Sans', 'Droid Sans', serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #9056d4;
  }

  .start-date {
    padding-right: 10px;
  }

  .end-date {
    margin-left: 10px;
  }
`

const header = frontmatter => {
  const Header = styled.header`
    h1 {
      margin-bottom: 5px;
    }
  `

  return (
    <Header>
      <h1>{frontmatter.title}</h1>
      <h5>
        <span className="start-date">{frontmatter.startDate}</span>-
        <span className="end-date">{frontmatter.endDate}</span>
      </h5>
    </Header>
  )
}

/**
 * A list of portfolio items.
 */
const PortfolioListing = () => (
  <StaticQuery
    query={PORTFOLIO_LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      !allMarkdownRemark
        ? null
        : allMarkdownRemark.edges.map(edge => (
            <PortfolioItem key={edge.node.frontmatter.title}>
              <img
                src={edge.node.frontmatter.coverImage}
                alt={extractLastStringInPath(edge.node.frontmatter.coverImage)}
              />

              {header(edge.node.frontmatter)}

              <h2>Goals</h2>
              <p>{edge.node.frontmatter.goals}</p>

              <h2>Technologies</h2>
              <p>{edge.node.frontmatter.technologies}</p>

              {!edge.node.frontmatter.projectLink ? null : (
                <h4>
                  <a
                    href={edge.node.frontmatter.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check the <strong>Project</strong> out here
                  </a>
                </h4>
              )}
              {!edge.node.frontmatter.gitLink ? null : (
                <h4>
                  <a
                    href={edge.node.frontmatter.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check the <strong>Source Code</strong> out here
                  </a>
                </h4>
              )}

              {!edge.next || !edge.next.id ? null : <hr />}
            </PortfolioItem>
          ))
    }
  />
)

export default PortfolioListing