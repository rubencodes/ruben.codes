import React from "react";

import RMJLogo from "./RMJLogo.svg";
import InstagramLink from "./InstagramLink";
import ContactLink from "./ContactLink";

const PhotographyHeader = ({ subheader }) => (
  <>
    <h1 className="heading">
      <img className="heading-image" src={RMJLogo} alt="RMJ Photography" />
      <div className="heading-actions">
        <InstagramLink />
        <ContactLink />
      </div>
    </h1>
    <b className="subheading">{subheader}</b>
  </>
);

export default PhotographyHeader;
