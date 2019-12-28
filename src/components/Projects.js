import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SingleProject from './SingleProject';
import hotSeatGif from '../images/hot-seat.gif';

const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
      hotseat: file(relativePath: { eq: "hot-seat-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      memoriesmap: file(relativePath: { eq: "memories-map-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      graceshopper: file(relativePath: { eq: "grace-shopper-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
    const projects = [
        { title: 'Hot Seat',
          text: 'A real-time multiplayer game where users can play with each other on their own devices with host screening.',
          webLink: 'https://hot-seat-444.firebaseapp.com/',
          gitHubLink: 'https://github.com/rambak/hot-seat',
          fluid: data.hotseat.childImageSharp.fluid,
          gif: hotSeatGif,
        },
        { title: 'Memories Map',
          text: 'A website where users can share memories on a map and create a personal map with private memories throughout the world.',
          webLink: 'https://sleepy-mountain-74499.herokuapp.com/',
          gitHubLink: 'https://github.com/rim23ma/Stackathon',
          fluid: data.memoriesmap.childImageSharp.fluid,
        },
        { title: 'Grace Shopper',
          text: 'Grace Shopper is a full-featured e-commerce site to sell luxury pencils and accessories',
          webLink: 'https://grace-shopper-fullslackers.herokuapp.com/',
          gitHubLink: 'https://github.com/fullslackers/GraceShopper',
          fluid: data.graceshopper.childImageSharp.fluid,
        },
    ];

    return (
        <div className="projects">
          <div className="container">
            <div className="inner-projects">
              <h3>Recent Projects</h3>
              <div className="projects-section">
                  {projects.map((project, index) => (
                    <SingleProject key={index} title={project.title} text={project.text} webLink={project.webLink} gitHubLink={project.gitHubLink} fluid={project.fluid} gif={project.gif} />
                  ))}
              </div>
            </div>
          </div>
        </div>
    );
};

export default Projects;
