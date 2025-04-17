import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Hogwarts Sorting Ceremony | Harry Potter House Quiz",
  description: "Begin your magical journey with our official Hogwarts sorting ceremony. Answer enchanted questions and discover which of the four houses truly matches your inner magical qualities!",
  keywords: "Hogwarts Sorting Ceremony, Harry Potter House Quiz, Sorting Hat Test, Hogwarts Houses Test, Character Personality Quiz, Wizarding World Test",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/quiz'
  },
  openGraph: {
    title: "Experience the Hogwarts Sorting Ceremony | Official House Quiz",
    description: "Step into the Great Hall of Hogwarts and let our magical Sorting Hat examine your mind, heart, and spirit to reveal your true house affiliation. The ceremony awaits!"
  }
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 