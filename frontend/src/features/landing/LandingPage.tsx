import { Box } from '@mui/material'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export const LandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <Services />
        <About />
        <Contact />
      </Box>
      <Footer />
    </Box>
  )
}
