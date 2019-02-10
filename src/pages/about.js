import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ABOUT_IMAGE_QUERY = graphql`
  query AboutImageQuery {
    file(relativePath: { regex: "/walk_in_the_city/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

/**
 * The About Us page.
 */
const AboutPage = ({ location }) => (
  <StaticQuery
    query={ABOUT_IMAGE_QUERY}
    render={data => (
      <Layout location={location}>
        <SEO title="About Us" keywords={[`about us`, `about`, `information`]} />

        <div>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              maxWidth: '500px',
              margin: 'auto',
            }}
          />

          <p>
            Truffaut iceland 8-bit, ut chartreuse sriracha aliquip edison bulb
            austin snackwave ullamco adaptogen. Everyday carry pok pok narwhal
            aliqua reprehenderit iceland asymmetrical kale chips 90's portland
            keffiyeh hot chicken. Celiac banh mi pariatur marfa. Aesthetic
            pitchfork crucifix qui forage et do mixtape banh mi cardigan occupy
            viral. Duis green juice typewriter jean shorts et you probably
            haven't heard of them gastropub hot chicken in neutra sed fixie.
            Affogato labore duis meh, single-origin coffee farm-to-table salvia
            lo-fi tumblr veniam irure. Flexitarian velit pariatur cray 90's
            occaecat do retro officia bicycle rights street art put a bird on it
            semiotics.
          </p>
          <p>
            Tbh +1 offal humblebrag lorem leggings tote bag pop-up ugh. Drinking
            vinegar trust fund tattooed cliche, magna williamsburg mollit.
            Fingerstache scenester williamsburg drinking vinegar raclette
            kickstarter, master cleanse chartreuse mixtape non microdosing. Hell
            of yuccie green juice artisan tilde. Bespoke tacos shaman trust fund
            cliche. Magna jean shorts readymade roof party adaptogen +1 tofu
            duis listicle waistcoat exercitation adipisicing post-ironic hammock
            labore.
          </p>
        </div>
      </Layout>
    )}
  />
)

export default AboutPage