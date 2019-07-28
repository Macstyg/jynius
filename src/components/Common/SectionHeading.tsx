import React, { memo } from 'react'
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { TypographyProps } from '@material-ui/core/Typography';

const StyledTypography = styled(Typography)`
  margin-bottom: .5rem;
`

const SectionHeading: React.FC<TypographyProps> = ({ children, ...rest }) => {
  return (
    <StyledTypography variant="h6" {...rest}>
      {children}
    </StyledTypography>
  )
}

export default memo(SectionHeading)
