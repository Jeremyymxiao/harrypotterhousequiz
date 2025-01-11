'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { footerTranslations } from '@/translations/footer'

const Footer = () => {
  const pathname = usePathname()
  
  // Get language from pathname
  const getLanguage = () => {
    const segments = pathname.split('/')
    if (segments[1] === '(en)' || segments[1] === '') return 'en'
    if (!footerTranslations[segments[1] as keyof typeof footerTranslations]) return 'en'
    return segments[1] as keyof typeof footerTranslations
  }
  
  const language = getLanguage()
  const t = footerTranslations[language]

  return (
    <footer className="bg-black/40 backdrop-blur-sm py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          {/* Copyright */}
          <p className={`text-amber-200 text-sm ${
            language === 'zh' || language === 'zhHant' ? 'font-magic-zh' :
            language === 'jp' ? 'font-magic-jp' :
            language === 'ko' ? 'font-magic-ko' :
            language === 'ru' ? 'font-magic-ru' :
            'font-harry'
          }`}>
            © {new Date().getFullYear()} Harry Potter House Quiz
          </p>
          
          {/* Links */}
          <div className="flex justify-center space-x-4 text-sm">
            <Link 
              href={language === 'en' ? '/disclaimer' : `/${language}/disclaimer`}
              className={`text-amber-400 hover:text-amber-300 transition-colors ${
                language === 'zh' || language === 'zhHant' ? 'font-magic-zh' :
                language === 'jp' ? 'font-magic-jp' :
                language === 'ko' ? 'font-magic-ko' :
                language === 'ru' ? 'font-magic-ru' :
                'font-harry'
              }`}
            >
              {t.disclaimer}
            </Link>
            <span className="text-amber-200">•</span>
            <Link 
              href={language === 'en' ? '/privacy-policy' : `/${language}/privacy-policy`}
              className={`text-amber-400 hover:text-amber-300 transition-colors ${
                language === 'zh' || language === 'zhHant' ? 'font-magic-zh' :
                language === 'jp' ? 'font-magic-jp' :
                language === 'ko' ? 'font-magic-ko' :
                language === 'ru' ? 'font-magic-ru' :
                'font-harry'
              }`}
            >
              {t.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 