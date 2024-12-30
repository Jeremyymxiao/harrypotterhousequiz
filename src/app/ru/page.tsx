import Link from 'next/link'
import { ru } from '@/i18n/translations/ru'

export default function Home() {
  return (
    <div className="magic-bg min-h-screen w-full">
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full mx-auto text-center space-y-12 magic-card p-8">
          <div className="space-y-8 floating">
            <h1 className="text-4xl md:text-7xl font-bold text-amber-400 font-magic-ru tracking-wider px-4">
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
      </main>
    </div>
  )
} 