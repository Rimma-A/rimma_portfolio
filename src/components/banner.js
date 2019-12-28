import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      colibriRight: file(relativePath: { eq: "bird-4585450_1280.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      colibriLeft: file(relativePath: { eq: "bird-158334_1280.png" }) {
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
            <Img fluid={data.colibriRight.childImageSharp.fluid} />
          </div>
          <div className="main-text">Rimma Akhmedyanova</div>
          <div className ="side-image right">
            <Img fluid={data.colibriLeft.childImageSharp.fluid} />
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
