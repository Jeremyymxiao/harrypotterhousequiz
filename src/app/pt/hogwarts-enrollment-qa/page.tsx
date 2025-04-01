import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'

export const metadata = {
  title: "Perguntas e Respostas sobre Inscrição em Hogwarts | Como Ingressar na Escola de Magia e Bruxaria de Hogwarts",
  description: "Aprenda sobre o processo de admissão, critérios de seleção e perguntas frequentes da Escola de Magia e Bruxaria de Hogwarts. Descubra como receber sua carta de aceitação, taxas escolares e outras informações importantes sobre o mundo bruxo.",
  keywords: "inscrição em Hogwarts, admissão em Hogwarts, carta de aceitação de Hogwarts, perguntas sobre Hogwarts, taxas de Hogwarts, uniforme de Hogwarts, compra de varinha, Beco Diagonal",
  alternates: {
    canonical: 'https://harrypotterquiz.pro/pt/hogwarts-enrollment-qa'
  },
  openGraph: {
    title: "Perguntas e Respostas sobre Inscrição em Hogwarts | Guia de Admissão na Escola de Magia",
    description: "Explore o processo de admissão, critérios de seleção e perguntas frequentes da Escola de Magia e Bruxaria de Hogwarts. Saiba como receber sua carta de aceitação de Hogwarts!"
  }
}

export default function HogwartsEnrollmentQA() {
  return (
    <div className="magic-bg min-h-screen w-full">
      <MagicCursor />
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 pt-24 pb-12 flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 font-harry text-center mb-8">
              Perguntas e Respostas sobre Inscrição em Hogwarts
            </h1>
            
            <p className="text-xl text-amber-200 mb-8 font-harry leading-relaxed">
              Bem-vindo à página de Perguntas e Respostas sobre Inscrição em Hogwarts! Aqui respondemos perguntas comuns sobre admissão na Escola de Magia e Bruxaria de Hogwarts, ajudando você a entender o processo de inscrição e informações relacionadas sobre a escola mais famosa do mundo bruxo. Seja você alguém que acabou de receber sua carta entregue por uma coruja ou simplesmente curioso sobre o mundo mágico, você encontrará as respostas que procura aqui.
            </p>
          </div>

          {/* Q&A Section */}
          <div className="space-y-8">
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">Qual é o processo de admissão em Hogwarts?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                Quando uma jovem bruxa ou bruxo nasce, a Pena de Aceitação escreve seu nome no Livro de Admissão, mantido em uma câmara secreta em Hogwarts. No seu 11º aniversário, Hogwarts envia uma coruja com sua carta de aceitação, dando-lhe oficialmente as boas-vindas à escola!
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">Como me inscrevo em Hogwarts?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                Você não precisa se inscrever ativamente. Hogwarts seleciona jovens bruxas e bruxos qualificados e lhes envia cartas de aceitação. A habilidade mágica é inata, e a magia de Hogwarts consegue identificar todas as crianças com talentos mágicos e convidá-las no momento apropriado.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">Tenho mais de 11 anos e não recebi uma carta de aceitação. Ainda tenho chance de frequentar Hogwarts?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                Infelizmente, de acordo com a tradição de Hogwarts, estudantes com mais de 11 anos não podem se matricular. O sistema educacional de Hogwarts é projetado como um currículo de sete anos, começando aos 11 anos, garantindo que os estudantes possam aprender completamente todos os cursos mágicos necessários.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">A que se refere o "pré-registro" mencionado online?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                A NetEase desenvolveu um jogo chamado "Harry Potter: Magic Awakened" (Harry Potter: Magia Desperta) que realizou vários testes beta e eventos antes de seu lançamento oficial, alguns exigindo pré-registro. Isso não está relacionado ao processo de inscrição em Hogwarts descrito nos romances e filmes, sendo simplesmente uma atividade de marketing para o jogo.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">Quanto custa Hogwarts? Como faço o pagamento?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                Hogwarts não cobra mensalidades. No mundo bruxo, a educação em Hogwarts é fornecida gratuitamente a todas as bruxas e bruxos admitidos. Os estudantes só precisam comprar livros didáticos, varinhas, vestes e outros itens pessoais. Observe que, na realidade, qualquer pessoa pedindo para você pagar mensalidades de Hogwarts provavelmente está tentando aplicar um golpe.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">Como compro uniformes e uma varinha?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                Após receber sua carta de aceitação, jovens bruxas e bruxos visitam o Beco Diagonal para comprar suas vestes, varinhas e outros materiais escolares. As vestes podem ser compradas na Madame Malkin - Roupas para Todas as Ocasiões, enquanto as varinhas são selecionadas na Olivaras. Lembre-se, a varinha escolhe o bruxo, não o contrário!
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">Hogwarts realmente existe?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                Essa é uma excelente pergunta. Hogwarts existe no coração de todos que acreditam nela. Tecnicamente, Hogwarts é uma escola de magia fictícia criada por J.K. Rowling na série Harry Potter. Lendo os romances e assistindo aos filmes, podemos aprender sobre a magia desta escola e a beleza da vida no campus.
              </p>
              <p className="text-lg text-amber-200 font-harry leading-relaxed mt-4">
                Como um site de fãs, recomendamos que qualquer pessoa se beneficiaria da leitura dessas maravilhosas histórias mágicas. Se você realmente deseja se imergir no mundo mágico, por que não começar sua jornada mágica lendo a série Harry Potter?
              </p>
            </section>
          </div>

          {/* Additional Information */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-xl p-8 mt-12 border border-amber-800/40">
            <h2 className="text-3xl font-harry text-amber-400 mb-6">Curiosidades do Mundo Bruxo</h2>
            <p className="text-lg text-amber-200 font-harry leading-relaxed">
              A Escola de Magia e Bruxaria de Hogwarts foi fundada por quatro grandes bruxos: Godric Gryffindor (Godrico Gryffindor), Helga Hufflepuff, Rowena Ravenclaw e Salazar Slytherin. A escola está localizada em uma área isolada da Escócia, invisível para os Trouxas (pessoas não-mágicas). O Castelo de Hogwarts é protegido por magia poderosa, incluindo feitiços anti-Trouxas que o fazem parecer uma ruína abandonada e perigosa aos olhos dos Trouxas.
            </p>
            <p className="text-lg text-amber-200 font-harry leading-relaxed mt-4">
              O Expresso de Hogwarts parte da Plataforma 9¾ na Estação King's Cross em Londres todo dia 1º de setembro, levando os estudantes para Hogwarts. Os estudantes devem passar por uma barreira mágica escondida entre as plataformas 9 e 10 para alcançar a Plataforma 9¾.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-harry text-amber-400 mb-6">Explore Mais do Mundo Mágico</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
              <Link 
                href="/pt/quiz"
                className="magic-button px-8 py-4 text-xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                Fazer o Teste das Casas
              </Link>
              <Link 
                href="/pt/sorting-hat-quiz"
                className="magic-button px-8 py-4 text-xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                Conversar com o Chapéu Seletor
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 