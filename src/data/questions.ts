import { Language } from '@/utils/language'

export interface Answer {
  text: {
    en: string;
    zh: string;
    zhHant: string; // 新增繁體中文支持
    ko: string; // 新增韓語支持
    ru: string; // 新增俄語支持
    jp: string; // 新增日語支持
    pt: string; // 新增葡萄牙語支持
  };
  scores: {
    gryffindor: number;
    slytherin: number;
    ravenclaw: number;
    hufflepuff: number;
  };
}

export interface Question {
  id: number;
  text: {
    en: string;
    zh: string;
    zhHant: string; // 新增繁體中文支持
    ko: string; // 新增韓語支持
    ru: string; // 新增俄語支持
    jp: string; // 新增日語支持
    pt: string; // 新增葡萄牙語支持  
  };
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: {
      en: "When facing a challenge, what would you most likely do?",
      zh: "面对挑战时，你最可能会怎么做？",
      zhHant: "面對挑戰時，你最可能會怎麼做？", // 繁體中文翻譯
      ko: "도전에 직면했을 때, 당신은 어떻게 하시겠습니까?",
      ru: "Как вы обычно поступаете, сталкиваясь с трудностями?",
      jp: "課題に直面したとき、あなたはどうする可能性が高いですか？",
      pt: "Ao enfrentar um desafio, o que você provavelmente faria?"
    },
    answers: [
      {
        text: {
          en: "Face it head-on with immediate action",
          zh: "立即采取行动，直面挑战",
          zhHant: "立即採取行動，直面挑戰", // 繁體中文翻譯
          ko: "즉각적인 행동으로 정면으로 맞서기",
          ru: "Решите проблему сразу и напрямую",
          jp: "即座に行動を起こし、正面から立ち向かう",
          pt: "Enfrentar diretamente com ação imediata"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Analyze the situation and make a detailed plan",
          zh: "分析情况，制定详细计划",
          zhHant: "分析情況，制定詳細計劃", // 繁體中文翻譯
          ko: "상황을 분석하고 상세한 계획을 세우기",
          ru: "Проанализируйте ситуацию и составьте подробный план",
          jp: "状況を分析し、詳細な計画を立てる",
          pt: "Analisar a situação e fazer um plano detalhado"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Find the most advantageous solution",
          zh: "寻找最有利的解决方案",
          zhHant: "尋找最有利的解決方案", // 繁體中文翻譯
          ko: "가장 유리한 해결책 찾기",
          ru: "Найдите наиболее выгодное решение",
          jp: "最も有利な解決策を見つける",
          pt: "Encontrar a solução mais vantajosa"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Try to understand and befriend it",
          zh: "尝试理解和结交它",
          zhHant: "嘗試理解和結交它", // 繁體中文翻譯
          ko: "이해하고 친구가 되려고 노력하기",
          ru: "Попытайтесь понять и подружиться с этим",
          jp: "理解し、友好的に接しようとする",
          pt: "Tentar entender e fazer amizade com isso"
        },
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 2,
    text: {
      en: "Which quality do you value most?",
      zh: "你最看重哪种品质？",
      zhHant: "你最看重哪種品質？", // 繁體中文翻譯
      ko: "당신이 가장 중요하게 생각하는 자질은 무엇입니까?",
      ru: "Какое качество вы цените больше всего?",
      jp: "あなたが最も重要視する資質は何ですか？",
      pt: "Qual qualidade você mais valoriza?"
    },
    answers: [
      {
        text: {
          en: "Courage",
          zh: "勇气",
          zhHant: "勇氣", // 繁體中文翻譯
          ko: "용기",
          ru: "Смелость",
          jp: "勇気",
          pt: "Coragem"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Wisdom",
          zh: "智慧",
          zhHant: "智慧", // 繁體中文翻譯
          ko: "지혜",
          ru: "Мудрость",
          jp: "知恵",
          pt: "Sabedoria"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "Ambition",
          zh: "野心",
          zhHant: "野心", // 繁體中文翻譯
          ko: "야망",
          ru: "Амбиции",
          jp: "野心",
          pt: "Ambição"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Loyalty",
          zh: "忠诚",
          zhHant: "忠誠", // 繁體中文翻譯
          ko: "충성심",
          ru: "Верность",
          jp: "忠誠",
          pt: "Lealdade"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 3,
    text: {
      en: "If you could have one magical ability, you would choose:",
      zh: "如果你可以拥有一种魔法能力，你会选择：",
      zhHant: "如果你可以擁有一種魔法能力，你會選擇：", // 繁體中文翻譯
      ko: "만약 하나의 마법 능력을 가질 수 있다면, 당신의 선택은:",
      ru: "Если бы вы могли иметь одно магическое умение, вы бы выбрали:",
      jp: "もし一つの魔法の能力を持てるとしたら、あなたは何を選びますか：",
      pt: "Se você pudesse ter uma habilidade mágica, escolheria:"
    },
    answers: [
      {
        text: {
          en: "The power to protect others",
          zh: "保护他人的力量",
          zhHant: "保護他人的力量", // 繁體中文翻譯
          ko: "다른 사람을 보호하는 힘",
          ru: "Сила защищать других",
          jp: "他人を守る力",
          pt: "O poder de proteger os outros"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "The ability to gain knowledge",
          zh: "获取知识的能力",
          zhHant: "獲取知識的能力", // 繁體中文翻譯
          ko: "지식을 얻는 능력",
          ru: "Способность получать знания",
          jp: "知識を得る能力",
          pt: "A capacidade de adquirir conhecimento"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "The power to achieve your goals",
          zh: "实现目标的力量",
          zhHant: "實現目標的力量", // 繁體中文翻譯
          ko: "목표를 달성하는 힘",
          ru: "Сила достигать своих целей",
          jp: "目標を達成する力",
          pt: "O poder de alcançar seus objetivos"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "The ability to help others",
          zh: "帮助他人的能力",
          zhHant: "幫助他人的能力", // 繁體中文翻譯
          ko: "다른 사람을 돕는 능력",
          ru: "Способность помогать другим",
          jp: "他人を助ける能力",
          pt: "A capacidade de ajudar os outros"
        },
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 4,
    text: {
      en: "In a group project, what role do you usually take?",
      zh: "在小组项目中，你通常会扮演什么角色？",
      zhHant: "在小組項目中，你通常會扮演什麼角色？", // 繁體中文翻譯
      ko: "그룹 프로젝트에서 당신은 보통 어떤 역할을 맡습니까?",
      ru: "Какую роль вы обычно играете в групповом проекте?",
      jp: "グループプロジェクトで、あなたは通常どんな役割を担いますか？",
      pt: "Em um projeto em grupo, qual papel você geralmente assume?"
    },
    answers: [
      {
        text: {
          en: "The leader who takes charge",
          zh: "领导者，负责领导",
          zhHant: "領導者，負責領導", // 繁體中文翻譯
          ko: "책임지고 이끄는 리더",
          ru: "Лидер, который берет на себя ответственность",
          jp: "指揮を執るリーダー",
          pt: "O líder que assume o comando"
        },
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 3, hufflepuff: 4 }
      },
      {
        text: {
          en: "The researcher who gathers information",
          zh: "信息收集者，负责收集信息",
          zhHant: "信息收集者，負責收集信息", // 繁體中文翻譯
          ko: "정보를 수집하는 연구자",
          ru: "Исследователь, который собирает информацию",
          jp: "情報を集める研究者",
          pt: "O pesquisador que reúne informações"
        },
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "The strategist who plans everything",
          zh: "策略师，负责规划一切",
          zhHant: "策略師，負責規劃一切", // 繁體中文翻譯
          ko: "모든 것을 계획하는 전략가",
          ru: "Стратег, который планирует все",
          jp: "すべてを計画する戦略家",
          pt: "O estrategista que planeja tudo"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "The mediator who keeps everyone happy",
          zh: "调解者，负责让每个人都开心",
          zhHant: "調解者，負責讓每個人都開心", // 繁體中文翻譯
          ko: "모두를 행복하게 하는 중재자",
          ru: "Посредник, который поддерживает гармонию",
          jp: "皆を幸せにする調停者",
          pt: "O mediador que mantém todos felizes"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 5,
    text: {
      en: "What would you do if you found a lost first-year student?",
      zh: "如果你发现一个一年级迷路的同学，你会怎么做？",
      zhHant: "如果你發現一個一年級迷路的同學，你會怎麼做？", // 繁體中文翻譯
      ko: "길을 잃은 1학년 학생을 발견했다면, 어떻게 하시겠습니까?",
      ru: "Что вы сделаете, если найдете потерявшегося первокурсника?",
      jp: "もし道に迷った1年生を見つけたら、あなたはどうしますか？",
      pt: "O que você faria se encontrasse um aluno do primeiro ano perdido?"
    },
    answers: [
      {
        text: {
          en: "Personally escort them to their destination",
          zh: "亲自护送他们到目的地",
          zhHant: "親自護送他們到目的地", // 繁體中文翻譯
          ko: "직접 목적지까지 안내하기",
          ru: "Лично сопроводить их до места назначения",
          jp: "personally彼らを目的地まで直接案内する",
          pt: "Pessoalmente acompanhá-los até seu destino"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "Give them detailed directions with landmarks",
          zh: "给他们详细的方向和地标",
          zhHant: "給他們詳細的方向和地標", // 繁體中文翻譯
          ko: "주요 건물을 포함한 자세한 길 안내하기",
          ru: "Дать подробные указания с ориентирами",
          jp: "目印を交えて詳しい道順を教える",
          pt: "Dar instruções detalhadas com pontos de referência"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Tell them to figure it out themselves",
          zh: "让他们自己解决",
          zhHant: "讓他們自己解決", // 繁體中文翻譯
          ko: "스스로 해결하라고 하기",
          ru: "Сказать им разобраться самостоятельно",
          jp: "自分で解決するように言う",
          pt: "Dizer para eles descobrirem por conta própria"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Introduce them to other students going the same way",
          zh: "给他们介绍其他正在走相同路线的学生",
          zhHant: "給他們介紹其他正在走相同路線的學生", // 繁體中文翻譯
          ko: "같은 방향으로 가는 다른 학생들을 소개해주기",
          ru: "Познакомить их с другими студентами, идущими тем же путем",
          jp: "同じ方向に行く他の学生を紹介する",
          pt: "Apresentá-los a outros estudantes que vão pelo mesmo caminho"
        },
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 6,
    text: {
      en: "What's your ideal way to spend a free afternoon?",
      zh: "你理想中的自由下午会怎么度过？",
      zhHant: "你理想中的自由下午會怎麼度過？", // 繁體中文翻譯
      ko: "자유로운 오후를 보내는 이상적인 방법은 무엇입니까?",
      ru: "Как бы вы хотели провести свободный день?",
      jp: "自由な午後を過ごすのに理想的な方法は何ですか？",
      pt: "Qual é sua maneira ideal de passar uma tarde livre?"
    },
    answers: [
      {
        text: {
          en: "Practicing dueling spells",
          zh: "练习决斗咒语",
          zhHant: "練習決鬥咒語", // 繁體中文翻譯
          ko: "결투 주문 연습하기",
          ru: "Тренировать заклинания для дуэлей",
          jp: "決闘呪文の練習",
          pt: "Praticando feitiços de duelo"
        },
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 4, hufflepuff: 3 }
      },
      {
        text: {
          en: "Reading in the library",
          zh: "在图书馆阅读",
          zhHant: "在圖書館閱讀", // 繁體中文翻譯
          ko: "도서관에서 독서하기",
          ru: "Читать в библиотеке",
          jp: "図書館で読書",
          pt: "Lendo na biblioteca"
        },
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "Networking with influential people",
          zh: "与有影响力的人建立联系",
          zhHant: "與有影響力的人建立聯繫", // 繁體中文翻譯
          ko: "영향력 있는 사람들과 인맥 쌓기",
          ru: "Общаться с влиятельными людьми",
          jp: "影響力のある人々との人脈作り",
          pt: "Fazendo networking com pessoas influentes"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Helping friends with their homework",
          zh: "帮助朋友们完成作业",
          zhHant: "幫助朋友們完成作業", // 繁體中文翻譯
          ko: "친구들의 숙제 도와주기",
          ru: "Помогать друзьям с домашним заданием",
          jp: "友達の宿題を手伝う",
          pt: "Ajudando amigos com a lição de casa"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 7,
    text: {
      en: "What would be your favorite subject at Hogwarts?",
      zh: "你最喜欢霍格沃茨的哪门课？",
      zhHant: "你最喜歡霍格沃茨的哪門課？", // 繁體中文翻譯
      ko: "호그와트에서 가장 좋아하는 과목은 무엇일까요?",
      ru: "Какой ваш любимый предмет в Хогвартсе?",
      jp: "ホグワーツでのお気に入りの科目は何ですか？",
      pt: "Qual seria sua matéria favorita em Hogwarts?"
    },
    answers: [
      {
        text: {
          en: "Defense Against the Dark Arts",
          zh: "黑魔法防御术",
          zhHant: "黑魔法防禦術", // 繁體中文翻譯
          ko: "어둠의 마법 방어술",
          ru: "Защита от темных искусств",
          jp: "闇の魔術に対する防衛術",
          pt: "Defesa Contra as Artes das Trevas"
        },
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 4, hufflepuff: 3 }
      },
      {
        text: {
          en: "Ancient Runes",
          zh: "古代如尼文",
          zhHant: "古代如尼文", // 繁體中文翻譯
          ko: "고대 룬문자",
          ru: "Древние руны",
          jp: "古代ルーン文字",
          pt: "Runas Antigas"
        },
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "Potions",
          zh: "药水学",
          zhHant: "藥水學", // 繁體中文翻譯
          ko: "마법약 수업",
          ru: "Зельеварение",
          jp: "魔法薬学",
          pt: "Poções"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Care of Magical Creatures",
          zh: "神奇生物保护课",
          zhHant: "神奇生物保護課", // 繁體中文翻譯
          ko: "신비한 동물 돌보기",
          ru: "Уход за магическими существами",
          jp: "魔法生物飼育学",
          pt: "Trato das Criaturas Mágicas"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 8,
    text: {
      en: "How do you prefer to solve conflicts?",
      zh: "你更喜欢哪种方式来解决冲突？",
      zhHant: "你更喜歡哪種方式來解決衝突？", // 繁體中文翻譯
      ko: "갈등을 해결하는 데 선호하는 방법은 무엇입니까?",
      ru: "Как вы предпочитаете решать конфликты?",
      jp: "対立を解決するのに、どのような方法を好みますか？",
      pt: "Como você prefere resolver conflitos?"
    },
    answers: [
      {
        text: {
          en: "Confront the issue directly",
          zh: "直接面对问题",
          zhHant: "直接面對問題", // 繁體中文翻譯
          ko: "문제에 직접 맞서기",
          ru: "Решить проблему напрямую",
          jp: "問題に直接立ち向かう",
          pt: "Confrontar o problema diretamente"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Find a logical solution",
          zh: "找到逻辑解决方案",
          zhHant: "找到邏輯解決方案", // 繁體中文翻譯
          ko: "논리적인 해결책 찾기",
          ru: "Найти логическое решение",
          jp: "論理的な解決策を見つける",
          pt: "Encontrar uma solução lógica"
        },
        scores: { gryffindor: 4, slytherin: 3, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "Use the situation to your advantage",
          zh: "利用情况来你的优势",
          zhHant: "利用情況來你的優勢", // 繁體中文翻譯
          ko: "상황을 자신에게 유리하게 이용하기",
          ru: "Использовать ситуацию в своих интересах",
          jp: "状況を自分の有利に利用する",
          pt: "Usar a situação a seu favor"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Seek compromise and harmony",
          zh: "寻求妥协和和谐",
          zhHant: "尋求妥協和和諧", // 繁體中文翻譯
          ko: "타협과 조화를 추구하기",
          ru: "Искать компромисс и гармонию",
          jp: "妥協と調和を求める",
          pt: "Buscar compromisso e harmonia"
        },
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 9,
    text: {
      en: "What's your greatest strength?",
      zh: "你最大的优势是什么？",
      zhHant: "你最大的優勢是什麼？", // 繁體中文翻譯
      ko: "당신의 가장 큰 장점은 무엇입니까?",
      ru: "Какая ваша самая сильная сторона?",
      jp: "あなたの最大の強みは何ですか？",
      pt: "Qual é seu maior ponto forte?"
    },
    answers: [
      {
        text: {
          en: "Standing up for what's right",
          zh: "为正义而战",
          zhHant: "為正義而戰", // 繁體中文翻譯
          ko: "옳은 일을 위해 맞서기",
          ru: "Отстаивать то, что правильно",
          jp: "正しいことのために立ち上がること",
          pt: "Defender o que é certo"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "Quick learning and adaptation",
          zh: "快速学习和适应",
          zhHant: "快速學習和適應", // 繁體中文翻譯
          ko: "빠른 학습과 적응력",
          ru: "Быстрое обучение и адаптация",
          jp: "素早い学習と適応力",
          pt: "Aprendizado rápido e adaptação"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Achieving my goals at any cost",
          zh: "不惜任何代价实现我的目标",
          zhHant: "不惜任何代價實現我的目標", // 繁體中文翻譯
          ko: "어떤 대가를 치르더라도 목표 달성하기",
          ru: "Достигать своих целей любой ценой",
          jp: "どんな代償を払っても目標を達成すること",
          pt: "Alcançar meus objetivos a qualquer custo"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Being there for others",
          zh: "为他人着想",
          zhHant: "為他人著想", // 繁體中文翻譯
          ko: "타인을 위해 헌신하기",
          ru: "Поддерживать других",
          jp: "他人のためにそこにいること",
          pt: "Estar presente para os outros"
        },
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 10,
    text: {
      en: "What would you do if you found a powerful magical artifact?",
      zh: "如果你发现一个强大的魔法神器，你会怎么做？",
      zhHant: "如果你發現一個強大的魔法神器，你會怎麼做？", // 繁體中文翻譯
      ko: "강력한 마법 유물을 발견한다면, 어떻게 하시겠습니까?",
      ru: "Что бы вы сделали, если бы нашли мощный магический артефакт?",
      jp: "強力な魔法の遺物を見つけたら、どうしますか？",
      pt: "O que você faria se encontrasse um artefato mágico poderoso?"
    },
    answers: [
      {
        text: {
          en: "Use it to protect others",
          zh: "用它来保护他人",
          zhHant: "用它來保護他人", // 繁體中文翻譯
          ko: "다른 사람을 보호하는데 사용하기",
          ru: "Использовал(а) бы его для защиты других",
          jp: "他人を守るために使う",
          pt: "Usá-lo para proteger os outros"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Study its properties and history",
          zh: "研究它的属性和历史",
          zhHant: "研究它的屬性和歷史", // 繁體中文翻譯
          ko: "그것의 특성과 역사를 연구하기",
          ru: "Изучил(а) бы его свойства и историю",
          jp: "その性質と歴史を研究する",
          pt: "Estudar suas propriedades e história"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "Keep it for future use",
          zh: "留待将来使用",
          zhHant: "留待將來使用", // 繁體中文翻譯
          ko: "미래에 사용하기 위해 보관하기",
          ru: "Сохранил(а) бы его для будущего использования",
          jp: "将来の使用のために保管する",
          pt: "Guardá-lo para uso futuro"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Turn it in to the proper authorities",
          zh: "将其交给适当的权威机构",
          zhHant: "將其交給適當的權威機構", // 繁體中文翻譯
          ko: "적절한 권위자에게 넘기기",
          ru: "Передал(а) бы его соответствующим властям",
          jp: "適切な機関に引き渡す",
          pt: "Entregá-lo às autoridades competentes"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 11,
    text: {
      en: "What kind of pet would you bring to Hogwarts?",
      zh: "你会带什么宠物去霍格沃茨？",
      zhHant: "你會帶什麼寵物去霍格沃茨？", // 繁體中文翻譯
      ko: "호그와트에 어떤 애완동물을 데려가고 싶으신가요?",
      ru: "Какого питомца вы бы взяли с собой в Хогвартс?",
      jp: "ホグワーツにはどんなペットを連れて行きますか？",
      pt: "Que tipo de animal de estimação você levaria para Hogwarts?"
    },
    answers: [
      {
        text: {
          en: "A brave and loyal owl",
          zh: "一只勇敢而忠诚的猫头鹰",
          zhHant: "一隻勇敢而忠誠的貓頭鷹", // 繁體中文翻譯
          ko: "용감하고 충성스러운 부엉이",
          ru: "Храбрая и преданная сова",
          jp: "勇敢で忠実なフクロウ",
          pt: "Uma coruja corajosa e leal"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "A mysterious and intelligent cat",
          zh: "一只神秘而聪明的猫",
          zhHant: "一隻神秘而聰明的貓", // 繁體中文翻譯
          ko: "신비롭고 영리한 고양이",
          ru: "Загадочный и умный кот",
          jp: "神秘的で賢い猫",
          pt: "Um gato misterioso e inteligente"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "A rare and impressive creature",
          zh: "一种稀有而令人印象深刻的生物",
          zhHant: "一種稀有而令人印象深刻的生物", // 繁體中文翻譯
          ko: "희귀하고 인상적인 생물",
          ru: "Редкое и впечатляющее существо",
          jp: "珍しく印象的な生き物",
          pt: "Uma criatura rara e impressionante"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "A friendly and affectionate animal",
          zh: "一只友好而亲昵的动物",
          zhHant: "一隻友好而親昵的動物", // 繁體中文翻譯
          ko: "친근하고 애정이 넘치는 동물",
          ru: "Дружелюбное и ласковое животное",
          jp: "フレンドリーで愛情深い動物",
          pt: "Um animal amigável e carinhoso"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 12,
    text: {
      en: "How would you like to be remembered?",
      zh: "你希望如何被记住？",
      zhHant: "你希望如何被記住？", // 繁體中文翻譯
      ko: "당신은 어떻게 기억되고 싶으신가요?",
      ru: "Как бы вы хотели, чтобы вас запомнили?",
      jp: "どのように記憶されたいですか？",
      pt: "Como você gostaria de ser lembrado?"
    },
    answers: [
      {
        text: {
          en: "As a hero who fought for justice",
          zh: "作为一个为正义而战的英雄",
          zhHant: "作為一個為正義而戰的英雄", // 繁體中文翻譯
          ko: "정의를 위해 싸운 영웅으로",
          ru: "Как герой, сражавшийся за справедливость",
          jp: "正義のために戦った英雄として",
          pt: "Como um herói que lutou pela justiça"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "As a brilliant mind who made discoveries",
          zh: "作为一个聪明的人，做出了发现",
          zhHant: "作為一個聰明的人，做出了發現", // 繁體中文翻譯
          ko: "위대한 발견을 한 뛰어난 지성인으로",
          ru: "Как гениальный ум, совершивший открытия",
          jp: "発見をした優れた知性として",
          pt: "Como uma mente brilhante que fez descobertas"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "As a powerful and influential leader",
          zh: "作为一个强大而有影响力的人",
          zhHant: "作為一個強大而有影響力的人", // 繁體中文翻譯
          ko: "강력하고 영향력 있는 지도자로",
          ru: "Как сильный и влиятельный лидер",
          jp: "強力で影響力のあるリーダーとして",
          pt: "Como um líder poderoso e influente"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "As someone who made others' lives better",
          zh: "作为一个让他人生活更好的人",
          zhHant: "作為一個讓他人生活更好的人", // 繁體中文翻譯
          ko: "다른 사람들의 삶을 더 나아지게 만든 사람으로",
          ru: "Как человек, который сделал жизнь других лучше",
          jp: "他人の人生をより良くした人として",
          pt: "Como alguém que melhorou a vida dos outros"
        },
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 13,
    text: {
      en: "What would you do during a Quidditch match?",
      zh: "在魁地奇比赛中你会怎么做？",
      zhHant: "在魁地奇比賽中你會怎麼做？", // 繁體中文翻譯
      ko: "퀴디치 경기에서 당신은 어떻게 하시겠습니까?",
      ru: "Что бы вы сделали во время матча по квиддичу?",
      jp: "クィディッチの試合中、あなたは何をしますか？",
      pt: "O que você faria durante uma partida de Quadribol?"
    },
    answers: [
      {
        text: {
          en: "Play as an aggressive Chaser",
          zh: "作为积极的追球手",
          zhHant: "作為積極的追球手", // 繁體中文翻譯
          ko: "공격적인 추격꾼으로 플레이하기",
          ru: "Играть агрессивно в роли ловца",
          jp: "攻撃的なチェイサーとしてプレイする",
          pt: "Jogar como um artilheiro agressivo"
        },
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 3, hufflepuff: 4 }
      },
      {
        text: {
          en: "Analyze the other team's strategy",
          zh: "分析其他队伍的策略",
          zhHant: "分析其他隊伍的策略", // 繁體中文翻譯
          ko: "상대팀의 전략을 분석하기",
          ru: "Анализировать стратегию другой команды",
          jp: "相手チームの戦略を分析する",
          pt: "Analisar a estratégia do outro time"
        },
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "Focus on winning at any cost",
          zh: "专注于胜利，不惜任何代价",
          zhHant: "專注於勝利，不惜任何代價", // 繁體中文翻譯
          ko: "어떤 대가를 치르더라도 승리에 집중하기",
          ru: "Сосредоточиться на победе любой ценой",
          jp: "どんな代償を払っても勝利に集中する",
          pt: "Focar em vencer a qualquer custo"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Support and encourage teammates",
          zh: "支持并鼓励队友",
          zhHant: "支持並鼓勵隊友", // 繁體中文翻譯
          ko: "팀원들을 지지하고 격려하기",
          ru: "Поддерживать и вдохновлять товарищей по команде",
          jp: "チームメイトを支援し励ます",
          pt: "Apoiar e encorajar os companheiros de equipe"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 14,
    text: {
      en: "What would you do if you caught someone cheating?",
      zh: "如果你发现有人作弊，你会怎么做？",
      zhHant: "如果你發現有人作弊，你會怎麼做？", // 繁體中文翻譯
      ko: "누군가가 부정행위를 하는 것을 발견했다면, 어떻게 하시겠습니까?",
      ru: "Что бы вы сделали, если бы поймали кого-то на жульничестве?",
      jp: "誰かが不正をしているのを見つけたら、どうしますか？",
      pt: "O que você faria se pegasse alguém trapaceando?"
    },
    answers: [
      {
        text: {
          en: "Confront them immediately",
          zh: "立即面对他们",
          zhHant: "立即面對他們", // 繁體中文翻譯
          ko: "즉시 맞서 대면하기",
          ru: "Немедленно противостоять им",
          jp: "すぐに直接対峙する",
          pt: "Confrontá-los imediatamente"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "Gather evidence and report it",
          zh: "收集证据并报告",
          zhHant: "收集證據並報告", // 繁體中文翻譯
          ko: "증거를 모아서 신고하기",
          ru: "Собрать доказательства и сообщить",
          jp: "証拠を集めて報告する",
          pt: "Reunir evidências e denunciar"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Use the information strategically",
          zh: "利用信息策略性地使用",
          zhHant: "利用信息策略性地使用", // 繁體中文翻譯
          ko: "정보를 전략적으로 활용하기",
          ru: "Использовать информацию стратегически",
          jp: "情報を戦略的に活用する",
          pt: "Usar a informação estrategicamente"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Talk to them privately about it",
          zh: "私下与他们谈谈",
          zhHant: "私下與他們談談", // 繁體中文翻譯
          ko: "개인적으로 대화를 나누기",
          ru: "Поговорить с ними наедине",
          jp: "個人的に話し合う",
          pt: "Conversar com eles em particular sobre isso"
        },
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 15,
    text: {
      en: "What's your approach to studying?",
      zh: "你如何学习？",
      zhHant: "你如何學習？", // 繁體中文翻譯
      ko: "공부하는 방식은 어떠신가요?",
      ru: "Какой ваш подход к учебе?",
      jp: "あなたの学習方法はどのようなものですか？",
      pt: "Qual é sua abordagem para estudar?"
    },
    answers: [
      {
        text: {
          en: "Practice until perfect",
          zh: "练习直到完美",
          zhHant: "練習直到完美", // 繁體中文翻譯
          ko: "완벽해질 때까지 연습하기",
          ru: "Тренироваться до совершенства",
          jp: "完璧になるまで練習する",
          pt: "Praticar até a perfeição"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Research thoroughly and take detailed notes",
          zh: "深入研究并做详细笔记",
          zhHant: "深入研究並做詳細筆記", // 繁體中文翻譯
          ko: "철저히 연구하고 자세한 노트 작성하기",
          ru: "Тщательно исследовать и делать подробные записи",
          jp: "徹底的に研究し、詳細なノートを取る",
          pt: "Pesquisar minuciosamente e fazer anotações detalhadas"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "Focus on what brings the best results",
          zh: "专注于带来最佳结果的事物",
          zhHant: "專注於帶來最佳結果的事物", // 繁體中文翻譯
          ko: "최고의 결과를 가져오는 것에 집중하기",
          ru: "Сосредоточиться на том, что дает лучшие результаты",
          jp: "最良の結果をもたらすことに集中する",
          pt: "Focar no que traz os melhores resultados"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Study in groups to help each other",
          zh: "在小组中学习以帮助彼此",
          zhHant: "在小組中學習以幫助彼此", // 繁體中文翻譯
          ko: "서로 도우며 그룹 학습하기",
          ru: "Учиться в группах, помогая друг другу",
          jp: "グループで学習して互いに助け合う",
          pt: "Estudar em grupos para ajudar uns aos outros"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 16,
    text: {
      en: "What would you do with the Room of Requirement?",
      zh: "你会如何使用密室？",
      zhHant: "你會如何使用密室？", // 繁體中文翻譯
      ko: "필요의 방을 어떻게 사용하시겠습니까?",
      ru: "Как бы вы использовали Комнату требований?",
      jp: "必要の部屋をどのように使いますか？",
      pt: "O que você faria com a Sala Precisa?"
    },
    answers: [
      {
        text: {
          en: "Create a training space for defense spells",
          zh: "创建防御咒语的训练空间",
          zhHant: "創建防禦咒語的訓練空間", // 繁體中文翻譯
          ko: "방어 마법 훈련을 위한 공간 만들기",
          ru: "Создать тренировочное пространство для защитных заклинаний",
          jp: "防衛呪文の練習場所を作る",
          pt: "Criar um espaço de treinamento para feitiços de defesa"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Make it a vast library of knowledge",
          zh: "让它成为一个知识的广阔图书馆",
          zhHant: "讓它成為一個知識的廣闊圖書館", // 繁體中文翻譯
          ko: "광대한 지식의 도서관으로 만들기",
          ru: "Сделать ее огромной библиотекой знаний",
          jp: "広大な知識の図書館にする",
          pt: "Transformá-la em uma vasta biblioteca de conhecimento"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "Use it for your secret ambitions",
          zh: "用于你的秘密野心",
          zhHant: "用於你的秘密野心", // 繁體中文翻譯
          ko: "자신의 비밀스러운 야망을 위해 사용하기",
          ru: "Использовать ее для своих тайных амбиций",
          jp: "自分の秘密の野望のために使う",
          pt: "Usá-la para suas ambições secretas"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Create a comfortable space for friends",
          zh: "为朋友们创建一个舒适的空间",
          zhHant: "為朋友們創建一個舒適的空間", // 繁體中文翻譯
          ko: "친구들을 위한 편안한 공간 만들기",
          ru: "Создать уютное пространство для друзей",
          jp: "友達のための快適な空間を作る",
          pt: "Criar um espaço confortável para amigos"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 17,
    text: {
      en: "What would you see in the Mirror of Erised?",
      zh: "你会看到镜中世界中的什么？",
      zhHant: "你會看到鏡中世界中的什麼？", // 繁體中文翻譯
      ko: "소망의 거울에서 당신은 무엇을 보시겠습니까?",
      ru: "Что бы вы увидели в Зеркале Еиналеж?",
      jp: "みぞの鏡に何が映りますか？",
      pt: "O que você veria no Espelho de Ojesed?"
    },
    answers: [
      {
        text: {
          en: "Yourself as a celebrated hero",
          zh: "你自己作为一位著名的英雄",
          zhHant: "你自己作為一位著名的英雄", // 繁體中文翻譯
          ko: "존경받는 영웅이 된 자신의 모습",
          ru: "Себя как прославленного героя",
          jp: "称賛される英雄としての自分",
          pt: "Você mesmo como um herói celebrado"
        },
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 3, hufflepuff: 4 }
      },
      {
        text: {
          en: "Yourself discovering new magic",
          zh: "你自己发现新的魔法",
          zhHant: "你自己發現新的魔法", // 繁體中文翻譯
          ko: "새로운 마법을 발견하는 자신의 모습",
          ru: "Себя, открывающего новую магию",
          jp: "新しい魔法を発見している自分",
          pt: "Você mesmo descobrindo nova magia"
        },
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "Yourself in a position of great power",
          zh: "你自己处于巨大的权力之中",
          zhHant: "你自己處於巨大的權力之中", // 繁體中文翻譯
          ko: "큰 권력을 가진 자신의 모습",
          ru: "Себя в положении великой власти",
          jp: "大きな力を持つ立場にいる自分",
          pt: "Você mesmo em uma posição de grande poder"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Yourself surrounded by loved ones",
          zh: "你自己被爱包围",
          zhHant: "你自己被愛包圍", // 繁體中文翻譯
          ko: "사랑하는 사람들에게 둘러싸인 자신의 모습",
          ru: "Себя в окружении любимых людей",
          jp: "愛する人々に囲まれている自分",
          pt: "Você mesmo rodeado por entes queridos"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 18,
    text: {
      en: "What would be your patronus memory?",
      zh: "你的守护神记忆是什么？",
      zhHant: "你的守護神記憶是什麼？", // 繁體中文翻譯
      ko: "당신의 패트로누스 기억은 무엇일까요?",
      ru: "Какое воспоминание стало бы вашим патронусом?",
      jp: "あなたのパトローナスの思い出は何ですか？",
      pt: "Qual seria sua memória para conjurar um Patrono?"
    },
    answers: [
      {
        text: {
          en: "Overcoming a great challenge",
          zh: "克服巨大的挑战",
          zhHant: "克服巨大的挑戰", // 繁體中文翻譯
          ko: "큰 도전을 극복한 순간",
          ru: "Преодоление большого испытания",
          jp: "大きな困難を乗り越えた時",
          pt: "Superar um grande desafio"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Making an important discovery",
          zh: "做出重要的发现",
          zhHant: "做出重要的發現", // 繁體中文翻譯
          ko: "중요한 발견을 한 순간",
          ru: "Совершение важного открытия",
          jp: "重要な発見をした時",
          pt: "Fazer uma descoberta importante"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "Achieving a long-sought goal",
          zh: "实现长期追求的目标",
          zhHant: "實現長期追求的目標", // 繁體中文翻譯
          ko: "오랫동안 추구해온 목표를 달성한 순간",
          ru: "Достижение долгожданной цели",
          jp: "長年追い求めた目標を達成した時",
          pt: "Alcançar um objetivo muito almejado"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "A moment of perfect happiness with friends",
          zh: "与朋友们共度完美幸福的时刻",
          zhHant: "與朋友們共度完美幸福的時刻", // 繁體中文翻譯
          ko: "친구들과 함께한 완벽한 행복의 순간",
          ru: "Момент абсолютного счастья с друзьями",
          jp: "友達と過ごした完璧な幸せの瞬間",
          pt: "Um momento de felicidade perfeita com amigos"
        },
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 19,
    text: {
      en: "How would you handle a dangerous magical creature?",
      zh: "你会如何处理危险的魔法生物？",
      zhHant: "你會如何處理危險的魔法生物？", // 繁體中文翻譯
      ko: "위험한 마법 생물을 어떻게 다루시겠습니까?",
      ru: "Как бы вы справились с опасным магическим существом?",
      jp: "危険な魔法生物にどのように対処しますか？",
      pt: "Como você lidaria com uma criatura mágica perigosa?"
    },
    answers: [
      {
        text: {
          en: "Face it bravely and directly",
          zh: "勇敢地直接面对它",
          zhHant: "勇敢地直接面對它", // 繁體中文翻譯
          ko: "용감하게 직접 맞서기",
          ru: "Смело и прямо противостоять ему",
          jp: "勇敢に直接立ち向かう",
          pt: "Enfrentá-la com bravura e diretamente"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "Study its behavior patterns first",
          zh: "首先研究它的行为模式",
          zhHant: "首先研究它的行為模式", // 繁體中文翻譯
          ko: "먼저 행동 패턴을 연구하기",
          ru: "Сначала изучить его поведение",
          jp: "まずは行動パターンを研究する",
          pt: "Estudar seus padrões de comportamento primeiro"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Find a way to control it",
          zh: "找到控制它的方法",
          zhHant: "找到控制它的方法", // 繁體中文翻譯
          ko: "통제할 방법 찾기",
          ru: "Найти способ контролировать его",
          jp: "制御する方法を見つける",
          pt: "Encontrar uma maneira de controlá-la"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Try to understand and befriend it",
          zh: "尝试理解和结交它",
          zhHant: "嘗試理解和結交它", // 繁體中文翻譯
          ko: "이해하고 친구가 되려고 노력하기",
          ru: "Попытаться понять и подружиться с ним",
          jp: "理解して仲良くなろうとする",
          pt: "Tentar entender e fazer amizade com ela"
        },
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 20,
    text: {
      en: "What would you do with Felix Felicis (liquid luck)?",
      zh: "你会如何使用Felix Felicis（液体幸运）？",
      zhHant: "你會如何使用Felix Felicis（液體幸運）？", // 繁體中文翻譯
      ko: "펠릭스 펠리시스(행운의 물약)를 어떻게 사용하시겠습니까?",
      ru: "Как бы вы использовали Фелицис (жидкую удачу)?",
      jp: "フェリックス・フェリシス（幸運の薬）をどのように使いますか？",
      pt: "O que você faria com Felix Felicis (sorte líquida)?"
    },
    answers: [
      {
        text: {
          en: "Use it for a noble cause",
          zh: "用于高尚的事业",
          zhHant: "用於高尚的事業", // 繁體中文翻譯
          ko: "고귀한 목적을 위해 사용하기",
          ru: "Использовать его для благородного дела",
          jp: "高潔な目的のために使用する",
          pt: "Usá-la para uma causa nobre"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "Study its effects and properties",
          zh: "研究它的效果和属性",
          zhHant: "研究它的效果和屬性", // 繁體中文翻譯
          ko: "효과와 특성을 연구하기",
          ru: "Изучить его эффекты и свойства",
          jp: "効果と特性を研究する",
          pt: "Estudar seus efeitos e propriedades"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Save it for a crucial moment",
          zh: "留待关键时刻使用",
          zhHant: "留待關鍵時刻使用", // 繁體中文翻譯
          ko: "중요한 순간을 위해 보관하기",
          ru: "Сохранить его для решающего момента",
          jp: "重要な瞬間のために取っておく",
          pt: "Guardá-la para um momento crucial"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Share it with friends in need",
          zh: "与需要的朋友分享",
          zhHant: "與需要的朋友分享", // 繁體中文翻譯
          ko: "도움이 필요한 친구들과 나누기",
          ru: "Поделиться с друзьями, нуждающимися в помощи",
          jp: "必要としている友達と分け合う",
          pt: "Compartilhá-la com amigos necessitados"
        },
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  }
];