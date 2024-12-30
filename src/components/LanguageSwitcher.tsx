'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getCurrentLanguage, type Language } from '@/utils/language'
import { en } from '@/i18n/translations/en'
import { zh } from '@/i18n/translations/zh'
import { ko } from '@/i18n/translations/ko'
import { ru } from '@/i18n/translations/ru'
import { useEffect, useRef, useState } from 'react'
import { HiGlobeAlt } from 'react-icons/hi2'

const translations = { en, zh, ko, ru } as const

interface LanguageOption {
  code: Language
  label: string
  path: (currentPath: string) => string
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    code: 'en',
    label: 'English',
    path: (currentPath) => {
      if (currentPath.includes('/result')) {
        return '/result'
      }
      return currentPath.replace(/^\/(?:zh|ko|ru)(?:\/|$)/, '/')
    }
  },
  {
    code: 'zh',
    label: '中文',
    path: (currentPath) => {
      if (currentPath.includes('/result')) {
        return '/zh/result'
      }
      const basePath = currentPath.replace(/^\/(?:zh|ko|ru)(?:\/|$)/, '/')
      return `/zh${basePath === '/' ? '' : basePath}`
    }
  },
  {
    code: 'ko',
    label: '한국어',
    path: (currentPath) => {
      if (currentPath.includes('/result')) {
        return '/ko/result'
      }
      const basePath = currentPath.replace(/^\/(?:zh|ko|ru)(?:\/|$)/, '/')
      return `/ko${basePath === '/' ? '' : basePath}`
    }
  },
  {
    code: 'ru',
    label: 'Русский',
    path: (currentPath) => {
      if (currentPath.includes('/result')) {
        return '/ru/result'
      }
      const basePath = currentPath.replace(/^\/(?:zh|ko|ru)(?:\/|$)/, '/')
      return `/ru${basePath === '/' ? '' : basePath}`
    }
  }
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const currentLang = getCurrentLanguage(pathname)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="fixed top-4 right-4 z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center p-2 text-amber-200 border-2 border-amber-400 rounded-lg 
                  hover:bg-amber-400/20 transition-all duration-300 backdrop-blur-sm bg-black/30"
        aria-label="Language Switcher"
      >
        <HiGlobeAlt size={24} className="mb-1" />
        <span className="text-xs">Language</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg border-2 border-amber-400 
                      backdrop-blur-sm bg-black/30 overflow-hidden">
          {LANGUAGE_OPTIONS.map((option) => {
            const targetPath = option.path(pathname)
            return (
              <Link
                key={option.code}
                href={targetPath}
                className={`block px-4 py-2 text-amber-200 hover:bg-amber-400/20 transition-all duration-300
                          ${currentLang === option.code ? 'bg-amber-400/30' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {option.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
} 