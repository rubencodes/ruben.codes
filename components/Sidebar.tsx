import React from "react";

import { Subheading } from "./styled/Subheading";
import { Section } from "./styled/Section";
import { state } from "../utilities/constants";
import { ExternalLink } from "./styled/ExternalLink";

export function Sidebar() {
  const { skills, links } = state.home;
  return (
    <>
      {skills && (
        <Section>
          <Subheading>Skills</Subheading>
          <p className="text-gray-800">{skills.join(" • ")}</p>
        </Section>
      )}
      {links && (
        <Section>
          <Subheading>Links</Subheading>
          <ul>
            {links.map(({ title, href }, i) => (
              <li key={i}>
                <ExternalLink className="text-indigo-500" to={href}>
                  {title}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
