"use client"

import React, { useState } from 'react'
import PatronusQuizComponent from '@/components/PatronusQuizComponent'
import Image from 'next/image'
import { Patronus, PatronusType } from '@/types/patronus'
import { PATRONUSES, PATRONUSES_BY_TYPE } from '@/data/patronuses'

export default function PatronusQuizPage() {
  const [startQuiz, setStartQuiz] = useState(false)
  const [selectedType, setSelectedType] = useState<PatronusType | 'all'>('all')

  if (startQuiz) {
    return (
      <main className="patronus-bg min-h-screen flex items-center justify-center p-4">
        <div className="magic-particles" />
        <PatronusQuizComponent />
      </main>
    )
  }

  // Helper function to filter patronuses based on selected type
  const getPatronusesToDisplay = () => {
    if (selectedType === 'all') {
      return Object.values(PATRONUSES);
    }
    return PATRONUSES_BY_TYPE[selectedType].map(name => PATRONUSES[name]);
  }

  const patronusesToDisplay = getPatronusesToDisplay();
  
  // Helper function to get the correct image filename (handling the unicorn/unicon typo)
  const getPatronusImagePath = (patronusName: string) => {
    if (patronusName === 'unicorn') {
      return '/images/patronus/unicon.png'; // Handle the typo in filename
    }
    return `/images/patronus/${patronusName}.png`;
  };

  return (
    <div className="patronus-bg min-h-screen w-full">
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Hero Section with CTA */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-blue-400 font-magic-ru mb-6">
            Найдите своего Патронуса
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-magic-ru mb-6 max-w-3xl mx-auto">
            "Экспекто Патронум! Патронус — это положительная сила, проекция того, чем питаются дементоры — надежды, счастья, желания выжить."
          </p>
          
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-magic-ru text-blue-200 border-2 border-blue-400 rounded-lg 
                     hover:bg-blue-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(66,153,225,0.4),0_0_30px_rgba(66,153,225,0.1)] mb-8"
          >
            Начать тест Патронуса
          </button>
        </div>
      </section>

      {/* Patronus Type Filters */}
      <section className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-magic-ru text-blue-400 text-center mb-8">Магические защитники</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-md font-magic-ru text-lg transition-all
                ${selectedType === 'all' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-blue-500/20 text-blue-200 hover:bg-blue-500/30'}`}
            >
              Все Патронусы
            </button>
            <button 
              onClick={() => setSelectedType('strength')}
              className={`px-4 py-2 rounded-md font-magic-ru text-lg transition-all
                ${selectedType === 'strength' 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'bg-red-500/20 text-red-200 hover:bg-red-500/30'}`}
            >
              Сила
            </button>
            <button 
              onClick={() => setSelectedType('wisdom')}
              className={`px-4 py-2 rounded-md font-magic-ru text-lg transition-all
                ${selectedType === 'wisdom' 
                  ? 'bg-purple-500 text-white shadow-lg' 
                  : 'bg-purple-500/20 text-purple-200 hover:bg-purple-500/30'}`}
            >
              Мудрость
            </button>
            <button 
              onClick={() => setSelectedType('protection')}
              className={`px-4 py-2 rounded-md font-magic-ru text-lg transition-all
                ${selectedType === 'protection' 
                  ? 'bg-yellow-500 text-white shadow-lg' 
                  : 'bg-yellow-500/20 text-yellow-200 hover:bg-yellow-500/30'}`}
            >
              Защита
            </button>
            <button 
              onClick={() => setSelectedType('agility')}
              className={`px-4 py-2 rounded-md font-magic-ru text-lg transition-all
                ${selectedType === 'agility' 
                  ? 'bg-green-500 text-white shadow-lg' 
                  : 'bg-green-500/20 text-green-200 hover:bg-green-500/30'}`}
            >
              Ловкость
            </button>
          </div>
        </div>
      </section>

      {/* Patronus Cards */}
      <section className="relative z-10 py-8 px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patronusesToDisplay.map((patronus: Patronus) => (
              <div 
                key={patronus.name}
                className="bg-black/30 border border-blue-400/40 rounded-lg overflow-hidden backdrop-blur-sm
                         hover:shadow-[0_0_15px_rgba(66,153,225,0.3)] transition-all duration-300
                         hover:transform hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${patronus.colors.primary}33, ${patronus.colors.secondary}33)`,
                }}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row items-center mb-4">
                    <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0 md:mr-4">
                      <div className="relative w-28 h-28 overflow-hidden">
                        <Image
                          src={getPatronusImagePath(patronus.name)}
                          alt={`${patronus.displayName.ru || patronus.displayName.en} Патронус`}
                          width={112}
                          height={112}
                          className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                      <h3 className="text-2xl font-magic-ru text-blue-200">
                        {patronus.displayName.ru || patronus.displayName.en}
                      </h3>
                      <div className="text-sm text-blue-400 font-magic-ru uppercase tracking-wider">
                        {patronus.type === 'strength' ? 'Сила' : 
                         patronus.type === 'wisdom' ? 'Мудрость' : 
                         patronus.type === 'protection' ? 'Защита' : 
                         patronus.type === 'agility' ? 'Ловкость' : ''}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-blue-100 mb-4">
                    {patronus.description.ru || patronus.description.en}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-blue-300 font-magic-ru mb-2">Характеристики:</h4>
                    <div className="flex flex-wrap gap-2">
                      {(patronus.traits.ru || patronus.traits.en).map((trait, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-900/30 text-blue-200 rounded-full text-xs"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {(patronus.famousWizards.ru || patronus.famousWizards.en).length > 0 && (
                    <div>
                      <h4 className="text-blue-300 font-magic-ru mb-2">Известные волшебники:</h4>
                      <p className="text-blue-100">{(patronus.famousWizards.ru || patronus.famousWizards.en).join(', ')}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Secondary CTA */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-magic-ru text-blue-400 mb-6">Готовы найти своего защитника?</h2>
          <p className="text-blue-200 mb-6 font-magic-ru">
            Заклинание Патронуса — одно из самых мощных защитных заклинаний в волшебном мире.
            Узнайте, какое магическое существо представляет ваш внутренний свет и защитит вас от тьмы.
          </p>
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-magic-ru text-blue-200 border-2 border-blue-400 rounded-lg 
                     hover:bg-blue-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(66,153,225,0.4),0_0_30px_rgba(66,153,225,0.1)]"
          >
            Начать тест Патронуса
          </button>
        </div>
      </section>
    </div>
  )
} 