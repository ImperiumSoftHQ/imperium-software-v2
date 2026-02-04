import { Box, Typography, Grid, Divider } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { ContainerMax } from '@/components/ui/ContainerMax'
import { TeamMemberCard } from '@/components/ui/TeamMemberCard'
import { TechStackMarquee } from '@/components/ui/TechStackMarquee'
import { techStackItems } from '../data/techStack.data'
import { fadeUp } from '@/components/motion/variants'

const MotionBox = motion(Box)

export const About = () => {
  const { t } = useTranslation()

  const teamMembers = [
    {
      name: t('about.team.member1.name'),
      role: t('about.team.member1.role'),
      description: t('about.team.member1.description'),
      image: '/team/default.png',
      socials: {
        linkedin: t('about.team.member1.socials.linkedin'),
        portfolio: t('about.team.member1.socials.portfolio'),
        github: t('about.team.member1.socials.github'),
      },
    },
    {
      name: t('about.team.member2.name'),
      role: t('about.team.member2.role'),
      description: t('about.team.member2.description'),
      image: '/team/default.png',
      socials: {
        linkedin: t('about.team.member2.socials.linkedin'),
        portfolio: t('about.team.member2.socials.portfolio'),
        github: t('about.team.member2.socials.github'),
      },
    },
  ]

  return (
    <Section id="about">
      <ContainerMax maxWidth="lg">
        <MotionBox
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          sx={{
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
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
            {t('about.title')}
          </Typography>
          <Typography
            variant="h5"
            color="primary.main"
            sx={{
              mb: 2,
              fontWeight: 600,
            }}
          >
            {t('about.subtitle')}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
            }}
          >
            {t('about.description')}
          </Typography>
        </MotionBox>

        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 8, md: 12 } }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={6} key={member.name}>
              <TeamMemberCard {...member} delay={index * 0.2} />
            </Grid>
          ))}
        </Grid>

        <Divider
          sx={{
            mb: 6,
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          >
            {t('about.techStackTitle')}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              fontSize: '1.125rem',
            }}
          >
            {t('about.techStackSubtitle')}
          </Typography>

          <TechStackMarquee items={techStackItems} baseVelocity={-30} />
        </MotionBox>
      </ContainerMax>
    </Section>
  )
}
