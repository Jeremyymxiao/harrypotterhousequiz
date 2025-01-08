export type Language = 'en' | 'zh' | 'ko' | 'ru' | 'jp' | 'pt' | 'zhHant';

export const DEFAULT_LANGUAGE = 'en';

export function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang === 'zh-tw' || browserLang === 'zh-hk') {
    return 'zhHant';
  }
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }
  if (browserLang.startsWith('ko')) {
    return 'ko';
  }
  if (browserLang.startsWith('ru')) {
    return 'ru';
  }
  if (browserLang.startsWith('ja')) {
    return 'jp';
  }
  if (browserLang.startsWith('pt')) {
    return 'pt';
  }
  
  return DEFAULT_LANGUAGE;
}

export function getCurrentLanguage(pathname: string): Language {
  if (pathname.startsWith('/zhHant')) {
    return 'zhHant';
  }
  if (pathname.startsWith('/zh')) {
    return 'zh';
  }
  if (pathname.startsWith('/ko')) {
    return 'ko';
  }
  if (pathname.startsWith('/ru')) {
    return 'ru';
  }
  if (pathname.startsWith('/jp')) {
    return 'jp';
  }
  if (pathname.startsWith('/pt')) {
    return 'pt';
  }
  return DEFAULT_LANGUAGE;
}

export function shouldShowLanguageNotification(currentLang: Language, browserLang: Language): boolean {
  return currentLang !== browserLang;
}

export function getAlternateLanguageUrl(currentPath: string, currentLang: Language): string {
  const browserLang = getBrowserLanguage();
  
  // If current language is already browser language, default to English
  if (currentLang === browserLang) {
    return currentLang === 'en' ? currentPath : currentPath.replace(/^\/(zhHant|zh|ko|ru|jp|pt)/, '');
  }
  
  // Switch to browser's language
  if (browserLang === 'en') {
    return currentPath.replace(/^\/(zhHant|zh|ko|ru|jp|pt)/, '');
  }
  
  return `/${browserLang}${currentPath.replace(/^\/(zhHant|zh|ko|ru|jp|pt)/, '')}`;
}

export function getLanguageDisplayName(lang: Language, currentLang: Language): string {
  const displayNames = {
    en: {
      en: 'English',
      zh: 'Chinese (Simplified)',
      'zhHant': 'Chinese (Traditional)',
      ko: 'Korean',
      ru: 'Russian',
      jp: 'Japanese',
      pt: 'Portuguese'
    },
    zh: {
      en: '英文',
      zh: '简体中文',
      'zhHant': '繁體中文',
      ko: '韩文',
      ru: '俄文',
      jp: '日文',
      pt: '葡萄牙文'
    },
    'zhHant': {
      en: '英文',
      zh: '簡體中文',
      'zhHant': '繁體中文',
      ko: '韓文',
      ru: '俄文',
      jp: '日文',
      pt: '葡萄牙文'
    },
    ko: {
      en: '영어',
      zh: '중국어 (간체)',
      'zhHant': '중국어 (번체)',
      ko: '한국어',
      ru: '러시아어',
      jp: '일본어',
      pt: '포르투갈어'
    },
    ru: {
      en: 'английский',
      zh: 'китайский (упрощенный)',
      'zhHant': 'китайский (традиционный)',
      ko: 'корейский',
      ru: 'русский',
      jp: 'японский',
      pt: 'португальский'
    },
    jp: {
      en: '英語',
      zh: '中国語（簡体字）',
      'zhHant': '中国語（繁体字）',
      ko: '韓国語',
      ru: 'ロシア語',
      jp: '日本語',
      pt: 'ポルトガル語'
    },
    pt: {
      en: 'inglês',
      zh: 'chinês (simplificado)',
      'zhHant': 'chinês (tradicional)',
      ko: 'coreano',
      ru: 'russo',
      jp: 'japonês',
      pt: 'português'
    }
  };

  return displayNames[currentLang][lang];
} 