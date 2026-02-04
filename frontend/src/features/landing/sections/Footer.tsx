import { Box, Typography, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: 'rgba(7, 7, 10, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #29B6F6 0%, #1565C0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 0.5,
              }}
            >
              {t('nav.brand')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('footer.tagline')}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: { xs: 'center', sm: 'right' } }}
          >
            {t('footer.copyright')}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
