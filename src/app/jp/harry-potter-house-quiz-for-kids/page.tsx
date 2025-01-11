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
  Gryffindor: "ハリー・ポッターのように勇敢で大胆！グリフィンドールは勇気と正義感で知られています。あなたは他人を助けることを恐れず、エキサイティングな冒険に出るのが好きです！",
  Ravenclaw: "賢くて創造的！レイブンクローは新しいことを学び、パズルを解くのが大好きです。あなたは世界に興味を持ち、想像力を使って賢いアイデアを思いつくのが得意です！",
  Hufflepuff: "親切で勤勉！ハッフルパフは常に最善を尽くす素晴らしい友人です。あなたは思いやりがあり、忍耐強く、他人を助けるのが大好きです。それがあなたを特別な存在にしています！",
  Slytherin: "賢くて決断力がある！スリザリンは自分の目標を達成するために一生懸命努力します。あなたは機転が利き、創造的な解決策を思いつくのが得意です！"
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

    // 回答をカウント
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

    // 最高得点の寮を見つける
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
      alert("すべての質問に答えてから寮を見つけてください！")
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
            <h1 className="text-4xl md:text-5xl font-harry text-amber-400 text-center mb-8">
              あなたのホグワーツ寮は...
            </h1>

            <div className={`text-center p-8 rounded-lg bg-gradient-to-r ${HOUSE_COLORS[result]} bg-opacity-30`}>
              <h2 className="text-6xl font-harry text-white mb-4">{result}！</h2>
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
                className="px-8 py-3 text-xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                クイズをもう一度受ける
              </button>

              <div>
                <Link
                  href="/"
                  className="inline-block mt-4 text-amber-400 hover:text-amber-300 transition-colors font-harry"
                >
                  ホームに戻る
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
          {/* メインタイトル */}
          <h1 className="text-4xl md:text-5xl font-harry text-amber-400 text-center mb-8">
            ハリー・ポッター寮クイズ for キッズ
          </h1>

          {/* イントロダクション */}
          <div className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">ようこそ、若き魔法使いたち！</h2>
            <p className="text-amber-200 text-lg">
              あなたがどのホグワーツ寮に属するか、発見する準備はできていますか？ハリー・ポッターやその友達のように、あなたがグリフィンドールのように勇敢か、レイブンクローのように賢いか、ハッフルパフのように親切か、スリザリンのように野心的かを調べてみましょう！
            </p>
          </div>

          {/* クイズの説明 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">クイズの受け方</h2>
            <p className="text-amber-200 text-lg">
              この5つの魔法の質問に答えて、あなたにぴったりのホグワーツ寮を見つけましょう。どの寮もそれぞれ特別なものです！
            </p>
          </div>

          {/* クイズの質問 */}
          <div className="space-y-8">
            <h2 className="text-2xl font-harry text-amber-400">魔法の質問</h2>
            
            {/* 質問1 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-harry text-amber-400">1. 遊び時間に何をしますか？</h3>
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
                  <label htmlFor="q1a">みんなをリードして楽しい冒険ゲームをする</label>
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
                  <label htmlFor="q1b">魔法についてのエキサイティングな本を読む</label>
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
                  <label htmlFor="q1c">寂しそうな友達を助ける</label>
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
                  <label htmlFor="q1d">みんなのための新しいゲームを作る</label>
                </div>
              </div>
            </div>

            {/* 質問2 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-harry text-amber-400">2. どの魔法のペットを選びますか？</h3>
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
                  <label htmlFor="q2a">勇敢なライオンの子</label>
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
                  <label htmlFor="q2b">賢いフクロウ</label>
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
                  <label htmlFor="q2c">フレンドリーな子犬</label>
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
                  <label htmlFor="q2d">賢いヘビ</label>
                </div>
              </div>
            </div>

            {/* 質問3 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-harry text-amber-400">3. 学校で一番好きなことは何ですか？</h3>
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
                  <label htmlFor="q3a">新しいエキサイティングな活動を試す</label>
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
                  <label htmlFor="q3b">興味深い新しいことを学ぶ</label>
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
                  <label htmlFor="q3c">クラスメートの勉強を手伝う</label>
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
                  <label htmlFor="q3d">一番になるために一生懸命努力する</label>
                </div>
              </div>
            </div>

            {/* 質問4 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-harry text-amber-400">4. 友達が意地悪をされているのを見たらどうしますか？</h3>
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
                  <label htmlFor="q4a">すぐにその人に立ち向かう</label>
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
                  <label htmlFor="q4b">問題を解決する賢い方法を考える</label>
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
                  <label htmlFor="q4c">友達を慰めて先生に報告する</label>
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
                  <label htmlFor="q4d">二度と起こらないようにする方法を見つける</label>
                </div>
              </div>
            </div>

            {/* 質問5 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-harry text-amber-400">5. 魔法の杖を持っていたら何を願いますか？</h3>
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
                  <label htmlFor="q5a">素晴らしい冒険に出る力</label>
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
                  <label htmlFor="q5b">世界のすべての魔法を学ぶ能力</label>
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
                  <label htmlFor="q5c">みんなを幸せにする力</label>
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
                  <label htmlFor="q5d">すべての夢を叶える能力</label>
                </div>
              </div>
            </div>

            {/* 提出ボタン */}
            <div className="text-center pt-4">
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 text-xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                私のホグワーツ寮を見つける！
              </button>
            </div>
          </div>

          {/* 寮の説明 */}
          <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-harry text-amber-400">ホグワーツ寮について</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-harry text-amber-400">グリフィンドール</h3>
                <p className="text-amber-200">ハリー・ポッターのように勇敢で大胆な人々の寮！</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-harry text-amber-400">レイブンクロー</h3>
                <p className="text-amber-200">賢くて創造的な心を持つ人々の寮！</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-harry text-amber-400">ハッフルパフ</h3>
                <p className="text-amber-200">親切で勤勉な人々の寮！</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-harry text-amber-400">スリザリン</h3>
                <p className="text-amber-200">野心的で機転の利く人々の寮！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}