import { MetadataRoute } from 'next';

const BASE_URL = 'https://harrypotterhousequiz.pro';
const LANGUAGES = ['', 'zh', 'zhHant', 'ko', 'ru', 'jp', 'pt'];
const ROUTES = [
  '',
  'quiz',
  'result',
  'sorting-hat-quiz',
  'hogwarts-enrollment-qa',
  'patronus-quiz',
  'patronus-result',
  'harry-potter-house-quiz-for-kids',
  'privacy-policy',
  'disclaimer'
];

export default function sitemap() {
  const sitemapEntries = [];

  // 为每种语言和每个路由生成sitemap条目
  LANGUAGES.forEach(lang => {
    ROUTES.forEach(route => {
      // 构建URL
      let url = BASE_URL;
      if (lang) url += `/${lang}`;
      if (route) url += `/${route}`;

      // 添加sitemap条目
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'weekly',
        priority: route === '' ? 1.0 : (route === 'quiz' || route === 'result') ? 0.9 : 0.8,
      });
    });
  });

  // 构建替代链接关系
  sitemapEntries.forEach(entry => {
    const path = entry.url.replace(BASE_URL, '');
    const basePath = path.split('/').slice(2).join('/');
    
    // 添加xhtml:link关系
    entry.alternates = LANGUAGES.map(lang => {
      let altUrl = BASE_URL;
      if (lang) altUrl += `/${lang}`;
      if (basePath) altUrl += `/${basePath}`;
      
      return {
        hrefLang: lang || 'en',
        href: altUrl
      };
    });
  });

  return sitemapEntries;
} 