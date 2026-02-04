import { Box } from '@mui/material'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'

interface TechStackMarqueeProps {
  items: { name: string; image: string }[]
  baseVelocity?: number
}

export const TechStackMarquee = ({ items, baseVelocity = -30 }: TechStackMarqueeProps) => {
  const baseX = useMotionValue(0)

  const duplicatedItems = [...items, ...items, ...items, ...items]

  useAnimationFrame((_t, delta) => {
    const moveBy = baseVelocity * (delta / 1000)
    const newX = baseX.get() + moveBy
    baseX.set(newX)

    const itemWidth = 120 + 48
    const setWidth = items.length * itemWidth

    if (newX <= -setWidth) {
      baseX.set(newX + setWidth)
    } else if (newX > 0) {
      baseX.set(newX - setWidth)
    }
  })

  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100%',
        py: 4,
        userSelect: 'none',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          gap: '48px',
          x: baseX,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Box
            key={`${item.name}-${index}`}
            sx={{
              minWidth: '120px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(14, 15, 20, 0.6)',
              borderRadius: 3,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              p: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(14, 15, 20, 0.8)',
                borderColor: 'rgba(41, 182, 246, 0.5)',
                transform: 'translateY(-4px)',
              },
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                filter: 'grayscale(0.3) brightness(1.1)',
                transition: 'filter 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0) brightness(1.2)',
                },
              }}
            />
          </Box>
        ))}
      </motion.div>
    </Box>
  )
}
