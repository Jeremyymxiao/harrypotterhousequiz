import React from 'react'
import PatronusQuizComponent from '@/components/PatronusQuizComponent'
import { patronusQuizMetadata } from '@/app/metadata'

export const metadata = patronusQuizMetadata.ru

export default function PatronusQuizPage() {
  return (
    <main className="patronus-bg min-h-screen flex items-center justify-center p-4">
      <div className="magic-particles" />
      <PatronusQuizComponent />
    </main>
  )
} 