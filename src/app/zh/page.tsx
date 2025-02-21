import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { zh } from '@/i18n/translations/zh'

export const metadata = {
  title: "你属于哪个霍格沃茨学院？快来测试！✨",
  description: "参加哈利波特分院测试或与AI分院帽聊天，发现你真正的霍格沃茨学院。体验个性化分院的魔法！",
  keywords: "哈利波特分院测试, 分院帽对话, 霍格沃茨学院, 格兰芬多, 斯莱特林, 赫奇帕奇, 拉文克劳, 性格测试, 魔法世界, AI分院帽, 魔法测试",
  alternates: {
    canonical: 'https://harrypotterquiz.pro/zh'
  },
  openGraph: {
    title: "开启你的魔法之旅 - 哈利波特分院测试 & 分院帽对话",
    description: "准备好发现你真正的霍格沃茨学院了吗？参加我们的魔法测试或与分院帽进行个人对话，找到你真正属于的地方！"
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
              <h1 className="text-4xl md:text-7xl font-bold text-amber-400 font-magic-zh tracking-wider px-4 animate-float">
                {zh.home.welcome}
              </h1>
              
              <p className="text-2xl md:text-4xl text-amber-400 font-magic-zh tracking-wide px-4">
                {zh.home.description}
              </p>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/zh/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-zh"
              >
                {zh.common.startQuiz}
              </Link>
              <Link 
                href="/zh/ask-sorting-hat"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-zh"
              >
                {zh.common.askSortingHat}
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Additional Sections */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-12">{zh.home.features.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">{zh.home.features.advancedQuiz.title}</h3>
              <p className="text-amber-200">{zh.home.features.advancedQuiz.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">{zh.home.features.aiSortingHat.title}</h3>
              <p className="text-amber-200">{zh.home.features.aiSortingHat.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">{zh.home.features.detailedAnalysis.title}</h3>
              <p className="text-amber-200">{zh.home.features.detailedAnalysis.description}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">{zh.home.features.houseHistory.title}</h3>
              <p className="text-amber-200">{zh.home.features.houseHistory.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-12">{zh.home.faq.title}</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">{zh.home.faq.accuracy.question}</h3>
              <p className="text-amber-200">{zh.home.faq.accuracy.answer}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">{zh.home.faq.retake.question}</h3>
              <p className="text-amber-200">{zh.home.faq.retake.answer}</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">{zh.home.faq.difference.question}</h3>
              <p className="text-amber-200">{zh.home.faq.difference.answer}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
