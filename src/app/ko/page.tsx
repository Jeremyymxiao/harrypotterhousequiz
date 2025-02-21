import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { ko } from '@/i18n/translations/ko'

export const metadata = {
  title: "당신의 호그와트 기숙사는? 지금 확인하세요! ✨",
  description: "해리포터 기숙사 테스트를 받거나 AI 분류 모자와 대화하여 당신의 진정한 호그와트 기숙사를 찾아보세요. 개인화된 분류의 마법을 경험하세요!",
  keywords: "해리포터 기숙사 테스트, 분류 모자 대화, 호그와트 기숙사, 그리핀도르, 슬리데린, 후플푸프, 레이븐클로, 성격 테스트, 마법 세계, AI 분류 모자, 마법 테스트",
  alternates: {
    canonical: 'https://harrypotterquiz.pro/ko'
  },
  openGraph: {
    title: "마법의 여정을 시작하세요 - 해리포터 기숙사 테스트 & 분류 모자 대화",
    description: "당신의 진정한 호그와트 기숙사를 발견할 준비가 되셨나요? 마법 테스트를 받거나 분류 모자와 개인적인 대화를 통해 당신이 진정으로 속한 곳을 찾아보세요!"
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
              <h1 className="text-4xl md:text-8xl font-bold text-amber-400 font-magic-ko tracking-wider px-4 animate-float">
                {ko.home.welcome}
              </h1>
              
              <p className="text-2xl md:text-4xl text-amber-400 font-magic-ko tracking-wide px-4">
                {ko.home.description}
              </p>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/ko/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-ko"
              >
                {ko.common.startQuiz}
              </Link>
              <Link 
                href="/ko/ask-sorting-hat"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-ko"
              >
                {ko.common.askSortingHat}
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Additional Sections */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-ko text-amber-400 text-center mb-12">{ko.home.features.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-4">{ko.home.features.advancedQuiz.title}</h3>
              <p className="text-amber-200">{ko.home.features.advancedQuiz.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-4">{ko.home.features.aiSortingHat.title}</h3>
              <p className="text-amber-200">{ko.home.features.aiSortingHat.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-4">{ko.home.features.detailedAnalysis.title}</h3>
              <p className="text-amber-200">{ko.home.features.detailedAnalysis.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-4">{ko.home.features.houseHistory.title}</h3>
              <p className="text-amber-200">{ko.home.features.houseHistory.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-ko text-amber-400 text-center mb-12">{ko.home.faq.title}</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-3">{ko.home.faq.accuracy.question}</h3>
              <p className="text-amber-200">{ko.home.faq.accuracy.answer}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-3">{ko.home.faq.retake.question}</h3>
              <p className="text-amber-200">{ko.home.faq.retake.answer}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-3">{ko.home.faq.difference.question}</h3>
              <p className="text-amber-200">{ko.home.faq.difference.answer}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 