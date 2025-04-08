// Helper functions for proper hreflang implementation

const BASE_URL = 'https://harrypotterhousequiz.pro';

// Define all supported languages with their correct BCP 47 language tags
export const LANGUAGES = [
  { code: 'en', tag: 'en' },
  { code: 'zh', tag: 'zh-Hans' },
  { code: 'zhHant', tag: 'zh-Hant' },
  { code: 'ko', tag: 'ko' },
  { code: 'ru', tag: 'ru' },
  { code: 'jp', tag: 'ja' },
  { code: 'pt', tag: 'pt' }
];

// Get proper BCP 47 language tag from internal code
export function getLanguageTag(langCode: string): string {
  const lang = LANGUAGES.find(l => l.code === langCode);
  return lang ? lang.tag : 'en';
}

// Generate hreflang links for the current page
export function generateHreflangLinks(pathname: string, currentLang: string): Array<{
  rel: string;
  hrefLang: string;
  href: string;
}> {
  // Extract the route path without the language prefix
  let routePath = pathname;
  if (currentLang !== 'en') {
    routePath = pathname.replace(new RegExp(`^/${currentLang}`), '');
  }
  
  // If routePath is empty, set it to root path
  if (!routePath) routePath = '/';
  
  // Create hreflang links for all languages
  const links = LANGUAGES.map(lang => {
    let href = BASE_URL;
    
    // For non-English languages, add the language code to the URL
    if (lang.code !== 'en') {
      href += `/${lang.code}`;
    }
    
    // Add the route path (if not root)
    if (routePath !== '/') {
      href += routePath;
    }
    
    return {
      rel: 'alternate',
      hrefLang: lang.tag,
      href
    };
  });
  
  // Add x-default hreflang pointing to English version
  links.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: `${BASE_URL}${routePath !== '/' ? routePath : ''}`
  });
  
  return links;
} 