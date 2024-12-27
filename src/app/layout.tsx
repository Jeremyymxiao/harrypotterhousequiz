import '@/styles/globals.css'

export const metadata = {
  title: {
    default: 'Harry Potter House Quiz | Discover Your Hogwarts House',
    template: '%s | Harry Potter House Quiz'
  },
  description: 'Take our magical Harry Potter Sorting Hat Quiz to discover your true Hogwarts house. Whether you\'re a brave Gryffindor, wise Ravenclaw, loyal Hufflepuff, or ambitious Slytherin, find out where you truly belong!',
  keywords: ['Harry Potter, Hogwarts House, Sorting Hat, Harry Potter quiz, magical journey, house sorting quiz, discover Hogwarts house, wizarding world'],
  authors: [{ name: 'Hogwarts Quiz Team' }],
  creator: 'Hogwarts Quiz Team',
  publisher: 'Hogwarts Quiz Team',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'Harry Potter House Quiz | Discover Your Hogwarts House',
    description: 'Take our magical Harry Potter Sorting Hat Quiz to discover your true Hogwarts house. Find out if you belong in Gryffindor, Ravenclaw, Hufflepuff, or Slytherin!',
    siteName: 'Harry Potter House Quiz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harry Potter House Quiz | Discover Your Hogwarts House',
    description: 'Take our magical Harry Potter Sorting Hat Quiz to discover your true Hogwarts house!',
  },
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
