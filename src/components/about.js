import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="about">
      <div className="container">
        <div className="inner-about">
          <div className="content">
            <h3>About</h3>
            <p>As a teenager, I always loved math, logical thinking and rapid learning. After earning my degree in Urban Planning and exploring the hospitality industry, I wanted apply my engineer’s mindset to build software. To accelerate my transition into web development, I attended Fullstack Academy. I understand the importance of teamwork and being helpful to others. I'm currently a full-stack developer specializing in Javascript, and I'm always open to new technologies.</p>
            <div className="btn-row">
              <Link to="/work">View Projects</Link>
            </div>
          </div>
          <div className="image">
            <div className="center">
              <Img fluid={data.avatar.childImageSharp.fluid}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
