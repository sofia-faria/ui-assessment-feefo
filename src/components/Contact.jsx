import React from "react";
import Row from "./Row";
import { StyledContact } from "./styles/Contact.styled";
import {StyledContactImage} from "./styles/ContactImage.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact({contact}) {
  return (
    <StyledContact>
      <Row>
        <p id='title'>YOUR FEEFO SUPPORT CONTACT</p>
      </Row>
      <Row>
        <StyledContactImage>
          <p id='initial'>{contact.name[0]}</p>
        </StyledContactImage>
        <Row className = "contactInfo">
          <span id ='support'>{contact.name}</span>
          <FontAwesomeIcon className="emailIcon" icon={faEnvelope} />
          <span id = 'email'>{contact.email}</span>
          {/* next line is assuming there is a field named phone for the mobile phone in the ui */}
          <span id = 'email'>{contact.phone}</span> 
        </Row>
        
      </Row>
    </StyledContact>
  );
}

export default Contact;
