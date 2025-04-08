import { Metadata } from 'next'
import { getLanguageTag } from '@/utils/hreflang'

export const patronusQuizMetadata: Record<string, Metadata> = {
  en: {
    title: "Harry Potter Patronus Quiz | Discover Your Patronus Animal | Official Test",
    description: "Take our official Harry Potter Patronus Quiz to discover your magical Patronus animal. Our quiz uses deep personality analysis to match you with the perfect Patronus that reflects your inner strengths and character!",
    keywords: "Harry Potter Patronus Quiz, Patronus Test, Patronus Animal, Patronus Charm, Harry Potter Quiz, Wizarding World, Magic Quiz, Patronus Discovery",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/patronus-quiz'
    },
    openGraph: {
      title: "Harry Potter Patronus Quiz - Discover Your Magical Guardian | Find Your Patronus",
      description: "Ready to discover your Patronus through our magical quiz? Take our Patronus test to find out which magical animal would protect you from Dementors!"
    }
  },
  zh: {
    title: "哈利波特守护神测试 | 发现你的守护神动物 | 官方测试",
    description: "参加我们的官方哈利波特守护神测试，发现你的魔法守护神动物。我们的测试通过深度性格分析，为你匹配最能反映你内在力量和性格的完美守护神！",
    keywords: "哈利波特守护神测试, 守护神测试, 守护神动物, 守护神咒语, 哈利波特测试, 魔法世界, 魔法测试, 守护神发现",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/zh/patronus-quiz'
    },
    openGraph: {
      title: "哈利波特守护神测试 - 发现你的魔法守护者 | 找到你的守护神",
      description: "准备好通过我们的魔法测试发现你的守护神了吗？参加我们的守护神测试，看看哪种魔法动物会保护你远离摄魂怪！"
    }
  },
  zhHant: {
    title: "哈利波特守護神測試 | 發現你的守護神動物 | 官方測試",
    description: "參加我們的官方哈利波特守護神測試，發現你的魔法守護神動物。我們的測試通過深度性格分析，為你匹配最能反映你內在力量和性格的完美守護神！",
    keywords: "哈利波特守護神測試, 守護神測試, 守護神動物, 守護神咒語, 哈利波特測試, 魔法世界, 魔法測試, 守護神發現",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/zhHant/patronus-quiz'
    },
    openGraph: {
      title: "哈利波特守護神測試 - 發現你的魔法守護者 | 找到你的守護神",
      description: "準備好通過我們的魔法測試發現你的守護神了嗎？參加我們的守護神測試，看看哪種魔法動物會保護你遠離催狂魔！"
    }
  },
  ko: {
    title: "해리 포터 패트로누스 테스트 | 당신의 패트로누스 동물을 발견하세요 | 공식 테스트",
    description: "우리의 공식 해리 포터 패트로누스 테스트를 통해 당신의 마법 패트로누스 동물을 발견하세요. 우리의 테스트는 심층 성격 분석을 통해 당신의 내면의 힘과 성격을 반영하는 완벽한 패트로누스를 매칭해드립니다!",
    keywords: "해리 포터 패트로누스 테스트, 패트로누스 테스트, 패트로누스 동물, 패트로누스 마법, 해리 포터 테스트, 마법 세계, 마법 테스트, 패트로누스 발견",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/ko/patronus-quiz'
    },
    openGraph: {
      title: "해리 포터 패트로누스 테스트 - 당신의 마법 수호자를 발견하세요 | 패트로누스 찾기",
      description: "우리의 마법 테스트를 통해 당신의 패트로누스를 발견할 준비가 되셨나요? 패트로누스 테스트를 통해 어떤 마법 동물이 당신을 디멘터로부터 보호해줄지 알아보세요!"
    }
  },
  ru: {
    title: "Тест на Патронуса Гарри Поттера | Узнай Своего Патронуса | Официальный Тест",
    description: "Пройдите наш официальный тест на Патронуса из мира Гарри Поттера и узнайте, какое магическое животное станет вашим защитником. Наш тест использует глубокий анализ личности, чтобы подобрать идеального Патронуса, отражающего ваши внутренние силы и характер!",
    keywords: "Тест на Патронуса Гарри Поттера, Тест Патронуса, Животное Патронус, Заклинание Патронуса, Тест по Гарри Поттеру, Волшебный Мир, Магический Тест, Определение Патронуса",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/ru/patronus-quiz'
    },
    openGraph: {
      title: "Тест на Патронуса - Найди Своего Магического Защитника | Определи Своего Патронуса",
      description: "Готовы узнать своего Патронуса через наш магический тест? Пройдите наш тест, чтобы узнать, какое магическое животное защитит вас от дементоров!"
    }
  },
  jp: {
    title: "ハリーポッター守護霊テスト | あなたの守護霊の動物を発見 | 公式テスト",
    description: "私たちの公式ハリーポッター守護霊テストで、あなたの魔法の守護霊の動物を発見しましょう。このテストは深い性格分析を使用して、あなたの内なる強さと性格を反映する完璧な守護霊とマッチングします！",
    keywords: "ハリーポッター守護霊テスト, パトローナスチャーム, 守護霊の動物, 守護霊の呪文, ハリーポッターテスト, 魔法界, 魔法テスト, 守護霊発見",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/jp/patronus-quiz'
    },
    openGraph: {
      title: "ハリーポッター守護霊テスト - あなたの魔法の守護者を発見 | 守護霊を見つけよう",
      description: "私たちの魔法のテストであなたの守護霊を発見する準備はできていますか？守護霊テストを受けて、どの魔法の動物があなたをディメンターから守ってくれるのかを見つけましょう！"
    }
  },
  pt: {
    title: "Teste do Patrono Harry Potter | Descubra Seu Animal Patrono | Teste Oficial",
    description: "Faça nosso teste oficial do Patrono de Harry Potter para descobrir seu animal Patrono mágico. Nosso teste usa análise profunda de personalidade para encontrar o Patrono perfeito que reflete suas forças interiores e caráter!",
    keywords: "Teste do Patrono Harry Potter, Teste do Patrono, Animal Patrono, Feitiço do Patrono, Teste Harry Potter, Mundo Bruxo, Teste Mágico, Descoberta do Patrono",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/pt/patronus-quiz'
    },
    openGraph: {
      title: "Teste do Patrono - Descubra Seu Guardião Mágico | Encontre Seu Patrono",
      description: "Pronto para descobrir seu Patrono através do nosso teste mágico? Faça nosso teste do Patrono para descobrir qual animal mágico irá protegê-lo dos Dementadores!"
    }
  }
}

