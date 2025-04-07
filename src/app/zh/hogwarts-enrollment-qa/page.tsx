import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { zh } from '@/i18n/translations/zh'

export const metadata = {
  title: "霍格沃茨入学问答 | 如何入学霍格沃茨魔法学校",
  description: "了解霍格沃茨魔法学校的入学流程、录取标准和常见问题解答。探索如何收到霍格沃茨录取通知书，学校收费标准，以及关于魔法世界的其他重要信息。",
  keywords: "霍格沃茨入学, 霍格沃茨录取, 霍格沃茨入学问答, 霍格沃茨通知书, 霍格沃茨学费, 霍格沃茨校服, 魔杖购买, 对角巷",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/zh/hogwarts-enrollment-qa'
  },
  openGraph: {
    title: "霍格沃茨入学问答 | 魔法学校招生指南",
    description: "探索霍格沃茨魔法学校的入学流程、录取标准和常见问题解答。了解如何获得霍格沃茨录取通知书！"
  }
}

export default function HogwartsEnrollmentQA() {
  return (
    <div className="magic-bg min-h-screen w-full">
      <MagicCursor />
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 pt-24 pb-12 flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 font-magic-zh text-center mb-8">
              霍格沃茨入学问答
            </h1>
            
            <p className="text-xl text-amber-200 mb-8 font-magic-zh leading-relaxed">
              欢迎来到霍格沃茨入学问答页面！这里将回答关于霍格沃茨魔法学校入学的常见问题，帮助你了解魔法世界中最著名学校的招生流程和相关信息。无论你是刚收到猫头鹰送来的信件，还是对魔法世界充满好奇，这里都能找到你想要的答案。
            </p>
          </div>

          {/* Q&A Section */}
          <div className="space-y-8">
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">霍格沃茨招生方式是？</h2>
              <p className="text-lg text-amber-200 font-magic-zh leading-relaxed">
                每当有新的小巫师出生在这个世界上，在霍格沃茨的某个秘密的房间里，接纳之笔就会在准入之书上写下那个小巫师的名字。在小巫师11岁生日那天，霍格沃茨会派出猫头鹰，为小巫师送去录取通知书，那意味着你被霍格沃茨正式录取啦！
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">霍格沃茨如何报名？</h2>
              <p className="text-lg text-amber-200 font-magic-zh leading-relaxed">
                不需要主动报名，霍格沃茨会筛选具有入学资格的小巫师寄出录取通知书。魔法能力是天生的，霍格沃茨的魔法能够识别所有具有魔法天赋的孩子，并在适当的时候向他们发出邀请。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">我已经超过11岁了，没有收到录取通知书，我还有入学机会吗？</h2>
              <p className="text-lg text-amber-200 font-magic-zh leading-relaxed">
                很遗憾，根据霍格沃茨的传统，超过11岁就不能入学了。霍格沃茨的教育体系设计为七年，从11岁开始，确保学生能够完整地学习所有必要的魔法课程。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">网上所说的「预约」指的是什么？</h2>
              <p className="text-lg text-amber-200 font-magic-zh leading-relaxed">
                网易开发了一款名叫《哈利·波特：魔法觉醒》的游戏，该游戏在正式上线前进行了多轮内测和活动，这些活动有的需要预约。这与小说和电影中描述的霍格沃茨入学流程无关，仅是游戏的营销活动。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">霍格沃茨如何收费？如何缴费？</h2>
              <p className="text-lg text-amber-200 font-magic-zh leading-relaxed">
                霍格沃茨没有学费。在魔法世界中，霍格沃茨的教育是免费提供给所有被录取的巫师和女巫的。学生只需要购买教材、魔杖、校袍等个人用品。请注意，在现实中找你收取霍格沃茨学费的很有可能是诈骗。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">校服和魔杖如何购买？</h2>
              <p className="text-lg text-amber-200 font-magic-zh leading-relaxed">
                当小巫师收到了录取通知书后，他们会前往对角巷购买自己的校袍、魔杖和其他学习用品。校袍可以在摩金夫人长袍店购买，而魔杖则是在奥利凡德魔杖店选购。记住，是魔杖选择巫师，而不是巫师选择魔杖！
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">霍格沃茨真的存在吗？</h2>
              <p className="text-lg text-amber-200 font-magic-zh leading-relaxed">
                这是一个很好的问题。霍格沃茨存在于每一个相信它存在的人的心里。从技术上讲，霍格沃茨是J.K.罗琳创作的《哈利·波特》系列小说中虚构的魔法学校。通过阅读小说和观看电影，我们可以了解到这个学校的神奇与校园生活的美好。
              </p>
              <p className="text-lg text-amber-200 font-magic-zh leading-relaxed mt-4">
                作为一个粉丝网站，我们建议任何人都值得读一读这个精彩的魔法故事。如果你真的希望把自己置身于神奇的魔法世界，不妨从阅读《哈利·波特》系列小说开始你的魔法之旅。
              </p>
            </section>
          </div>

          {/* Additional Information */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-xl p-8 mt-12 border border-amber-800/40">
            <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">魔法世界小知识</h2>
            <p className="text-lg text-amber-200 font-magic-zh leading-relaxed">
              霍格沃茨魔法学校由四位伟大的巫师创立：戈德里克·格兰芬多、赫尔加·赫奇帕奇、罗伊纳·拉文克劳和萨拉查·斯莱特林。学校位于苏格兰的某个隐蔽位置，对麻瓜（非魔法人士）来说是不可见的。霍格沃茨城堡被施加了强大的保护魔法，包括反麻瓜咒语，使其在麻瓜眼中看起来像是一座废弃的危险建筑。
            </p>
            <p className="text-lg text-amber-200 font-magic-zh leading-relaxed mt-4">
              霍格沃茨特快列车每年9月1日从伦敦国王十字车站的9¾站台出发，将学生们送往霍格沃茨。学生们必须通过一道隐藏在9号和10号站台之间的魔法屏障才能到达9¾站台。
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">探索更多魔法世界</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
              <Link 
                href="/zh/quiz"
                className="magic-button px-8 py-4 text-xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                参加分院测试
              </Link>
              <Link 
                href="/zh/sorting-hat-quiz"
                className="magic-button px-8 py-4 text-xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                与分院帽对话
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 