import React, { memo } from 'react'
import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  margin-bottom: 1rem;
`

const SectionSubHeading: React.FC<TypographyProps> = ({ children }) => {
  return (
    <StyledTypography variant="h2">
      {children}
    </StyledTypography>
  )
}

export default memo(SectionSubHeading)
