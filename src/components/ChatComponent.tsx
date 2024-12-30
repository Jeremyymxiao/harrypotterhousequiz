'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatComponent() {
  const router = useRouter()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const savedMessages = localStorage.getItem('chatMessages')
      if (savedMessages) {
        return JSON.parse(savedMessages)
      }
    }
    return [{
      role: 'assistant',
      content: 'Hmm... Another student seeking guidance? Very well, what would you like to know about your potential house or anything else about Hogwarts?'
    }]
  })
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages))
    }
  }, [messages])

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
          messages: [...messages, { role: 'user', content: userMessage }]
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
        content: error instanceof Error 
          ? `魔法连接似乎出现了问题：${error.message}` 
          : '我很抱歉，魔法连接似乎出现了问题。也许可以再试一次？'
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
            onClick={() => router.push('/')}
            className="magic-button px-4 py-2 text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 transition-all duration-300 
                     backdrop-blur-sm bg-black/30"
          >
            Return Home
          </button>
          <button
            onClick={() => router.push('/quiz')}
            className="magic-button px-4 py-2 text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 transition-all duration-300 
                     backdrop-blur-sm bg-black/30"
          >
            Start Quiz
          </button>
        </div>

        <div className="mb-8 text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src="/images/sorting-hat.png"
              alt="Sorting Hat"
              fill
              sizes="(max-width: 768px) 100vw, 128px"
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl text-amber-400 font-harry tracking-wider">The Sorting Hat</h1>
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
              <p className="text-amber-200 animate-pulse">The Sorting Hat is thinking...</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask the Sorting Hat..."
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
            Send
          </button>
        </form>
      </div>
    </div>
  )
} 