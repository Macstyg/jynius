import React from 'react'
import { Section, Container, Wrapper } from '../Common/Common.styles';
import SectionHeading from '../Common/SectionHeading';
import SectionSubHeading from '../Common/SectionSubHeading';
import TilesList from './TilesList';

const Services: React.FC = () => {
  return (
    <Wrapper isDark>
      <Container>
        <Section item xs={7}>
          <SectionHeading>What we do</SectionHeading>
          <SectionSubHeading>We doing a lot of interesting</SectionSubHeading>
        </Section>
        <TilesList></TilesList>
      </Container>
    </Wrapper>
  )
}

export default Services
