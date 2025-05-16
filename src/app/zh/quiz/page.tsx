"use client"

import React, { useState } from 'react'
import QuizComponent from '@/components/QuizComponent'
import Image from 'next/image'
import Script from 'next/script'
import { questions } from '@/data/questions'

export default function QuizPage() {
  const [startQuiz, setStartQuiz] = useState(false)

  // 提取题目和答案，用于结构化数据
  const structuredDataQuestions = questions.map(question => ({
    '@type': 'Question',
    name: question.text.zh,
    acceptedAnswer: {
      '@type': 'Answer',
      text: question.answers.map(answer => answer.text.zh).join(', ')
    }
  }))

  if (startQuiz) {
    return (
      <main className="quiz-bg min-h-screen flex items-center justify-center p-4">
        <div className="magic-particles" />
        <QuizComponent />
      </main>
    )
  }

  return (
    <div className="quiz-bg min-h-screen w-full">
      {/* JSON-LD 结构化数据 */}
      <Script
        id="quiz-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: '哈利波特学院测试',
            description: '通过我们的魔法分院帽测试，发现你真正属于哪个霍格沃茨学院。回答问题，揭示你是勇敢的格兰芬多、忠诚的赫奇帕奇、睿智的拉文克劳还是野心勃勃的斯莱特林。',
            about: {
              '@type': 'Thing',
              name: '哈利波特霍格沃茨学院',
              description: '霍格沃茨魔法学校的四大学院'
            },
            educationalAlignment: {
              '@type': 'AlignmentObject',
              alignmentType: 'educationalSubject',
              targetName: '娱乐'
            },
            author: {
              '@type': 'Organization',
              name: '霍格沃茨测试团队'
            },
            provider: {
              '@type': 'Organization',
              name: '霍格沃茨测试团队',
              url: 'https://harrypotterhousequiz.pro/zh'
            },
            question: structuredDataQuestions
          })
        }}
      />
      
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Hero Section with CTA */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/sorting-hat.png"
            alt="分院帽"
            width={180}
            height={180}
            className="mx-auto mb-4 animate-float"
            priority
          />
          <h1 className="text-5xl md:text-6xl text-amber-400 font-magic-zh mb-6">
            分院帽等待着你
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-magic-zh mb-6 max-w-3xl mx-auto">
            "我会洞察你的思想，告诉你属于哪里！"
          </p>
          
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)] mb-8"
          >
            开始霍格沃茨学院测试
          </button>
        </div>
      </section>

      {/* Sorting Hat's Song */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-magic-zh text-amber-400 text-center mb-8">分院帽之歌</h2>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-amber-200 mb-4 font-magic-zh italic">
              <p className="mb-4 text-center">
                千年之前，当我初次被缝制，<br />
                四位杰出的巫师名声流传至今：<br />
                来自荒野的勇敢格兰芬多，<br />
                来自山谷的睿智拉文克劳，
              </p>
              <p className="mb-4 text-center">
                来自平原的善良赫奇帕奇，<br />
                来自沼泽的精明斯莱特林。<br />
                他们共享一个愿望，一个希望，一个梦想，<br />
                他们制定了一个大胆的计划，
              </p>
              <p className="mb-4 text-center">
                教育年轻的巫师们，<br />
                于是霍格沃茨学校开始了。<br />
                这四位创始人中的每一位，<br />
                都建立了自己的学院，
              </p>
              <p className="mb-4 text-center">
                因为他们各自重视不同的品质，<br />
                在他们所教导的学生中。<br />
                格兰芬多最重视最勇敢的人，<br />
                拉文克劳最重视最聪明的人，
              </p>
              <p className="mb-4 text-center">
                赫奇帕奇认为勤奋的人最值得录取，<br />
                而渴望权力的斯莱特林爱那些有野心的人。<br />
                在他们还活着的时候，他们将最喜欢的学生从人群中挑选出来，<br />
                但当他们死后，谁来挑选合适的人呢？
              </p>
              <p className="mb-4 text-center">
                是格兰芬多找到了方法，<br />
                他将我从头上摘下，<br />
                创始人们在我里面注入了智慧，<br />
                这样我就能代替他们选择！
              </p>
              <p className="text-center">
                现在把我戴在你的耳朵上，<br />
                我从未出错，<br />
                我会看透你的内心，<br />
                告诉你属于哪里！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Houses Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-6">四大学院</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-5 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-xl font-magic-zh text-yellow-400 mb-2">格兰芬多</h3>
              <p className="text-amber-200 font-magic-zh">
                "格兰芬多最重视最勇敢的人"
                <br />价值观：勇气、勇敢、胆量、骑士精神
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-5 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-xl font-magic-zh text-blue-400 mb-2">拉文克劳</h3>
              <p className="text-amber-200 font-magic-zh">
                "拉文克劳最重视最聪明的人"
                <br />价值观：智慧、才智、创造力、独创性
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-5 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-xl font-magic-zh text-yellow-300 mb-2">赫奇帕奇</h3>
              <p className="text-amber-200 font-magic-zh">
                "赫奇帕奇认为勤奋的人最值得录取"
                <br />价值观：勤奋、忠诚、耐心、公平
              </p>
            </div>
            
            <div className="bg-green-900/20 p-5 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-xl font-magic-zh text-green-400 mb-2">斯莱特林</h3>
              <p className="text-amber-200 font-magic-zh">
                "渴望权力的斯莱特林爱那些有野心的人"
                <br />价值观：野心、狡猾、领导力、足智多谋
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secondary CTA */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">准备好了吗？</h2>
          <p className="text-amber-200 mb-6 font-magic-zh">
            让古老的魔法揭示你真正的霍格沃茨学院。
          </p>
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)]"
          >
            开始霍格沃茨学院测试
          </button>
        </div>
      </section>
    </div>
  )
}
