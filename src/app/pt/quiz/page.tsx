"use client"

import React, { useState } from 'react'
import QuizComponent from '@/components/QuizComponent'
import Image from 'next/image'
import Script from 'next/script'
import { questions } from '@/data/questions'

export default function QuizPage() {
  const [startQuiz, setStartQuiz] = useState(false)
  
  // Extrair perguntas e respostas para dados estruturados
  const structuredDataQuestions = questions.map(question => ({
    '@type': 'Question',
    name: question.text.pt,
    acceptedAnswer: {
      '@type': 'Answer',
      text: question.answers.map(answer => answer.text.pt).join(', ')
    }
  }))

  if (startQuiz) {
    return (
      <main className="quiz-bg min-h-screen flex items-center justify-center p-4">
        <div className="magic-particles" />
        <QuizComponent />
      </main>
    )
  }

  return (
    <div className="quiz-bg min-h-screen w-full">
      {/* JSON-LD dados estruturados */}
      <Script
        id="quiz-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: 'Teste das Casas de Harry Potter',
            description: 'Descubra a qual casa de Hogwarts você realmente pertence com nosso teste mágico do Chapéu Seletor. Responda às perguntas para revelar se você é um corajoso Grifinória, um leal Lufa-Lufa, um sábio Corvinal ou um ambicioso Sonserina.',
            about: {
              '@type': 'Thing',
              name: 'Casas de Hogwarts de Harry Potter',
              description: 'As quatro casas da Escola de Magia e Bruxaria de Hogwarts'
            },
            educationalAlignment: {
              '@type': 'AlignmentObject',
              alignmentType: 'educationalSubject',
              targetName: 'Entretenimento'
            },
            author: {
              '@type': 'Organization',
              name: 'Equipe de Teste de Hogwarts'
            },
            provider: {
              '@type': 'Organization',
              name: 'Equipe de Teste de Hogwarts',
              url: 'https://harrypotterhousequiz.pro/pt'
            },
            question: structuredDataQuestions
          })
        }}
      />
      
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Hero Section with CTA */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/sorting-hat.png"
            alt="O Chapéu Seletor Mágico"
            width={180}
            height={180}
            className="mx-auto mb-4 animate-float"
            priority
          />
          <h1 className="text-5xl md:text-6xl text-amber-400 font-harry mb-6">
            O Chapéu Seletor está esperando
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-harry mb-6 max-w-3xl mx-auto">
            "Vou olhar dentro da sua mente e dizer a qual casa você pertence!"
          </p>
          
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)] mb-8"
          >
            Iniciar o Teste das Casas de Hogwarts
          </button>
        </div>
      </section>

      {/* Sorting Hat's Song */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-harry text-amber-400 text-center mb-8">A Canção do Chapéu Seletor</h2>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-amber-200 mb-4 font-magic italic">
              <p className="mb-4 text-center">
                Há mais de mil anos atrás,<br />
                Quando eu era recém-costurado,<br />
                Viviam quatro bruxos de renome,<br />
                Cujos nomes ainda são conhecidos:
              </p>
              <p className="mb-4 text-center">
                Corajoso Grifinória, do morro selvagem,<br />
                Justa Corvinal, do vale,<br />
                Doce Lufa-Lufa, da planície,<br />
                Astuto Sonserina, do pântano.
              </p>
              <p className="mb-4 text-center">
                Eles compartilhavam um desejo, uma esperança, um sonho,<br />
                Elaboraram um plano ousado<br />
                Para educar jovens feiticeiros<br />
                Assim nasceu a Escola de Hogwarts.
              </p>
              <p className="mb-4 text-center">
                Então cada um desses fundadores<br />
                Formou sua própria casa, pois cada um<br />
                Valorizava diferentes virtudes<br />
                Naqueles que deviam ensinar.
              </p>
              <p className="mb-4 text-center">
                Para Grifinória, os mais corajosos eram<br />
                Estimados acima de todos;<br />
                Para Corvinal, os mais inteligentes<br />
                Seriam sempre os melhores;
              </p>
              <p className="mb-4 text-center">
                Para Lufa-Lufa, os trabalhadores eram<br />
                Os mais dignos de admissão;<br />
                E o Sonserina sedento de poder<br />
                Amava aqueles de grande ambição.
              </p>
              <p className="mb-4 text-center">
                Enquanto vivos eles escolhiam<br />
                Seus favoritos da multidão,<br />
                Mas como escolher os dignos<br />
                Quando eles estivessem mortos?
              </p>
              <p className="mb-4 text-center">
                Foi Grifinória quem encontrou o caminho,<br />
                Ele me tirou de sua cabeça<br />
                Os fundadores colocaram cérebro em mim<br />
                Para que eu pudesse escolher em vez deles!
              </p>
              <p className="text-center">
                Então me coloque em sua cabeça,<br />
                Eu nunca estive errado,<br />
                Vou olhar dentro da sua mente<br />
                E dizer a qual casa você pertence!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Houses Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-6">As Quatro Casas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-5 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-xl font-harry text-yellow-400 mb-2">Grifinória</h3>
              <p className="text-amber-200 font-harry">
                "Para Grifinória, os mais corajosos eram estimados acima de todos."
                <br />Valores: Coragem, Bravura, Determinação, Cavalheirismo
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-5 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-xl font-harry text-blue-400 mb-2">Corvinal</h3>
              <p className="text-amber-200 font-harry">
                "Para Corvinal, os mais inteligentes seriam sempre os melhores."
                <br />Valores: Inteligência, Sabedoria, Criatividade, Originalidade
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-5 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-xl font-harry text-yellow-300 mb-2">Lufa-Lufa</h3>
              <p className="text-amber-200 font-harry">
                "Para Lufa-Lufa, os trabalhadores eram os mais dignos de admissão."
                <br />Valores: Trabalho árduo, Lealdade, Paciência, Justiça
              </p>
            </div>
            
            <div className="bg-green-900/20 p-5 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-xl font-harry text-green-400 mb-2">Sonserina</h3>
              <p className="text-amber-200 font-harry">
                "E o Sonserina sedento de poder amava aqueles de grande ambição."
                <br />Valores: Ambição, Astúcia, Liderança, Engenhosidade
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secondary CTA */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-harry text-amber-400 mb-6">Pronto?</h2>
          <p className="text-amber-200 mb-6 font-harry">
            Deixe que a magia antiga revele sua verdadeira casa em Hogwarts.
          </p>
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)]"
          >
            Iniciar o Teste das Casas de Hogwarts
          </button>
        </div>
      </section>
    </div>
  )
} 