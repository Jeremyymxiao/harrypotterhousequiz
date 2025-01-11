'use client'

import { useState } from 'react'
import Link from 'next/link'

type House = 'Gryffindor' | 'Ravenclaw' | 'Hufflepuff' | 'Slytherin'
type Answer = 'a' | 'b' | 'c' | 'd'
type Answers = Record<number, Answer>

const HOUSE_COLORS = {
  Gryffindor: 'from-red-600 to-yellow-500',
  Ravenclaw: 'from-blue-600 to-gray-300',
  Hufflepuff: 'from-yellow-400 to-gray-900',
  Slytherin: 'from-green-600 to-gray-300',
}

const HOUSE_DESCRIPTIONS = {
  Gryffindor: "해리 포터처럼 용감하고 대담해요! 그리핀도르는 용기, 대담함, 그리고 옳은 일을 위해 맞서는 것으로 유명해요. 여러분은 다른 사람을 돕고 신나는 모험을 떠나는 것을 두려워하지 않아요!",
  Ravenclaw: "똑똑하고 창의적이에요! 래번클로는 새로운 것을 배우고 퍼즐을 푸는 것을 좋아해요. 여러분은 세상에 대해 호기심이 많고 영리한 아이디어를 떠올리는 것을 즐겨요!",
  Hufflepuff: "친절하고 성실해요! 후플푸프는 항상 최선을 다하는 훌륭한 친구예요. 여러분은 배려심이 많고, 인내심이 있으며, 다른 사람을 돕는 것을 좋아해요 - 그것이 여러분을 특별하게 만들어요!",
  Slytherin: "영리하고 결단력이 있어요! 슬리데린은 자신이 원하는 것을 알고 목표를 달성하기 위해 열심히 노력해요. 여러분은 창의적인 해결책을 찾는 것이 특기이고 영리해요!"
}

