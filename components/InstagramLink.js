import React from "react";

const InstagramLink = ({ children }) => (
  <a href="https://instagram.com/rubencodes" target="_blank" rel="noreferrer">
    {children || "Follow on Instagram"}
  </a>
);

export default InstagramLink;
