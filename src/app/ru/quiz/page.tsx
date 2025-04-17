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
            alt="Волшебная Распределяющая шляпа"
            width={180}
            height={180}
            className="mx-auto mb-4 animate-float"
            priority
          />
          <h1 className="text-5xl md:text-6xl text-amber-400 font-magic-ru mb-6">
            Распределяющая шляпа ждет
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-magic-ru mb-6 max-w-3xl mx-auto">
            "Я загляну в твой разум и скажу, где твое место!"
          </p>
          
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-magic-ru text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)] mb-8"
          >
            Начать тест распределения
          </button>
        </div>
      </section>

      {/* Sorting Hat's Song */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-magic-ru text-amber-400 text-center mb-8">Песня Распределяющей шляпы</h2>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-amber-200 mb-4 font-magic-ru italic">
              <p className="mb-4 text-center">
                Тысячу лет тому назад,<br />
                Когда я только был сшит,<br />
                Жили четыре волшебника,<br />
                Имена которых до сих пор известны:
              </p>
              <p className="mb-4 text-center">
                Храбрый Гриффиндор с диких болот,<br />
                Прекрасная Когтевран с долин,<br />
                Добрая Пуффендуй с широких равнин,<br />
                Хитрый Слизерин из низин.
              </p>
              <p className="mb-4 text-center">
                Они разделяли мечту, надежду, желание,<br />
                Они разработали смелый план<br />
                Обучать юных волшебников<br />
                Так началась школа Хогвартс.
              </p>
              <p className="mb-4 text-center">
                Теперь каждый из этих основателей<br />
                Создал свой факультет, ибо каждый<br />
                Ценил разные добродетели<br />
                В тех, кого они должны были учить.
              </p>
              <p className="mb-4 text-center">
                Для Гриффиндора храбрейшие<br />
                Ценились превыше всего;<br />
                Для Когтевран умнейшие<br />
                Всегда были лучшими;
              </p>
              <p className="mb-4 text-center">
                Для Пуффендуй трудолюбивые<br />
                Были наиболее достойны приема;<br />
                А жаждущий власти Слизерин<br />
                Любил тех, кто имел большие амбиции.
              </p>
              <p className="mb-4 text-center">
                При жизни они отбирали<br />
                Избранных из толпы,<br />
                Но как выбрать достойных<br />
                Когда они умрут?
              </p>
              <p className="mb-4 text-center">
                Именно Гриффиндор нашел выход,<br />
                Он снял меня со своей головы<br />
                Основатели вложили в меня мозги<br />
                Чтобы я мог выбирать вместо них!
              </p>
              <p className="text-center">
                Теперь наденьте меня на уши,<br />
                Я еще никогда не ошибался,<br />
                Я загляну в ваш разум<br />
                И скажу, где ваше место!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Houses Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-ru text-amber-400 text-center mb-6">Четыре факультета</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-5 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-xl font-magic-ru text-yellow-400 mb-2">Гриффиндор</h3>
              <p className="text-amber-200 font-magic-ru">
                "Для Гриффиндора храбрейшие ценились превыше всего."
                <br />Ценности: Смелость, Отвага, Решительность, Рыцарство
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-5 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-xl font-magic-ru text-blue-400 mb-2">Когтевран</h3>
              <p className="text-amber-200 font-magic-ru">
                "Для Когтевран умнейшие всегда были лучшими."
                <br />Ценности: Интеллект, Мудрость, Творчество, Оригинальность
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-5 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-xl font-magic-ru text-yellow-300 mb-2">Пуффендуй</h3>
              <p className="text-amber-200 font-magic-ru">
                "Для Пуффендуй трудолюбивые были наиболее достойны приема."
                <br />Ценности: Трудолюбие, Верность, Терпение, Справедливость
              </p>
            </div>
            
            <div className="bg-green-900/20 p-5 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-xl font-magic-ru text-green-400 mb-2">Слизерин</h3>
              <p className="text-amber-200 font-magic-ru">
                "А жаждущий власти Слизерин любил тех, кто имел большие амбиции."
                <br />Ценности: Амбиции, Хитрость, Лидерство, Находчивость
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secondary CTA */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-magic-ru text-amber-400 mb-6">Готовы?</h2>
          <p className="text-amber-200 mb-6 font-magic-ru">
            Позвольте древней магии раскрыть ваш истинный факультет Хогвартса.
          </p>
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-magic-ru text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)]"
          >
            Начать тест распределения
          </button>
        </div>
      </section>
    </div>
  )
} 