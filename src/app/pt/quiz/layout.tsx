import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cerimônia de Seleção de Casas de Hogwarts | Teste das Casas de Harry Potter',
  description: 'Descubra sua verdadeira casa de Hogwarts com nosso teste oficial de seleção! Comece sua jornada mágica e descubra se você pertence à Grifinória, Lufa-Lufa, Corvinal ou Sonserina.',
  keywords: ['Cerimônia de Seleção de Hogwarts', 'Teste das Casas de Harry Potter', 'Chapéu Seletor', 'Grifinória', 'Lufa-Lufa', 'Corvinal', 'Sonserina', 'Qual casa de Hogwarts eu pertenço', 'Quiz de Harry Potter'],
  openGraph: {
    title: 'Qual Casa de Hogwarts é a Sua? | Teste Oficial de Seleção',
    description: 'Descubra sua verdadeira casa em Hogwarts com nosso teste oficial de seleção! O Chapéu Seletor está esperando para descobrir se você pertence à Grifinória, Lufa-Lufa, Corvinal ou Sonserina.'
  }
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
} 