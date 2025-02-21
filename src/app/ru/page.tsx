import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { ru } from '@/i18n/translations/ru'

export const metadata = {
  title: "Какой факультет Хогвартса твой? Пройди тест! ✨",
  description: "Пройдите тест на факультет Хогвартса или побеседуйте с ИИ Распределяющей шляпой, чтобы узнать свой истинный факультет. Испытайте магию персонализированного распределения!",
  keywords: "Тест на факультет Хогвартса, Разговор с Распределяющей шляпой, Факультеты Хогвартса, Гриффиндор, Слизерин, Хаффлпафф, Рейвенкло, Тест личности, Волшебный мир, ИИ Распределяющая шляпа, Магический тест",
  alternates: {
    canonical: 'https://harrypotterquiz.pro/ru'
  },
  openGraph: {
    title: "Начни своё магическое путешествие - Тест на факультет Хогвартса & Разговор с Распределяющей шляпой",
    description: "Готовы узнать свой истинный факультет Хогвартса? Пройдите наш волшебный тест или проведите личную беседу с Распределяющей шляпой, чтобы найти своё истинное место!"
  }
}

export default function Home() {
  return (
    <div className="magic-bg min-h-screen w-full">
      <MagicCursor />
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-7xl font-bold text-amber-400 font-magic-ru tracking-wider px-4 animate-float">
                {ru.home.welcome}
              </h1>
              
              <p className="text-2xl md:text-4xl text-amber-400 font-magic-ru tracking-wide px-4">
                {ru.home.description}
              </p>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/ru/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-ru"
              >
                {ru.common.startQuiz}
              </Link>
              <Link 
                href="/ru/ask-sorting-hat"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-ru"
              >
                {ru.common.askSortingHat}
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Additional Sections */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-ru text-amber-400 text-center mb-12">{ru.home.features.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-4">{ru.home.features.advancedQuiz.title}</h3>
              <p className="text-amber-200">{ru.home.features.advancedQuiz.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-4">{ru.home.features.aiSortingHat.title}</h3>
              <p className="text-amber-200">{ru.home.features.aiSortingHat.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-4">{ru.home.features.detailedAnalysis.title}</h3>
              <p className="text-amber-200">{ru.home.features.detailedAnalysis.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-4">{ru.home.features.houseHistory.title}</h3>
              <p className="text-amber-200">{ru.home.features.houseHistory.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-ru text-amber-400 text-center mb-12">{ru.home.faq.title}</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-3">{ru.home.faq.accuracy.question}</h3>
              <p className="text-amber-200">{ru.home.faq.accuracy.answer}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-3">{ru.home.faq.retake.question}</h3>
              <p className="text-amber-200">{ru.home.faq.retake.answer}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-3">{ru.home.faq.difference.question}</h3>
              <p className="text-amber-200">{ru.home.faq.difference.answer}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 