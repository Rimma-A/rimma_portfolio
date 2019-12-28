
import React from 'react';
import ProjectText from './ProjectText';
import Img from 'gatsby-image';

const SingleProject = ({title, text, webLink, gitHubLink, fluid, gif}) => {
  console.log("weblink", webLink);
  return (
    <div className="project-section">
      <div className="image">
        <div className="center">
          { gif ? <img src={gif} alt="hot seat gif" /> : <Img fluid={fluid} /> }
        </div>
      </div>
      <div className="project-content">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="content">
          <p>{text}</p>
        </div>
        <div className="buttons">
          <button className="button" onClick={() => window.open(webLink, "__blank")} >
            View Project
          </button>
          <button className="button" onClick={() => window.open(gitHubLink, "__blank")} >
            Source Code
          </button>
        </div>
      </div>
    </div>
  )
};
export default SingleProject;
