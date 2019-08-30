import React from 'react'

import { Wrapper, Container, Section } from '../Common/Common.styles';
import SectionHeading from '../Common/SectionHeading';
import SectionSubHeading from '../Common/SectionSubHeading';
import PortfolioItems from './PortfolioItems';
import { MainPageSectionIds } from '../../types'


const Portfolio: React.FC = () => {
  return (
    <Wrapper id={`${MainPageSectionIds.portfolio}`}>
      <Container container justify="center">
        <Section item xs={8}>
          <SectionHeading align="center">Recent works</SectionHeading>
          <SectionSubHeading>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae suscipit soluta odio itaque</SectionSubHeading>
        </Section>
        <PortfolioItems />
      </Container>
    </Wrapper>
  )
}

export default Portfolio
