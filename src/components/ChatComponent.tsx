'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { getCurrentLanguage } from '@/utils/language'
import { en } from '@/i18n/translations/en'
import { zh } from '@/i18n/translations/zh'
import { ko } from '@/i18n/translations/ko'
import { ru } from '@/i18n/translations/ru'

const translations = { en, zh, ko, ru }

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const getWelcomeMessage = (lang: string) => {
  switch(lang) {
    case 'zh':
      return '嗯... 又一个寻求指导的学生？好吧，你想了解什么关于你可能属于的学院或者霍格沃茨的其他事情？'
    case 'ko':
      return '흠... 또 다른 지도를 구하는 학생이군요? 좋아요, 당신이 속할 수 있는 기숙사나 호그와트에 대해 무엇을 알고 싶으신가요?'
    case 'ru':
      return 'Хмм... Еще один студент ищет совета? Хорошо, что бы вы хотели узнать о вашем потенциальном факультете или о чем-нибудь еще в Хогвартсе?'
    default:
      return 'Hmm... Another student seeking guidance? Very well, what would you like to know about your potential house or anything else about Hogwarts?'
  }
}

export default function ChatComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLang = getCurrentLanguage(pathname)
  const t = translations[currentLang]
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // 初始化消息
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMessages = localStorage.getItem(`chatMessages_${currentLang}`)
      if (savedMessages) {
        try {
          const parsedMessages = JSON.parse(savedMessages)
          setMessages(parsedMessages)
        } catch (e) {
          console.error('Error parsing saved messages:', e)
          setMessages([{ role: 'assistant', content: getWelcomeMessage(currentLang) }])
        }
      } else {
        setMessages([{ role: 'assistant', content: getWelcomeMessage(currentLang) }])
      }
    }
  }, [currentLang])

  // 保存消息到 localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && messages.length > 0) {
      try {
        localStorage.setItem(`chatMessages_${currentLang}`, JSON.stringify(messages))
      } catch (e) {
        console.error('Error saving messages:', e)
      }
    }
  }, [messages, currentLang])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      console.log('Sending message to API...')
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
          language: currentLang
        }),
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response')
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch (error) {
      console.error('Detailed error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: (() => {
          const errorMessage = error instanceof Error ? error.message : ''
          switch(currentLang) {
            case 'zh':
              return `魔法连接似乎出现了问题：${errorMessage || '我很抱歉，魔法连接似乎出现了问题。也许可以再试一次？'}`
            case 'ko':
              return `마법 연결에 문제가 있는 것 같습니다：${errorMessage || '죄송합니다, 마법 연결에 문제가 있는 것 같습니다. 다시 시도해보시겠어요?'}`
            case 'ru':
              return `Кажется, возникла проблема с магическим соединением：${errorMessage || 'Извините, кажется, возникла проблема с магическим соединением. Может быть, попробуете еще раз?'}`
            default:
              return `There seems to be a problem with the magical connection: ${errorMessage || 'I apologize, there seems to be a problem with the magical connection. Perhaps try again?'}`
          }
        })()
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8">
      <div className="relative z-5 max-w-3xl w-full bg-gray-900/30 border-2 border-amber-400 rounded-2xl p-4 shadow-[0_0_20px_rgba(196,180,84,0.3)] backdrop-blur-md">
        <div className="flex justify-between mb-4">
          <button
            onClick={() => router.push(`/${currentLang === 'en' ? '' : currentLang}`)}
            className="magic-button px-4 py-2 text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 transition-all duration-300 
                     backdrop-blur-sm bg-black/30"
          >
            {t.common.returnHome}
          </button>
          <button
            onClick={() => router.push(`/${currentLang === 'en' ? '' : currentLang + '/'}quiz`)}
            className="magic-button px-4 py-2 text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 transition-all duration-300 
                     backdrop-blur-sm bg-black/30"
          >
            {t.common.startQuiz}
          </button>
        </div>

        <div className="mb-8 text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src="/images/sorting-hat.png"
              alt={(() => {
                switch(currentLang) {
                  case 'zh':
                    return '分院帽'
                  case 'ko':
                    return '분류 모자'
                  case 'ru':
                    return 'Распределяющая шляпа'
                  default:
                    return 'Sorting Hat'
                }
              })()}
              fill
              sizes="(max-width: 768px) 100vw, 128px"
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl text-amber-400 font-harry tracking-wider">
            {t.askSortingHat.welcome}
          </h1>
        </div>

        <div className="h-[calc(100vh-350px)] md:h-[calc(100vh-400px)] lg:h-[calc(100vh-450px)] overflow-y-auto mb-6 space-y-4 scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-transparent">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                message.role === 'user'
                  ? 'bg-amber-400/10 ml-12'
                  : 'bg-gray-800/50 mr-12'
              }`}
            >
              <p className="text-amber-200">{message.content}</p>
            </div>
          ))}
          {isLoading && (
            <div className="bg-gray-800/50 p-4 rounded-lg mr-12">
              <p className="text-amber-200 animate-pulse">
                {(() => {
                  switch(currentLang) {
                    case 'zh':
                      return '分院帽正在思考...'
                    case 'ko':
                      return '분류 모자가 생각하고 있습니다...'
                    case 'ru':
                      return 'Распределяющая шляпа думает...'
                    default:
                      return 'The Sorting Hat is thinking...'
                  }
                })()}
              </p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.askSortingHat.placeholder}
            className="flex-1 p-4 bg-gray-800/90 text-amber-200 border border-amber-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="magic-button px-6 py-4 text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 transition-all duration-300 
                     backdrop-blur-sm bg-black/30"
          >
            {t.askSortingHat.send}
          </button>
        </form>
      </div>
    </div>
  )
} 