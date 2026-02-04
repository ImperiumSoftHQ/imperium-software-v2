import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Container,
  Alert,
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { MessagesTable } from '../components/MessagesTable'
import { messagesApi, ContactMessage } from '@/lib/api/messages.api'
import { useAuthStore } from '../auth/auth.store'

export const MessagesPage = () => {
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await messagesApi.getAll()
        setMessages(data)
      } catch (err) {
        setError('Failed to load messages')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/admin/login', { replace: true })
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #29B6F6 0%, #1565C0 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Imperium Admin
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 700 }}>
          Contact Messages
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <MessagesTable messages={messages} loading={loading} />
      </Container>
    </Box>
  )
}
