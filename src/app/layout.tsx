import '@/app/globals.css'
import '@/app/layout.css'
import LanguageNotification from '@/components/LanguageNotification'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getCurrentLanguage } from '@/utils/language'
import { headers } from 'next/headers'
import { Analytics } from "@vercel/analytics/react"

export async function generateMetadata({ params }: { params: any }) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const currentLang = getCurrentLanguage(pathname);
  
  const title = currentLang === 'zh' 
    ? '哈利波特学院测试 | 发现你的霍格沃茨学院'
    : 'Harry Potter House Quiz | Discover Your Hogwarts House';
  
  const description = currentLang === 'zh'
    ? '参加我们的魔法分院帽测试，发现你真正属于哪个霍格沃茨学院。无论你是勇敢的格兰芬多，睿智的拉文克劳，忠诚的赫奇帕奇，还是雄心勃勃的斯莱特林，找出你真正属于哪里！'
    : 'Take our magical Harry Potter Sorting Hat Quiz to discover your true Hogwarts house. Whether you\'re a brave Gryffindor, wise Ravenclaw, loyal Hufflepuff, or ambitious Slytherin, find out where you truly belong!';

  return {
    title: {
      default: title,
      template: `%s | ${currentLang === 'zh' ? '哈利波特学院测试' : 'Harry Potter House Quiz'}`
    },
    description,
    keywords: ['Harry Potter, Hogwarts House, Sorting Hat, Harry Potter quiz, magical journey, house sorting quiz, discover Hogwarts house, wizarding world'],
    authors: [{ name: 'Hogwarts Quiz Team' }],
    creator: 'Hogwarts Quiz Team',
    publisher: 'Hogwarts Quiz Team',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      title,
      description,
      siteName: currentLang === 'zh' ? '哈利波特学院测试' : 'Harry Potter House Quiz',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const currentLang = getCurrentLanguage(pathname);

  return (
    <html lang={currentLang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              'name': currentLang === 'zh' ? '哈利波特学院测试' : 'Harry Potter House Quiz',
              'description': currentLang === 'zh' 
                ? '一个互动测试，帮助你发现你属于哪个霍格沃茨学院'
                : 'An interactive quiz to discover your Hogwarts house from the Harry Potter series',
              'applicationCategory': 'Entertainment',
              'operatingSystem': 'Web Browser',
              'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': 'USD'
              },
              'author': {
                '@type': 'Organization',
                'name': 'Hogwarts Quiz Team'
              },
              'potentialAction': {
                '@type': 'UseAction',
                'target': 'https://harrypotterhousequiz.pro/quiz'
              }
            })
          }}
        />
      </head>
      <body>
        <LanguageNotification />
        <LanguageSwitcher />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
