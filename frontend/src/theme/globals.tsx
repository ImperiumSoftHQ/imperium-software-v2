import { GlobalStyles as MuiGlobalStyles } from '@mui/material'

export const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
        },
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    />
  )
}
