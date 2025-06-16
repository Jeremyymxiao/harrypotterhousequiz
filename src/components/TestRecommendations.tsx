'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getCurrentLanguage } from '@/utils/language'

interface TestRecommendation {
  title: string
  description: string
  href: string
  bgColor: string
  textColor: string
  hoverColor: string
}

interface TestRecommendationsProps {
  currentTest?: string // 当前测试类型，用于排除自己
  showTitle?: boolean
  maxItems?: number
  className?: string
}

export default function TestRecommendations({ 
  currentTest, 
  showTitle = true, 
  maxItems = 4,
  className = ""
}: TestRecommendationsProps) {
  const pathname = usePathname()
  const currentLang = getCurrentLanguage(pathname)
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`

  // 定义所有测试推荐
  const allRecommendations: Record<string, TestRecommendation[]> = {
    en: [
      {
        title: "Original Harry Potter House Quiz",
        description: "Take our comprehensive Harry Potter House Quiz to discover your true Hogwarts house through detailed personality analysis.",
        href: `${langPrefix}/quiz`,
        bgColor: "bg-amber-900/20",
        textColor: "text-amber-400",
        hoverColor: "hover:bg-amber-400/20"
      },
      {
        title: "Kids Harry Potter House Quiz",
        description: "A fun and simplified Harry Potter House Quiz designed especially for young wizards and witches.",
        href: `${langPrefix}/harry-potter-house-quiz-for-kids`,
        bgColor: "bg-purple-900/20",
        textColor: "text-purple-400",
        hoverColor: "hover:bg-purple-400/20"
      },
      {
        title: "Ask the Magical Sorting Hat",
        description: "Have a personalized conversation with our AI-powered Sorting Hat for a unique sorting experience.",
        href: `${langPrefix}/sorting-hat-quiz`,
        bgColor: "bg-green-900/20",
        textColor: "text-green-400",
        hoverColor: "hover:bg-green-400/20"
      },
      {
        title: "Discover Your Patronus",
        description: "Find out which magical creature will protect you as your Patronus in our enchanting quiz.",
        href: `${langPrefix}/patronus-quiz`,
        bgColor: "bg-blue-900/20",
        textColor: "text-blue-400",
        hoverColor: "hover:bg-blue-400/20"
      },
      {
        title: "Hogwarts Enrollment Q&A",
        description: "Learn everything about getting accepted to Hogwarts School of Witchcraft and Wizardry.",
        href: `${langPrefix}/hogwarts-enrollment-qa`,
        bgColor: "bg-red-900/20",
        textColor: "text-red-400",
        hoverColor: "hover:bg-red-400/20"
      }
    ],
    zh: [
      {
        title: "哈利波特分院测试",
        description: "通过我们全面的哈利波特分院测试，通过详细的性格分析发现你真正的霍格沃茨学院。",
        href: `${langPrefix}/quiz`,
        bgColor: "bg-amber-900/20",
        textColor: "text-amber-400",
        hoverColor: "hover:bg-amber-400/20"
      },
      {
        title: "儿童版分院测试",
        description: "专为年轻巫师和女巫设计的有趣简化版哈利波特分院测试。",
        href: `${langPrefix}/harry-potter-house-quiz-for-kids`,
        bgColor: "bg-purple-900/20",
        textColor: "text-purple-400",
        hoverColor: "hover:bg-purple-400/20"
      },
      {
        title: "询问魔法分院帽",
        description: "与我们AI驱动的分院帽进行个性化对话，获得独特的分院体验。",
        href: `${langPrefix}/sorting-hat-quiz`,
        bgColor: "bg-green-900/20",
        textColor: "text-green-400",
        hoverColor: "hover:bg-green-400/20"
      },
      {
        title: "发现你的守护神",
        description: "在我们迷人的测试中找出哪种神奇生物将作为你的守护神保护你。",
        href: `${langPrefix}/patronus-quiz`,
        bgColor: "bg-blue-900/20",
        textColor: "text-blue-400",
        hoverColor: "hover:bg-blue-400/20"
      },
      {
        title: "霍格沃茨入学问答",
        description: "了解关于被霍格沃茨魔法学校录取的一切知识。",
        href: `${langPrefix}/hogwarts-enrollment-qa`,
        bgColor: "bg-red-900/20",
        textColor: "text-red-400",
        hoverColor: "hover:bg-red-400/20"
      }
    ],
    zhHant: [
      {
        title: "哈利波特分院測試",
        description: "通過我們全面的哈利波特分院測試，通過詳細的性格分析發現你真正的霍格華茲學院。",
        href: `${langPrefix}/quiz`,
        bgColor: "bg-amber-900/20",
        textColor: "text-amber-400",
        hoverColor: "hover:bg-amber-400/20"
      },
      {
        title: "兒童版分院測試",
        description: "專為年輕巫師和女巫設計的有趣簡化版哈利波特分院測試。",
        href: `${langPrefix}/harry-potter-house-quiz-for-kids`,
        bgColor: "bg-purple-900/20",
        textColor: "text-purple-400",
        hoverColor: "hover:bg-purple-400/20"
      },
      {
        title: "詢問魔法分類帽",
        description: "與我們AI驅動的分類帽進行個性化對話，獲得獨特的分院體驗。",
        href: `${langPrefix}/sorting-hat-quiz`,
        bgColor: "bg-green-900/20",
        textColor: "text-green-400",
        hoverColor: "hover:bg-green-400/20"
      },
      {
        title: "發現你的守護神",
        description: "在我們迷人的測試中找出哪種神奇生物將作為你的守護神保護你。",
        href: `${langPrefix}/patronus-quiz`,
        bgColor: "bg-blue-900/20",
        textColor: "text-blue-400",
        hoverColor: "hover:bg-blue-400/20"
      },
      {
        title: "霍格華茲入學問答",
        description: "了解關於被霍格華茲魔法學校錄取的一切知識。",
        href: `${langPrefix}/hogwarts-enrollment-qa`,
        bgColor: "bg-red-900/20",
        textColor: "text-red-400",
        hoverColor: "hover:bg-red-400/20"
      }
    ],
    jp: [
      {
        title: "ハリーポッター寮分けテスト",
        description: "包括的なハリーポッター寮分けテストで、詳細な性格分析を通じて真のホグワーツ寮を発見しましょう。",
        href: `${langPrefix}/quiz`,
        bgColor: "bg-amber-900/20",
        textColor: "text-amber-400",
        hoverColor: "hover:bg-amber-400/20"
      },
      {
        title: "子供向け寮分けテスト",
        description: "若い魔法使いと魔女のために特別に設計された楽しく簡単なハリーポッター寮分けテスト。",
        href: `${langPrefix}/harry-potter-house-quiz-for-kids`,
        bgColor: "bg-purple-900/20",
        textColor: "text-purple-400",
        hoverColor: "hover:bg-purple-400/20"
      },
      {
        title: "組分け帽に質問",
        description: "AI組分け帽とのパーソナライズされた会話で、ユニークな寮分け体験を。",
        href: `${langPrefix}/sorting-hat-quiz`,
        bgColor: "bg-green-900/20",
        textColor: "text-green-400",
        hoverColor: "hover:bg-green-400/20"
      },
      {
        title: "守護霊を発見",
        description: "魅力的なテストで、あなたの守護霊となる魔法の生き物を見つけましょう。",
        href: `${langPrefix}/patronus-quiz`,
        bgColor: "bg-blue-900/20",
        textColor: "text-blue-400",
        hoverColor: "hover:bg-blue-400/20"
      },
      {
        title: "ホグワーツ入学Q&A",
        description: "ホグワーツ魔法魔術学校への入学に関するすべてを学びましょう。",
        href: `${langPrefix}/hogwarts-enrollment-qa`,
        bgColor: "bg-red-900/20",
        textColor: "text-red-400",
        hoverColor: "hover:bg-red-400/20"
      }
    ],
    ko: [
      {
        title: "해리포터 기숙사 배정 퀴즈",
        description: "상세한 성격 분석을 통해 진정한 호그와트 기숙사를 발견하는 포괄적인 해리포터 기숙사 퀴즈를 체험하세요.",
        href: `${langPrefix}/quiz`,
        bgColor: "bg-amber-900/20",
        textColor: "text-amber-400",
        hoverColor: "hover:bg-amber-400/20"
      },
      {
        title: "어린이 기숙사 퀴즈",
        description: "어린 마법사와 마녀들을 위해 특별히 설계된 재미있고 간단한 해리포터 기숙사 퀴즈.",
        href: `${langPrefix}/harry-potter-house-quiz-for-kids`,
        bgColor: "bg-purple-900/20",
        textColor: "text-purple-400",
        hoverColor: "hover:bg-purple-400/20"
      },
      {
        title: "분류 모자에게 물어보기",
        description: "AI 분류 모자와의 개인화된 대화로 독특한 기숙사 배정 경험을 해보세요.",
        href: `${langPrefix}/sorting-hat-quiz`,
        bgColor: "bg-green-900/20",
        textColor: "text-green-400",
        hoverColor: "hover:bg-green-400/20"
      },
      {
        title: "패트로누스 발견",
        description: "매혹적인 퀴즈에서 당신의 패트로누스가 될 마법 생물을 찾아보세요.",
        href: `${langPrefix}/patronus-quiz`,
        bgColor: "bg-blue-900/20",
        textColor: "text-blue-400",
        hoverColor: "hover:bg-blue-400/20"
      },
      {
        title: "호그와트 입학 Q&A",
        description: "호그와트 마법학교 입학에 관한 모든 것을 알아보세요.",
        href: `${langPrefix}/hogwarts-enrollment-qa`,
        bgColor: "bg-red-900/20",
        textColor: "text-red-400",
        hoverColor: "hover:bg-red-400/20"
      }
    ],
    ru: [
      {
        title: "Тест на дом Хогвартса",
        description: "Пройдите наш всеобъемлющий тест на дом Хогвартса, чтобы открыть свой истинный дом через детальный анализ личности.",
        href: `${langPrefix}/quiz`,
        bgColor: "bg-amber-900/20",
        textColor: "text-amber-400",
        hoverColor: "hover:bg-amber-400/20"
      },
      {
        title: "Детский тест на дом",
        description: "Веселый и упрощенный тест на дом Хогвартса, специально разработанный для юных волшебников и ведьм.",
        href: `${langPrefix}/harry-potter-house-quiz-for-kids`,
        bgColor: "bg-purple-900/20",
        textColor: "text-purple-400",
        hoverColor: "hover:bg-purple-400/20"
      },
      {
        title: "Спросить Распределяющую Шляпу",
        description: "Персонализированный разговор с нашей ИИ Распределяющей Шляпой для уникального опыта распределения.",
        href: `${langPrefix}/sorting-hat-quiz`,
        bgColor: "bg-green-900/20",
        textColor: "text-green-400",
        hoverColor: "hover:bg-green-400/20"
      },
      {
        title: "Откройте своего Патронуса",
        description: "Узнайте, какое магическое существо станет вашим Патронусом в нашем очаровательном тесте.",
        href: `${langPrefix}/patronus-quiz`,
        bgColor: "bg-blue-900/20",
        textColor: "text-blue-400",
        hoverColor: "hover:bg-blue-400/20"
      },
      {
        title: "Поступление в Хогвартс Q&A",
        description: "Узнайте все о поступлении в Школу Чародейства и Волшебства Хогвартс.",
        href: `${langPrefix}/hogwarts-enrollment-qa`,
        bgColor: "bg-red-900/20",
        textColor: "text-red-400",
        hoverColor: "hover:bg-red-400/20"
      }
    ],
    pt: [
      {
        title: "Teste da Casa de Hogwarts",
        description: "Faça nosso teste abrangente da Casa de Hogwarts para descobrir sua verdadeira casa através de análise detalhada de personalidade.",
        href: `${langPrefix}/quiz`,
        bgColor: "bg-amber-900/20",
        textColor: "text-amber-400",
        hoverColor: "hover:bg-amber-400/20"
      },
      {
        title: "Teste para Crianças",
        description: "Um teste divertido e simplificado da Casa de Hogwarts especialmente projetado para jovens bruxos e bruxas.",
        href: `${langPrefix}/harry-potter-house-quiz-for-kids`,
        bgColor: "bg-purple-900/20",
        textColor: "text-purple-400",
        hoverColor: "hover:bg-purple-400/20"
      },
      {
        title: "Pergunte ao Chapéu Seletor",
        description: "Tenha uma conversa personalizada com nosso Chapéu Seletor com IA para uma experiência única de seleção.",
        href: `${langPrefix}/sorting-hat-quiz`,
        bgColor: "bg-green-900/20",
        textColor: "text-green-400",
        hoverColor: "hover:bg-green-400/20"
      },
      {
        title: "Descubra seu Patrono",
        description: "Descubra qual criatura mágica irá protegê-lo como seu Patrono em nosso teste encantador.",
        href: `${langPrefix}/patronus-quiz`,
        bgColor: "bg-blue-900/20",
        textColor: "text-blue-400",
        hoverColor: "hover:bg-blue-400/20"
      },
      {
        title: "Inscrição em Hogwarts Q&A",
        description: "Aprenda tudo sobre ser aceito na Escola de Magia e Bruxaria de Hogwarts.",
        href: `${langPrefix}/hogwarts-enrollment-qa`,
        bgColor: "bg-red-900/20",
        textColor: "text-red-400",
        hoverColor: "hover:bg-red-400/20"
      }
    ]
  }

  // 获取当前语言的推荐
  const recommendations = allRecommendations[currentLang] || allRecommendations.en

  // 过滤掉当前测试
  const filteredRecommendations = recommendations.filter(rec => {
    if (!currentTest) return true
    return !rec.href.includes(currentTest)
  }).slice(0, maxItems)

  const getFontClass = (lang: string) => {
    switch (lang) {
      case 'zh':
      case 'zhHant':
        return 'font-magic-zh'
      case 'jp':
        return 'font-magic-jp'
      case 'ko':
        return 'font-magic-ko'
      case 'ru':
        return 'font-magic-ru'
      default:
        return 'font-harry'
    }
  }

  const fontClass = getFontClass(currentLang)

  return (
    <section className={`relative z-10 py-12 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {showTitle && (
          <h2 className={`text-3xl ${fontClass} text-amber-400 text-center mb-8`}>
            {currentLang === 'zh' ? '探索更多魔法世界' : 
             currentLang === 'zhHant' ? '探索更多魔法世界' :
             currentLang === 'jp' ? 'より多くの魔法テストを探索' :
             currentLang === 'ko' ? '더 많은 마법 테스트 탐색' :
             currentLang === 'ru' ? 'Исследуйте больше магических тестов' :
             currentLang === 'pt' ? 'Explore Mais Testes Mágicos' :
             'Explore More Magical Tests'}
          </h2>
        )}
        
        <div className="grid md:grid-cols-2 gap-6">
          {filteredRecommendations.map((test, index) => (
            <Link
              key={index}
              href={test.href}
              className={`${test.bgColor} p-6 rounded-lg backdrop-blur-sm border border-opacity-40 
                         ${test.hoverColor} transition-all duration-300 hover:transform hover:-translate-y-1 
                         hover:shadow-lg block`}
            >
              <h3 className={`text-xl ${fontClass} ${test.textColor} mb-3`}>
                {test.title}
              </h3>
              <p className={`text-amber-200 ${fontClass} text-sm`}>
                {test.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 