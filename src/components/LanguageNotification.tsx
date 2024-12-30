'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getBrowserLanguage, getCurrentLanguage, shouldShowLanguageNotification, getAlternateLanguageUrl } from '@/utils/language';
import { en } from '@/i18n/translations/en';
import { zh } from '@/i18n/translations/zh';
import { ko } from '@/i18n/translations/ko';
import { ru } from '@/i18n/translations/ru';
import { HiXMark } from 'react-icons/hi2';

const translations = { en, zh, ko, ru } as const;

export default function LanguageNotification() {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const currentLang = getCurrentLanguage(pathname);
  
  useEffect(() => {
    const browserLang = getBrowserLanguage();
    const shouldShow = shouldShowLanguageNotification(currentLang, browserLang);
    setShow(shouldShow);
    // 添加延迟以实现平滑的出现动画
    if (shouldShow) {
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [currentLang]);

  const handleDismiss = () => {
    setIsVisible(false);
    // 等待动画完成后再隐藏组件
    setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;

  const t = translations[currentLang];
  const alternateUrl = getAlternateLanguageUrl(pathname, currentLang);

  return (
    <div 
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ease-in-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="flex items-center gap-4 px-6 py-3 rounded-lg border-2 border-amber-400 
                    backdrop-blur-sm bg-black/30 text-amber-200 shadow-lg">
        <p className="text-sm md:text-base">
          {t.languageNotification.message}
        </p>
        <div className="flex items-center gap-4 ml-4">
          <Link
            href={alternateUrl}
            className="text-sm md:text-base hover:text-amber-400 transition-colors duration-200 underline"
          >
            {t.languageNotification.switchLanguage}
          </Link>
          <button
            onClick={handleDismiss}
            className="p-1 hover:text-amber-400 transition-colors duration-200"
            aria-label="Dismiss"
          >
            <HiXMark className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 