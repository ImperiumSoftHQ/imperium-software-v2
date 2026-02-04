import { Box, Typography, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { ContainerMax } from '@/components/ui/ContainerMax'
import { GlassCard } from '@/components/ui/GlassCard'
import { staggerContainer, staggerItem } from '@/components/motion/variants'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'
import GroupsIcon from '@mui/icons-material/Groups'
import BrushIcon from '@mui/icons-material/Brush'
import BuildIcon from '@mui/icons-material/Build'

const MotionBox = motion(Box)
const MotionGrid = motion(Grid)

const serviceIcons: Record<string, React.ReactElement> = {
  customSoftware: <DeveloperModeIcon />,
  outsourcing: <GroupsIcon />,
  webDesign: <BrushIcon />,
  maintenance: <BuildIcon />,
}

export const Services = () => {
  const { t } = useTranslation()

  const services = ['customSoftware', 'outsourcing', 'webDesign', 'maintenance']

  return (
    <Section id="services" background="paper">
      <ContainerMax maxWidth="xl">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 10 },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          >
            {t('services.title')}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              fontWeight: 400,
            }}
          >
            {t('services.subtitle')}
          </Typography>
        </MotionBox>

        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
            {services.map((serviceKey) => (
              <Grid item xs={12} sm={6} md={6} key={serviceKey}>
                <MotionGrid variants={staggerItem}>
                  <GlassCard
                    sx={{
                      minHeight: { xs: '250px', md: '380px' },
                      height: { xs: '200px', md: '380px' },
                      display: 'flex',
                      flexDirection: 'column',
                      p: { xs: 1.5, md: 3 },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'row', md: 'column' },
                          alignItems: { xs: 'center', md: 'flex-start' },
                          gap: { xs: 1.5, md: 0 },
                          mb: { xs: 1.5, md: 0 },
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 48, md: 64 },
                            height: { xs: 48, md: 64 },
                            minWidth: { xs: 48, md: 64 },
                            borderRadius: 2,
                            background:
                              'linear-gradient(135deg, rgba(41, 182, 246, 0.2) 0%, rgba(21, 101, 192, 0.2) 100%)',
                            border: '1px solid rgba(41, 182, 246, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: { xs: 0, md: 3 },
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'rotate(-5deg) scale(1.05)',
                            },
                            '& svg': {
                              fontSize: { xs: 24, md: 32 },
                              color: 'primary.main',
                            },
                          }}
                        >
                          {serviceIcons[serviceKey]}
                        </Box>

                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            mb: { xs: 0, md: 2 },
                            fontWeight: 600,
                            fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.5rem' },
                            lineHeight: { xs: 1.2, md: 1.3 },
                            flex: { xs: 1, md: 'none' },
                          }}
                        >
                          {t(`services.items.${serviceKey}.title`)}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          lineHeight: { xs: 1.5, md: 1.7 },
                          fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
                          flexGrow: 1,
                        }}
                      >
                        {t(`services.items.${serviceKey}.description`)}
                      </Typography>
                    </Box>
                  </GlassCard>
                </MotionGrid>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </ContainerMax>
    </Section>
  )
}
