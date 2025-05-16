"use client"

import React, { useState } from 'react'
import QuizComponent from '@/components/QuizComponent'
import Image from 'next/image'
import Script from 'next/script'
import { questions } from '@/data/questions'

export default function QuizPage() {
  const [startQuiz, setStartQuiz] = useState(false)

  // 問題と回答を抽出して構造化データを作成
  const structuredDataQuestions = questions.map(question => ({
    '@type': 'Question',
    name: question.text.jp,
    acceptedAnswer: {
      '@type': 'Answer',
      text: question.answers.map(answer => answer.text.jp).join(', ')
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
      {/* JSON-LD 構造化データ */}
      <Script
        id="quiz-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: 'ハリーポッター寮テスト',
            description: '魔法の組分け帽子テストで、あなたが本当に属するホグワーツの寮を発見しましょう。質問に答えて、あなたが勇敢なグリフィンドール、忠実なハッフルパフ、賢明なレイブンクロー、野心的なスリザリンのどれに属するかを明らかにします。',
            about: {
              '@type': 'Thing',
              name: 'ハリーポッターのホグワーツ寮',
              description: 'ホグワーツ魔法魔術学校の四つの寮'
            },
            educationalAlignment: {
              '@type': 'AlignmentObject',
              alignmentType: 'educationalSubject',
              targetName: 'エンターテイメント'
            },
            author: {
              '@type': 'Organization',
              name: 'ホグワーツテストチーム'
            },
            provider: {
              '@type': 'Organization',
              name: 'ホグワーツテストチーム',
              url: 'https://harrypotterhousequiz.pro/jp'
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
            alt="組分け帽子"
            width={180}
            height={180}
            className="mx-auto mb-4 animate-float"
            priority
          />
          <h1 className="text-5xl md:text-6xl text-amber-400 font-harry mb-6">
            組分け帽子があなたを待っています
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-harry mb-6 max-w-3xl mx-auto">
            "あなたの心の中を覗いて、あなたがどこに属するか教えましょう！"
          </p>
          
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)] mb-8"
          >
            ホグワーツ寮テストを始める
          </button>
        </div>
      </section>

      {/* Sorting Hat's Song */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-harry text-amber-400 text-center mb-8">組分け帽子の歌</h2>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-amber-200 mb-4 font-magic italic">
              <p className="mb-4 text-center">
                千年以上も前のこと、<br />
                私が新しく縫われた頃、<br />
                名声は今なお知られている<br />
                四人の魔法使いがいました：
              </p>
              <p className="mb-4 text-center">
                荒野からの勇敢なグリフィンドール、<br />
                谷間からの公平なレイブンクロー、<br />
                広い谷からの優しいハッフルパフ、<br />
                沼地からの抜け目ないスリザリン。
              </p>
              <p className="mb-4 text-center">
                彼らは願いと希望と夢を共有し、<br />
                大胆な計画を立てました。<br />
                若い魔法使いたちを教育するために、<br />
                こうしてホグワーツ学校が始まりました。
              </p>
              <p className="mb-4 text-center">
                これら四人の創設者はそれぞれ、<br />
                自分の寮を作りました。<br />
                教える生徒たちに<br />
                それぞれ異なる美徳を重んじたからです。
              </p>
              <p className="mb-4 text-center">
                グリフィンドールが最も尊重したのは<br />
                誰よりも勇敢な者たち。<br />
                レイブンクローにとっては、最も賢い者が<br />
                常に最高であり、
              </p>
              <p className="mb-4 text-center">
                ハッフルパフにとって、勤勉な者が<br />
                最も入学に値し、<br />
                権力に飢えたスリザリンは<br />
                大いなる野心を持つ者を愛しました。
              </p>
              <p className="mb-4 text-center">
                生きている間は、彼らは群衆から<br />
                お気に入りの者を選び分けましたが、<br />
                彼らが死んで去った後、<br />
                誰が相応しい者を選ぶでしょうか？
              </p>
              <p className="mb-4 text-center">
                解決策を見つけたのはグリフィンドール、<br />
                彼は私を頭から取り、<br />
                創設者たちは私に知恵を込め、<br />
                私が代わりに選べるようにしました！
              </p>
              <p className="text-center">
                さあ、私をあなたの耳にぴったりとかぶせなさい、<br />
                私は間違ったことがありません、<br />
                あなたの心の中を見て、<br />
                あなたがどこに属するか教えましょう！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Houses Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-6">四つの寮</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-5 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-xl font-harry text-yellow-400 mb-2">グリフィンドール</h3>
              <p className="text-amber-200 font-harry">
                "グリフィンドールが最も尊重したのは誰よりも勇敢な者たち"
                <br />価値観：勇気、勇敢さ、大胆さ、騎士道精神
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-5 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-xl font-harry text-blue-400 mb-2">レイブンクロー</h3>
              <p className="text-amber-200 font-harry">
                "レイブンクローにとっては、最も賢い者が常に最高"
                <br />価値観：知性、機知、知恵、創造性
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-5 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-xl font-harry text-yellow-300 mb-2">ハッフルパフ</h3>
              <p className="text-amber-200 font-harry">
                "ハッフルパフにとって、勤勉な者が最も入学に値し"
                <br />価値観：勤勉さ、忠誠心、忍耐力、公平さ
              </p>
            </div>
            
            <div className="bg-green-900/20 p-5 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-xl font-harry text-green-400 mb-2">スリザリン</h3>
              <p className="text-amber-200 font-harry">
                "権力に飢えたスリザリンは大いなる野心を持つ者を愛しました"
                <br />価値観：野心、狡猾さ、リーダーシップ、機知
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secondary CTA */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-harry text-amber-400 mb-6">準備はいいですか？</h2>
          <p className="text-amber-200 mb-6 font-harry">
            古代の魔法があなたの本当のホグワーツ寮を明らかにします。
          </p>
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)]"
          >
            ホグワーツ寮テストを始める
          </button>
        </div>
      </section>
    </div>
  )
} 