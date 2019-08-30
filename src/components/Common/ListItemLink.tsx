import React from 'react'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';

type Props = ListItemProps<'a', { button?: true, href: string }>

const ListItemLink: React.FC<Props> = ({ href, ...props }) => {
  const handleClick: React.MouseEventHandler = (e) => {
    e.preventDefault()
    const id = href.split('#')[1]
    document.getElementById(id)!.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <ListItem button component="a" onClick={handleClick} href={href} {...props} />
  )
}

export default ListItemLink
