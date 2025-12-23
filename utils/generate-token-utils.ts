import { Token, TokenCategory } from '@/types/token'

const random = (min: number, max: number) =>
  Math.random() * (max - min) + min

const symbols = [
  'SOLX',
  'DOGE2',
  'MOON',
  'FROG',
  'PEPE',
  'CAT',
  'BULL',
]

export const generateTokens = (
  category: TokenCategory,
  count: number
): Token[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${category}-${i}`,
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
    name: `Token ${i + 1}`,
    image: `https://api.dicebear.com/7.x/shapes/svg?seed=${category}-${i}`,
    price: Number(random(0.00001, 5).toFixed(6)),
    marketCap: Math.floor(random(5_000, 2_000_000)),
    volume24h: Math.floor(random(1_000, 500_000)),
    ageSeconds: Math.floor(random(5, 3600)),
    category,
  }))
}
