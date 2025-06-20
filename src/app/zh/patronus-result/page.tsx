'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { type PatronusType } from '@/types/patronus'
import { PATRONUSES } from '@/data/patronuses'
import { getCurrentLanguage } from '@/utils/language'
import { usePathname } from 'next/navigation'
import { en } from '@/i18n/translations/en'
import { zh } from '@/i18n/translations/zh'
import { zhHant } from '@/i18n/translations/zhHant'
import { ko } from '@/i18n/translations/ko'
import { ru } from '@/i18n/translations/ru'
import { jp } from '@/i18n/translations/jp'
import { pt } from '@/i18n/translations/pt'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share'
import { RiTiktokFill } from 'react-icons/ri'
import TestRecommendations from '@/components/TestRecommendations'

const translations = { en, zh, 'zhHant': zhHant, ko, ru, jp, pt }

// Social media button component
const SocialButton = ({ icon, onClick, label }: { icon: React.ReactNode; onClick: () => void; label: string }) => (
  <button
    onClick={onClick}
    className="hover:opacity-80 transition-opacity rounded-full bg-white p-2 flex items-center justify-center"
    title={label}
  >
    {icon}
  </button>
)

export default function PatronusResultPage() {
  const pathname = usePathname()
  const currentLang = getCurrentLanguage(pathname)
  const t = translations[currentLang]
  const [patronusType, setPatronusType] = useState<PatronusType>('strength')
  const [patronusData, setPatronusData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get result from localStorage
    const storedResult = localStorage.getItem('patronusResult')
    const storedPatronusName = localStorage.getItem('patronusName')
    
    if (storedResult && storedPatronusName) {
      setPatronusType(storedResult as PatronusType)
      
      // Use the specific stored patronus instead of a random one
      const patronus = PATRONUSES[storedPatronusName]
      if (patronus) {
        setPatronusData(patronus)
      } else {
        // Fallback to random selection if stored patronus is not found
        const patronusesOfType = Object.values(PATRONUSES).filter(p => p && p.type === storedResult)
        const randomPatronus = patronusesOfType[Math.floor(Math.random() * patronusesOfType.length)]
        setPatronusData(randomPatronus)
      }
    } else if (storedResult) {
      setPatronusType(storedResult as PatronusType)
      
      // Fallback to random selection if only type is stored (for backward compatibility)
      const patronusesOfType = Object.values(PATRONUSES).filter(p => p && p.type === storedResult)
      const randomPatronus = patronusesOfType[Math.floor(Math.random() * patronusesOfType.length)]
      setPatronusData(randomPatronus)
    }
    setIsLoading(false)
  }, [])

  const handleTiktokShare = () => {
    // TikTok sharing logic would go here
    window.open('https://www.tiktok.com/upload', '_blank')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    )
  }

  if (!patronusData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl text-blue-200 mb-4">未找到守护神结果</h1>
        <Link href="/patronus-quiz" className="magic-button px-6 py-3 text-blue-200 border-2 border-blue-400 rounded-lg">
          参加守护神测试
        </Link>
      </div>
    )
  }

  return (
    <main className="magic-bg min-h-screen p-4">
      <div className="magic-particles" />
      
      {/* 主要结果内容 */}
      <div className="flex items-center justify-center min-h-screen py-8">
        <div className="max-w-4xl w-full bg-gray-900/30 border-2 border-blue-400 rounded-2xl p-8 shadow-[0_0_20px_rgba(100,150,255,0.3)] backdrop-blur-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl text-blue-200 mb-4 font-harry">你的守护神是 {patronusData.displayName[currentLang]}</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">{patronusData.description[currentLang]}</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="relative w-64 h-64 group">
              <div className="absolute inset-0 rounded-full bg-blue-400/10 backdrop-blur-sm"></div>
              <div className="absolute -inset-4 bg-gradient-radial from-blue-400/20 to-transparent rounded-full opacity-70 animate-pulse-slow"></div>
              <Image
                src={`/images/patronus/${patronusData.name}.png`}
                alt={patronusData.displayName[currentLang]}
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] animate-float-slow z-10 relative rounded-full p-2"
                crossOrigin="anonymous"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl text-blue-200 mb-2 font-harry">特点</h2>
                <div className="flex flex-wrap gap-2">
                  {patronusData.traits[currentLang].map((trait: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-blue-900/50 text-blue-200 border border-blue-400 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl text-blue-200 mb-2 font-harry">著名巫师</h2>
                <div className="flex flex-wrap gap-2">
                  {patronusData.famousWizards[currentLang].map((wizard: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-blue-900/50 text-blue-200 border border-blue-400 rounded-full text-sm">
                      {wizard}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-xl text-blue-200 font-harry">分享你的结果</h2>
            
            <div className="flex gap-4">
              <FacebookShareButton url={typeof window !== 'undefined' ? window.location.href : ''} hashtag="#HarryPotter">
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              
              <TwitterShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={`我的守护神是${patronusData.displayName.zh}！你的是什么？`}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              
              <WhatsappShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={`我的守护神是${patronusData.displayName.zh}！你的是什么？`}>
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
              
              <RedditShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={`我的守护神是${patronusData.displayName.zh}！你的是什么？`}>
                <RedditIcon size={40} round />
              </RedditShareButton>
              
              <SocialButton 
                icon={<RiTiktokFill size={24} />} 
                onClick={handleTiktokShare} 
                label="在抖音上分享" 
              />
            </div>
            
            <Link href="/patronus-quiz" className="magic-button px-6 py-3 text-blue-200 border-2 border-blue-400 rounded-lg mt-2">
              再次参加测验
            </Link>
          </div>
        </div>
      </div>

      {/* 测试推荐 - 放在主内容下方 */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <TestRecommendations 
          currentTest="patronus" 
          maxItems={4}
          className="bg-black/30 backdrop-blur-sm"
        />
      </div>
    </main>
  )
} 