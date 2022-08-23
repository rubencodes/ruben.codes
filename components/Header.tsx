import React from "react";

import { Heading } from "./styled/Heading";
import { Nav } from "./styled/Nav";
import { NavLink } from "./styled/NavLink";
import { SectionType } from "../types/SectionType";
import { state } from "../utilities/constants";

interface Props {
  activeSection: SectionType;
}

const sectionOrder = [
  SectionType.About,
  SectionType.Experience,
  SectionType.Education,
  SectionType.Projects,
];

export function Header({ activeSection }: Props) {
  return (
    <header>
      <Heading>{state.name}</Heading>
      <Nav>
        {sectionOrder.map((section) => (
          <NavLink
            key={section}
            to={`/${section.toLowerCase()}`}
            isActive={section === activeSection}
          >
            {section}
          </NavLink>
        ))}
        <NavLink to="https://rmj.photography" isActive={false} isExternal>
          Photography
        </NavLink>
        <NavLink
          to={`mailto:${state.home.info.emailAddress}`}
          isActive={false}
          isExternal
        >
          Contact
        </NavLink>
      </Nav>
    </header>
  );
}
