import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { pt } from '@/i18n/translations'

export const metadata = {
  title: "Teste das Casas de Hogwarts & Chat com o Chapéu Seletor | Descubra Sua Casa em Hogwarts",
  description: "Faça o teste das casas de Harry Potter ou converse com o Chapéu Seletor AI para descobrir sua verdadeira casa em Hogwarts. Experimente a magia da seleção personalizada!",
  keywords: "Teste das Casas de Harry Potter, Chat com Chapéu Seletor, Casas de Hogwarts, Grifinória, Sonserina, Lufa-Lufa, Corvinal, Teste de Personalidade, Mundo Bruxo, Chapéu Seletor AI, Teste Mágico",
  openGraph: {
    title: "Comece Sua Jornada Mágica - Teste das Casas & Chat com o Chapéu Seletor",
    description: "Pronto para descobrir sua verdadeira casa em Hogwarts? Faça nosso teste mágico ou tenha uma conversa pessoal com o Chapéu Seletor para encontrar onde você realmente pertence!"
  }
}

export default function Home() {
  return (
    <div className="magic-bg min-h-screen w-full">
      <MagicCursor />
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-7xl font-bold text-amber-400 font-magic-pt tracking-wider px-4 animate-float">
                {pt.home.welcome}
              </h1>
              
              <p className="text-2xl md:text-4xl text-amber-400 font-magic-pt tracking-wide px-4">
                {pt.home.description}
              </p>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/pt/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-pt"
              >
                {pt.common.startQuiz}
              </Link>
              <Link 
                href="/pt/ask-sorting-hat"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-pt"
              >
                {pt.common.askSortingHat}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 