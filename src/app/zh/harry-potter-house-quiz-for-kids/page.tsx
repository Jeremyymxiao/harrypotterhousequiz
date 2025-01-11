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
  Gryffindor: "勇敢无畏，就像哈利·波特一样！格兰芬多以勇气、胆识和正义感而闻名。你不怕帮助他人，也喜欢参与刺激的冒险！",
  Ravenclaw: "聪明睿智！拉文克劳喜欢学习新知识和解决谜题。你对世界充满好奇，喜欢用想象力创造聪明的点子！",
  Hufflepuff: "善良勤奋！赫奇帕奇有很多好朋友，他们总是尽最大努力。你富有同情心、有耐心，喜欢帮助他人 - 这让你变得很特别！",
  Slytherin: "机智果断！斯莱特林知道自己想要什么，并为实现目标而努力。你很聪明，善于找到创造性的解决方案！"
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
      alert("请在查看结果前回答所有问题！")
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
            <h1 className="text-4xl md:text-5xl font-magic-zh text-amber-400 text-center mb-8">
              你的霍格沃茨学院是...
            </h1>

            <div className={`text-center p-8 rounded-lg bg-gradient-to-r ${HOUSE_COLORS[result]} bg-opacity-30`}>
              <h2 className="text-6xl font-magic-zh text-white mb-4">{result}!</h2>
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
                className="px-8 py-3 text-xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                再测一次
              </button>

              <div>
                <Link
                  href="/zh"
                  className="inline-block mt-4 text-amber-400 hover:text-amber-300 transition-colors font-magic-zh"
                >
                  返回首页
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
          <h1 className="text-4xl md:text-5xl font-magic-zh text-amber-400 text-center mb-8">
            儿童版霍格沃茨分院帽测试
          </h1>

          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">欢迎，小巫师们！</h2>
            <p className="text-amber-200 text-lg">
              准备好发现你属于哪个霍格沃茨学院了吗？就像哈利·波特和他的朋友们一样，
              你将发现自己是否像格兰芬多一样勇敢，像拉文克劳一样聪明，
              像赫奇帕奇一样善良，或者像斯莱特林一样有野心！
            </p>
          </div>

          {/* Quiz Instructions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">如何参加测试</h2>
            <p className="text-amber-200 text-lg">
              回答这5个神奇的问题，我们将帮你找到最适合你的霍格沃茨学院。
              记住，每个学院都有其独特的魅力！
            </p>
          </div>

          {/* Quiz Questions */}
          <div className="space-y-8">
            <h2 className="text-2xl font-magic-zh text-amber-400">你的魔法问题</h2>
            
            {/* Question 1 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-zh text-amber-400">1. 在课间休息时，你会做什么？</h3>
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
                  <label htmlFor="q1a">带领大家玩一个冒险游戏</label>
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
                  <label htmlFor="q1b">读一本关于魔法的有趣书籍</label>
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
                  <label htmlFor="q1c">帮助看起来孤单的同学</label>
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
                  <label htmlFor="q1d">想出一个新的好玩的游戏</label>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-zh text-amber-400">2. 你会选择哪种魔法动物？</h3>
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
                  <label htmlFor="q2a">一只勇敢的小狮子</label>
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
                  <label htmlFor="q2b">一只聪明的猫头鹰</label>
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
                  <label htmlFor="q2c">一只友好的小狗</label>
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
                  <label htmlFor="q2d">一条机智的蛇</label>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-zh text-amber-400">3. 你最喜欢在学校做什么？</h3>
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
                  <label htmlFor="q3a">尝试新的刺激活动</label>
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
                  <label htmlFor="q3b">学习有趣的新知识</label>
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
                  <label htmlFor="q3c">帮助同学完成作业</label>
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
                  <label htmlFor="q3d">努力成为最优秀的学生</label>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-zh text-amber-400">4. 如果看到有人欺负你的朋友，你会怎么做？</h3>
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
                  <label htmlFor="q4a">立即站出来制止欺负人的人</label>
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
                  <label htmlFor="q4b">想出一个聪明的方法解决问题</label>
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
                  <label htmlFor="q4c">安慰朋友并告诉老师</label>
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
                  <label htmlFor="q4d">想办法确保这种事不再发生</label>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-magic-zh text-amber-400">5. 如果你有一根魔杖，你最希望用它做什么？</h3>
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
                  <label htmlFor="q5a">获得进行精彩冒险的能力</label>
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
                  <label htmlFor="q5b">学习世界上所有的魔法</label>
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
                  <label htmlFor="q5c">让所有人都开心快乐</label>
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
                  <label htmlFor="q5d">实现自己所有的梦想</label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 text-xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                发现我的学院！
              </button>
            </div>
          </div>

          {/* House Descriptions */}
          <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-magic-zh text-amber-400">关于霍格沃茨学院</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-zh text-amber-400">格兰芬多</h3>
                <p className="text-amber-200">勇敢无畏者的家园，就像哈利·波特一样！</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-zh text-amber-400">拉文克劳</h3>
                <p className="text-amber-200">聪明才智之士的归属！</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-zh text-amber-400">赫奇帕奇</h3>
                <p className="text-amber-200">善良勤奋的人们在这里！</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-magic-zh text-amber-400">斯莱特林</h3>
                <p className="text-amber-200">充满野心和智慧的人的去处！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 