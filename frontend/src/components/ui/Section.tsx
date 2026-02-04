import { ReactNode } from 'react'
import { Box, SxProps, Theme } from '@mui/material'

interface SectionProps {
  id?: string
  children: ReactNode
  sx?: SxProps<Theme>
  background?: 'default' | 'paper'
}

export const Section = ({ id, children, sx, background = 'default' }: SectionProps) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 12, lg: 16 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: background === 'paper' ? 'background.paper' : 'background.default',
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
