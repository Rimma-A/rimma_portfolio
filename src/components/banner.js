import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      vine: file(relativePath: { eq: "vine2.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      colibri: file(relativePath: { eq: "colibri.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pigeon: file(relativePath: { eq: "pigeon-3303111_1280.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className ="side-image left">
            <Img fluid={data.colibri.childImageSharp.fluid} />
          </div>
          <div className="main-text">Rimma Akhmedyanova</div>
          <div className="main-image">
            <Img fluid={data.vine.childImageSharp.fluid} />
          </div>
          <div className ="side-image right">
            <Img fluid={data.pigeon.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Software Developer</div>
    </div>
  )
}

export default Banner
