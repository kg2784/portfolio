import '~/styles/default.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '~/components/Navigation'
import { CopyRight } from '~/components/CopyRight'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'k2784',
  description: `Kie Funahashi's portfolio site.`,
  robots: 'noindex, nofollow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header>
          <Navigation />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <CopyRight />
        </footer>
      </body>
    </html>
  )
}
