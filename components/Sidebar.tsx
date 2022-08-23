import React from "react";

import { Subheading } from "./styled/Subheading";
import { state } from "../utilities/constants";
import { Section } from "./styled/Section";

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
                <a href={href} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
