import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import RMJLogo from "./RMJLogo.svg";
import InstagramLink from "./InstagramLink";
import ContactLink from "./ContactLink";

const GALLERIES_PATH = "/photography";
const ABOUT_PAGE_PATH = "/photography/about";

const PhotographyHeader = ({ subheader }) => {
  const { pathname } = useRouter();
  const isAboutPage = pathname === ABOUT_PAGE_PATH;

  return (
    <>
      <h1 className="heading">
        <img className="heading-image" src={RMJLogo} alt="RMJ Photography" />
        <div className="heading-actions">
          <InstagramLink />
          <ContactLink />
          {isAboutPage ? (
            <Link href={GALLERIES_PATH}>View Galleries</Link>
          ) : (
            <Link href={ABOUT_PAGE_PATH}>About Me</Link>
          )}
        </div>
      </h1>
      <b className="subheading">{subheader}</b>
    </>
  );
};

export default PhotographyHeader;
