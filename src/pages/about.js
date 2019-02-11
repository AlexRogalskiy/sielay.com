/** @jsx jsx */
import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import { FaIcon } from '../layouts/theme';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

const List = ({ edges }) => (
  <ul>
    {edges.map(({ node: { link, title, date, description } }, key) => (
      <li key={key}>
        <a href={link}>{title}</a>
        <p>{description || date}</p>
      </li>
    ))}
  </ul>
);

const References = ({ edges }) => (
  <ul>
    {edges.map(({ node: { name, title, content, when } }, key) => (
      <li key={key}>
        <h3>{name}</h3>
        <p>
          <strong>{title}</strong>
        </p>
        <p>{content}</p>
        <p>{when}</p>
      </li>
    ))}
  </ul>
);

const LabelledList = ({ list, Decorator }) => (
  <ul>
    {list.map(
      ({ node, node: { label, from, to, company, logo, position } }, key) => (
        <li key={key}>
          <a>{label || `${from} - ${to}`}</a>
          {company ? (
            <h2>
              {logo && <im src={logo} alt={company} />}
              {company}
              {position && <small>{position}</small>}
            </h2>
          ) : null}
          <ul>
            <Decorator node={node} />
          </ul>
        </li>
      )
    )}
  </ul>
);

const SkillNodes = ({ node }) =>
  node.items.map(({ icon, label, description }, key) => (
    <li key={key}>
      {FaIcon(icon)}
      <h4>{label}</h4>
      {description && description.length && <p>{description}</p>}
    </li>
  ));

const XpNodes = withTheme(({ node, theme }) =>
  node.items.map(({ link, label, description, tech }, key) => (
    <li key={key}>
      {link
        ? [
            <a key={0} href={link}>
              {label}
            </a>,
            <p key={1}>{description}</p>
          ]
        : [
            <strong>{label}</strong>,
            description && description.length && <p key={1}>{description}</p>
          ]}
      {tech && (
        <div key={2}>
          {' '}
          {tech.map(({ color, icon, label }, key) => (
              <span key={key}
                css={css(`
                  color: white;
                  display: inline-block;
                  padding: .5rem 1rem;
                  margin-right: .5rem;
                  margin-top: .5rem;
                  & > svg {
                    margin-right: .5rem;
                    vertical-align: middle;
                  }
              `)}
                style={{
                  background: theme.named[color]
                }}
              >
                {FaIcon(icon)}
                {label}
              </span>
          ))}{' '}
        </div>
      )}
    </li>
  ))
);

const Tabs = withTheme(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 0
      };
    }
    render() {
      const { theme, panes } = this.props;
      const { active } = this.state;
      return (
        <div
          css={css(`
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: stretch;
            align-items: stretch;
            & > * {
              order: 0;
              align-self: auto;
            }
            & > ul:first-child {
              margin: 0px;
              flex: 0 0 auto;
              padding: 0px;
              width: 200px;
              list-style: none;
              border-right: 1px solid ${theme.shade};
            }
            & > ul:first-child > li {
              border: 1px solid transparent;
              padding: 1rem;
              border-right: none;
            }
            & > ul:first-child > li.active, & > ul:first-child > li:hover {
              cursor: pointer;
              border: 1px solid ${theme.shade};
              border-right: none;
              border-radius: .5rem 0 0 .5rem;
            }
            & > *:not(:first-child) {
              border-top: 1px solid ${theme.shade};
              padding: 1rem;
              flex: 1 1 auto;
            }
            & > ul:not(:first-child),
            & > *:not(:first-child) ul {
              list-style: none;
              margin: 0px;
              padding: 1rem 0 0 1rem
            }
            `)}
        >
          <ul>
            {panes.map(({ label }, key) => (
              <li
                onClick={() => this.setState({ active: key })}
                key={key}
                className={key === active ? 'active' : null}
              >
                {label}
              </li>
            ))}
          </ul>
          {panes && panes[active] && panes[active].render()}
        </div>
      );
    }
  }
);

const About = withTheme(
  ({
    theme,
    data: {
      experience,
      references,
      skills,
      projects,
      repos,
      contributions,
      articles
    }
  }) => (
    <main>
      <p>
        Hi, my name is Łukasz (pronounced [ˈwukaʂ]). Originally from Szczecin,
        Poland. Now living in Wimbledon, London, United Kingdom. I’m a father,
        husband, software developer, team lead, aspiring enreprenour and amatour
        cyclist. I started with web early. I kept failing and reinventing
        myself. Now I start over, simpler, without too much stress.
      </p>
      <div
        css={css(`
  background: ${theme.shade};
  padding: 1rem;
  border-radius: .5rem;
  margin: 1rem 0;
`)}
      >
        I'm currently <strong>OFF THE MARKET</strong> and I'm not planning to
        come back to it anytime soon. Please don't send me job offers;
      </div>
      <Tabs
        panes={[
          {
            label: 'Experience',
            render: () => (
              <LabelledList list={experience.edges} Decorator={XpNodes} />
            )
          },
          {
            label: 'References',
            render: () => <References edges={references.edges} />
          },
          {
            label: 'Skills',
            render: () => (
              <LabelledList list={skills.edges} Decorator={SkillNodes} />
            )
          },
          {
            label: 'Projects',
            render: () => <List edges={projects.edges} />
          },
          {
            label: 'Repositories',
            render: () => <List edges={repos.edges} />
          },
          {
            label: 'Contributions',
            render: () => <List edges={contributions.edges} />
          },
          {
            label: 'Articles',
            render: () => <List edges={articles.edges} />
          }
        ]}
      />
    </main>
  )
);

export default props => (
  <Layout {...props}>
    <About {...props} />
  </Layout>
);

export const pageQuery = graphql`
  query About {
    site: site {
      siteMetadata {
        title
      }
    }

    repos: allReposJson {
      edges {
        node {
          link
          title
          description
          where
        }
      }
    }
    contributions: allContributionsJson {
      edges {
        node {
          link
          description
          where
          title
        }
      }
    }
    projects: allProjectsJson {
      edges {
        node {
          link
          title
          description
          where
        }
      }
    }
    experience: allExperienceJson {
      edges {
        node {
          id
          company
          position
          from
          to
          items {
            label
            description
            link
            tech {
              label
              color
              icon
            }
          }
        }
      }
    }
    references: allReferencesJson {
      edges {
        node {
          thumb
          when
          title
          name
          content
        }
      }
    }
    skills: allSkillsJson {
      edges {
        node {
          label
          items {
            label
            icon
            description
          }
        }
      }
    }
    articles: allArticlesJson {
      edges {
        node {
          link
          where
          title
          date
        }
      }
    }
  }
`;
