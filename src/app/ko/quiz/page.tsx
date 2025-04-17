"use client"

import React, { useState } from 'react'
import QuizComponent from '@/components/QuizComponent'
import Image from 'next/image'

export default function QuizPage() {
  const [startQuiz, setStartQuiz] = useState(false)

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
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Hero Section with CTA */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/sorting-hat.png"
            alt="분류 모자"
            width={180}
            height={180}
            className="mx-auto mb-4 animate-float"
            priority
          />
          <h1 className="text-5xl md:text-6xl text-amber-400 font-harry mb-6">
            분류 모자가 당신을 기다리고 있습니다
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-harry mb-6 max-w-3xl mx-auto">
            "당신의 마음을 들여다보고, 어디에 속하는지 알려드리겠습니다!"
          </p>
          
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)] mb-8"
          >
            호그와트 기숙사 테스트 시작하기
          </button>
        </div>
      </section>

      {/* Sorting Hat's Song */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-harry text-amber-400 text-center mb-8">분류 모자의 노래</h2>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-amber-200 mb-4 font-magic italic">
              <p className="mb-4 text-center">
                천 년도 더 전, 내가 새로 만들어졌을 때,<br />
                지금까지도 명성이 전해지는<br />
                네 명의 마법사가 있었죠:<br />
                황야에서 온 용감한 그리핀도르,
              </p>
              <p className="mb-4 text-center">
                계곡에서 온 현명한 레이븐클로,<br />
                평원에서 온 친절한 후플푸프,<br />
                늪지에서 온 영리한 슬리데린.<br />
                그들은 소망과 희망, 꿈을 공유했고,
              </p>
              <p className="mb-4 text-center">
                대담한 계획을 세웠죠.<br />
                젊은 마법사들을 교육하기 위해,<br />
                이렇게 호그와트 학교가 시작되었답니다.<br />
                이 네 창립자들은 각자,
              </p>
              <p className="mb-4 text-center">
                자신의 기숙사를 세웠죠.<br />
                그들이 가르치는 학생들 중에서<br />
                서로 다른 미덕을 중요시했기 때문이죠.<br />
                그리핀도르가 가장 존중한 것은
              </p>
              <p className="mb-4 text-center">
                누구보다 용감한 사람들이었죠.<br />
                레이븐클로에게는, 가장 똑똑한 사람이<br />
                언제나 최고였고,<br />
                후플푸프에게는, 성실한 사람들이
              </p>
              <p className="mb-4 text-center">
                가장 입학할 가치가 있었고,<br />
                권력에 목마른 슬리데린은<br />
                큰 야망을 가진 사람들을 사랑했죠.<br />
                그들이 살아있는 동안에는, 군중 속에서
              </p>
              <p className="mb-4 text-center">
                자신들이 좋아하는 학생들을 골랐지만,<br />
                그들이 죽어 떠난 후에는,<br />
                누가 적합한 사람들을 선택할까요?<br />
                해결책을 찾은 것은 그리핀도르,
              </p>
              <p className="mb-4 text-center">
                그는 나를 머리에서 벗어,<br />
                창립자들이 내게 지혜를 불어넣어,<br />
                내가 대신 선택할 수 있게 했죠!<br />
                자, 이제 나를 귀에 꼭 맞게 써보세요,
              </p>
              <p className="text-center">
                나는 틀린 적이 없답니다,<br />
                당신의 마음속을 들여다보고,<br />
                당신이 어디에 속하는지 알려드리겠습니다!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Houses Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-6">네 개의 기숙사</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-5 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-xl font-harry text-yellow-400 mb-2">그리핀도르</h3>
              <p className="text-amber-200 font-harry">
                "그리핀도르가 가장 존중한 것은 누구보다 용감한 사람들"
                <br />가치관: 용기, 대담함, 기사도 정신, 결단력
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-5 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-xl font-harry text-blue-400 mb-2">레이븐클로</h3>
              <p className="text-amber-200 font-harry">
                "레이븐클로에게는, 가장 똑똑한 사람이 언제나 최고"
                <br />가치관: 지혜, 지성, 창의성, 독창성
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-5 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-xl font-harry text-yellow-300 mb-2">후플푸프</h3>
              <p className="text-amber-200 font-harry">
                "후플푸프에게는, 성실한 사람들이 가장 입학할 가치가 있었고"
                <br />가치관: 성실함, 충성심, 인내, 공정함
              </p>
            </div>
            
            <div className="bg-green-900/20 p-5 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-xl font-harry text-green-400 mb-2">슬리데린</h3>
              <p className="text-amber-200 font-harry">
                "권력에 목마른 슬리데린은 큰 야망을 가진 사람들을 사랑했죠"
                <br />가치관: 야망, 교활함, 리더십, 기지
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secondary CTA */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-harry text-amber-400 mb-6">준비되셨나요?</h2>
          <p className="text-amber-200 mb-6 font-harry">
            고대의 마법이 당신의 진정한 호그와트 기숙사를 드러낼 것입니다.
          </p>
          <button 
            onClick={() => setStartQuiz(true)}
            className="magic-button px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/40 hover:shadow-[0_4px_12px_rgba(196,180,84,0.4),0_0_30px_rgba(255,215,0,0.1)]"
          >
            호그와트 기숙사 테스트 시작하기
          </button>
        </div>
      </section>
    </div>
  )
}
