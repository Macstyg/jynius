import React from 'react'
import { Wrapper, Section } from '../Common/Common.styles';
import SectionHeading from '../Common/SectionHeading';
import SectionSubHeading from '../Common/SectionSubHeading';
import ContactUsForm from './ContactUsForm';
import { FormContainer } from './ContactUs.styles';

const ContactUs: React.FC<{}> = () => {
  return (
    <Wrapper>
      <FormContainer container justify="center">
        <Section item xs={7}>
          <SectionHeading align="center">Get in touch</SectionHeading>
          <SectionSubHeading align="center">Contact Us</SectionSubHeading>
        </Section>
        <Section item xs={12}>
          <ContactUsForm />
        </Section>
      </FormContainer>
    </Wrapper>
  )
}

export default ContactUs
