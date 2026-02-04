import { ReactNode } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme, GlobalStyles } from '@/theme'

interface AppThemeProviderProps {
  children: ReactNode
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
