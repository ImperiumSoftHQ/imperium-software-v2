import { http } from './http'

export interface ContactMessage {
  id: number
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
}

export interface CreateContactMessageRequest {
  name: string
  email: string
  subject: string
  message: string
  honeypot?: string
}

export interface CreateContactMessageResponse {
  success: boolean
  message: string
}

export const messagesApi = {
  getAll: async (): Promise<ContactMessage[]> => {
    const response = await http.get<ContactMessage[]>('/messages')
    return response.data
  },

  create: async (data: CreateContactMessageRequest): Promise<CreateContactMessageResponse> => {
    const response = await http.post<CreateContactMessageResponse>('/messages', data)
    return response.data
  },
}
