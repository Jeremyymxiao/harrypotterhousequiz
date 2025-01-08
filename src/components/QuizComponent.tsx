'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { questions } from '@/data/questions'
import { HOUSES, type HouseName } from '@/types/houses'
import { getCurrentLanguage } from '@/utils/language'
import { en } from '@/i18n/translations/en'
import { zh } from '@/i18n/translations/zh'
import { zhHant } from '@/i18n/translations/zhHant'
import { ko } from '@/i18n/translations/ko'
import { ru } from '@/i18n/translations/ru'
import { jp } from '@/i18n/translations/jp'
import { pt } from '@/i18n/translations/pt'

const translations = { en, zh, 'zhHant': zhHant, ko, ru, jp, pt }

const getFontClass = (lang: string) => {
  switch (lang) {
    case 'zh':
    case 'zhHant':
      return 'font-magic-zh'
    case 'ko':
      return 'font-magic-ko'
    case 'ru':
      return 'font-magic-ru'
    case 'jp':
      return 'font-magic-jp'
    case 'pt':
      return 'font-magic-pt'
    default:
      return 'font-harry'
  }
}

export default function QuizComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLang = getCurrentLanguage(pathname)
  const t = translations[currentLang]
  const fontClass = getFontClass(currentLang)
  
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
      
      // Navigate to result page based on language
      const resultPath = `/${currentLang === 'en' ? '' : currentLang + '/'}result`
      router.push(resultPath)
    }
  }

  const question = questions[currentQuestion]

  return (
    <div className={`relative min-h-screen flex items-center justify-center p-8`}>
      <div className="relative z-10 max-w-3xl w-full bg-gray-900/30 border-2 border-amber-400 rounded-2xl p-8 shadow-[0_0_20px_rgba(196,180,84,0.3)] backdrop-blur-md">
        <div className="flex justify-between mb-4">
          <button
            onClick={() => router.push(currentLang === 'en' ? '/' : `/${currentLang}`)}
            className={`magic-button px-4 py-2 text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 transition-all duration-300 
                     backdrop-blur-sm bg-black/30 ${fontClass}`}
          >
            {t.common.returnHome}
          </button>
        </div>
        <div className={`flex justify-between text-amber-400 text-sm mb-2 ${fontClass}`}>
          <span>{t.quiz.question} {currentQuestion + 1}/{questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
        
        <div className="h-2 bg-gray-800 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h2 className="text-2xl text-amber-200 mb-8 font-normal tracking-wide">
          {question.text[currentLang]}
        </h2>

        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.scores)}
              className={`w-full p-4 text-left text-amber-200 bg-gray-800/90 border border-amber-400 rounded-lg
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300
                         hover:shadow-[0_4px_12px_rgba(255,255,255,0.4),0_0_30px_rgba(255,215,0,0.6)] 
                         relative after:absolute after:content-[''] after:w-8 after:h-8 
                         after:right-4 after:top-1/2 after:-translate-y-1/2
                         after:transition-all after:duration-300
                         hover:after:bg-gradient-to-r hover:after:from-transparent 
                         hover:after:to-amber-200/50 hover:after:blur-md font-normal`}
            >
              {answer.text[currentLang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
