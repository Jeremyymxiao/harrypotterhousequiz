import ChatComponent from '@/components/ChatComponent'
import Image from 'next/image'
import Link from 'next/link'
import { zhHant } from '@/i18n/translations/zhHant'

export const metadata = {
  title: 'AI分院帽測試 | 與魔法分院帽對話 | 哈利波特學院測試',
  description: '與我們的AI分院帽進行魔法對話！詢問關於霍格華茲學院的問題，通過對話進行分院，發現你在魔法世界中的真正位置。',
  keywords: '分院帽測試, AI分院帽, 與分院帽對話, 哈利波特學院測試, 霍格華茲學院, 魔法分院帽, 互動分院, 魔法聊天',
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/zhHant/sorting-hat-quiz'
  },
  openGraph: {
    title: '與魔法分院帽對話 - 互動霍格華茲學院分類',
    description: '與分院帽AI進行個人對話！提問、了解各學院，通過魔法對話發現你真正屬於霍格華茲的哪個學院。'
  }
}

export default function SortingHatQuizPage() {
  return (
    <div className="quiz-bg min-h-screen">
      <div className="magic-particles" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block">
            <Image
              src="/images/sorting-hat.png"
              alt="魔法分院帽"
              width={150}
              height={150}
              className="mx-auto mb-6"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl text-amber-400 font-magic-zh mb-6">
            魔法分院帽
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-magic-zh mb-8 max-w-3xl mx-auto">
            "你也許認為我不美麗，但不要以貌取人，如果你能找到比我更聰明的帽子，我就把自己吃掉。"
          </p>
        </div>
      </section>
      
      {/* About the Sorting Hat */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-4">分院帽的歷史</h2>
              <p className="text-amber-200 mb-4">
                分院帽創建於10世紀左右，由霍格華茲的四位創始人共同製作：戈德里克·葛萊分多、薩拉查·史萊哲林、羅威娜·雷文克勞和赫爾加·赫夫帕夫。
              </p>
              <p className="text-amber-200">
                當創始人們擔心他們去世後如何為各自的學院選擇學生時，戈德里克摘下了自己的帽子，每位創始人都向其中注入了知識和智慧。
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-4">分院的運作原理</h2>
              <p className="text-amber-200 mb-4">
                分院帽會分析你的思想、性格和價值觀，來確定你真正屬於哪個霍格華茲學院。雖然通常是它做最終決定，但它也會考慮你的偏好。
              </p>
              <p className="text-amber-200">
                就像分院帽曾對哈利·波特說的那樣："一切都在你的腦海中，史萊哲林會幫助你走向輝煌，毫無疑問……如果你確定的話——那就是葛萊分多！"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Component Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-magic-zh text-amber-400 mb-4">與分院帽對話</h2>
          <p className="text-amber-200 max-w-2xl mx-auto font-magic-zh">
            與我們的AI分院帽進行魔法對話！詢問關於各學院的問題，分享有關自己的信息，或者簡單地聊聊魔法世界。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ChatComponent />
        </div>
      </section>
      
      {/* Houses Section */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-8">霍格華茲四大學院</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-red-800/40">
              <h3 className="text-2xl font-magic-zh text-yellow-400 mb-3">葛萊分多</h3>
              <p className="text-amber-200 mb-2 font-magic-zh">價值觀：勇敢、勇氣、膽量、騎士精神</p>
              <p className="text-amber-200 font-magic-zh">著名成員：哈利·波特、妙麗·格蘭傑、榮恩·衛斯理、阿不思·鄧不利多</p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-green-800/40">
              <h3 className="text-2xl font-magic-zh text-green-400 mb-3">史萊哲林</h3>
              <p className="text-amber-200 mb-2 font-magic-zh">價值觀：野心、狡猾、領導力、足智多謀</p>
              <p className="text-amber-200 font-magic-zh">著名成員：賽佛勒斯·石內卜、跩哥·馬份、梅林、活石·史拉轟</p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-yellow-800/40">
              <h3 className="text-2xl font-magic-zh text-yellow-300 mb-3">赫夫帕夫</h3>
              <p className="text-amber-200 mb-2 font-magic-zh">價值觀：勤奮、耐心、忠誠、公平競爭</p>
              <p className="text-amber-200 font-magic-zh">著名成員：紐特·斯卡曼德、西追·迪哥里、尼法朵拉·東施、龐蒙娜·斯普勞特</p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-blue-800/40">
              <h3 className="text-2xl font-magic-zh text-blue-400 mb-3">雷文克勞</h3>
              <p className="text-amber-200 mb-2 font-magic-zh">價值觀：智慧、才智、創造力、獨創性</p>
              <p className="text-amber-200 font-magic-zh">著名成員：露娜·羅古德、菲力·孚立維、羅威娜·雷文克勞、加立·奧利凡德</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">還沒準備好聊天？參加測試！</h2>
          <p className="text-amber-200 mb-8 font-magic-zh">
            如果你更喜歡結構化的體驗，我們詳細的哈利波特學院測試提供了另一種方式來發現你真正的霍格華茲學院。
          </p>
          <Link 
            href="/zhHant/quiz"
            className="magic-button inline-block px-8 py-4 text-2xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
          >
            參加測試
          </Link>
        </div>
      </section>
    </div>
  )
}
