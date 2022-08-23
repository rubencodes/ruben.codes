import React from "react";

import MainItem from "./MainItem";
import InlineGallery from "./InlineGallery";
import { Sidebar } from "./Sidebar";

import { Subheading } from "./styled/Subheading";
import { Section } from "./styled/Section";
import { ExternalLink } from "./styled/ExternalLink";
import { SectionType } from "../types/SectionType";
import { state } from "../utilities/constants";

interface Props {
  activeSection: SectionType;
}

export function Main({ activeSection }: Props) {
  const { art, design, experience, education, projects } = state.home;
  return (
    <main>
      {activeSection === SectionType.About && (
        <>
          <Section>
            <Subheading>About</Subheading>
            <p className="text light">
              Hello! I&apos;m Ruben. My pronouns are he/him/his. I&apos;m a
              developer, designer, and photographer, who&apos;s passionate about
              building cool stuff.
              <br />
              <br />I currently work as a Staff Engineer at{" "}
              <ExternalLink className="text-pink-500" to="https://okcupid.com">
                OkCupid
              </ExternalLink>
              , in New York City. I work on the Web Core team, empowering other
              developers to be productive with the data, tools, and abstractions
              to do their jobs most effectively. I&apos;ve had the opportunity
              to work on several major projects during my time at OkCupid,
              including a major refactor of the Desktop and Mobile Web platforms
              from a legacy home-rolled static HTML framework into a React-based
              Single Page App. I&apos;ve also converted major chunks of
              application logic to TypeScript, added Honeycomb tracing to our
              frontend and API, and added end-to-end test coverage using
              Cypress, all of which resulted in significant improvements to
              developer productivity and reductions in overall downtime.
              <br />
              <br />
              Previously, I worked at{" "}
              <ExternalLink className="text-green-600" to="https://slack.com">
                Slack
              </ExternalLink>
              , building data visualizations for our enterprise customers to
              help them understand how best to take advantage of the Slack
              product. Prior to that, I was employee #2 at{" "}
              <ExternalLink className="text-blue-500" to="https://wellapp.com">
                WELL Health
              </ExternalLink>
              , a Techstars-funded startup dedicated to improving the patient
              healthcare experience, where I designed and developed their
              Progressive Web App. I graduated from{" "}
              <ExternalLink to="https://bowdoin.edu">
                Bowdoin College
              </ExternalLink>{" "}
              in 2015 with a degree in Computer Science and Visual Arts. That
              summer, I was selected to attend WWDC as a Student Scholar. I also
              wrote a book on building Swift apps for WatchOS v1.
              <br />
              <br />
              If you&apos;d like to get to know more about me, check out the
              rest of my site, or feel free to reach out.
            </p>
          </Section>
          <Sidebar />
        </>
      )}
      {activeSection === SectionType.Art && (
        <Section>
          <Subheading>Art</Subheading>
          <div className="">
            <InlineGallery {...art} />
          </div>
        </Section>
      )}
      {activeSection === SectionType.Experience && (
        <Section>
          <Subheading>Experience</Subheading>
          {experience.map((props, i) => (
            <MainItem key={i} {...props} />
          ))}
        </Section>
      )}
      {activeSection === SectionType.Education && (
        <Section>
          <Subheading>Education</Subheading>
          {education.map((props, i) => (
            <MainItem key={i} {...props} />
          ))}
        </Section>
      )}
      {activeSection === SectionType.Projects && (
        <Section>
          <Subheading>Projects</Subheading>
          {projects.map((props, i) => (
            <MainItem key={i} {...props} />
          ))}
        </Section>
      )}
      {activeSection === SectionType.Design && (
        <Section>
          <Subheading>Design</Subheading>
          <p className="time">
            {"Examples of apps and promotional materials I've designed."}
          </p>
          <div className="">
            <InlineGallery {...design} />
          </div>
        </Section>
      )}
    </main>
  );
}
