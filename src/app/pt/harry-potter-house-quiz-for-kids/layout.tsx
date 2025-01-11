import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Teste das Casas de Harry Potter para Crianças | Divertido Quiz de Seleção de Hogwarts",
  description: "Um teste mágico e divertido das casas de Harry Potter especialmente projetado para crianças! Ajude seu filho a descobrir sua casa em Hogwarts com perguntas simples e amigáveis.",
  keywords: "teste das casas de Harry Potter para crianças, quiz de Hogwarts infantil, teste do Chapéu Seletor para crianças, Harry Potter para crianças",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 