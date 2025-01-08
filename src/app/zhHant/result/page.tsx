'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HOUSES, type HouseName } from '@/types/houses'
import { getCurrentLanguage } from '@/utils/language'
import { usePathname } from 'next/navigation'
import { zhHant } from '@/i18n/translations/zhHant'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

export default function ResultPage() {
  const [house, setHouse] = useState<HouseName>('gryffindor')
  const pathname = usePathname()
  const currentLang = getCurrentLanguage(pathname)
  const t = zhHant
  
  useEffect(() => {
    const storedHouse = localStorage.getItem('quizResult')
    if (storedHouse && Object.keys(HOUSES).includes(storedHouse as HouseName)) {
      setHouse(storedHouse as HouseName)
    }
  }, [])

  const houseData = {
    displayName: {
      'zhHant': {
        gryffindor: '葛萊芬多',
        slytherin: '史萊哲林',
        ravenclaw: '雷文克勞',
        hufflepuff: '赫夫帕夫'
      }
    }[currentLang]
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.origin : ''

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center backdrop-blur-sm bg-black/30 rounded-lg border-2 border-amber-400 p-8">
        <h1 className="text-4xl text-amber-400 mb-8 font-magic-zh">
          {t.result.yourHouse}
        </h1>
        
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src={`/images/houses/${house}.png`}
            alt={houseData.displayName[house]}
            fill
            sizes="(max-width: 768px) 100vw, 192px"
            className="object-contain"
            priority
          />
        </div>
        
        <h2 className="text-5xl text-amber-400 mb-8 font-magic-zh">
          {houseData.displayName[house]}
        </h2>
        
        <div className="pt-8 space-x-4">
          <Link
            href="/zhHant"
            className="magic-button inline-block px-6 py-3 text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-magic-zh"
          >
            {t.common.returnHome}
          </Link>
          
          <Link
            href="/zhHant/quiz"
            className="magic-button inline-block px-6 py-3 text-white bg-amber-600 rounded-lg hover:bg-amber-500 transition-colors duration-200 font-magic-zh"
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
            title={t.result.share.title.replace('{house}', houseData.displayName[house])}
            className="hover:opacity-80 transition-opacity"
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <WhatsappShareButton
            url={shareUrl}
            title={t.result.share.title.replace('{house}', houseData.displayName[house])}
            className="hover:opacity-80 transition-opacity"
          >
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  )
}
