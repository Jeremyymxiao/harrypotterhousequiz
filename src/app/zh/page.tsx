import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { zh } from '@/i18n/translations/zh'
import Image from 'next/image'

export const metadata = {
  title: "哈利波特分院测试 | 你属于哪个霍格沃茨学院？| 权威分院",
  description: "参加官方哈利波特分院测试，或与AI分院帽聊天，发现你真正的霍格沃茨学院。我们的哈利波特分院测试基于深度性格分析，帮助你找到格兰芬多、斯莱特林、赫奇帕奇或拉文克劳中最适合你的学院！",
  keywords: "哈利波特分院测试, 哈利波特学院测试, 霍格沃茨分院测试, 分院帽测试, 霍格沃茨学院, 格兰芬多, 斯莱特林, 赫奇帕奇, 拉文克劳, 魔法测试, AI分院帽, 魔法世界",
  alternates: {
    canonical: 'https://harrypotterquiz.pro/zh'
  },
  openGraph: {
    title: "哈利波特分院测试 - 开启你的魔法之旅 | 发现你的霍格沃茨学院",
    description: "准备好通过权威哈利波特分院测试探索你真正的霍格沃茨学院了吗？参加我们的魔法测试或与分院帽进行互动对话，找到你真正属于的地方！"
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
              <h1 className="text-4xl md:text-6xl font-bold text-amber-400 font-magic-zh tracking-wider px-4 animate-float">
                哈利波特分院测试
              </h1>
              
              <p className="text-2xl md:text-3xl text-amber-400 font-magic-zh tracking-wide px-4">
                探索你真正的霍格沃茨学院归属
              </p>

              <div className="mt-6 text-amber-200">
                <div className="mb-4 italic text-lg font-magic-zh">
                  "在我年轻的时代，霍格沃茨刚刚建立，
                  我们高贵学校的创始人们，
                  从未想过彼此分离..."
                </div>
                <p className="text-lg text-amber-200 mt-4 font-magic-zh">
                  欢迎来到最权威的哈利波特分院测试，这里的魔法将揭示你内心真正的特质与价值观。通过我们精心设计的哈利波特分院测试，你将发现自己是否拥有格兰芬多的勇气、斯莱特林的野心、赫奇帕奇的忠诚，还是拉文克劳的智慧。
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/zh/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-zh"
              >
                开始哈利波特分院测试
              </Link>
              <Link 
                href="/zh/sorting-hat-quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-zh"
              >
                询问魔法分院帽
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
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">精准的哈利波特分院测试</h3>
              <p className="text-amber-200 font-magic-zh">我们的哈利波特分院测试基于深度心理学原理和原著人物特征分析，确保分院结果的准确性和权威性。每个问题都经过专业设计，能够精准识别你的核心特质。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">AI魔法分院帽</h3>
              <p className="text-amber-200 font-magic-zh">体验全新的分院方式！我们的AI分院帽可以与你进行真实对话，就像你真的坐在霍格沃茨的礼堂里接受分院一样。这是哈利波特分院测试的革新性体验！</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">详细的性格分析</h3>
              <p className="text-amber-200 font-magic-zh">完成哈利波特分院测试后，你将收到一份详细的性格报告，解释为什么你属于特定学院，以及你与该学院著名角色的相似之处。了解你的魔法潜力和内在特质。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">霍格沃茨学院百科</h3>
              <p className="text-amber-200 font-magic-zh">探索完整的霍格沃茨学院知识库！了解每个学院的创始历史、著名校友、共同特质以及学院独特的魔法传统。哈利波特分院测试不仅是分院，更是一次知识探索。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hogwarts Houses Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-12">霍格沃茨四大学院</h2>
          
          <div className="space-y-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-3xl font-magic-zh text-yellow-400 mb-3">格兰芬多</h3>
              <p className="text-amber-200 mb-4 font-magic-zh">
                勇敢、胆量和勇气是格兰芬多学院最重要的特质。如果哈利波特分院测试将你分到格兰芬多，这意味着你天生具有冒险精神，面对困难时敢于站出来，愿意为正义而战。格兰芬多的学生通常直率、热情且忠于朋友。
              </p>
              <p className="text-amber-200 font-magic-zh">
                著名的格兰芬多成员包括：哈利·波特、赫敏·格兰杰、罗恩·韦斯莱、阿不思·邓布利多和米勒娃·麦格教授。
              </p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-3xl font-magic-zh text-green-400 mb-3">斯莱特林</h3>
              <p className="text-amber-200 mb-4 font-magic-zh">
                野心、精明和机智是斯莱特林学院的核心价值。哈利波特分院测试如果将你分到斯莱特林，说明你具有出色的领导能力、高远的目标和实现这些目标的决心。斯莱特林的学生通常聪明、有策略性思维，并且重视自我提升。
              </p>
              <p className="text-amber-200 font-magic-zh">
                著名的斯莱特林成员包括：西弗勒斯·斯内普、德拉科·马尔福、贝拉特里克斯·莱斯特兰奇和梅林（是的，传说中的梅林就是斯莱特林学院的学生）。
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-3xl font-magic-zh text-yellow-300 mb-3">赫奇帕奇</h3>
              <p className="text-amber-200 mb-4 font-magic-zh">
                忠诚、公平和耐心是赫奇帕奇学院的标志。哈利波特分院测试如果将你分到赫奇帕奇，表明你重视真诚的友谊、公平的待人处事方式，并且愿意为目标付出持久的努力。赫奇帕奇的学生友善、包容且真诚。
              </p>
              <p className="text-amber-200 font-magic-zh">
                著名的赫奇帕奇成员包括：纽特·斯卡曼德、塞德里克·迪戈里、尼法朵拉·唐克斯和波莫娜·斯普劳特教授。
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-3xl font-magic-zh text-blue-400 mb-3">拉文克劳</h3>
              <p className="text-amber-200 mb-4 font-magic-zh">
                智慧、创造力和求知欲是拉文克劳学院的核心特质。哈利波特分院测试如果将你分到拉文克劳，意味着你珍视知识，乐于学习，思维独特且具有原创性。拉文克劳的学生通常聪明、有才华且思想开放。
              </p>
              <p className="text-amber-200 font-magic-zh">
                著名的拉文克劳成员包括：卢娜·洛夫古德、秋·张、菲利乌斯·弗立维教授和罗伊纳·拉文克劳本人。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full px-4 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-12">哈利波特分院测试常见问题</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">哈利波特分院测试的准确性如何？</h3>
              <p className="text-amber-200 font-magic-zh">我们的哈利波特分院测试采用先进的性格分析算法，结合J.K.罗琳原著中的学院特质描述，确保测试结果与魔法世界中的分院原则保持一致。我们的测试曾被数百万哈利波特粉丝验证，准确率极高。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">我可以重新进行哈利波特分院测试吗？</h3>
              <p className="text-amber-200 font-magic-zh">当然可以！就像分院帽会考虑你的选择一样，你可以随时重新进行哈利波特分院测试。人的性格会随着时间和经历而变化，所以偶尔重新测试可能会发现你的特质有所变化。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">为什么我的哈利波特分院测试结果与我期待的不同？</h3>
              <p className="text-amber-200 font-magic-zh">分院帽看到的是我们内心深处真正的本质，而不仅仅是我们表面展现或希望成为的样子。哈利波特分院测试同样如此，它可能会发现你未曾意识到的品质。请记住，每个学院都有其独特的价值和优势，没有哪个学院比其他学院更好。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">分院帽AI对话与传统哈利波特分院测试有何不同？</h3>
              <p className="text-amber-200 font-magic-zh">传统的哈利波特分院测试通过一系列固定问题评估你的性格特质。而分院帽AI对话则模拟了与真实分院帽的互动体验，你可以自由提问，分享你的想法和价值观，AI会根据你的回答判断最适合你的学院。这提供了更个性化、互动性更强的分院体验。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">如果哈利波特分院测试结果显示我适合多个学院怎么办？</h3>
              <p className="text-amber-200 font-magic-zh">很多巫师和女巫都具有多个学院的特质，这完全正常！就像哈利既有格兰芬多的勇气，也有斯莱特林的野心。在这种情况下，分院帽通常会考虑你自己的偏好。如果你的测试结果显示多个学院的特质很强，可以选择最吸引你的那个学院，或者尝试与AI分院帽对话，进行更深入的分析。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-magic-zh text-amber-400 mb-6">准备好发现你的真实身份了吗？</h2>
          <p className="text-amber-200 mb-8 font-magic-zh text-lg">
            每个巫师和女巫都有属于自己的地方。霍格沃茨的四个学院中，必有一个能让你的才能得到充分发挥，你的魔法潜力得到最大限度的释放。现在就参加我们的哈利波特分院测试，找到你在魔法世界中的归属！
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <Link 
              href="/zh/quiz"
              className="magic-button px-8 py-4 text-2xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              开始哈利波特分院测试
            </Link>
            <Link 
              href="/zh/sorting-hat-quiz"
              className="magic-button px-8 py-4 text-2xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              与分院帽对话
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
