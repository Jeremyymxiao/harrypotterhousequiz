'use client'

import { useState } from 'react'
import Link from 'next/link'

type House = 'Gryffindor' | 'Ravenclaw' | 'Hufflepuff' | 'Slytherin'
type Answer = 'a' | 'b' | 'c' | 'd'
type Answers = Record<number, Answer>

const HOUSE_COLORS = {
  Gryffindor: 'from-red-600 to-yellow-500',
  Ravenclaw: 'from-blue-600 to-gray-300',
  Hufflepuff: 'from-yellow-400 to-gray-900',
  Slytherin: 'from-green-600 to-gray-300',
}

const HOUSE_DESCRIPTIONS = {
  Gryffindor: "Corajoso e destemido como Harry Potter! A Grifinória é conhecida por sua coragem, bravura e por defender o que é certo. Você não tem medo de ajudar os outros e embarcar em aventuras emocionantes!",
  Ravenclaw: "Inteligente e criativo! A Corvinal adora aprender coisas novas e resolver quebra-cabeças. Você é curioso sobre o mundo e gosta de usar sua imaginação para criar ideias inteligentes!",
  Hufflepuff: "Gentil e trabalhador! A Lufa-Lufa tem ótimos amigos que sempre se esforçam ao máximo. Você é carinhoso, paciente e adora ajudar os outros - isso torna você muito especial!",
  Slytherin: "Esperto e determinado! A Sonserina sabe o que quer e trabalha duro para alcançar seus objetivos. Você é engenhoso e bom em encontrar soluções criativas!"
}

