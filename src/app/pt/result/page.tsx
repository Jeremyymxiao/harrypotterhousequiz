'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HOUSES, type HouseName } from '@/types/houses'
import { getCurrentLanguage } from '@/utils/language'
import { usePathname } from 'next/navigation'
import { pt } from '@/i18n/translations'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

export default function ResultPage() {
  const [house, setHouse] = useState<HouseName | null>(null)
  const [shareUrl, setShareUrl] = useState('')
  const pathname = usePathname()
  const currentLang = getCurrentLanguage(pathname)
  const t = pt // 葡萄牙语翻译

  useEffect(() => {
    const result = localStorage.getItem('quizResult') as HouseName
    setHouse(result)
    // Set the share URL when component mounts
    setShareUrl(window.location.origin)
  }, [])

  if (!house) {
    return (
      <div className="magic-bg min-h-screen flex items-center justify-center">
        <div className="magic-card p-8">
          <div className="text-2xl text-amber-400 animate-pulse font-magic-pt">Carregando...</div>
        </div>
      </div>
    )
  }

  const houseData = HOUSES[house]

  return (
    <main className="magic-bg min-h-screen flex items-center justify-center p-4">
      <div className="magic-particles" />
      
      <div className="max-w-2xl w-full space-y-8 bg-black/40 backdrop-blur-sm rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-amber-400 mb-6 floating font-magic-pt tracking-wider">
          {t.result.yourHouse}
        </h1>

        <div className="space-y-6 floating">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src={`/images/houses/${house.toLowerCase()}-crest.png`}
              alt={`${houseData.displayName[currentLang]} brasão`}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <h2 className="text-5xl font-bold font-magic-pt tracking-wide" style={{ color: houseData.colors.primary }}>
            {houseData.displayName[currentLang]}
          </h2>
          
          <p className="text-3xl text-gray-300 font-magic-pt tracking-wide">
            {houseData.description[currentLang]}
          </p>
        </div>

        <div className="pt-8 space-x-4">
          <Link
            href="/pt"
            className="magic-button inline-block px-6 py-3 text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-magic-pt"
          >
            {t.common.returnHome}
          </Link>
          
          <Link
            href="/pt/quiz"
            className="magic-button inline-block px-6 py-3 text-white bg-amber-600 rounded-lg hover:bg-amber-500 transition-colors duration-200 font-magic-pt"
          >
            {t.result.retake}
          </Link>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <FacebookShareButton
            url={shareUrl}
            hashtag="#HogwartsHouse"
            className="hover:opacity-80 transition-opacity"
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={`Fui selecionado para ${houseData.displayName[currentLang]} em Hogwarts! Descubra sua casa! 🧙‍♂️✨`}
            className="hover:opacity-80 transition-opacity"
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <WhatsappShareButton
            url={shareUrl}
            title={`Fui selecionado para ${houseData.displayName[currentLang]} em Hogwarts! Descubra sua casa! 🧙‍♂️✨`}
            className="hover:opacity-80 transition-opacity"
          >
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
        </div>
      </div>
    </main>
  )
} 