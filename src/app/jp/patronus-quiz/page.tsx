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
          <h1 className="text-5xl md:text-6xl text-blue-400 font-magic-jp mb-6">
            あなたの守護霊を発見
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-magic-jp mb-6 max-w-3xl mx-auto">
            "エクスペクト・パトローナム！守護霊は肯定的な力であり、ディメンターが消費するものの投影です - 希望、幸福、生存への欲求。"
          </p>
          
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-magic-jp text-blue-200 border-2 border-blue-400 rounded-lg 
                     hover:bg-blue-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(66,153,225,0.4),0_0_30px_rgba(66,153,225,0.1)] mb-8"
          >
            守護霊テストを開始
          </button>
        </div>
      </section>

      {/* Patronus Type Filters */}
      <section className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-magic-jp text-blue-400 text-center mb-8">魔法の守護者</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-md font-magic-jp text-lg transition-all
                ${selectedType === 'all' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-blue-500/20 text-blue-200 hover:bg-blue-500/30'}`}
            >
              すべての守護霊
            </button>
            <button 
              onClick={() => setSelectedType('strength')}
              className={`px-4 py-2 rounded-md font-magic-jp text-lg transition-all
                ${selectedType === 'strength' 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'bg-red-500/20 text-red-200 hover:bg-red-500/30'}`}
            >
              力タイプ
            </button>
            <button 
              onClick={() => setSelectedType('wisdom')}
              className={`px-4 py-2 rounded-md font-magic-jp text-lg transition-all
                ${selectedType === 'wisdom' 
                  ? 'bg-purple-500 text-white shadow-lg' 
                  : 'bg-purple-500/20 text-purple-200 hover:bg-purple-500/30'}`}
            >
              知恵タイプ
            </button>
            <button 
              onClick={() => setSelectedType('protection')}
              className={`px-4 py-2 rounded-md font-magic-jp text-lg transition-all
                ${selectedType === 'protection' 
                  ? 'bg-yellow-500 text-white shadow-lg' 
                  : 'bg-yellow-500/20 text-yellow-200 hover:bg-yellow-500/30'}`}
            >
              保護タイプ
            </button>
            <button 
              onClick={() => setSelectedType('agility')}
              className={`px-4 py-2 rounded-md font-magic-jp text-lg transition-all
                ${selectedType === 'agility' 
                  ? 'bg-green-500 text-white shadow-lg' 
                  : 'bg-green-500/20 text-green-200 hover:bg-green-500/30'}`}
            >
              敏捷性タイプ
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
                          alt={`${patronus.displayName.jp || patronus.displayName.en} 守護霊`}
                          width={112}
                          height={112}
                          className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                      <h3 className="text-2xl font-magic-jp text-blue-200">
                        {patronus.displayName.jp || patronus.displayName.en}
                      </h3>
                      <div className="text-sm text-blue-400 font-magic-jp uppercase tracking-wider">
                        {patronus.type === 'strength' ? '力タイプ' : 
                         patronus.type === 'wisdom' ? '知恵タイプ' : 
                         patronus.type === 'protection' ? '保護タイプ' : 
                         patronus.type === 'agility' ? '敏捷性タイプ' : ''}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-blue-100 mb-4">
                    {patronus.description.jp || patronus.description.en}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-blue-300 font-magic-jp mb-2">特性：</h4>
                    <div className="flex flex-wrap gap-2">
                      {(patronus.traits.jp || patronus.traits.en).map((trait, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-900/30 text-blue-200 rounded-full text-xs"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {(patronus.famousWizards.jp || patronus.famousWizards.en).length > 0 && (
                    <div>
                      <h4 className="text-blue-300 font-magic-jp mb-2">有名な魔法使い：</h4>
                      <p className="text-blue-100">{(patronus.famousWizards.jp || patronus.famousWizards.en).join('、')}</p>
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
          <h2 className="text-3xl font-magic-jp text-blue-400 mb-6">あなたの守護者を見つける準備はできましたか？</h2>
          <p className="text-blue-200 mb-6 font-magic-jp">
            守護霊の呪文は魔法界で最も強力な防衛呪文の一つです。
            あなたの内なる光を表す魔法の生き物を見つけ、闇から身を守りましょう。
          </p>
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-magic-jp text-blue-200 border-2 border-blue-400 rounded-lg 
                     hover:bg-blue-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(66,153,225,0.4),0_0_30px_rgba(66,153,225,0.1)]"
          >
            守護霊テストを開始
          </button>
        </div>
      </section>
    </div>
  )
} 