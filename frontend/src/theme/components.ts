import { Components, Theme } from '@mui/material/styles'

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: '12px 32px',
        fontSize: '1rem',
        fontWeight: 600,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(41, 182, 246, 0.3)',
        },
      },
      sizeLarge: {
        padding: '16px 40px',
        fontSize: '1.125rem',
      },
      contained: {
        background: 'linear-gradient(135deg, #29B6F6 0%, #1565C0 100%)',
        '&:hover': {
          background: 'linear-gradient(135deg, #4FC3F7 0%, #1976D2 100%)',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundImage: 'none',
        backgroundColor: 'rgba(14, 15, 20, 0.6)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        backgroundColor: 'rgba(7, 7, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: 'none',
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'rgba(245, 247, 255, 0.72)',
        textTransform: 'none',
        fontWeight: 500,
        '&.Mui-selected': {
          backgroundColor: 'rgba(41, 182, 246, 0.16)',
          color: '#29B6F6',
          border: '1px solid rgba(41, 182, 246, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(41, 182, 246, 0.24)',
          },
        },
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollBehavior: 'smooth',
      },
      '*::-webkit-scrollbar': {
        width: '8px',
      },
      '*::-webkit-scrollbar-track': {
        background: '#0E0F14',
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'rgba(41, 182, 246, 0.5)',
        borderRadius: '4px',
        '&:hover': {
          background: 'rgba(41, 182, 246, 0.7)',
        },
      },
    },
  },
}
