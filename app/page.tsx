'use client'

import { useTokens } from '../hooks/use-token-hook';

export default function Home() {
  const { data, isLoading, isError } = useTokens()

  if (isLoading) {
    return <div className="p-4">Loading tokens...</div>
  }

  if (isError || !data) {
    return <div className="p-4 text-red-400">Failed to load tokens</div>
  }

  return (
    <main className="p-4 space-y-6">
      <section>
        <h2 className="text-lg font-semibold">New Pairs</h2>
        <pre className="text-xs">{JSON.stringify(data.newPairs, null, 2)}</pre>
      </section>
    </main>
  )
}
