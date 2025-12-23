'use client'

import { Provider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'
import { store } from '@/store'
import { queryClient } from '../services/query-client';

export function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Provider>
  )
}
