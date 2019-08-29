import React from 'react'
import { AppFooter, FooterHeader, FooterBottom } from './Footer.styles';
import { Grid, Typography } from '@material-ui/core';
import { Container, Section } from '../Common/Common.styles';
import Navigation from '../Common/Navigation';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import SocialLinks from '../Team/SocialLinks';

const Footer: React.FC = () => {
  return (
    <AppFooter>
      <Container container>
        <Section item container justify="space-between" xs={12}>
          <Grid item lg={4}>
            <FooterHeader variant="h4">About us</FooterHeader>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </Grid>
          <Grid item lg={3} style={{ marginLeft: 'auto' }}>
            <FooterHeader variant="h4">Navigation</FooterHeader>
            <Navigation />
          </Grid>
          <Grid item lg={4}>
            <FooterHeader variant="h4">Subscribe Newsletter</FooterHeader>
            <EmailSubscriptionForm />
          </Grid>
        </Section>
        <FooterBottom item xs>
          <SocialLinks justify="center" />
          <Typography component="p" align="center">Copyright © 2019 All rights reserved</Typography>
        </FooterBottom>
      </Container>
    </AppFooter>
  )
}

export default Footer
