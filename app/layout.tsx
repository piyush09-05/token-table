import './globals.css'
import { AppProviders } from './provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
