import { AppBar, Toolbar, Typography, Box, Button, useScrollTrigger, IconButton, Collapse, Divider, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { navbarVariants } from '@/components/motion/variants'

const MotionAppBar = motion(AppBar)

export const Navbar = () => {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  })

  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false) // Close menu on mobile
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <MotionAppBar
      position="sticky"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      sx={{
        backgroundColor: trigger ? 'rgba(7, 7, 10, 0.95)' : 'rgba(7, 7, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Toolbar
        sx={{
          py: { xs: 1, md: 1.5 },
          px: { xs: 2, sm: 3, md: 4 },
          minHeight: { xs: 56, md: 70 },
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="a"
            href="#home"
            onClick={handleNavClick('#home')}
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #29B6F6 0%, #1565C0 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
              fontSize: '1rem',
              display: 'block',
            }}
          >
            {t('nav.brand')}
          </Typography>

          <IconButton
            onClick={toggleMobileMenu}
            sx={{
              color: 'text.primary',
            }}
            aria-label="menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        <Grid
          container
          alignItems="center"
          spacing={2}
          sx={{ display: { xs: 'none', md: 'flex' }, width: '100%' }}
        >
          <Grid item md={3}>
            <Typography
              variant="h6"
              component="a"
              href="#home"
              onClick={handleNavClick('#home')}
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #29B6F6 0%, #1565C0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none',
                fontSize: '1.25rem',
                display: 'block',
              }}
            >
              {t('nav.brand')}
            </Typography>
          </Grid>

          <Grid item md={6}>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    px: 2,
                    '&:hover': {
                      color: 'text.primary',
                      backgroundColor: 'rgba(41, 182, 246, 0.08)',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Grid>

          <Grid item md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <LanguageToggle />
            </Box>
          </Grid>
        </Grid>
      </Toolbar>

      <Collapse
        in={mobileMenuOpen}
        timeout="auto"
        unmountOnExit
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(7, 7, 10, 0.98)',
            borderTop: '1px solid',
            borderColor: 'divider',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Box sx={{ py: 2, px: 3 }}>
            {navLinks.map((link, index) => (
              <Box key={link.href}>
                <Button
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    py: 1.5,
                    px: 2,
                    color: 'text.primary',
                    fontSize: '1rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(41, 182, 246, 0.08)',
                      color: 'text.primary',
                    },
                  }}
                >
                  {link.label}
                </Button>
                {index < navLinks.length - 1 && (
                  <Divider sx={{ my: 0.5, borderColor: 'rgba(255, 255, 255, 0.05)' }} />
                )}
              </Box>
            ))}
          </Box>

          <Divider sx={{ borderColor: 'divider' }} />

          <Box sx={{ px: 3, py: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              Language
            </Typography>
            <LanguageToggle />
          </Box>
        </Box>
      </Collapse>
    </MotionAppBar>
  )
}
