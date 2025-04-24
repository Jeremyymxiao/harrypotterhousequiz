import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Discover Your Patronus | Harry Potter Patronus Quiz",
  description: "Reveal your magical guardian with our official Patronus quiz. Answer mystical questions and discover which magical creature will protect you from dark forces!",
  keywords: "Harry Potter Patronus Quiz, Patronus Test, Magical Guardian Quiz, Spirit Animal Test, Wizarding World Patronus",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/patronus-quiz'
  },
  openGraph: {
    title: "Discover Your Magical Guardian | Official Patronus Quiz",
    description: "Every witch and wizard has a Patronus to protect them from dark forces. Answer our mystical questions to reveal which magical creature represents your inner light!"
  }
}

export default function PatronusQuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 