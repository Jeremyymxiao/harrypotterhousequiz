'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HOUSES, type HouseName } from '@/types/houses'
import { getCurrentLanguage } from '@/utils/language'
import { usePathname } from 'next/navigation'
import { pt } from '@/i18n/translations/pt'
import html2canvas from 'html2canvas'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share'
import TestRecommendations from '@/components/TestRecommendations'

// Componente de botão de mídia social
const SocialButton = ({ icon, onClick, label }: { icon: React.ReactNode; onClick: () => void; label: string }) => (
  <button
    onClick={onClick}
    className="hover:opacity-80 transition-opacity rounded-full bg-white p-2 flex items-center justify-center"
    title={label}
  >
    {icon}
  </button>
)

// Componente do cartão de download
const DownloadCard = ({ house, houseData, currentLang }: { 
  house: HouseName, 
  houseData: any, 
  currentLang: string 
}) => {
  return (
    <div className="w-[600px] h-[800px] relative bg-parchment p-8 rounded-xl shadow-2xl border-8 border-double" style={{ borderColor: houseData.colors.primary }}>
      <div className="absolute inset-0 bg-[url('/images/parchment-texture.jpg')] opacity-20 rounded-lg" />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-between">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-amber-800 mb-6 font-harry tracking-wider">
            Certificado de Classificação
          </h1>

          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src={`/images/houses/${house.toLowerCase()}-crest.png`}
              alt={`${houseData.displayName[currentLang]} Crest`}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <h2 className="text-6xl font-bold font-harry tracking-wide mb-8" style={{ 
            color: houseData.colors.primary,
            textShadow: `
              2px 2px 0 ${houseData.colors.secondary},
              -2px -2px 0 ${houseData.colors.secondary},
              2px -2px 0 ${houseData.colors.secondary},
              -2px 2px 0 ${houseData.colors.secondary},
              0 0 10px rgba(255, 223, 0, 0.5)
            `,
            filter: 'brightness(1.2)'
          }}>
            {houseData.displayName[currentLang]}
          </h2>
          
          <p className="text-3xl text-gray-700 font-harry tracking-wide px-8">
            {houseData.description[currentLang]}
          </p>
        </div>

        <div className="text-center mt-auto">
          <div className="w-full h-[2px] bg-amber-800/30 mb-4" />
          <p className="text-amber-800/70 font-harry text-lg">
            By harrypotterhousequiz.pro
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ResultPage() {
  const [house, setHouse] = useState<HouseName | null>(null)
  const [shareUrl, setShareUrl] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)
  const downloadCardRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const currentLang = getCurrentLanguage(pathname)
  const t = pt

  useEffect(() => {
    const result = localStorage.getItem('quizResult') as HouseName
    setHouse(result)
    setShareUrl(window.location.origin)
  }, [])

  const downloadResultCard = async () => {
    if (!downloadCardRef.current) return
    setIsDownloading(true)
    try {
      const canvas = await html2canvas(downloadCardRef.current, {
        scale: 2,
        backgroundColor: '#f5e6d3',
        logging: false
      })
      const image = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = image
      link.download = `hogwarts-house-${house?.toLowerCase()}.png`
      link.click()
    } catch (error) {
      console.error('Error generating image:', error)
    }
    setIsDownloading(false)
  }

  if (!house) {
    return (
      <div className="magic-bg min-h-screen flex items-center justify-center">
        <div className="magic-card p-8">
          <div className="text-2xl text-amber-400 animate-pulse font-harry">Carregando...</div>
        </div>
      </div>
    )
  }

  const houseData = HOUSES[house]

  return (
    <main className="magic-bg min-h-screen p-4">
      <div className="magic-particles" />
      
      {/* Conteúdo principal do resultado */}
      <div className="flex items-center justify-center min-h-screen py-8">
        <div className="max-w-2xl w-full space-y-8 bg-black/40 backdrop-blur-sm rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-amber-400 mb-6 floating font-harry tracking-wider">
          {t.result.yourHouse}
        </h1>

        <div className="space-y-6 floating">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src={`/images/houses/${house.toLowerCase()}-crest.png`}
              alt={`${houseData.displayName[currentLang]} Crest`}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <h2 className="text-5xl font-bold font-harry tracking-wide" style={{ 
            color: houseData.colors.primary,
            textShadow: `
              2px 2px 0 ${houseData.colors.secondary},
              -2px -2px 0 ${houseData.colors.secondary},
              2px -2px 0 ${houseData.colors.secondary},
              -2px 2px 0 ${houseData.colors.secondary},
              0 0 10px rgba(255, 223, 0, 0.5)
            `,
            filter: 'brightness(1.2)'
          }}>
            {houseData.displayName[currentLang]}
          </h2>
          
          <p className="text-3xl text-gray-300 font-harry tracking-wide">
            {houseData.description[currentLang]}
          </p>
        </div>

        <div className="pt-8 space-x-4">
          <Link
            href="/"
            className="magic-button inline-block px-6 py-3 text-amber-100 bg-gradient-to-br from-stone-800 to-stone-900 rounded-lg hover:from-stone-700 hover:to-stone-800 transition-all duration-200 shadow-lg hover:shadow-amber-900/20 border border-stone-700"
          >
            {t.common.returnHome}
          </Link>
          
          <Link
            href="/quiz"
            className="magic-button inline-block px-6 py-3 text-amber-100 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg hover:from-amber-600 hover:to-amber-800 transition-all duration-200 shadow-lg hover:shadow-amber-900/20 border border-amber-600"
          >
            {t.result.retake}
          </Link>

          <button
            onClick={downloadResultCard}
            disabled={isDownloading}
            className={`magic-button inline-block px-6 py-3 text-amber-100 bg-gradient-to-br from-yellow-700 to-yellow-900 rounded-lg hover:from-yellow-600 hover:to-yellow-800 transition-all duration-200 shadow-lg hover:shadow-amber-900/20 border border-yellow-700 ${
              isDownloading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isDownloading ? 'Gerando...' : 'Baixar Certificado'}
          </button>
        </div>

        <div className="mt-6 flex justify-center space-x-4 flex-wrap gap-y-4">
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

          <TelegramShareButton
            url={shareUrl}
            title={`Fui selecionado para ${houseData.displayName[currentLang]} em Hogwarts! Descubra sua casa! 🧙‍♂️✨`}
            className="hover:opacity-80 transition-opacity"
          >
            <TelegramIcon size={40} round />
          </TelegramShareButton>
        </div>

          {/* Cartão de download oculto */}
          <div className="fixed left-[-9999px]" ref={downloadCardRef}>
            <DownloadCard 
              house={house} 
              houseData={houseData}
              currentLang={currentLang}
            />
          </div>
        </div>
      </div>

      {/* Recomendações de testes - colocadas abaixo do conteúdo principal */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <TestRecommendations 
          currentTest="result" 
          maxItems={4}
          className="bg-black/30 backdrop-blur-sm"
        />
      </div>
    </main>
  )
} 