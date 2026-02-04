import { motion } from 'framer-motion'
import { Box, BoxProps } from '@mui/material'
import { forwardRef } from 'react'

export const MotionBox = motion(
  forwardRef<HTMLDivElement, BoxProps>((props, ref) => <Box ref={ref} {...props} />)
)
