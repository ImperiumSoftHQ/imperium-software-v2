import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '@/features/admin/pages/LoginPage'
import { MessagesPage } from '@/features/admin/pages/MessagesPage'
import { AuthGuard } from '@/features/admin/auth/auth.guard'

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route
        path="messages"
        element={
          <AuthGuard>
            <MessagesPage />
          </AuthGuard>
        }
      />
      <Route path="" element={<Navigate to="messages" replace />} />
    </Routes>
  )
}