export const patronusResultMetadata: Record<string, Metadata> = {
  en: {
    title: "Your Patronus Result | Harry Potter Patronus Quiz | Official Result",
    description: "Discover your magical Patronus animal and its unique meaning. Learn about the special characteristics and powers of your Patronus, and what it reveals about your personality!",
    keywords: "Patronus Result, Harry Potter Patronus, Patronus Meaning, Patronus Animal Traits, Magical Guardian, Wizarding World, Patronus Powers",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/patronus-result'
    },
    openGraph: {
      title: "Your Magical Patronus Revealed | Harry Potter Patronus Quiz Result",
      description: "Discover the magical animal that serves as your Patronus and learn what it reveals about your inner strengths and character!"
    }
  },
  zh: {
    title: "你的守护神结果 | 哈利波特守护神测试 | 官方结果",
    description: "发现你的魔法守护神动物及其独特含义。了解你的守护神的特殊特征和力量，以及它揭示了你性格的哪些方面！",
    keywords: "守护神结果, 哈利波特守护神, 守护神含义, 守护神动物特征, 魔法守护者, 魔法世界, 守护神力量",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/zh/patronus-result'
    },
    openGraph: {
      title: "你的魔法守护神揭晓 | 哈利波特守护神测试结果",
      description: "发现作为你守护神的魔法动物，了解它揭示了你内在的力量和性格特征！"
    }
  },
  zhHant: {
    title: "你的守護神結果 | 哈利波特守護神測試 | 官方結果",
    description: "發現你的魔法守護神動物及其獨特含義。了解你的守護神的特殊特徵和力量，以及它揭示了你性格的哪些方面！",
    keywords: "守護神結果, 哈利波特守護神, 守護神含義, 守護神動物特徵, 魔法守護者, 魔法世界, 守護神力量",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/zhHant/patronus-result'
    },
    openGraph: {
      title: "你的魔法守護神揭曉 | 哈利波特守護神測試結果",
      description: "發現作為你守護神的魔法動物，了解它揭示了你內在的力量和性格特徵！"
    }
  },
  ko: {
    title: "당신의 패트로누스 결과 | 해리 포터 패트로누스 테스트 | 공식 결과",
    description: "당신의 마법 패트로누스 동물과 그것의 독특한 의미를 발견하세요. 당신의 패트로누스의 특별한 특성과 힘, 그리고 그것이 당신의 성격에 대해 무엇을 말해주는지 알아보세요!",
    keywords: "패트로누스 결과, 해리 포터 패트로누스, 패트로누스 의미, 패트로누스 동물 특성, 마법 수호자, 마법 세계, 패트로누스 힘",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/ko/patronus-result'
    },
    openGraph: {
      title: "당신의 마법 패트로누스가 공개되었습니다 | 해리 포터 패트로누스 테스트 결과",
      description: "당신의 패트로누스가 될 마법 동물을 발견하고, 그것이 당신의 내면의 힘과 성격에 대해 무엇을 말해주는지 알아보세요!"
    }
  },
  ru: {
    title: "Ваш Результат Патронуса | Тест на Патронуса Гарри Поттера | Официальный Результат",
    description: "Узнайте своё магическое животное-Патронуса и его уникальное значение. Изучите особые характеристики и силы вашего Патронуса, и что он раскрывает о вашей личности!",
    keywords: "Результат Патронуса, Патронус Гарри Поттера, Значение Патронуса, Характеристики Животного-Патронуса, Магический Защитник, Волшебный Мир, Силы Патронуса",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/ru/patronus-result'
    },
    openGraph: {
      title: "Ваш Магический Патронус Раскрыт | Результат Теста на Патронуса",
      description: "Узнайте, какое магическое животное является вашим Патронусом и что это говорит о ваших внутренних силах и характере!"
    }
  },
  jp: {
    title: "あなたの守護霊の結果 | ハリーポッター守護霊テスト | 公式結果",
    description: "あなたの魔法の守護霊の動物とその独特な意味を発見しましょう。あなたの守護霊の特別な特徴と力、そしてそれがあなたの性格について何を明らかにするのかを学びましょう！",
    keywords: "守護霊結果, ハリーポッター守護霊, 守護霊の意味, 守護霊動物の特徴, 魔法の守護者, 魔法界, 守護霊の力",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/jp/patronus-result'
    },
    openGraph: {
      title: "あなたの魔法の守護霊が明らかに | ハリーポッター守護霊テスト結果",
      description: "あなたの守護霊となる魔法の動物を発見し、それがあなたの内なる強さと性格について何を明らかにするのかを学びましょう！"
    }
  },
  pt: {
    title: "Seu Resultado do Patrono | Teste do Patrono Harry Potter | Resultado Oficial",
    description: "Descubra seu animal Patrono mágico e seu significado único. Aprenda sobre as características especiais e poderes do seu Patrono, e o que ele revela sobre sua personalidade!",
    keywords: "Resultado do Patrono, Patrono Harry Potter, Significado do Patrono, Características do Animal Patrono, Guardião Mágico, Mundo Bruxo, Poderes do Patrono",
    alternates: {
      canonical: 'https://harrypotterhousequiz.pro/pt/patronus-result'
    },
    openGraph: {
      title: "Seu Patrono Mágico Revelado | Resultado do Teste do Patrono",
      description: "Descubra qual animal mágico serve como seu Patrono e aprenda o que ele revela sobre suas forças interiores e caráter!"
    }
  }
} 