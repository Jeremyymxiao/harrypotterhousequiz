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
  Gryffindor: "Brave and daring just like Harry Potter! Gryffindors are known for their courage, bravery, and standing up for what's right. You're not afraid to help others and go on exciting adventures!",
  Ravenclaw: "Smart and creative! Ravenclaws love to learn new things and solve puzzles. You're curious about the world and enjoy using your imagination to come up with clever ideas!",
  Hufflepuff: "Kind and hardworking! Hufflepuffs are great friends who always try their best. You're caring, patient, and love to help others - that makes you very special!",
  Slytherin: "Clever and determined! Slytherins know what they want and work hard to achieve their goals. You're resourceful and good at coming up with creative solutions!"
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
      alert("Please answer all questions before finding your house!")
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
              Your Hogwarts House Is...
            </h1>

            <div className={`text-center p-8 rounded-lg bg-gradient-to-r ${HOUSE_COLORS[result]} bg-opacity-30`}>
              <h2 className="text-6xl font-harry text-white mb-4">{result}!</h2>
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
                Take the Quiz Again
              </button>

              <div>
                <Link
                  href="/"
                  className="inline-block mt-4 text-amber-400 hover:text-amber-300 transition-colors font-harry"
                >
                  Return to Home
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
          <h1 className="text-4xl md:text-5xl font-harry text-amber-400 text-center mb-8">
            Harry Potter House Quiz for Kids
          </h1>

          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Welcome Young Wizards!</h2>
            <p className="text-amber-200 text-lg">
              Are you ready to discover which Hogwarts house you belong to? Just like Harry Potter and his friends, 
              you'll find out if you're brave like a Gryffindor, clever like a Ravenclaw, kind like a Hufflepuff, 
              or ambitious like a Slytherin!
            </p>
          </div>

          {/* Quiz Instructions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">How to Take the Quiz</h2>
            <p className="text-amber-200 text-lg">
              Answer these 5 magical questions, and we'll help you find your perfect Hogwarts house. 
              Remember, every house is special in its own way!
            </p>
          </div>

          {/* Quiz Questions */}
          <div className="space-y-8">
            <h2 className="text-2xl font-harry text-amber-400">Your Magical Questions</h2>
            
            {/* Question 1 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-harry text-amber-400">1. What would you do during playtime?</h3>
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
                  <label htmlFor="q1a">Lead everyone in a fun adventure game</label>
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
                  <label htmlFor="q1b">Read an exciting book about magic</label>
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
                  <label htmlFor="q1c">Help a friend who looks lonely</label>
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
                  <label htmlFor="q1d">Create a cool new game for everyone</label>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-harry text-amber-400">2. Which magical pet would you choose?</h3>
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
                  <label htmlFor="q2a">A brave lion cub</label>
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
                  <label htmlFor="q2b">A wise owl</label>
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
                  <label htmlFor="q2c">A friendly puppy</label>
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
                  <label htmlFor="q2d">A clever snake</label>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-harry text-amber-400">3. What's your favorite thing to do at school?</h3>
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
                  <label htmlFor="q3a">Try new and exciting activities</label>
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
                  <label htmlFor="q3b">Learn interesting new things</label>
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
                  <label htmlFor="q3c">Help classmates with their work</label>
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
                  <label htmlFor="q3d">Work hard to be the best</label>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-harry text-amber-400">4. What would you do if you saw someone being mean to your friend?</h3>
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
                  <label htmlFor="q4a">Stand up to the mean person right away</label>
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
                  <label htmlFor="q4b">Think of a clever way to solve the problem</label>
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
                  <label htmlFor="q4c">Comfort your friend and tell a teacher</label>
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
                  <label htmlFor="q4d">Find a way to make sure it never happens again</label>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="space-y-4 bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-harry text-amber-400">5. What would you wish for if you had a magic wand?</h3>
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
                  <label htmlFor="q5a">The power to go on amazing adventures</label>
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
                  <label htmlFor="q5b">The ability to learn all the magic in the world</label>
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
                  <label htmlFor="q5c">The power to make everyone happy</label>
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
                  <label htmlFor="q5d">The ability to make all your dreams come true</label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 text-xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
              >
                Find My Hogwarts House!
              </button>
            </div>
          </div>

          {/* House Descriptions */}
          <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-harry text-amber-400">About the Hogwarts Houses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-harry text-amber-400">Gryffindor</h3>
                <p className="text-amber-200">Home to the brave and daring, like Harry Potter!</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-harry text-amber-400">Ravenclaw</h3>
                <p className="text-amber-200">Where the clever and creative minds belong!</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-harry text-amber-400">Hufflepuff</h3>
                <p className="text-amber-200">For those who are kind and work hard!</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-xl font-harry text-amber-400">Slytherin</h3>
                <p className="text-amber-200">Where you'll find the ambitious and resourceful!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 