import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Harry Potter House Quiz for Kids | Fun Hogwarts Sorting Quiz",
  description: "A magical and fun Harry Potter house quiz specially designed for kids! Help your child discover their Hogwarts house with simple, kid-friendly questions.",
  keywords: "Harry Potter house quiz for kids, children's Hogwarts quiz, kid-friendly sorting hat test, Harry Potter for children",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 