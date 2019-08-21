import React from 'react'
import { Wrapper, Container, Section } from '../Common/Common.styles';
import SectionHeading from '../Common/SectionHeading';
import SectionSubHeading from '../Common/SectionSubHeading';
import TestimonialItems from './TestimonialItems';

const Testimonials = () => {
  return (
    <Wrapper isDark>
      <Container container justify="center">
        <Section item xs={7}>
          <SectionHeading align="center">Testimonials</SectionHeading>
          <SectionSubHeading align="center">Our clients sayings</SectionSubHeading>
        </Section>
        <TestimonialItems />
      </Container>
    </Wrapper>
  )
}

export default Testimonials
