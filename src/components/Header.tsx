'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-3xl font-harry text-amber-400 hover:text-amber-300 transition-colors">
            Harry Potter House Quiz
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/quiz" 
              className="text-amber-200 hover:text-amber-400 transition-colors font-harry text-xl"
            >
              Start Quiz
            </Link>
            <Link 
              href="/harry-potter-house-quiz-for-kids" 
              className="text-amber-200 hover:text-amber-400 transition-colors font-harry text-xl"
            >
              Quiz for Kids
            </Link>
            <Link 
              href="/ask-sorting-hat" 
              className="text-amber-200 hover:text-amber-400 transition-colors font-harry text-xl"
            >
              Ask Sorting Hat
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
                href="/quiz" 
                className="text-amber-200 hover:text-amber-400 transition-colors font-harry text-xl text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Quiz
              </Link>
              <Link 
                href="/harry-potter-house-quiz-for-kids" 
                className="text-amber-200 hover:text-amber-400 transition-colors font-harry text-xl text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Quiz for Kids
              </Link>
              <Link 
                href="/ask-sorting-hat" 
                className="text-amber-200 hover:text-amber-400 transition-colors font-harry text-xl text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Ask Sorting Hat
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