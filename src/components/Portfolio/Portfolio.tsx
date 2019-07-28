import React from 'react'
import { Wrapper, Container, Section } from '../Common/Common.styles';
import SectionHeading from '../Common/SectionHeading';
import SectionSubHeading from '../Common/SectionSubHeading';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

const BlockQuote = styled.blockquote`
  & p:first-children {
    border-left: 10px #eee solid;
    margin-bottom: 20px;
  }
`

const Portfolio: React.FC = () => {
  return (
    <Wrapper>
      <Container container justify="center">
        <Section item xs={8}>
          <SectionHeading align="center">Recent works</SectionHeading>
          <SectionSubHeading>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae suscipit soluta odio itaque</SectionSubHeading>
        </Section>
        <Grid item container>
          <Grid item lg={6}>1</Grid>
          <Grid item lg={6}>
            <Typography variant="h3">Project title 1</Typography>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p><strong>Role: </strong>Design, Illustration, Web</p>
            <BlockQuote>
              <p>Nice Looking Website Of Ours. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam excepturi quod dolore commodi.</p>
            </BlockQuote>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Portfolio
