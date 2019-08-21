import React from 'react'
import Img, { FixedObject } from 'gatsby-image';
import { BlockQuote } from './Common.styles';

interface Props {
  avatar: FixedObject
  feedback: string
}

const Quote: React.FC<Props> = ({ avatar, feedback }) => {
  return (
    <BlockQuote>
      <p>{feedback}</p>
      <p style={{ display: 'flex', alignItems: 'center' }}>
        <Img fixed={avatar} style={{ marginRight: '1rem' }} />
        <cite>— John Doe</cite>
      </p>
    </BlockQuote>
  )
}

export default Quote
