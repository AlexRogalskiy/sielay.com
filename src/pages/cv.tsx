import * as React from "react";
import {
    Header, Container, Segment, Icon, List, Grid, Label, SemanticCOLORS, Card, Image, Divider,
} from "semantic-ui-react";
import {
    ReferencesJsonConnection,
    ExperienceJsonConnection,
    SkillsJsonConnection,
    ExperienceJsonEdge,
    SkillsJsonEdge,
} from "../graphql-types";

interface CVProps {
    data: {
        references: ReferencesJsonConnection;
        experience: ExperienceJsonConnection;
        skills: SkillsJsonConnection;
    };
}

const experience = (xp: ExperienceJsonEdge[]) => xp.map(({ node }, index) =>
    [<Segment vertical raised key={index}>>
        <Label as="a" color={node.color as SemanticCOLORS || "green"} ribbon>{node.from} - {node.to}</Label>
        <Header as="h3">{node.position}</Header>
        <Header as="h4">{node.company}</Header>
        <List divided relaxed>
            {node.items.map((item, index2) => <List.Item key={index2}>
                <List.Content>
                    {item.link
                        ? [
                            <List.Header key={0} as="a" href={item.link}>{item.label}</List.Header>,
                            <List.Description key={1} as="a" href={item.link}>{item.description}</List.Description>,
                        ] : [
                            <List.Header as="span" key={0}>{item.label}</List.Header>,
                            item.description
                            && item.description.length
                            && <List.Description key={1} as="span">{item.description}</List.Description>,
                        ]
                    }
                    {item.tech && (<List horizontal key={2}> {item.tech.map((tag, index3) =>
                        <List.Item key={index3}>
                            <List.Content>
                                <Label as="span" image color={tag.color as SemanticCOLORS}>
                                    <Icon name={tag.icon} />
                                    {tag.label}
                                </Label>
                            </List.Content>
                        </List.Item>)} </List>)
                    }
                </List.Content>
            </List.Item>,
            )
            }
        </List>
    </Segment>, <Divider />],
);

const skills = (skillSets: SkillsJsonEdge[]) => skillSets.map(({ node }, index) => [
    <Segment vertical raised key={index}>>
        <Label as="a" ribbon>{node.label}</Label>
        <List divided relaxed>
            {
                node.items.map((item, index2) => <List.Item key={index2}>
                    {item.icon && <List.Icon name={item.icon} size="large" verticalAlign="middle" />}
                    <List.Content>
                        <List.Header as="span">{item.label}</List.Header>
                        {item.description
                            && item.description.length
                            && <List.Description as="span">{item.description}</List.Description>}
                    </List.Content>
                </List.Item>,
                )
            }
        </List>
    </Segment>, <Divider />]);

export default (props: CVProps) => <Container>
    <Segment vertical>
        <Header as="h2">
            <Icon name="info circle" />
            <Header.Content>
                Curriculum Vitae
                    </Header.Content>
        </Header>
    </Segment>
    <Segment vertical piled size="massive">
        <p>
            16+ years commercial experience as a developer. For 6 years lead/manager. Built teams,
            established processes, created MVPs and stabilised post-prototype/seed products.
            Contributed to MEANjs, wrote Lackey CMS (ME[v+d]N). Expertise in JavaScript stacks
            (recently TypeScript, React, Angualr2, Node, Electron, AWS Lambda). Ease adapting new
            frameworks and technologies. Used to work under pressure and educate business. Delivery
            and product-oriented first.
                </p>
        <p>Location SW London, United Kingdom.</p>
    </Segment>
    <Segment vertical piled>
        <Header as="h3">CTO/VPE approach</Header>
        <p>
            I need to first understand problem you try to build solution to. If that's needed roll
            up sleves and work with other (or as the only) developer(s). Then I help you draw and
            commit to absolute and achievable MVP.
                </p>
        <p>
            I build transparent process ensuring lack of distraction. We deliver little, deliver
            often, measure rather guess. I hire talent and attitude, not years of already obsolete
            experience. Try to divide concerns to small,
            easy to manage and delegate parts.
                </p>
    </Segment>
    <Segment vertical piled>
        <Header as="h3">Senior/Lead Developer approach</Header>
        <p>
            I follow your style guideline and definition of done. I rise all risks of cutting corners
            and provide knowns and unknowns. I suggest solution that is suitable to team
            and organisation, not only to my taste.
                </p>
    </Segment>
    <Segment vertical piled>
        <p style={{textAlign: "center"}}>
            <a href="mailto:lukaszsielski+cv@gmail.com">Click here to contact</a>. This email address can be used by 
            companies who
            directly want to hire me. If you use it as a external recruiter or to send offers of your product or service
            from May 25th 2018 you are breaching <a href="https://www.eugdpr.org/" target="_blank">GDPR</a> regulation 
            and can be fined. 
        </p>
    </Segment>
    <Header as="h2">References</Header>
    <Grid stackable columns={4}>
        {
            props.data.references.edges.map(({ node }, index) => (<Grid.Column key={index}>

                <Card>
                    <Image src={node.thumb} />
                    <Card.Content>
                        <Card.Header>{node.name}</Card.Header>
                        <Card.Meta>{node.title}</Card.Meta>
                        <Card.Description>{node.content}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>{node.when}</Card.Content>
                </Card>

            </Grid.Column>))
        }
    </Grid>
    <Grid stackable columns={2}>
        <Grid.Column>
            <Header as="h2">Work Experience</Header>
            {experience(props.data.experience.edges)}
        </Grid.Column>
        <Grid.Column>
            <Header as="h2">Skills</Header>
            {skills(props.data.skills.edges)}
        </Grid.Column>
    </Grid>
</Container>;

export const pageQuery = graphql`
query CV 
    {
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
    }      
`;
