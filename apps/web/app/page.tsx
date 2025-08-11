'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [apiStatus, setApiStatus] = useState<string>('checking...')

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/health')
      .then(r => r.json())
      .then(d => setApiStatus(d.status ?? 'ok'))
      .catch(() => setApiStatus('offline'))
  }, [])

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">Truck Dispatcher Portal — Web</h1>
      <p className="mt-2 text-gray-700">API status: <b>{apiStatus}</b></p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <section className="p-4 rounded-xl border bg-white">
          <h2 className="font-semibold">Map (placeholder)</h2>
          <p className="text-sm text-gray-600">Hook up Mapbox later. Show trucks, loads, weather layers.</p>
        </section>
        <section className="p-4 rounded-xl border bg-white">
          <h2 className="font-semibold">Loads (placeholder)</h2>
          <p className="text-sm text-gray-600">Table of loads with filters and quick assign.</p>
        </section>
      </div>
    </main>
  )
}
