import React from 'react'
import QuizComponent from '@/components/QuizComponent'

export default function QuizPage() {
  return (
    <main className="quiz-bg min-h-screen flex items-center justify-center p-4">
      <div className="magic-particles" />
      <QuizComponent />
    </main>
  )
}
