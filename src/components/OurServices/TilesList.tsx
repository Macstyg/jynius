import React from 'react'
import { Grid } from '@material-ui/core';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum'
import LaptopIcon from '@material-ui/icons/LaptopMac'
import LayersIcon from '@material-ui/icons/Layers'
import EditIcon from '@material-ui/icons/Edit'
import PhoneIcon from '@material-ui/icons/PhoneIphone'
import SearchIcon from '@material-ui/icons/Search'
import Tile from './Tile';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

interface Sevice {
  heading: string
  description: string
  icon: React.ComponentType<SvgIconProps>
}

const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet accusantium iste enim vitae harum cumque dicta ullam dolorem consequuntur rerum aperiam doloribus, culpa, itaque quos asperiores est. Earum, accusamus?"
const services: Sevice[] = [
  { heading: 'Web Design', description, icon: PhotoAlbumIcon },
  { heading: 'Web Development', description, icon: LaptopIcon },
  { heading: 'Web Apps', description, icon: LayersIcon },
  { heading: 'Mobile Apps', description, icon: PhoneIcon },
  { heading: 'CopyWriting', description, icon: EditIcon },
  { heading: 'Serch Engine Optimization', description, icon: SearchIcon },
]

const TilesList: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {services.map(({ heading, description, icon }) => <Grid item md={4} key={heading}>
        <Tile
          heading={heading}
          description={description}
          icon={icon}
        />
      </Grid>)}
    </Grid>
  )
}

export default TilesList
