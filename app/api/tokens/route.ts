import { NextResponse } from 'next/server'
import { generateTokens } from '../../../utils/generate-token-utils';

export async function GET() {
  // Artificial delay for skeleton loaders
  await new Promise((res) => setTimeout(res, 800))

  const data = {
    newPairs: generateTokens('newPairs', 8),
    finalStretch: generateTokens('finalStretch', 6),
    migrated: generateTokens('migrated', 6),
  }

  return NextResponse.json(data)
}
