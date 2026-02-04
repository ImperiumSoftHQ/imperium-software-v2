import { ReactNode } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'

interface MotionProviderProps {
  children: ReactNode
}

export const MotionProvider = ({ children }: MotionProviderProps) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
