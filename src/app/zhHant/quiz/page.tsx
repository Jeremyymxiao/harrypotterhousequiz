"use client"

import React, { useState } from 'react'
import QuizComponent from '@/components/QuizComponent'
import Image from 'next/image'
import Script from 'next/script'
import { questions } from '@/data/questions'

export default function QuizPage() {
  const [startQuiz, setStartQuiz] = useState(false)

  // 提取題目和答案，用於結構化數據
  const structuredDataQuestions = questions.map(question => ({
    '@type': 'Question',
    name: question.text.zhHant,
    acceptedAnswer: {
      '@type': 'Answer',
      text: question.answers.map(answer => answer.text.zhHant).join(', ')
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
      {/* JSON-LD 結構化數據 */}
      <Script
        id="quiz-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: '哈利波特學院測試',
            description: '通過我們的魔法分類帽測試，發現你真正屬於哪個霍格華茲學院。回答問題，揭示你是勇敢的葛萊分多、忠誠的赫夫帕夫、睿智的雷文克勞還是野心勃勃的史萊哲林。',
            about: {
              '@type': 'Thing',
              name: '哈利波特霍格華茲學院',
              description: '霍格華茲魔法學校的四大學院'
            },
            educationalAlignment: {
              '@type': 'AlignmentObject',
              alignmentType: 'educationalSubject',
              targetName: '娛樂'
            },
            author: {
              '@type': 'Organization',
              name: '霍格華茲測試團隊'
            },
            provider: {
              '@type': 'Organization',
              name: '霍格華茲測試團隊',
              url: 'https://harrypotterhousequiz.pro/zhHant'
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
            alt="分類帽"
            width={180}
            height={180}
            className="mx-auto mb-4 animate-float"
            priority
          />
          <h1 className="text-5xl md:text-6xl text-amber-400 font-magic-zh mb-6">
            分類帽等待著你
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-magic-zh mb-6 max-w-3xl mx-auto">
            "我會洞察你的思想，告訴你屬於哪裡！"
          </p>
          
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)] mb-8"
          >
            開始霍格華茲學院測試
          </button>
        </div>
      </section>

      {/* Sorting Hat's Song */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-magic-zh text-amber-400 text-center mb-8">分類帽之歌</h2>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-amber-200 mb-4 font-magic-zh italic">
              <p className="mb-4 text-center">
                千年之前，當我初次被縫製，<br />
                四位傑出的巫師名聲流傳至今：<br />
                來自荒野的勇敢葛萊分多，<br />
                來自山谷的睿智雷文克勞，
              </p>
              <p className="mb-4 text-center">
                來自平原的善良赫夫帕夫，<br />
                來自沼澤的精明史萊哲林。<br />
                他們共享一個願望，一個希望，一個夢想，<br />
                他們制定了一個大膽的計劃，
              </p>
              <p className="mb-4 text-center">
                教育年輕的巫師們，<br />
                於是霍格華茲學校開始了。<br />
                這四位創始人中的每一位，<br />
                都建立了自己的學院，
              </p>
              <p className="mb-4 text-center">
                因為他們各自重視不同的品質，<br />
                在他們所教導的學生中。<br />
                葛萊分多最重視最勇敢的人，<br />
                雷文克勞最重視最聰明的人，
              </p>
              <p className="mb-4 text-center">
                赫夫帕夫認為勤奮的人最值得錄取，<br />
                而渴望權力的史萊哲林愛那些有野心的人。<br />
                在他們還活著的時候，他們將最喜歡的學生從人群中挑選出來，<br />
                但當他們死後，誰來挑選合適的人呢？
              </p>
              <p className="mb-4 text-center">
                是葛萊分多找到了方法，<br />
                他將我從頭上摘下，<br />
                創始人們在我裡面注入了智慧，<br />
                這樣我就能代替他們選擇！
              </p>
              <p className="text-center">
                現在把我戴在你的耳朵上，<br />
                我從未出錯，<br />
                我會看透你的內心，<br />
                告訴你屬於哪裡！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Houses Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-6">四大學院</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-5 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-xl font-magic-zh text-yellow-400 mb-2">葛萊分多</h3>
              <p className="text-amber-200 font-magic-zh">
                "葛萊分多最重視最勇敢的人"
                <br />價值觀：勇氣、勇敢、膽量、騎士精神
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-5 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-xl font-magic-zh text-blue-400 mb-2">雷文克勞</h3>
              <p className="text-amber-200 font-magic-zh">
                "雷文克勞最重視最聰明的人"
                <br />價值觀：智慧、才智、創造力、獨創性
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-5 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-xl font-magic-zh text-yellow-300 mb-2">赫夫帕夫</h3>
              <p className="text-amber-200 font-magic-zh">
                "赫夫帕夫認為勤奮的人最值得錄取"
                <br />價值觀：勤奮、忠誠、耐心、公平
              </p>
            </div>
            
            <div className="bg-green-900/20 p-5 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-xl font-magic-zh text-green-400 mb-2">史萊哲林</h3>
              <p className="text-amber-200 font-magic-zh">
                "渴望權力的史萊哲林愛那些有野心的人"
                <br />價值觀：野心、狡猾、領導力、足智多謀
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secondary CTA */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-magic-zh text-amber-400 mb-6">準備好了嗎？</h2>
          <p className="text-amber-200 mb-6 font-magic-zh">
            讓古老的魔法揭示你真正的霍格華茲學院。
          </p>
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)]"
          >
            開始霍格華茲學院測試
          </button>
        </div>
      </section>
    </div>
  )
}
