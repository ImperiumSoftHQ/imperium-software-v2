import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppThemeProvider } from './providers/AppThemeProvider'
import { AppI18nProvider } from './providers/AppI18nProvider'
import { MotionProvider } from '@/components/motion/MotionProvider'
import { PublicRoutes } from '@/routes/PublicRoutes'
import { AdminRoutes } from '@/routes/AdminRoutes'

function App() {
  return (
    <BrowserRouter>
      <AppI18nProvider>
        <AppThemeProvider>
          <MotionProvider>
            <Routes>
              <Route path="/admin/*" element={<AdminRoutes />} />
              <Route path="/*" element={<PublicRoutes />} />
            </Routes>
          </MotionProvider>
        </AppThemeProvider>
      </AppI18nProvider>
    </BrowserRouter>
  )
}

export default App
