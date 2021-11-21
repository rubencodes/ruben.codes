import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import RMJLogo from "./RMJLogo.svg";
import InstagramLink from "./InstagramLink";
import ContactLink from "./ContactLink";

const GALLERIES_PATH = "/photography";
const ABOUT_PAGE_PATH = "/photography/about";

interface Props {
  subheader?: React.ReactNode;
}

const PhotographyHeader: React.FC<Props> = ({ subheader }) => {
  const { pathname } = useRouter();
  const isAboutPage = pathname === ABOUT_PAGE_PATH;

  return (
    <>
      <h1 className="heading">
        <div
          className="heading-image"
          style={{ backgroundImage: `url(${RMJLogo})` }}
        >
          <span className="sr-only">RMJ Photography</span>
        </div>
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
      {subheader && <b className="subheading">{subheader}</b>}
    </>
  );
};

export default PhotographyHeader;
