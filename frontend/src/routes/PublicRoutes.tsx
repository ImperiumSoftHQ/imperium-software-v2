import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/features/landing/LandingPage'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}
