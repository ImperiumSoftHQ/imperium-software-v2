import { TypographyOptions } from '@mui/material/styles/createTypography'

export const typography: TypographyOptions = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '4.5rem',
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    '@media (max-width:900px)': {
      fontSize: '3rem',
    },
    '@media (max-width:600px)': {
      fontSize: '2.5rem',
    },
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    '@media (max-width:900px)': {
      fontSize: '2rem',
    },
    '@media (max-width:600px)': {
      fontSize: '1.75rem',
    },
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.3,
    '@media (max-width:900px)': {
      fontSize: '1.75rem',
    },
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.7,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    letterSpacing: '0.01071em',
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
    letterSpacing: '0.02em',
  },
}
