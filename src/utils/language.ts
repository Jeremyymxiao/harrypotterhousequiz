export type Language = 'en' | 'zh' | 'ko' | 'ru';

export const DEFAULT_LANGUAGE = 'en';

export function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }
  if (browserLang.startsWith('ko')) {
    return 'ko';
  }
  if (browserLang.startsWith('ru')) {
    return 'ru';
  }
  
  return DEFAULT_LANGUAGE;
}

export function getCurrentLanguage(pathname: string): Language {
  if (pathname.startsWith('/zh')) {
    return 'zh';
  }
  if (pathname.startsWith('/ko')) {
    return 'ko';
  }
  if (pathname.startsWith('/ru')) {
    return 'ru';
  }
  return DEFAULT_LANGUAGE;
}

export function shouldShowLanguageNotification(currentLang: Language, browserLang: Language): boolean {
  return currentLang !== browserLang;
}

export function getAlternateLanguageUrl(currentPath: string, currentLang: Language): string {
  if (currentLang === 'en') {
    return `/zh${currentPath}`;
  }
  if (currentLang === 'zh') {
    return `/ko${currentPath}`;
  }
  if (currentLang === 'ko') {
    return `/ru${currentPath}`;
  }
  // If current language is Russian, switch to English version
  return currentPath.replace(/^\/(zh|ko|ru)/, '');
} 