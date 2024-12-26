import '@/styles/globals.css'

export const metadata = {
  title: 'Harry Potter House Quiz',
  description: 'Find out which Hogwarts house you belong to!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
