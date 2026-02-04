import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const LanguageToggle = () => {
  const { i18n } = useTranslation()

  const handleLanguageChange = (_event: React.MouseEvent<HTMLElement>, newLang: string | null) => {
    if (newLang) {
      i18n.changeLanguage(newLang)
    }
  }

  return (
    <ToggleButtonGroup
      value={i18n.language}
      exclusive
      onChange={handleLanguageChange}
      size="small"
      sx={{
        '& .MuiToggleButton-root': {
          px: 2,
          py: 0.75,
          fontSize: '0.875rem',
        },
      }}
    >
      <ToggleButton value="en">EN</ToggleButton>
      <ToggleButton value="bg">BG</ToggleButton>
    </ToggleButtonGroup>
  )
}
