'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { questions } from '@/data/questions'
import { HOUSES, type HouseName } from '@/types/houses'

export default function QuizComponent() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<Record<HouseName, number>>({
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0,
  })

  const handleAnswer = (answerScores: Record<HouseName, number>) => {
    const newScores = { ...scores }
    Object.entries(answerScores).forEach(([house, score]) => {
      newScores[house as HouseName] += score
    })
    setScores(newScores)

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate result
      const result = Object.entries(newScores).reduce((max, [house, score]) => 
        score > max.score ? { house, score } : max,
        { house: 'gryffindor' as HouseName, score: -1 }
      )
      
      // Store result in localStorage
      localStorage.setItem('quizResult', result.house)
      
      // Navigate to result page
      router.push('/result')
    }
  }

  const question = questions[currentQuestion]

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 font-['Cinzel']">
      <div className="relative z-10 max-w-3xl w-full bg-gray-900/30 border-2 border-amber-400 rounded-2xl p-8 shadow-[0_0_20px_rgba(196,180,84,0.3)] backdrop-blur-md">
        <div className="flex justify-between mb-4">
          <button
            onClick={() => router.push('/')}
            className="magic-button px-4 py-2 text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 transition-all duration-300 
                     backdrop-blur-sm bg-black/30"
          >
            Return Home
          </button>
        </div>
        <div className="flex justify-between text-amber-400 text-sm mb-2">
          <span>Question {currentQuestion + 1}/{questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
        
        <div className="h-2 bg-gray-800 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h2 className="text-2xl text-amber-200 mb-8 font-bold tracking-wide">{question.text}</h2>

        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.scores)}
              className="w-full p-4 text-left text-amber-200 bg-gray-800/90 border border-amber-400 rounded-lg
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300
                         hover:shadow-[0_4px_12px_rgba(255,255,255,0.4),0_0_30px_rgba(255,215,0,0.6)] 
                         relative after:absolute after:content-[''] after:w-8 after:h-8 
                         after:right-4 after:top-1/2 after:-translate-y-1/2
                         after:transition-all after:duration-300
                         hover:after:bg-gradient-to-r hover:after:from-transparent 
                         hover:after:to-amber-200/50 hover:after:blur-md"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
