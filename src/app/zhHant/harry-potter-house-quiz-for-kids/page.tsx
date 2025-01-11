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
  Gryffindor: "勇敢無畏，就像哈利·波特一樣！葛萊芬多以勇氣、膽識和正義感而聞名。你不怕幫助他人，也喜歡參與刺激的冒險！",
  Ravenclaw: "聰明睿智！雷文克勞喜歡學習新知識和解決謎題。你對世界充滿好奇，喜歡用想像力創造聰明的點子！",
  Hufflepuff: "善良勤奮！赫夫帕夫有很多好朋友，他們總是盡最大努力。你富有同情心、有耐心，喜歡幫助他人 - 這讓你變得很特別！",
  Slytherin: "機智果斷！史萊哲林知道自己想要什麼，並為實現目標而努力。你很聰明，善於找到創造性的解決方案！"
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
      alert("請在查看結果前回答所有問題！")
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
            <h1 className="text-4xl md:text-5xl font-magic-zhHant text-amber-400 text-center mb-8">
              你的霍格華茲學院是...
            </h1>

            <div className={`text-center p-8 rounded-lg bg-gradient-to-r ${HOUSE_COLORS[result]} bg-opacity-30`}>
              <h2 className="text-6xl font-magic-zhHant text-white mb-4">{result}!</h2>
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
                className="px-8 py-3 text-xl font-magic-zhHant text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                再測一次
              </button>

              <div>
                <Link
                  href="/zhHant"
                  className="inline-block mt-4 text-amber-400 hover:text-amber-300 transition-colors font-magic-zhHant"
                >
                  返回首頁
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
          <h1 className="text-4xl md:text-5xl font-magic-zhHant text-amber-400 text-center mb-8">
            兒童版霍格華茲分院帽測試
          </h1>

          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">歡迎，小巫師們！</h2>
            <p className="text-amber-200 text-lg">
              準備好發現你屬於哪個霍格華茲學院了嗎？就像哈利·波特和他的朋友們一樣，
              你將發現自己是否像葛萊芬多一樣勇敢，像雷文克勞一樣聰明，
              像赫夫帕夫一樣善良，或者像史萊哲林一樣有野心！
            </p>
          </div>

          {/* Quiz Instructions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">如何參加測試</h2>
            <p className="text-amber-200 text-lg">
              回答這5個神奇的問題，我們將幫你找到最適合你的霍格華茲學院。
              記住，每個學院都有其獨特的魅力！
            </p>
          </div>

          {/* Quiz Questions */}
          <div className="space-y-8">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">你的魔法問題</h2>
            
            {/* Question 1 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-zhHant text-amber-400">1. 在課間休息時，你會做什麼？</h3>
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
                  <label htmlFor="q1a">帶領大家玩一個冒險遊戲</label>
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
                  <label htmlFor="q1b">讀一本關於魔法的有趣書籍</label>
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
                  <label htmlFor="q1c">幫助看起來孤單的同學</label>
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
                  <label htmlFor="q1d">想出一個新的好玩的遊戲</label>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-zhHant text-amber-400">2. 你會選擇哪種魔法動物？</h3>
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
                  <label htmlFor="q2a">一隻勇敢的小獅子</label>
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
                  <label htmlFor="q2b">一隻聰明的貓頭鷹</label>
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
                  <label htmlFor="q2c">一隻友好的小狗</label>
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
                  <label htmlFor="q2d">一條機智的蛇</label>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-zhHant text-amber-400">3. 你最喜歡在學校做什麼？</h3>
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
                  <label htmlFor="q3a">嘗試新的刺激活動</label>
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
                  <label htmlFor="q3b">學習有趣的新知識</label>
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
                  <label htmlFor="q3c">幫助同學完成作業</label>
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
                  <label htmlFor="q3d">努力成為最優秀的學生</label>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-zhHant text-amber-400">4. 如果看到有人欺負你的朋友，你會怎麼做？</h3>
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
                  <label htmlFor="q4a">立即站出來制止欺負人的人</label>
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
                  <label htmlFor="q4b">想出一個聰明的方法解決問題</label>
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
                  <label htmlFor="q4c">安慰朋友並告訴老師</label>
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
                  <label htmlFor="q4d">想辦法確保這種事不再發生</label>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-zhHant text-amber-400">5. 如果你有一根魔杖，你最希望用它做什麼？</h3>
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
                  <label htmlFor="q5a">獲得進行精彩冒險的能力</label>
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
                  <label htmlFor="q5b">學習世界上所有的魔法</label>
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
                  <label htmlFor="q5c">讓所有人都開心快樂</label>
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
                  <label htmlFor="q5d">實現自己所有的夢想</label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 text-xl font-magic-zhHant text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                發現我的學院！
              </button>
            </div>
          </div>

          {/* House Descriptions */}
          <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">關於霍格華茲學院</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-zhHant text-amber-400">葛萊芬多</h3>
                <p className="text-amber-200">勇敢無畏者的家園，就像哈利·波特一樣！</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-zhHant text-amber-400">雷文克勞</h3>
                <p className="text-amber-200">聰明才智之士的歸屬！</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-zhHant text-amber-400">赫夫帕夫</h3>
                <p className="text-amber-200">善良勤奮的人們在這裡！</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-zhHant text-amber-400">史萊哲林</h3>
                <p className="text-amber-200">充滿野心和智慧的人的去處！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 