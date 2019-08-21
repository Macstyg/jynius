import React from 'react'
import { Section } from '../Common/Common.styles';
import TestimonialItem from './TestimonialItem';
import { useStaticQuery, graphql } from 'gatsby';

const TestimonialItems = () => {
  const feedback = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Eius nulla labore accusamus rem quisquam sequi aliquid, fuga, architecto nam mollitia officia molestiae excepturi.Veniam maxime laborum impedit recusandae nisi perspiciatis?'
  const data = useStaticQuery(graphql`
  query {
    avatar1: file(relativePath: { eq: "avatar-1.jpg" }) {
      childImageSharp {
        fixed(width: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  const avatar = data.avatar1.childImageSharp.fixed
  const items = [
    { avatar, feedback },
    { avatar, feedback },
    { avatar, feedback },
    { avatar, feedback },
  ]
  return (
    <Section container spacing={3}>
      {items.map(({ avatar }) => <TestimonialItem avatar={avatar} feedback={feedback} />)}
    </Section>
  )
}

export default TestimonialItems
