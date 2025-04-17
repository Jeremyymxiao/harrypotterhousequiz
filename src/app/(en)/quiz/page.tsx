"use client"

import React, { useState } from 'react'
import QuizComponent from '@/components/QuizComponent'
import Image from 'next/image'

export default function QuizPage() {
  const [startQuiz, setStartQuiz] = useState(false)

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
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Hero Section with CTA */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/sorting-hat.png"
            alt="The Magical Sorting Hat"
            width={180}
            height={180}
            className="mx-auto mb-4 animate-float"
            priority
          />
          <h1 className="text-5xl md:text-6xl text-amber-400 font-harry mb-6">
            The Sorting Hat Awaits
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-harry mb-6 max-w-3xl mx-auto">
            "I'll have a look inside your mind and tell where you belong!"
          </p>
          
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)] mb-8"
          >
            Begin the Hogwarts House Quiz
          </button>
        </div>
      </section>

      {/* Sorting Hat's Song - KEEPING THIS FULLY INTACT AS REQUESTED */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-harry text-amber-400 text-center mb-8">The Sorting Hat's Song</h2>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-amber-200 mb-4 font-magic italic">
              <p className="mb-4 text-center">
                A thousand years or more ago,<br />
                When I was newly sewn,<br />
                There lived four wizards of renown,<br />
                Whose names are still well known:
              </p>
              <p className="mb-4 text-center">
                Bold Gryffindor, from wild moor,<br />
                Fair Ravenclaw, from glen,<br />
                Sweet Hufflepuff, from valley broad,<br />
                Shrewd Slytherin, from fen.
              </p>
              <p className="mb-4 text-center">
                They shared a wish, a hope, a dream,<br />
                They hatched a daring plan<br />
                To educate young sorcerers<br />
                Thus Hogwarts School began.
              </p>
              <p className="mb-4 text-center">
                Now each of these four founders<br />
                Formed their own house, for each<br />
                Did value different virtues<br />
                In the ones they had to teach.
              </p>
              <p className="mb-4 text-center">
                By Gryffindor, the bravest were<br />
                Prized far beyond the rest;<br />
                For Ravenclaw, the cleverest<br />
                Would always be the best;
              </p>
              <p className="mb-4 text-center">
                For Hufflepuff, hard workers were<br />
                Most worthy of admission;<br />
                And power-hungry Slytherin<br />
                Loved those of great ambition.
              </p>
              <p className="mb-4 text-center">
                While still alive they did divide<br />
                Their favorites from the throng,<br />
                Yet how to pick the worthy ones<br />
                When they were dead and gone?
              </p>
              <p className="mb-4 text-center">
                'Twas Gryffindor who found the way,<br />
                He whipped me off his head<br />
                The founders put some brains in me<br />
                So I could choose instead!
              </p>
              <p className="text-center">
                Now slip me snug about your ears,<br />
                I've never yet been wrong,<br />
                I'll have a look inside your mind<br />
                And tell where you belong!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Houses Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-6">The Four Houses</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-5 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-xl font-harry text-yellow-400 mb-2">Gryffindor</h3>
              <p className="text-amber-200 font-harry">
                "By Gryffindor, the bravest were prized far beyond the rest."
                <br />Values: Courage, Bravery, Nerve, Chivalry
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-5 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-xl font-harry text-blue-400 mb-2">Ravenclaw</h3>
              <p className="text-amber-200 font-harry">
                "For Ravenclaw, the cleverest would always be the best."
                <br />Values: Intelligence, Wit, Wisdom, Creativity
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-5 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-xl font-harry text-yellow-300 mb-2">Hufflepuff</h3>
              <p className="text-amber-200 font-harry">
                "For Hufflepuff, hard workers were most worthy of admission."
                <br />Values: Hard Work, Loyalty, Patience, Fairness
              </p>
            </div>
            
            <div className="bg-green-900/20 p-5 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-xl font-harry text-green-400 mb-2">Slytherin</h3>
              <p className="text-amber-200 font-harry">
                "And power-hungry Slytherin loved those of great ambition."
                <br />Values: Ambition, Cunning, Leadership, Resourcefulness
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secondary CTA */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-harry text-amber-400 mb-6">Ready?</h2>
          <p className="text-amber-200 mb-6 font-harry">
            Let the ancient magic reveal your true Hogwarts house.
          </p>
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)]"
          >
            Begin the Hogwarts House Quiz
          </button>
        </div>
      </section>
    </div>
  )
}
