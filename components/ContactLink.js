import React from "react";

const ContactLink = ({ children }) => (
  <a href="mailto:ruben@rmj.photography" target="_blank" rel="noreferrer">
    {children || "Contact Me"}
  </a>
);

export default ContactLink;
