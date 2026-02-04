import { Box, Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { fadeUp } from '@/components/motion/variants'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const MotionTypography = motion(Typography)
const MotionButton = motion(Button)

export const Hero = () => {
  const { t } = useTranslation()

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Section
      id="home"
      sx={{
        minHeight: { xs: 'calc(100vh - 120px)', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '600px', md: '1200px' },
          height: { xs: '600px', md: '1200px' },
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '50%',
            height: '50%',
            background: 'radial-gradient(circle, rgba(21, 101, 192, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            opacity: 0.6,
            animation: 'float 20s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': {
                transform: 'translate(0, 0) scale(1)',
              },
              '33%': {
                transform: 'translate(30px, -30px) scale(1.1)',
              },
              '66%': {
                transform: 'translate(-20px, 20px) scale(0.9)',
              },
            },
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(41, 182, 246, 0.4) 0%, transparent 70%)',
            filter: 'blur(90px)',
            opacity: 0.7,
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '70%',
            background: 'radial-gradient(circle, rgba(138, 132, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
            opacity: 0.5,
            animation: 'pulse 15s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': {
                opacity: 0.5,
                transform: 'translate(-50%, -50%) scale(1)',
              },
              '50%': {
                opacity: 0.7,
                transform: 'translate(-50%, -50%) scale(1.1)',
              },
            },
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          <MotionTypography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 4,
              background: 'linear-gradient(135deg, #F5F7FF 0%, #E0E3FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('hero.title')}
          </MotionTypography>

          <MotionTypography
            variant="h6"
            color="text.secondary"
            sx={{
              mb: 5,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 400,
            }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            {t('hero.description')}
          </MotionTypography>

          <MotionButton
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={handleCTAClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            sx={{
              px: 5,
              py: 2,
              fontSize: '1.125rem',
              fontWeight: 600,
              boxShadow: '0 8px 32px rgba(41, 182, 246, 0.4)',
            }}
          >
            {t('hero.cta')}
          </MotionButton>
        </Box>
      </Container>
    </Section>
  )
}
