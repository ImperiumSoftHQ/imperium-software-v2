import { useState, FormEvent } from 'react'
import { Box, Typography, Grid, TextField, Button, Alert, CircularProgress } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { ContainerMax } from '@/components/ui/ContainerMax'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeUp, staggerContainer, staggerItem } from '@/components/motion/variants'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SendIcon from '@mui/icons-material/Send'
import { messagesApi } from '@/lib/api/messages.api'

const MotionBox = motion(Box)
const MotionGrid = motion(Grid)
const MotionButton = motion(Button)

const contactIcons: Record<string, React.ReactElement> = {
  email: <EmailIcon />,
  linkedin: <LinkedInIcon />,
}

export const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const contactItems = ['email', 'linkedin']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (formData.honeypot) {
      setSubmitStatus('success')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await messagesApi.create({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        honeypot: formData.honeypot,
      })
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
    } catch {
      setSubmitStatus('error')
      setErrorMessage(t('contact.form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" background="paper">
      <ContainerMax maxWidth="lg">
        <MotionBox
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
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
            {t('contact.title')}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              mb: 3,
              fontWeight: 500,
            }}
          >
            {t('contact.subtitle')}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.7,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            {t('contact.description')}
          </Typography>
        </MotionBox>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={7}>
            <MotionBox
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <GlassCard animate={false}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  {t('contact.form.title')}
                </Typography>

                {submitStatus === 'success' && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    {t('contact.form.success')}
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {errorMessage}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={t('contact.form.name')}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={t('contact.form.email')}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={t('contact.form.subject')}
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={t('contact.form.message')}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={5}
                      />
                    </Grid>
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '-9999px',
                        opacity: 0,
                        height: 0,
                        overflow: 'hidden',
                      }}
                      aria-hidden="true"
                    >
                      <TextField
                        label="Website"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleInputChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </Box>
                    <Grid item xs={12}>
                      <MotionButton
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        sx={{ mt: 1 }}
                      >
                        {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                      </MotionButton>
                    </Grid>
                  </Grid>
                </Box>
              </GlassCard>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={5}>
            <MotionBox
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Grid container spacing={3}>
                {contactItems.map((itemKey) => {
                  const isLinkedIn = itemKey === 'linkedin'
                  const linkedInUrl = isLinkedIn ? t('contact.info.linkedin.url') : undefined

                  return (
                    <Grid item xs={12} key={itemKey}>
                      <MotionGrid variants={staggerItem}>
                        <GlassCard
                          component={isLinkedIn ? motion.a : 'div'}
                          href={linkedInUrl}
                          target={isLinkedIn ? '_blank' : undefined}
                          rel={isLinkedIn ? 'noopener noreferrer' : undefined}
                          sx={{
                            textDecoration: 'none',
                            cursor: isLinkedIn ? 'pointer' : 'default',
                            transition: 'all 0.3s ease',
                            ...(isLinkedIn && {
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 12px 48px rgba(41, 182, 246, 0.5)',
                              },
                            }),
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                minWidth: 56,
                                borderRadius: '50%',
                                background:
                                  'linear-gradient(135deg, rgba(41, 182, 246, 0.2) 0%, rgba(21, 101, 192, 0.2) 100%)',
                                border: '1px solid rgba(41, 182, 246, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '& svg': {
                                  fontSize: 28,
                                  color: 'primary.main',
                                },
                              }}
                            >
                              {contactIcons[itemKey]}
                            </Box>

                            <Box>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 600,
                                  color: 'text.secondary',
                                  mb: 0.5,
                                }}
                              >
                                {t(`contact.info.${itemKey}.label`)}
                              </Typography>

                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 500,
                                  color: 'text.primary',
                                }}
                              >
                                {t(`contact.info.${itemKey}.value`)}
                              </Typography>
                            </Box>
                          </Box>
                        </GlassCard>
                      </MotionGrid>
                    </Grid>
                  )
                })}
              </Grid>
            </MotionBox>
          </Grid>
        </Grid>
      </ContainerMax>
    </Section>
  )
}