export default function KidsQuiz() {
  const [answers, setAnswers] = useState<Answers>({})
  const [result, setResult] = useState<House | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (question: number, answer: Answer) => {
    setAnswers(prev => ({
      ...prev,
      [question]: answer
    }))
  }

  const calculateHouse = () => {
    const scores = {
      Gryffindor: 0,
      Ravenclaw: 0,
      Hufflepuff: 0,
      Slytherin: 0
    }

    // Count the answers
    Object.values(answers).forEach(answer => {
      switch(answer) {
        case 'a':
          scores.Gryffindor++
          break
        case 'b':
          scores.Ravenclaw++
          break
        case 'c':
          scores.Hufflepuff++
          break
        case 'd':
          scores.Slytherin++
          break
      }
    })

    // Find the house with highest score
    let maxScore = 0
    let resultHouse: House = 'Gryffindor'

    Object.entries(scores).forEach(([house, score]) => {
      if (score > maxScore) {
        maxScore = score
        resultHouse = house as House
      }
    })

    return resultHouse
  }

  const handleSubmit = () => {
    if (Object.keys(answers).length < 5) {
      alert("Por favor, responda todas as perguntas antes de descobrir sua casa!")
      return
    }

    const house = calculateHouse()
    setResult(house)
    setShowResult(true)
  }

  if (showResult && result) {
    return (
      <div className="min-h-screen w-full pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
            <h1 className="text-4xl md:text-5xl font-magic-pt text-amber-400 text-center mb-8">
              Sua Casa em Hogwarts é...
            </h1>

            <div className={`text-center p-8 rounded-lg bg-gradient-to-r ${HOUSE_COLORS[result]} bg-opacity-30`}>
              <h2 className="text-6xl font-magic-pt text-white mb-4">{result}!</h2>
              <p className="text-white text-lg mb-6">
                {HOUSE_DESCRIPTIONS[result]}
              </p>
            </div>

            <div className="text-center space-y-4">
              <button
                onClick={() => {
                  setAnswers({})
                  setResult(null)
                  setShowResult(false)
                }}
                className="px-8 py-3 text-xl font-magic-pt text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                Fazer o Teste Novamente
              </button>

              <div>
                <Link
                  href="/pt"
                  className="inline-block mt-4 text-amber-400 hover:text-amber-300 transition-colors font-magic-pt"
                >
                  Voltar para a Página Inicial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-magic-pt text-amber-400 text-center mb-8">
            Teste da Casa de Hogwarts para Crianças
          </h1>

          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-pt text-amber-400">Bem-vindos, Jovens Bruxos!</h2>
            <p className="text-amber-200 text-lg">
              Você está pronto para descobrir a qual casa de Hogwarts pertence? Assim como Harry Potter e seus amigos, 
              você vai descobrir se é corajoso como um Grifinório, inteligente como um Corvinal, gentil como um 
              Lufa-lufa ou ambicioso como um Sonserino!
            </p>
          </div>

          {/* Quiz Instructions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-pt text-amber-400">Como Fazer o Teste</h2>
            <p className="text-amber-200 text-lg">
              Responda estas 5 perguntas mágicas, e nós ajudaremos você a encontrar sua casa perfeita em Hogwarts. 
              Lembre-se, cada casa é especial à sua maneira!
            </p>
          </div>

          {/* Quiz Questions */}
          <div className="space-y-8">
            <h2 className="text-2xl font-magic-pt text-amber-400">Suas Perguntas Mágicas</h2>
            
            {/* Question 1 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-pt text-amber-400">1. O que você faria durante o recreio?</h3>
              <div className="space-y-2 text-amber-200">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q1" 
                    id="q1a" 
                    checked={answers[1] === 'a'}
                    onChange={() => handleAnswer(1, 'a')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q1a">Liderar todos em um jogo de aventura</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q1" 
                    id="q1b" 
                    checked={answers[1] === 'b'}
                    onChange={() => handleAnswer(1, 'b')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q1b">Ler um livro emocionante sobre magia</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q1" 
                    id="q1c" 
                    checked={answers[1] === 'c'}
                    onChange={() => handleAnswer(1, 'c')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q1c">Ajudar um amigo que parece solitário</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q1" 
                    id="q1d"
                    checked={answers[1] === 'd'}
                    onChange={() => handleAnswer(1, 'd')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q1d">Criar um novo jogo legal para todos</label>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-pt text-amber-400">2. Qual animal mágico você escolheria?</h3>
              <div className="space-y-2 text-amber-200">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q2" 
                    id="q2a" 
                    checked={answers[2] === 'a'}
                    onChange={() => handleAnswer(2, 'a')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q2a">Um filhote de leão corajoso</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q2" 
                    id="q2b" 
                    checked={answers[2] === 'b'}
                    onChange={() => handleAnswer(2, 'b')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q2b">Uma coruja sábia</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q2" 
                    id="q2c" 
                    checked={answers[2] === 'c'}
                    onChange={() => handleAnswer(2, 'c')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q2c">Um cachorrinho amigável</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q2" 
                    id="q2d" 
                    checked={answers[2] === 'd'}
                    onChange={() => handleAnswer(2, 'd')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q2d">Uma cobra esperta</label>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-pt text-amber-400">3. O que você mais gosta de fazer na escola?</h3>
              <div className="space-y-2 text-amber-200">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q3" 
                    id="q3a" 
                    checked={answers[3] === 'a'}
                    onChange={() => handleAnswer(3, 'a')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q3a">Tentar atividades novas e emocionantes</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q3" 
                    id="q3b" 
                    checked={answers[3] === 'b'}
                    onChange={() => handleAnswer(3, 'b')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q3b">Aprender coisas interessantes novas</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q3" 
                    id="q3c" 
                    checked={answers[3] === 'c'}
                    onChange={() => handleAnswer(3, 'c')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q3c">Ajudar colegas com suas tarefas</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q3" 
                    id="q3d" 
                    checked={answers[3] === 'd'}
                    onChange={() => handleAnswer(3, 'd')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q3d">Trabalhar duro para ser o melhor</label>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-pt text-amber-400">4. O que você faria se visse alguém sendo mau com seu amigo?</h3>
              <div className="space-y-2 text-amber-200">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q4" 
                    id="q4a" 
                    checked={answers[4] === 'a'}
                    onChange={() => handleAnswer(4, 'a')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q4a">Enfrentar a pessoa má imediatamente</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q4" 
                    id="q4b" 
                    checked={answers[4] === 'b'}
                    onChange={() => handleAnswer(4, 'b')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q4b">Pensar em uma maneira inteligente de resolver o problema</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q4" 
                    id="q4c" 
                    checked={answers[4] === 'c'}
                    onChange={() => handleAnswer(4, 'c')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q4c">Confortar seu amigo e contar para um professor</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q4" 
                    id="q4d" 
                    checked={answers[4] === 'd'}
                    onChange={() => handleAnswer(4, 'd')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q4d">Encontrar uma maneira de garantir que nunca mais aconteça</label>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-pt text-amber-400">5. O que você desejaria se tivesse uma varinha mágica?</h3>
              <div className="space-y-2 text-amber-200">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q5" 
                    id="q5a" 
                    checked={answers[5] === 'a'}
                    onChange={() => handleAnswer(5, 'a')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q5a">O poder de ter aventuras incríveis</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q5" 
                    id="q5b" 
                    checked={answers[5] === 'b'}
                    onChange={() => handleAnswer(5, 'b')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q5b">A capacidade de aprender toda a magia do mundo</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q5" 
                    id="q5c" 
                    checked={answers[5] === 'c'}
                    onChange={() => handleAnswer(5, 'c')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q5c">O poder de fazer todos felizes</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q5" 
                    id="q5d" 
                    checked={answers[5] === 'd'}
                    onChange={() => handleAnswer(5, 'd')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q5d">A habilidade de realizar todos os seus sonhos</label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 text-xl font-magic-pt text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                Descobrir Minha Casa!
              </button>
            </div>
          </div>

          {/* House Descriptions */}
          <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-magic-pt text-amber-400">Sobre as Casas de Hogwarts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-pt text-amber-400">Grifinória</h3>
                <p className="text-amber-200">Lar dos corajosos e destemidos, como Harry Potter!</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-pt text-amber-400">Corvinal</h3>
                <p className="text-amber-200">Onde as mentes inteligentes e criativas pertencem!</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-pt text-amber-400">Lufa-Lufa</h3>
                <p className="text-amber-200">Para aqueles que são gentis e trabalham duro!</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-pt text-amber-400">Sonserina</h3>
                <p className="text-amber-200">Onde você encontra os ambiciosos e engenhosos!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 