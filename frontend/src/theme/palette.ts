import { PaletteOptions } from '@mui/material/styles'

export const palette: PaletteOptions = {
  mode: 'dark',
  background: {
    default: '#07070A',
    paper: '#0E0F14',
  },
  text: {
    primary: '#F5F7FF',
    secondary: 'rgba(245, 247, 255, 0.72)',
  },
  primary: {
    main: '#29B6F6',
    light: '#4FC3F7',
    dark: '#0288D1',
  },
  secondary: {
    main: '#1565C0',
    light: '#1976D2',
    dark: '#0D47A1',
  },
  divider: 'rgba(255, 255, 255, 0.10)',
  action: {
    hover: 'rgba(41, 182, 246, 0.08)',
    selected: 'rgba(41, 182, 246, 0.16)',
  },
}
