import ChatComponent from '@/components/ChatComponent'
import Image from 'next/image'
import Link from 'next/link'
import { pt } from '@/i18n/translations/pt'

export const metadata = {
  title: 'Teste do Chapéu Seletor AI | Converse com o Chapéu Seletor Mágico',
  description: 'Tenha uma conversa mágica com nosso Chapéu Seletor de IA! Faça perguntas sobre as casas de Hogwarts e descubra seu verdadeiro lugar no mundo bruxo.',
  keywords: 'Teste do Chapéu Seletor, Chapéu Seletor AI, Conversar com Chapéu Seletor, Teste da Casa de Harry Potter',
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/pt/sorting-hat-quiz'
  },
  openGraph: {
    title: 'Converse com o Chapéu Seletor Mágico - Seleção Interativa para Casas de Hogwarts',
    description: 'Tenha uma conversa pessoal com o Chapéu Seletor AI! Faça perguntas, aprenda sobre as casas e descubra onde você realmente pertence em Hogwarts.'
  }
}

export default function SortingHatQuizPage() {
  return (
    <div className="quiz-bg min-h-screen">
      <div className="magic-particles" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block">
            <Image
              src="/images/sorting-hat.png"
              alt="O Chapéu Seletor Mágico"
              width={150}
              height={150}
              className="mx-auto mb-6"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl text-amber-400 font-magic mb-6">
            O Chapéu Seletor Mágico
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-magic mb-8 max-w-3xl mx-auto">
            "Ah, você pode não me achar bonito, mas não me julgue pela aparência,
            Engulo a mim mesmo se puder encontrar um chapéu mais inteligente que eu."
          </p>
        </div>
      </section>
      
      {/* Chat Component Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-magic text-amber-400 mb-4">Converse com o Chapéu Seletor</h2>
          <p className="text-amber-200 max-w-2xl mx-auto font-magic">
            Tenha uma conversa encantada com nosso Chapéu Seletor AI! Faça perguntas sobre as casas, 
            compartilhe detalhes sobre você mesmo ou simplesmente converse sobre o mundo bruxo.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ChatComponent />
        </div>
      </section>

      {/* Houses Section */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic text-amber-400 text-center mb-8">As Quatro Casas de Hogwarts</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-red-800/40">
              <h3 className="text-2xl font-magic text-yellow-400 mb-3">Grifinória</h3>
              <p className="text-amber-200 mb-2 font-magic">Valores: Bravura, Coragem, Ousadia, Cavalheirismo</p>
              <p className="text-amber-200 font-magic">Membros Famosos: Harry Potter, Hermione Granger, Rony Weasley, Albus Dumbledore</p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-green-800/40">
              <h3 className="text-2xl font-magic text-green-400 mb-3">Sonserina</h3>
              <p className="text-amber-200 mb-2 font-magic">Valores: Ambição, Astúcia, Liderança, Engenhosidade</p>
              <p className="text-amber-200 font-magic">Membros Famosos: Severo Snape, Draco Malfoy, Merlin, Horace Slughorn</p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-yellow-800/40">
              <h3 className="text-2xl font-magic text-yellow-300 mb-3">Lufa-Lufa</h3>
              <p className="text-amber-200 mb-2 font-magic">Valores: Trabalho Árduo, Paciência, Lealdade, Jogo Limpo</p>
              <p className="text-amber-200 font-magic">Membros Famosos: Newt Scamander, Cedrico Diggory, Ninfadora Tonks, Pomona Sprout</p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-blue-800/40">
              <h3 className="text-2xl font-magic text-blue-400 mb-3">Corvinal</h3>
              <p className="text-amber-200 mb-2 font-magic">Valores: Inteligência, Sabedoria, Criatividade, Originalidade</p>
              <p className="text-amber-200 font-magic">Membros Famosos: Luna Lovegood, Filius Flitwick, Rowena Ravenclaw, Garrick Ollivander</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-magic text-amber-400 mb-6">Não está pronto para conversar? Faça o teste!</h2>
          <p className="text-amber-200 mb-8 font-magic">
            Se você prefere uma experiência estruturada, nosso detalhado Teste da Casa de Harry Potter oferece outra maneira de descobrir sua verdadeira casa em Hogwarts.
          </p>
          <Link 
            href="/pt/quiz"
            className="magic-button inline-block px-8 py-4 text-2xl font-magic text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
          >
            Fazer o Teste
          </Link>
        </div>
      </section>
    </div>
  )
} 