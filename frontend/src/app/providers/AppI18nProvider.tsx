import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/i18n'

interface AppI18nProviderProps {
  children: ReactNode
}

export const AppI18nProvider = ({ children }: AppI18nProviderProps) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
