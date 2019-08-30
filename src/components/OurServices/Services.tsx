import React from 'react'
import { Section, Container, Wrapper } from '../Common/Common.styles';
import SectionHeading from '../Common/SectionHeading';
import SectionSubHeading from '../Common/SectionSubHeading';
import TilesList from './TilesList';
import { MainPageSectionIds } from '../../types'

const Services: React.FC = () => {
  return (
    <Wrapper isDark id={`${MainPageSectionIds.whatWeDo}`}>
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
