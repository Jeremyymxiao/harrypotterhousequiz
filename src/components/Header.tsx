'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { headerTranslations } from '@/translations/header'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Get language from pathname
  const getLanguage = () => {
    const segments = pathname.split('/')
    if (segments[1] === '(en)' || segments[1] === '') return 'en'
    if (!headerTranslations[segments[1] as keyof typeof headerTranslations]) return 'en'
    return segments[1] as keyof typeof headerTranslations
  }
  
  const language = getLanguage()
  const t = headerTranslations[language]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href={language === 'en' ? '/' : `/${language}`} 
            className={`text-3xl text-amber-400 hover:text-amber-300 transition-colors ${
              language === 'zh' || language === 'zhHant' ? 'font-magic-zh' :
              language === 'jp' ? 'font-magic-jp' :
              language === 'ko' ? 'font-magic-ko' :
              language === 'ru' ? 'font-magic-ru' :
              'font-harry'
            }`}
          >
            {t.title}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href={language === 'en' ? '/quiz' : `/${language}/quiz`}
              className={`text-amber-200 hover:text-amber-400 transition-colors ${
                language === 'zh' || language === 'zhHant' ? 'font-magic-zh text-xl' :
                language === 'jp' ? 'font-magic-jp text-sm' :
                language === 'ko' ? 'font-magic-ko text-xl' :
                language === 'ru' ? 'font-magic-ru text-sm' :
                'font-harry text-xl'
              }`}
            >
              {t.startQuiz}
            </Link>
            <Link 
              href={language === 'en' ? '/harry-potter-house-quiz-for-kids' : `/${language}/harry-potter-house-quiz-for-kids`}
              className={`text-amber-200 hover:text-amber-400 transition-colors ${
                language === 'zh' || language === 'zhHant' ? 'font-magic-zh text-xl' :
                language === 'jp' ? 'font-magic-jp text-sm' :
                language === 'ko' ? 'font-magic-ko text-xl' :
                language === 'ru' ? 'font-magic-ru text-sm' :
                'font-harry text-xl'
              }`}
            >
              {t.quizForKids}
            </Link>
            <Link 
              href={language === 'en' ? '/sorting-hat-quiz' : `/${language}/sorting-hat-quiz`}
              className={`text-amber-200 hover:text-amber-400 transition-colors ${
                language === 'zh' || language === 'zhHant' ? 'font-magic-zh text-xl' :
                language === 'jp' ? 'font-magic-jp text-sm' :
                language === 'ko' ? 'font-magic-ko text-xl' :
                language === 'ru' ? 'font-magic-ru text-sm' :
                'font-harry text-xl'
              }`}
            >
              {t.askSortingHat}
            </Link>
            <Link 
              href={language === 'en' ? '/hogwarts-enrollment-qa' : `/${language}/hogwarts-enrollment-qa`}
              className={`text-amber-200 hover:text-amber-400 transition-colors ${
                language === 'zh' || language === 'zhHant' ? 'font-magic-zh text-xl' :
                language === 'jp' ? 'font-magic-jp text-sm' :
                language === 'ko' ? 'font-magic-ko text-xl' :
                language === 'ru' ? 'font-magic-ru text-sm' :
                'font-harry text-xl'
              }`}
            >
              {t.hogwartsEnrollment}
            </Link>
            <Link 
              href={language === 'en' ? '/patronus-quiz' : `/${language}/patronus-quiz`}
              className={`text-amber-200 hover:text-amber-400 transition-colors ${
                language === 'zh' || language === 'zhHant' ? 'font-magic-zh text-xl' :
                language === 'jp' ? 'font-magic-jp text-sm' :
                language === 'ko' ? 'font-magic-ko text-xl' :
                language === 'ru' ? 'font-magic-ru text-sm' :
                'font-harry text-xl'
              }`}
            >
              {t.patronusQuiz}
            </Link>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-200 hover:text-amber-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 py-4">
              <Link 
                href={language === 'en' ? '/quiz' : `/${language}/quiz`}
                className={`text-amber-200 hover:text-amber-400 transition-colors text-center ${
                  language === 'zh' || language === 'zhHant' ? 'font-magic-zh text-xl' :
                  language === 'jp' ? 'font-magic-jp text-sm' :
                  language === 'ko' ? 'font-magic-ko text-xl' :
                  language === 'ru' ? 'font-magic-ru text-sm' :
                  'font-harry text-xl'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t.startQuiz}
              </Link>
              <Link 
                href={language === 'en' ? '/harry-potter-house-quiz-for-kids' : `/${language}/harry-potter-house-quiz-for-kids`}
                className={`text-amber-200 hover:text-amber-400 transition-colors text-center ${
                  language === 'zh' || language === 'zhHant' ? 'font-magic-zh text-xl' :
                  language === 'jp' ? 'font-magic-jp text-sm' :
                  language === 'ko' ? 'font-magic-ko text-xl' :
                  language === 'ru' ? 'font-magic-ru text-sm' :
                  'font-harry text-xl'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t.quizForKids}
              </Link>
              <Link 
                href={language === 'en' ? '/sorting-hat-quiz' : `/${language}/sorting-hat-quiz`}
                className={`text-amber-200 hover:text-amber-400 transition-colors text-center ${
                  language === 'zh' || language === 'zhHant' ? 'font-magic-zh text-xl' :
                  language === 'jp' ? 'font-magic-jp text-sm' :
                  language === 'ko' ? 'font-magic-ko text-xl' :
                  language === 'ru' ? 'font-magic-ru text-sm' :
                  'font-harry text-xl'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t.askSortingHat}
              </Link>
              <Link 
                href={language === 'en' ? '/hogwarts-enrollment-qa' : `/${language}/hogwarts-enrollment-qa`}
                className={`text-amber-200 hover:text-amber-400 transition-colors text-center ${
                  language === 'zh' || language === 'zhHant' ? 'font-magic-zh text-xl' :
                  language === 'jp' ? 'font-magic-jp text-sm' :
                  language === 'ko' ? 'font-magic-ko text-xl' :
                  language === 'ru' ? 'font-magic-ru text-sm' :
                  'font-harry text-xl'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t.hogwartsEnrollment}
              </Link>
              <Link 
                href={language === 'en' ? '/patronus-quiz' : `/${language}/patronus-quiz`}
                className={`text-amber-200 hover:text-amber-400 transition-colors text-center ${
                  language === 'zh' || language === 'zhHant' ? 'font-magic-zh text-xl' :
                  language === 'jp' ? 'font-magic-jp text-sm' :
                  language === 'ko' ? 'font-magic-ko text-xl' :
                  language === 'ru' ? 'font-magic-ru text-sm' :
                  'font-harry text-xl'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t.patronusQuiz}
              </Link>
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 