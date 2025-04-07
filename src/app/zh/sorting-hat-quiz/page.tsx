import ChatComponent from '@/components/ChatComponent'
import Image from 'next/image'
import Link from 'next/link'
import { zh } from '@/i18n/translations/zh'

export const metadata = {
  title: 'AI分院帽测试 | 与魔法分院帽对话 | 哈利波特学院测试',
  description: '与我们的AI分院帽进行魔法对话！询问关于霍格沃茨学院的问题，通过对话进行分院，发现你在魔法世界中的真正位置。',
  keywords: '分院帽测试, AI分院帽, 与分院帽对话, 哈利波特学院测试, 霍格沃茨学院, 魔法分院帽, 互动分院, 魔法聊天',
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/zh/sorting-hat-quiz'
  },
  openGraph: {
    title: '与魔法分院帽对话 - 互动霍格沃茨学院分类',
    description: '与分院帽AI进行个人对话！提问、了解各学院，通过魔法对话发现你真正属于霍格沃茨的哪个学院。'
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
            "你也许认为我不美丽，但不要以貌取人，如果你能找到比我更聪明的帽子，我就把自己吃掉。"
          </p>
        </div>
      </section>
      
      {/* About the Sorting Hat */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-4">分院帽的历史</h2>
              <p className="text-amber-200 mb-4">
                分院帽创建于10世纪左右，由霍格沃茨的四位创始人共同制作：戈德里克·格兰芬多、萨拉查·斯莱特林、罗伊纳·拉文克劳和赫尔加·赫奇帕奇。
              </p>
              <p className="text-amber-200">
                当创始人们担心他们去世后如何为各自的学院选择学生时，戈德里克摘下了自己的帽子，每位创始人都向其中注入了知识和智慧。
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-4">分院的工作原理</h2>
              <p className="text-amber-200 mb-4">
                分院帽会分析你的思想、性格和价值观，来确定你真正属于哪个霍格沃茨学院。虽然通常是它做最终决定，但它也会考虑你的偏好。
              </p>
              <p className="text-amber-200">
                就像分院帽曾对哈利·波特说的那样："一切都在你的脑海中，斯莱特林会帮助你走向辉煌，毫无疑问……如果你确定的话——那就是格兰芬多！"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Component Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-magic-zh text-amber-400 mb-4">与分院帽对话</h2>
          <p className="text-amber-200 max-w-2xl mx-auto font-magic-zh">
            与我们的AI分院帽进行魔法对话！询问关于各学院的问题，分享有关自己的信息，或者简单地聊聊魔法世界。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ChatComponent />
        </div>
      </section>
      
      {/* Example Questions */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-8">可以问分院帽的问题</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200 font-magic-zh">"格兰芬多学院的特点是什么？"</p>
            </div>
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200 font-magic-zh">"我对朋友非常忠诚但也很有野心。我可能属于哪个学院？"</p>
            </div>
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200 font-magic-zh">"告诉我关于著名的拉文克劳学院成员及其特点。"</p>
            </div>
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200 font-magic-zh">"如果现在为我分院，你会考虑什么因素？"</p>
            </div>
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200 font-magic-zh">"如果一个人同时具备两个学院的特质，你如何决定？"</p>
            </div>
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200 font-magic-zh">"为什么你把哈利·波特分到格兰芬多而不是斯莱特林？"</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Houses Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-8">霍格沃茨四大学院</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-red-800/40">
              <h3 className="text-2xl font-magic-zh text-yellow-400 mb-3">格兰芬多</h3>
              <p className="text-amber-200 mb-2 font-magic-zh">价值观：勇敢、勇气、胆量、骑士精神</p>
              <p className="text-amber-200 font-magic-zh">著名成员：哈利·波特、赫敏·格兰杰、罗恩·韦斯莱、阿不思·邓布利多</p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-green-800/40">
              <h3 className="text-2xl font-magic-zh text-green-400 mb-3">斯莱特林</h3>
              <p className="text-amber-200 mb-2 font-magic-zh">价值观：野心、狡猾、领导力、足智多谋</p>
              <p className="text-amber-200 font-magic-zh">著名成员：西弗勒斯·斯内普、德拉科·马尔福、梅林、霍拉斯·斯拉格霍恩</p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-yellow-800/40">
              <h3 className="text-2xl font-magic-zh text-yellow-300 mb-3">赫奇帕奇</h3>
              <p className="text-amber-200 mb-2 font-magic-zh">价值观：勤奋、耐心、忠诚、公平竞争</p>
              <p className="text-amber-200 font-magic-zh">著名成员：纽特·斯卡曼德、塞德里克·迪戈里、尼法朵拉·唐克斯、波莫娜·斯普劳特</p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-blue-800/40">
              <h3 className="text-2xl font-magic-zh text-blue-400 mb-3">拉文克劳</h3>
              <p className="text-amber-200 mb-2 font-magic-zh">价值观：智慧、才智、创造力、独创性</p>
              <p className="text-amber-200 font-magic-zh">著名成员：卢娜·洛夫古德、菲利乌斯·弗立维、罗伊纳·拉文克劳、加里克·奥利凡德</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">还没准备好聊天？参加测试！</h2>
          <p className="text-amber-200 mb-8 font-magic-zh">
            如果你更喜欢结构化的体验，我们详细的哈利波特学院测试提供了另一种方式来发现你真正的霍格沃茨学院。
          </p>
          <Link 
            href="/zh/quiz"
            className="magic-button inline-block px-8 py-4 text-2xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
          >
            参加测试
          </Link>
        </div>
      </section>
    </div>
  )
} 