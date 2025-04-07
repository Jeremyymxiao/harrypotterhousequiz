import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { pt } from '@/i18n/translations/pt'
import Image from 'next/image'

export const metadata = {
  title: "Teste da Casa de Hogwarts | Qual é a sua Casa em Hogwarts? | Seleção Oficial",
  description: "Faça nosso Teste da Casa de Hogwarts oficial ou converse com o Chapéu Seletor AI para descobrir sua verdadeira casa em Hogwarts. Nosso Teste da Casa de Hogwarts usa análise de personalidade precisa para determinar se você pertence à Grifinória, Sonserina, Lufa-Lufa ou Corvinal!",
  keywords: "Teste da Casa de Hogwarts, Seleção de Casas de Hogwarts, Teste do Chapéu Seletor, Casas de Hogwarts, Grifinória, Sonserina, Lufa-Lufa, Corvinal, Teste de Personalidade, Mundo Mágico, Chapéu Seletor AI, Teste Mágico",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/pt'
  },
  openGraph: {
    title: "Teste da Casa de Hogwarts - Comece sua Jornada Mágica | Descubra sua Casa em Hogwarts",
    description: "Pronto para descobrir sua verdadeira casa em Hogwarts com o autoritativo Teste da Casa de Hogwarts? Faça o teste mágico ou converse com o Chapéu Seletor para encontrar onde você realmente pertence!"
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
              <h1 className="text-4xl md:text-6xl font-bold text-amber-400 font-magic tracking-wider px-4 animate-float">
                Teste da Casa de Hogwarts
              </h1>
              
              <p className="text-2xl md:text-3xl text-amber-400 font-magic tracking-wide px-4">
                Descubra sua verdadeira casa em Hogwarts
              </p>

              <div className="mt-6 text-amber-200">
                <div className="mb-4 italic text-lg font-magic">
                  "Quando Hogwarts começou há muito tempo,
                  Havia quatro nobres nomes, fundadores renomados;
                  Que extraíram da natureza selvagem um pouco de alunos,
                  Para ensinar tudo o que sabiam..."
                </div>
                <p className="text-lg text-amber-200 mt-4 font-magic">
                  Bem-vindo ao mais autoritativo Teste da Casa de Hogwarts, onde a magia revela seus traços internos e valores. Através do nosso cuidadosamente projetado Teste da Casa de Hogwarts, você descobrirá se possui a coragem da Grifinória, a ambição da Sonserina, a lealdade da Lufa-Lufa ou a sabedoria da Corvinal.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/pt/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic"
              >
                Iniciar Teste da Casa de Hogwarts
              </Link>
              <Link 
                href="/pt/sorting-hat-quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic"
              >
                Perguntar ao Chapéu Seletor
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Why Choose Our Quiz Section */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic text-amber-400 text-center mb-8">Por que escolher nosso Teste da Casa de Hogwarts?</h2>
          
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm mb-8">
            <p className="text-amber-200 mb-4 font-magic text-lg">
              Nosso Teste da Casa de Hogwarts não é apenas um teste de personalidade, mas uma jornada pelo mundo mágico. Ao fazer o Teste da Casa de Hogwarts, adotamos os mesmos princípios fundamentais do sistema de seleção de Hogwarts criado por J.K. Rowling, garantindo resultados perfeitamente alinhados com o espírito do mundo mágico.
            </p>
            <p className="text-amber-200 mb-4 font-magic text-lg">
              Cada pergunta no Teste da Casa de Hogwarts é cuidadosamente projetada para avaliar seus valores internos, talentos e potencial. Como o Chapéu Seletor original, nosso teste pode ver qualidades profundas dentro de você que talvez você mesmo não esteja ciente.
            </p>
            <p className="text-amber-200 font-magic text-lg">
              Seja você um fã de longa data da série Harry Potter ou alguém apenas começando a explorar o mundo mágico, nosso Teste da Casa de Hogwarts oferece uma experiência de seleção significativa para entender melhor a si mesmo.
            </p>
          </div>
        </div>
      </section>

      {/* Magical Features */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic text-amber-400 text-center mb-12">{pt.home.features.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic text-amber-400 mb-4">Teste da Casa de Hogwarts Preciso</h3>
              <p className="text-amber-200 font-magic">Nosso Teste da Casa de Hogwarts é baseado em princípios psicológicos profundos e análises de personagens do material original, garantindo a precisão e confiabilidade dos resultados. Cada pergunta é profissionalmente projetada para identificar suas características essenciais.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic text-amber-400 mb-4">Chapéu Seletor AI</h3>
              <p className="text-amber-200 font-magic">Experimente um método inovador de seleção! Nosso Chapéu Seletor AI pode ter uma conversa genuína com você, como se você estivesse sendo selecionado no Grande Salão de Hogwarts. Esta é uma experiência revolucionária do Teste da Casa de Hogwarts!</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic text-amber-400 mb-4">Análise de Personalidade Detalhada</h3>
              <p className="text-amber-200 font-magic">Após completar o Teste da Casa de Hogwarts, você receberá um relatório detalhado de personalidade explicando por que você pertence a uma casa específica e suas semelhanças com personagens famosos daquela casa. Compreenda seu potencial mágico e traços internos.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic text-amber-400 mb-4">Enciclopédia das Casas de Hogwarts</h3>
              <p className="text-amber-200 font-magic">Explore uma base de conhecimento completa sobre as casas de Hogwarts! Aprenda sobre a história da fundação de cada casa, ex-alunos famosos, traços comuns e tradições mágicas únicas. O Teste da Casa de Hogwarts não é apenas sobre seleção, é uma jornada de descoberta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hogwarts Houses Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic text-amber-400 text-center mb-12">As Quatro Casas de Hogwarts</h2>
          
          <div className="space-y-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-3xl font-magic text-yellow-400 mb-3">Grifinória</h3>
              <p className="text-amber-200 mb-4 font-magic">
                Coragem, bravura e ousadia são as características mais importantes da casa Grifinória. Se o Teste da Casa de Hogwarts determinar que você pertence à Grifinória, significa que você tem espírito aventureiro, se levanta diante da adversidade, e tem vontade de lutar pelo que é certo. Os Grifinórios são tipicamente francos, apaixonados e leais aos amigos.
              </p>
              <p className="text-amber-200 font-magic">
                Membros famosos da Grifinória incluem Harry Potter, Hermione Granger, Ron Weasley, Albus Dumbledore e a Professora Minerva McGonagall.
              </p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-3xl font-magic text-green-400 mb-3">Sonserina</h3>
              <p className="text-amber-200 mb-4 font-magic">
                Ambição, astúcia e engenhosidade são os valores centrais da Sonserina. Se o Teste da Casa de Hogwarts determinar que você pertence à Sonserina, mostra que você possui excelentes habilidades de liderança, metas elevadas e determinação para alcançá-las. Os Sonserinos são tipicamente inteligentes, pensam estrategicamente e valorizam a auto-melhoria.
              </p>
              <p className="text-amber-200 font-magic">
                Membros famosos da Sonserina incluem Severus Snape, Draco Malfoy, Bellatrix Lestrange e Merlin (sim, o lendário Merlin era um estudante da Sonserina).
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-3xl font-magic text-yellow-300 mb-3">Lufa-Lufa</h3>
              <p className="text-amber-200 mb-4 font-magic">
                Lealdade, justiça e paciência caracterizam a casa Lufa-Lufa. Se o Teste da Casa de Hogwarts determinar que você pertence à Lufa-Lufa, você valoriza amizades sinceras, tratamento justo e vontade de trabalhar persistentemente em direção aos seus objetivos. Os Lufa-Lufas são amigáveis, inclusivos e honestos.
              </p>
              <p className="text-amber-200 font-magic">
                Membros famosos da Lufa-Lufa incluem Newt Scamander, Cedric Diggory, Nymphadora Tonks e a Professora Pomona Sprout.
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-3xl font-magic text-blue-400 mb-3">Corvinal</h3>
              <p className="text-amber-200 mb-4 font-magic">
                Sabedoria, criatividade e sede de conhecimento são as características centrais da Corvinal. Se o Teste da Casa de Hogwarts determinar que você pertence à Corvinal, significa que você valoriza o conhecimento, gosta de aprender e possui uma forma de pensar única e original. Os Corvinais são tipicamente intelectuais, talentosos e de mente aberta.
              </p>
              <p className="text-amber-200 font-magic">
                Membros famosos da Corvinal incluem Luna Lovegood, Cho Chang, Professor Filius Flitwick e a própria Rowena Ravenclaw.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Expanded */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic text-amber-400 text-center mb-12">Perguntas Frequentes sobre o Teste da Casa de Hogwarts</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic text-amber-400 mb-3">Quão preciso é o Teste da Casa de Hogwarts?</h3>
              <p className="text-amber-200 font-magic">Nosso Teste da Casa de Hogwarts emprega algoritmos avançados de análise de personalidade combinados com descrições de características das casas do material original de J.K. Rowling, garantindo que os resultados estejam alinhados com os princípios de seleção do mundo mágico. Nosso teste foi validado por milhões de fãs de Harry Potter e possui alta precisão.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic text-amber-400 mb-3">Posso refazer o Teste da Casa de Hogwarts?</h3>
              <p className="text-amber-200 font-magic">Certamente! Assim como o Chapéu Seletor leva em consideração suas escolhas, o Teste da Casa de Hogwarts pode ser refeito a qualquer momento. Como a personalidade das pessoas pode mudar com o tempo e experiências, testes ocasionais podem revelar características em evolução.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic text-amber-400 mb-3">Por que os resultados do Teste da Casa de Hogwarts são diferentes do que eu esperava?</h3>
              <p className="text-amber-200 font-magic">O Chapéu Seletor vê além da superfície e do que desejamos ser, observando a essência de quem realmente somos. O Teste da Casa de Hogwarts funciona de maneira semelhante e pode descobrir qualidades que você não sabia que possuía. Lembre-se que cada casa tem seus próprios valores e forças, e nenhuma casa é superior às outras.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic text-amber-400 mb-3">Qual é a diferença entre conversar com o Chapéu Seletor AI e o tradicional Teste da Casa de Hogwarts?</h3>
              <p className="text-amber-200 font-magic">O Teste da Casa de Hogwarts tradicional avalia suas características de personalidade através de um conjunto de perguntas fixas. Em contraste, a conversa com o Chapéu Seletor AI simula uma interação com o Chapéu Seletor real. Você pode fazer perguntas livremente, compartilhar seus pensamentos e valores, e o AI determinará a casa mais adequada com base em suas respostas. Isso proporciona uma experiência de seleção mais personalizada e interativa.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic text-amber-400 mb-3">E se os resultados do Teste da Casa de Hogwarts mostrarem que sou adequado para várias casas?</h3>
              <p className="text-amber-200 font-magic">É completamente normal que muitos bruxos e bruxas possuam características de múltiplas casas! Assim como Harry tinha tanto a coragem da Grifinória quanto a ambição da Sonserina. Nesses casos, o Chapéu Seletor geralmente considera sua própria preferência. Se os resultados do teste mostrarem fortes traços para várias casas, você pode escolher a que mais lhe atrai ou tentar a conversa com o Chapéu Seletor AI para uma análise mais profunda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-magic text-amber-400 mb-6">Pronto para descobrir sua verdadeira identidade?</h2>
          <p className="text-amber-200 mb-8 font-magic text-lg">
            Todo bruxo e bruxa tem um lugar ao qual pertencem. Entre as quatro casas de Hogwarts, certamente há um lugar onde seus talentos serão mais bem apreciados e seu potencial mágico será totalmente liberado. Faça o Teste da Casa de Hogwarts agora e encontre seu lugar no mundo mágico!
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <Link 
              href="/pt/quiz"
              className="magic-button px-8 py-4 text-2xl font-magic text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              Iniciar Teste da Casa de Hogwarts
            </Link>
            <Link 
              href="/pt/sorting-hat-quiz"
              className="magic-button px-8 py-4 text-2xl font-magic text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              Conversar com o Chapéu Seletor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 