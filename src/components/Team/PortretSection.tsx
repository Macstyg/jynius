import React from 'react'
import Img, { FluidObject } from "gatsby-image"
import { Section } from '../Common/Common.styles';

interface Props {
  src: FluidObject
}

const PortretSection: React.FC<Props> = ({ src }) => {

  return (
    <Section>
      <Img fluid={src} style={{ maxHeight: '540px' }} />
    </Section>
  )
}

export default PortretSection
