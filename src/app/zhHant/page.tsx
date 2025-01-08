import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { zhHant } from '@/i18n/translations/zhHant'

export const metadata = {
  title: "哈利波特學院測試 & 與分院帽對話 | 發現你的霍格華茲學院",
  description: "參加哈利波特學院測試或與AI分院帽對話，發現你真正屬於哪個霍格華茲學院。體驗個人化的分院過程！",
  keywords: "哈利波特學院測試, 分院帽對話, 霍格華茲學院, 葛萊芬多, 史萊哲林, 赫夫帕夫, 雷文克勞, 性格測試, 魔法世界, AI分院帽, 魔法測試",
  openGraph: {
    title: "開始你的魔法之旅 - 哈利波特學院測試 & 與分院帽對話",
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
    </main>
  )
}
