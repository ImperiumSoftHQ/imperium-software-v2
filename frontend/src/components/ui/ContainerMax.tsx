import { ReactNode } from 'react'
import { Container, ContainerProps } from '@mui/material'

interface ContainerMaxProps extends Omit<ContainerProps, 'maxWidth'> {
  children: ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
}

export const ContainerMax = ({ children, maxWidth = 'lg', ...props }: ContainerMaxProps) => {
  return (
    <Container maxWidth={maxWidth} {...props}>
      {children}
    </Container>
  )
}
