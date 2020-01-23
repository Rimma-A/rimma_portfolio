import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedinIn, faGithub, faEnvelope)

const ContactMe = () => {

  const links = {
    linkedIn: 'https://www.linkedin.com/in/rimma-akhmedyanova/',
    gitHub: 'https://github.com/rim23ma',
    email: 'mailto:rimmaakhmedyanova@gmail.com',
  };

  return (
    <div className="contactMe">
      <div className="inner-contactMe">
        <h3>Contact me</h3>
        <div className="link-row">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={{color:`#008CBA`, fontSize:50}} className="icon" onClick={() => {
                    window.open(links.linkedIn, "_blank")
          }}/>
          <FontAwesomeIcon icon={['fab', 'github']} style={{color:`#008CBA`, fontSize:50}} className="icon" onClick={() => {
                    window.open(links.gitHub, "_blank")
          }}/>
          <FontAwesomeIcon icon={['fa', 'envelope']} style={{color:`#008CBA`, fontSize:50}} className="icon" onClick={() => {
                    window.open(links.email, "_blank")
          }}/>
        </div>
      </div>
    </div>
  )
};

export default ContactMe;
