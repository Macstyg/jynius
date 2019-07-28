import React from 'react'
import { Typography, CardContent, CardMedia, CardActions, Button } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import { TileBody } from './TileSection.styles';

interface Props {
  heading: string
  description: string
  icon: React.ComponentType<SvgIconProps>
}

const Tile: React.FC<Props> = ({ heading, description, icon: Icon }) => {
  return (
    <TileBody>
      <CardMedia component={() => <Icon color="primary" fontSize="large" />} />
      <CardContent>
        <Typography variant="h4">{heading}</Typography>
        <p>{description}</p>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </TileBody>
  )
}

export default Tile
