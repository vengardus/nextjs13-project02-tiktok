import './globals.css'

export const metadata = {
  title: 'Tiktok Clone, playing with NextJs 13',
  description: 'By Vengardus. For mobile devices for now',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
