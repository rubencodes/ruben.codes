import React from "react";

import { Heading } from "./styled/Heading";
import { Nav } from "./styled/Nav";
import { NavItem } from "./styled/NavItem";
import { NavLink } from "./styled/NavLink";
import { SectionType } from "../types/SectionType";
import { state } from "../utilities/constants";

interface Props {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

const sectionOrder = [
  SectionType.About,
  SectionType.Experience,
  SectionType.Education,
  SectionType.Projects,
];

export function Header({ activeSection, setActiveSection }: Props) {
  return (
    <header>
      <Heading>{state.name}</Heading>
      <Nav>
        {sectionOrder.map((section) => (
          <NavItem
            key={section}
            onClick={() => setActiveSection(section)}
            isActive={section === activeSection}
          >
            {section}
          </NavItem>
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
