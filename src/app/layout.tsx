import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/style/style.scss'
import { ListProvider } from '@/context/contextApi'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Radio Browser',
  description: 'Desafio Frontend Developer.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <ListProvider>{children}</ListProvider>
      </body>
    </html>
  )
}
