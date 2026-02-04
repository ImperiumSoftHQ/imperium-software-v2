import { Box, Typography, IconButton } from '@mui/material'
import { motion } from 'framer-motion'
import { GlassCard } from './GlassCard'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'

interface TeamMemberCardProps {
  name: string
  role: string
  description: string
  image: string
  socials?: {
    linkedin?: string
    portfolio?: string
    github?: string
  }
  delay?: number
}

const MotionBox = motion(Box)

export const TeamMemberCard = ({
  name,
  role,
  description,
  image,
  socials,
  delay = 0,
}: TeamMemberCardProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      <GlassCard
        sx={{
          textAlign: 'center',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <Box
          sx={{
            width: 140,
            height: 140,
            mx: 'auto',
            mb: 3,
            mt: -8,
            borderRadius: '50%',
            border: '4px solid',
            borderColor: 'background.paper',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(41, 182, 246, 0.2) 0%, rgba(21, 101, 192, 0.2) 100%)',
            boxShadow: '0 8px 32px rgba(41, 182, 246, 0.3)',
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src={image}
            alt={name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            mb: 1,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #4FC3F7 0%, #0288D1 50%, #1565C0 100%)',
            backgroundSize: '200% auto',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textFillColor: 'transparent',
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="h6"
          color="primary.main"
          sx={{
            mb: 2,
            fontWeight: 600,
            fontSize: '1.125rem',
          }}
        >
          {role}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            fontSize: '1rem',
            mb: 3,
          }}
        >
          {description}
        </Typography>

        {socials && (
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'center',
              mt: 'auto',
            }}
          >
            {socials.linkedin && (
              <IconButton
                component="a"
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  border: '1px solid rgba(41, 182, 246, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(41, 182, 246, 0.1)',
                    borderColor: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            )}
            {socials.portfolio && (
              <IconButton
                component="a"
                href={socials.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'secondary.main',
                  border: '1px solid rgba(21, 101, 192, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(21, 101, 192, 0.1)',
                    borderColor: 'secondary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LanguageIcon />
              </IconButton>
            )}
            {socials.github && (
              <IconButton
                component="a"
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.primary',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'text.primary',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
            )}
          </Box>
        )}
      </GlassCard>
    </MotionBox>
  )
}
