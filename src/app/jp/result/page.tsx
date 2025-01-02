'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HOUSES, type HouseName } from '@/types/houses'
import { getCurrentLanguage } from '@/utils/language'
import { usePathname } from 'next/navigation'
import { jp } from '@/i18n/translations/jp'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

export default function Result() {
  const [house, setHouse] = useState<HouseName>('gryffindor')
  const pathname = usePathname()
  const currentLang = getCurrentLanguage(pathname)

  useEffect(() => {
    const storedHouse = localStorage.getItem('quizResult')
    if (storedHouse && Object.keys(HOUSES).includes(storedHouse)) {
      setHouse(storedHouse as HouseName)
    }
  }, [])

  const houseData = HOUSES[house]
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const shareTitle = jp.result.share.title.replace('{house}', houseData.displayName.jp)
  const shareDescription = jp.result.share.description

  return (
    <div className="magic-bg min-h-screen w-full">
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
            <div className="space-y-8 floating">
              <h1 className="text-4xl md:text-7xl font-bold text-amber-400 font-magic-jp tracking-wider px-4">
                {jp.result.yourHouse}
              </h1>
              
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src={`/images/houses/${house.toLowerCase()}-crest.png`}
                  alt={houseData.displayName.jp}
                  fill
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-contain"
                  priority
                />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-amber-400 font-magic-jp tracking-wide px-4">
                {houseData.displayName.jp}
              </h2>
              
              <p className="text-xl md:text-2xl text-amber-400 font-magic-jp tracking-wide px-4">
                {houseData.description.jp}
              </p>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/jp/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-jp"
              >
                {jp.result.retake}
              </Link>
              <Link 
                href="/jp"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-jp"
              >
                {jp.common.returnHome}
              </Link>
            </div>

            {/* Social Share Buttons */}
            <div className="flex justify-center space-x-4 pt-4">
              <FacebookShareButton url={shareUrl} hashtag="#HogwartsHouse">
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={shareTitle} hashtags={['HogwartsHouse', 'HarryPotter']}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <WhatsappShareButton url={shareUrl} title={shareTitle} separator=" - ">
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}