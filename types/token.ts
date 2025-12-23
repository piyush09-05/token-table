export type TokenCategory = 'newPairs' | 'finalStretch' | 'migrated'

export type Token = {
  id: string
  symbol: string
  name: string
  image: string
  price: number
  marketCap: number
  volume24h: number
  ageSeconds: number
  category: TokenCategory
}
