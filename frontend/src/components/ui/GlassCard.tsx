import { ReactNode } from 'react'
import { Card, CardContent, CardProps } from '@mui/material'
import { motion, MotionProps } from 'framer-motion'
import { glowEffect } from '../motion/variants'

interface GlassCardProps extends Omit<CardProps, keyof MotionProps> {
  children: ReactNode
  animate?: boolean
  component?: React.ElementType
  href?: string
  target?: string
  rel?: string
}

const MotionCard = motion(Card)

export const GlassCard = ({ children, animate = true, sx, ...props }: GlassCardProps) => {
  const motionProps = animate
    ? {
        initial: 'rest' as const,
        whileHover: 'hover' as const,
        variants: glowEffect,
      }
    : {}

  return (
    <MotionCard
      {...(motionProps)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        ...sx,
      }}
      {...(props)}
    >
      <CardContent
        sx={{
          p: 4,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </CardContent>
    </MotionCard>
  )
}
