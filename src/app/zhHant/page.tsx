import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { zhHant } from '@/i18n/translations/zhHant'

export const metadata = {
  title: "你屬於哪個霍格華茲學院？立即測試！✨",
  description: "參加哈利波特分院測試或與AI分院帽聊天，發現你真正的霍格華茲學院。體驗個性化分院的魔法！",
  keywords: "哈利波特分院測試, 分院帽對話, 霍格華茲學院, 葛萊芬多, 史萊哲林, 赫夫帕夫, 雷文克勞, 性格測試, 魔法世界, AI分院帽, 魔法測試",
  alternates: {
    canonical: 'https://harrypotterquiz.pro/zhHant'
  },
  openGraph: {
    title: "開啟你的魔法之旅 - 哈利波特分院測試 & 分院帽對話",
    description: "準備好發現你真正的霍格華茲學院了嗎？參加我們的魔法測試或與分院帽進行個人對話，找到你真正屬於的地方！"
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <MagicCursor />
      
      <div className="text-center max-w-4xl w-full backdrop-blur-sm bg-black/30 rounded-lg border-2 border-amber-400 p-8">
        <h1 className="text-4xl md:text-6xl text-amber-400 mb-8 font-magic-zh">
          {zhHant.home.welcome}
        </h1>
        
        <p className="text-xl md:text-2xl text-amber-200 mb-12 max-w-2xl mx-auto font-magic-zh">
          {zhHant.home.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center items-center mx-auto">
          <Link
            href="/zhHant/quiz"
            className="magic-button w-64 text-center px-8 py-4 text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30 font-magic-zh"
          >
            {zhHant.common.startQuiz}
          </Link>
          
          <Link
            href="/zhHant/ask-sorting-hat"
            className="magic-button w-64 text-center px-8 py-4 text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30 font-magic-zh"
          >
            {zhHant.common.askSortingHat}
          </Link>
        </div>
      </div>

      {/* Additional Sections */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-12">{zhHant.home.features.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">{zhHant.home.features.advancedQuiz.title}</h3>
              <p className="text-amber-200">{zhHant.home.features.advancedQuiz.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">{zhHant.home.features.aiSortingHat.title}</h3>
              <p className="text-amber-200">{zhHant.home.features.aiSortingHat.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">{zhHant.home.features.detailedAnalysis.title}</h3>
              <p className="text-amber-200">{zhHant.home.features.detailedAnalysis.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">{zhHant.home.features.houseHistory.title}</h3>
              <p className="text-amber-200">{zhHant.home.features.houseHistory.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-12">{zhHant.home.faq.title}</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">{zhHant.home.faq.accuracy.question}</h3>
              <p className="text-amber-200">{zhHant.home.faq.accuracy.answer}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">{zhHant.home.faq.retake.question}</h3>
              <p className="text-amber-200">{zhHant.home.faq.retake.answer}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">{zhHant.home.faq.difference.question}</h3>
              <p className="text-amber-200">{zhHant.home.faq.difference.answer}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
