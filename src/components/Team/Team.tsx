import React, { memo } from 'react'
import { Grid } from '@material-ui/core';

import { Section, Container, Wrapper } from '../Common/Common.styles';
import SectionHeading from '../Common/SectionHeading';
import SectionSubHeading from '../Common/SectionSubHeading';
import PortretSection from './PortretSection';
import { useStaticQuery, graphql } from 'gatsby';
import { NameHeading, RoleHeading } from './Team.styles';
import SocialLinks from './SocialLinks';

const Team = () => {
  const data = useStaticQuery(graphql`
  query PortretQuery {
      portret1: file(relativePath: { eq: "portret-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portret2: file(relativePath: { eq: "portret-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`)

  return (
    <Wrapper>
      <Container>
        <Section item xs={7}>
          <SectionHeading>Meet the team</SectionHeading>
          <SectionSubHeading>We Are Expert In Web, Branding and Mobile</SectionSubHeading>
        </Section>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <PortretSection src={data.portret1.childImageSharp.fluid} />
            <NameHeading variant="h4">Nik Chaykovskyy</NameHeading>
            <RoleHeading>Co-Founder</RoleHeading>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dicta, delectus voluptate commodi voluptates ex minima? Quisquam, hic. Rerum nisi aliquam, commodi ratione labore voluptate fugit porro voluptatibus similique! Nisi.</p>
            <SocialLinks />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PortretSection src={data.portret2.childImageSharp.fluid} />
            <NameHeading variant="h4">Yaroslav Muliar</NameHeading>
            <RoleHeading>Co-Founder</RoleHeading>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dicta, delectus voluptate commodi voluptates ex minima? Quisquam, hic. Rerum nisi aliquam, commodi ratione labore voluptate fugit porro voluptatibus similique! Nisi.</p>
            <SocialLinks />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default memo(Team)
