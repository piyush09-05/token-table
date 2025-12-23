import { Token } from '@/types/token'

export type TokensResponse = {
  newPairs: Token[]
  finalStretch: Token[]
  migrated: Token[]
}

export const fetchTokens = async (): Promise<TokensResponse> => {
  const res = await fetch('/api/tokens')

  if (!res.ok) {
    throw new Error('Failed to fetch tokens')
  }

  return res.json()
}