export default function KidsQuiz() {
  const [answers, setAnswers] = useState<Answers>({})
  const [result, setResult] = useState<House | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (question: number, answer: Answer) => {
    setAnswers(prev => ({
      ...prev,
      [question]: answer
    }))
  }

  const calculateHouse = () => {
    const scores = {
      Gryffindor: 0,
      Ravenclaw: 0,
      Hufflepuff: 0,
      Slytherin: 0
    }

    // Count the answers
    Object.values(answers).forEach(answer => {
      switch(answer) {
        case 'a':
          scores.Gryffindor++
          break
        case 'b':
          scores.Ravenclaw++
          break
        case 'c':
          scores.Hufflepuff++
          break
        case 'd':
          scores.Slytherin++
          break
      }
    })

    // Find the house with highest score
    let maxScore = 0
    let resultHouse: House = 'Gryffindor'

    Object.entries(scores).forEach(([house, score]) => {
      if (score > maxScore) {
        maxScore = score
        resultHouse = house as House
      }
    })

    return resultHouse
  }

  const handleSubmit = () => {
    if (Object.keys(answers).length < 5) {
      alert("모든 질문에 답해주세요!")
      return
    }

    const house = calculateHouse()
    setResult(house)
    setShowResult(true)
  }

  if (showResult && result) {
    return (
      <div className="min-h-screen w-full pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
            <h1 className="text-4xl md:text-5xl font-magic-ko text-amber-400 text-center mb-8">
              당신의 호그와트 기숙사는...
            </h1>

            <div className={`text-center p-8 rounded-lg bg-gradient-to-r ${HOUSE_COLORS[result]} bg-opacity-30`}>
              <h2 className="text-6xl font-magic-ko text-white mb-4">{result}!</h2>
              <p className="text-white text-lg mb-6">
                {HOUSE_DESCRIPTIONS[result]}
              </p>
            </div>

            <div className="text-center space-y-4">
              <button
                onClick={() => {
                  setAnswers({})
                  setResult(null)
                  setShowResult(false)
                }}
                className="px-8 py-3 text-xl font-magic-ko text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                테스트 다시 하기
              </button>

              <div>
                <Link
                  href="/ko"
                  className="inline-block mt-4 text-amber-400 hover:text-amber-300 transition-colors font-magic-ko"
                >
                  홈으로 돌아가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-magic-ko text-amber-400 text-center mb-8">
            어린이를 위한 해리포터 기숙사 테스트
          </h1>

          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">어린 마법사 여러분, 환영합니다!</h2>
            <p className="text-amber-200 text-lg">
              여러분이 어느 기숙사에 속하는지 알아볼 준비가 되었나요? 해리 포터와 그의 친구들처럼, 
              여러분이 그리핀도르처럼 용감한지, 래번클로처럼 똑똑한지, 후플푸프처럼 친절한지, 
              아니면 슬리데린처럼 야망이 있는지 알아보아요!
            </p>
          </div>

          {/* Quiz Instructions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">테스트 방법</h2>
            <p className="text-amber-200 text-lg">
              5개의 마법 질문에 답하면, 여러분에게 딱 맞는 기숙사를 찾아드릴게요. 
              기억하세요, 모든 기숙사는 각자의 방식으로 특별해요!
            </p>
          </div>

          {/* Quiz Questions */}
          <div className="space-y-8">
            <h2 className="text-2xl font-magic-ko text-amber-400">마법의 질문들</h2>
            
            {/* Question 1 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-ko text-amber-400">1. 놀이 시간에 무엇을 하나요?</h3>
              <div className="space-y-2 text-amber-200">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q1" 
                    id="q1a" 
                    checked={answers[1] === 'a'}
                    onChange={() => handleAnswer(1, 'a')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q1a">모두를 이끌고 모험 게임을 해요</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q1" 
                    id="q1b" 
                    checked={answers[1] === 'b'}
                    onChange={() => handleAnswer(1, 'b')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q1b">마법에 대한 재미있는 책을 읽어요</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q1" 
                    id="q1c" 
                    checked={answers[1] === 'c'}
                    onChange={() => handleAnswer(1, 'c')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q1c">외로워 보이는 친구를 도와요</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q1" 
                    id="q1d"
                    checked={answers[1] === 'd'}
                    onChange={() => handleAnswer(1, 'd')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q1d">모두를 위한 새로운 게임을 만들어요</label>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-ko text-amber-400">2. 어떤 마법 동물을 선택할까요?</h3>
              <div className="space-y-2 text-amber-200">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q2" 
                    id="q2a" 
                    checked={answers[2] === 'a'}
                    onChange={() => handleAnswer(2, 'a')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q2a">용감한 사자 새끼</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q2" 
                    id="q2b" 
                    checked={answers[2] === 'b'}
                    onChange={() => handleAnswer(2, 'b')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q2b">현명한 부엉이</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q2" 
                    id="q2c" 
                    checked={answers[2] === 'c'}
                    onChange={() => handleAnswer(2, 'c')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q2c">친근한 강아지</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q2" 
                    id="q2d" 
                    checked={answers[2] === 'd'}
                    onChange={() => handleAnswer(2, 'd')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q2d">영리한 뱀</label>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-ko text-amber-400">3. 학교에서 가장 좋아하는 것은 무엇인가요?</h3>
              <div className="space-y-2 text-amber-200">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q3" 
                    id="q3a" 
                    checked={answers[3] === 'a'}
                    onChange={() => handleAnswer(3, 'a')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q3a">새롭고 신나는 활동에 도전하기</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q3" 
                    id="q3b" 
                    checked={answers[3] === 'b'}
                    onChange={() => handleAnswer(3, 'b')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q3b">재미있는 새로운 것을 배우기</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q3" 
                    id="q3c" 
                    checked={answers[3] === 'c'}
                    onChange={() => handleAnswer(3, 'c')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q3c">친구들의 공부를 도와주기</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q3" 
                    id="q3d" 
                    checked={answers[3] === 'd'}
                    onChange={() => handleAnswer(3, 'd')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q3d">최고가 되기 위해 열심히 노력하기</label>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-ko text-amber-400">4. 친구가 괴롭힘을 당하는 것을 본다면 어떻게 할까요?</h3>
              <div className="space-y-2 text-amber-200">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q4" 
                    id="q4a" 
                    checked={answers[4] === 'a'}
                    onChange={() => handleAnswer(4, 'a')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q4a">바로 괴롭히는 사람에게 맞서요</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q4" 
                    id="q4b" 
                    checked={answers[4] === 'b'}
                    onChange={() => handleAnswer(4, 'b')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q4b">영리한 해결 방법을 생각해요</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q4" 
                    id="q4c" 
                    checked={answers[4] === 'c'}
                    onChange={() => handleAnswer(4, 'c')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q4c">친구를 위로하고 선생님께 말씀드려요</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q4" 
                    id="q4d" 
                    checked={answers[4] === 'd'}
                    onChange={() => handleAnswer(4, 'd')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q4d">다시는 일어나지 않게 할 방법을 찾아요</label>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-ko text-amber-400">5. 마법 지팡이가 있다면 무엇을 원할까요?</h3>
              <div className="space-y-2 text-amber-200">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q5" 
                    id="q5a" 
                    checked={answers[5] === 'a'}
                    onChange={() => handleAnswer(5, 'a')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q5a">멋진 모험을 떠날 수 있는 힘</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q5" 
                    id="q5b" 
                    checked={answers[5] === 'b'}
                    onChange={() => handleAnswer(5, 'b')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q5b">세상의 모든 마법을 배울 수 있는 능력</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q5" 
                    id="q5c" 
                    checked={answers[5] === 'c'}
                    onChange={() => handleAnswer(5, 'c')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q5c">모두를 행복하게 만드는 힘</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="q5" 
                    id="q5d" 
                    checked={answers[5] === 'd'}
                    onChange={() => handleAnswer(5, 'd')}
                    className="text-amber-400" 
                  />
                  <label htmlFor="q5d">모든 꿈을 이룰 수 있는 능력</label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 text-xl font-magic-ko text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                나의 기숙사 찾기!
              </button>
            </div>
          </div>

          {/* House Descriptions */}
          <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-magic-ko text-amber-400">호그와트 기숙사 소개</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-ko text-amber-400">그리핀도르</h3>
                <p className="text-amber-200">해리 포터처럼 용감하고 대담한 사람들의 집!</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-ko text-amber-400">래번클로</h3>
                <p className="text-amber-200">똑똑하고 창의적인 마음을 가진 사람들의 집!</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-ko text-amber-400">후플푸프</h3>
                <p className="text-amber-200">친절하고 열심히 노력하는 사람들의 집!</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-ko text-amber-400">슬리데린</h3>
                <p className="text-amber-200">야망이 있고 영리한 사람들의 집!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 