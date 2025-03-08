import '@/app/globals.css'
import '@/app/layout.css'
import LanguageNotification from '@/components/LanguageNotification'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getCurrentLanguage } from '@/utils/language'
import { headers } from 'next/headers'
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export async function generateMetadata({ params }: { params: any }) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const currentLang = getCurrentLanguage(pathname);
  
  const title = (() => {
    switch(currentLang) {
      case 'zhHant':
        return '哈利波特學院測試 | 發現你的霍格華茲學院';
      case 'zh':
        return '哈利波特学院测试 | 发现你的霍格沃茨学院';
      case 'ko':
        return '해리포터 기숙사 테스트 | 당신의 호그와트 기숙사를 찾아보세요';
      case 'ru':
        return 'Тест на факультет Хогвартса | Узнайте свой факультет';
      case 'jp':
        return 'ハリーポッター寮テスト | あなたのホグワーツ寮を発見しよう';
      case 'pt':
        return 'Teste da Casa de Hogwarts | Descubra sua Casa em Hogwarts';
      default:
        return 'Harry Potter House Quiz | Discover Your Hogwarts House';
    }
  })();
  
  const description = (() => {
    switch(currentLang) {
      case 'zhHant':
        return '參加我們的魔法分院帽測試，發現你真正屬於哪個霍格華茲學院。無論你是勇敢的葛萊芬多，睿智的雷文克勞，忠誠的赫夫帕夫，還是雄心勃勃的史萊哲林，找出你真正屬於哪裡！';
      case 'zh':
        return '参加我们的魔法分院帽测试，发现你真正属于哪个霍格沃茨学院。无论你是勇敢的格兰芬多，睿智的拉文克劳，忠诚的赫奇帕奇，还是雄心勃勃的斯莱特林，找出你真正属于哪里！';
      case 'ko':
        return '마법의 분류 모자 테스트를 통해 당신의 진정한 호그와트 기숙사를 찾아보세요. 용감한 그리핀도르, 현명한 래번클로, 충성스러운 후플푸프, 야망있는 슬리데린 중 당신은 어디에 속할까요?';
      case 'ru':
        return 'Пройдите наш волшебный тест Распределяющей шляпы и узнайте, к какому факультету Хогвартса вы действительно принадлежите. Гриффиндор, Когтевран, Пуффендуй или Слизерин - где ваше истинное место?';
      case 'jp':
        return '魔法の組分け帽子テストを受けて、あなたの本当のホグワーツ寮を見つけましょう。勇気あるグリフィンドール、賢明なレイブンクロー、忠実なハッフルパフ、野心的なスリザリン、あなたはどの寮に属していますか？';
      case 'pt':
        return 'Faça nosso teste mágico do Chapéu Seletor e descubra sua verdadeira casa em Hogwarts. Seja você um corajoso Grifinória, um sábio Corvinal, um leal Lufa-Lufa ou um ambicioso Sonserina, encontre seu verdadeiro lugar!';
      default:
        return 'Take our magical Harry Potter Sorting Hat Quiz to discover your true Hogwarts house. Whether you\'re a brave Gryffindor, wise Ravenclaw, loyal Hufflepuff, or ambitious Slytherin, find out where you truly belong!';
    }
  })();

  const siteName = (() => {
    switch(currentLang) {
      case 'zhHant':
        return '哈利波特學院測試';
      case 'zh':
        return '哈利波特学院测试';
      case 'ko':
        return '해리포터 기숙사 테스트';
      case 'ru':
        return 'Тест на факультет Хогвартса';
      case 'jp':
        return 'ハリーポッター寮テスト';
      case 'pt':
        return 'Teste da Casa de Hogwarts';
      default:
        return 'Harry Potter House Quiz';
    }
  })();

  const keywords = (() => {
    switch(currentLang) {
      case 'zhHant':
        return ['哈利波特, 霍格華茲學院, 分院帽, 魔法測試, 葛萊芬多, 雷文克勞, 赫夫帕夫, 史萊哲林'];
      case 'zh':
        return ['哈利波特, 霍格沃茨学院, 分院帽, 魔法测试, 格兰芬多, 拉文克劳, 赫奇帕奇, 斯莱特林'];
      case 'ko':
        return ['해리포터, 호그와트 기숙사, 분류 모자, 마법 테스트, 그리핀도르, 래번클로, 후플푸프, 슬리데린'];
      case 'ru':
        return ['Гарри Поттер, Хогвартс, Распределяющая шляпа, Факультеты, Гриффиндор, Когтевран, Пуффендуй, Слизерин'];
      case 'jp':
        return ['ハリーポッター, ホグワーツ寮, 組分け帽子, 魔法テスト, グリフィンドール, レイブンクロー, ハッフルパフ, スリザリン'];
      case 'pt':
        return ['Harry Potter, Casas de Hogwarts, Chapéu Seletor, Teste mágico, Grifinória, Corvinal, Lufa-Lufa, Sonserina'];
      default:
        return ['Harry Potter, Hogwarts House, Sorting Hat, Harry Potter quiz, magical journey, house sorting quiz, discover Hogwarts house, wizarding world'];
    }
  })();

  return {
    title: {
      default: title,
      template: `%s | ${siteName}`
    },
    description,
    keywords,
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
      siteName,
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

  const name = (() => {
    switch(currentLang) {
      case 'zhHant':
        return '哈利波特學院測試';
      case 'zh':
        return '哈利波特学院测试';
      case 'ko':
        return '해리포터 기숙사 테스트';
      case 'ru':
        return 'Тест на факультет Хогвартса';
      case 'jp':
        return 'ハリーポッター寮テスト';
      case 'pt':
        return 'Teste da Casa de Hogwarts';
      default:
        return 'Harry Potter House Quiz';
    }
  })();

  const appDescription = (() => {
    switch(currentLang) {
      case 'zhHant':
        return '一個互動測試，幫助你發現你屬於哪個霍格華茲學院';
      case 'zh':
        return '一个互动测试，帮助你发现你属于哪个霍格沃茨学院';
      case 'ko':
        return '당신의 호그와트 기숙사를 찾아주는 인터랙티브 테스트';
      case 'ru':
        return 'Интерактивный тест, который поможет определить ваш факультет в Хогвартсе';
      case 'jp':
        return 'あなたのホグワーツ寮を見つけるインタラクティブなテスト';
      case 'pt':
        return 'Um teste interativo para descobrir sua casa em Hogwarts';
      default:
        return 'An interactive quiz to discover your Hogwarts house from the Harry Potter series';
    }
  })();

  return (
    <html lang={currentLang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              'name': name,
              'description': appDescription,
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
      <body className="flex flex-col min-h-screen">
        <GoogleAnalytics />
        <LanguageNotification />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
