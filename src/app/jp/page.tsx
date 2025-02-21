import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { jp } from '@/i18n/translations/jp'

export const metadata = {
  title: "あなたはどの寮？ホグワーツ寮分けテスト！✨",
  description: "ハリーポッター寮分け帽子テストを受けるか、AIの組分け帽と会話して、あなたの本当のホグワーツ寮を見つけましょう。パーソナライズされた組分けの魔法を体験！",
  keywords: "ハリーポッター寮分けテスト, 組分け帽との対話, ホグワーツ寮, グリフィンドール, スリザリン, ハッフルパフ, レイブンクロー, 性格診断, 魔法界, AI組分け帽, 魔法テスト",
  alternates: {
    canonical: 'https://harrypotterquiz.pro/jp'
  },
  openGraph: {
    title: "魔法の旅を始めよう - ハリーポッター寮分けテスト & 組分け帽との対話",
    description: "あなたの本当のホグワーツ寮を見つける準備はできましたか？魔法のテストを受けるか、組分け帽との個人的な会話で、本当の居場所を見つけましょう！"
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
              <h1 className="text-4xl md:text-7xl font-bold text-amber-400 font-magic-jp tracking-wider px-4 animate-float">
                {jp.home.welcome}
              </h1>
              
              <p className="text-2xl md:text-4xl text-amber-400 font-magic-jp tracking-wide px-4">
                {jp.home.description}
              </p>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/jp/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-jp"
              >
                {jp.common.startQuiz}
              </Link>
              <Link 
                href="/jp/ask-sorting-hat"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-jp"
              >
                {jp.common.askSortingHat}
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Additional Sections */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-jp text-amber-400 text-center mb-12">{jp.home.features.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-4">{jp.home.features.advancedQuiz.title}</h3>
              <p className="text-amber-200">{jp.home.features.advancedQuiz.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-4">{jp.home.features.aiSortingHat.title}</h3>
              <p className="text-amber-200">{jp.home.features.aiSortingHat.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-4">{jp.home.features.detailedAnalysis.title}</h3>
              <p className="text-amber-200">{jp.home.features.detailedAnalysis.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-4">{jp.home.features.houseHistory.title}</h3>
              <p className="text-amber-200">{jp.home.features.houseHistory.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-jp text-amber-400 text-center mb-12">{jp.home.faq.title}</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-3">{jp.home.faq.accuracy.question}</h3>
              <p className="text-amber-200">{jp.home.faq.accuracy.answer}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-3">{jp.home.faq.retake.question}</h3>
              <p className="text-amber-200">{jp.home.faq.retake.answer}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-3">{jp.home.faq.difference.question}</h3>
              <p className="text-amber-200">{jp.home.faq.difference.answer}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
