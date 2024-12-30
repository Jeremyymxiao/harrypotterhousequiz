import { Language } from '@/utils/language'

export interface Answer {
  text: {
    en: string;
    zh: string;
    ko: string; // Added Korean language support
    ru: string; // Added Russian language support
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
    ko: string; // Added Korean language support
    ru: string; // Added Russian language support
  };
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: {
      en: "When facing a challenge, what would you most likely do?",
      zh: "面对挑战时，你最可能会怎么做？",
      ko: "도전에 직면했을 때, 당신은 어떻게 하시겠습니까?",
      ru: "Как вы обычно поступаете, сталкиваясь с трудностями?"
    },
    answers: [
      {
        text: {
          en: "Face it head-on with immediate action",
          zh: "立即采取行动，直面挑战",
          ko: "즉각적인 행동으로 정면으로 맞서기",
          ru: "Решите проблему сразу и напрямую"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Analyze the situation and make a detailed plan",
          zh: "分析情况，制定详细计划",
          ko: "상황을 분석하고 상세한 계획을 세우기",
          ru: "Проанализируйте ситуацию и составьте подробный план"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Find the most advantageous solution",
          zh: "寻找最有利的解决方案",
          ko: "가장 유리한 해결책 찾기",
          ru: "Найдите наиболее выгодное решение"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Try to understand and befriend it",
          zh: "尝试理解和结交它",
          ko: "이해하고 친구가 되려고 노력하기",
          ru: "Попытайтесь понять и подружиться с этим"
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
      ko: "당신이 가장 중요하게 생각하는 자질은 무엇입니까?",
      ru: "Какое качество вы цените больше всего?"
    },
    answers: [
      {
        text: {
          en: "Courage",
          zh: "勇气",
          ko: "용기",
          ru: "Смелость"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Wisdom",
          zh: "智慧",
          ko: "지혜",
          ru: "Мудрость"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "Ambition",
          zh: "野心",
          ko: "야망",
          ru: "Амбиции"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Loyalty",
          zh: "忠诚",
          ko: "충성심",
          ru: "Верность"
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
      ko: "만약 하나의 마법 능력을 가질 수 있다면, 당신의 선택은:",
      ru: "Если бы вы могли иметь одно магическое умение, вы бы выбрали:"
    },
    answers: [
      {
        text: {
          en: "The power to protect others",
          zh: "保护他人的力量",
          ko: "다른 사람을 보호하는 힘",
          ru: "Сила защищать других"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "The ability to gain knowledge",
          zh: "获取知识的能力",
          ko: "지식을 얻는 능력",
          ru: "Способность получать знания"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "The power to achieve your goals",
          zh: "实现目标的力量",
          ko: "목표를 달성하는 힘",
          ru: "Сила достигать своих целей"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "The ability to help others",
          zh: "帮助他人的能力",
          ko: "다른 사람을 돕는 능력",
          ru: "Способность помогать другим"
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
      ko: "그룹 프로젝트에서 당신은 보통 어떤 역할을 맡습니까?",
      ru: "Какую роль вы обычно играете в групповом проекте?"
    },
    answers: [
      {
        text: {
          en: "The leader who takes charge",
          zh: "领导者，负责领导",
          ko: "책임지고 이끄는 리더",
          ru: "Лидер, который берет на себя ответственность"
        },
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 3, hufflepuff: 4 }
      },
      {
        text: {
          en: "The researcher who gathers information",
          zh: "信息收集者，负责收集信息",
          ko: "정보를 수집하는 연구자",
          ru: "Исследователь, который собирает информацию"
        },
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "The strategist who plans everything",
          zh: "策略师，负责规划一切",
          ko: "모든 것을 계획하는 전략가",
          ru: "Стратег, который планирует все"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "The mediator who keeps everyone happy",
          zh: "调解者，负责让每个人都开心",
          ko: "모두를 행복하게 하는 중재자",
          ru: "Посредник, который поддерживает гармонию"
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
      ko: "길을 잃은 1학년 학생을 발견했다면, 어떻게 하시겠습니까?",
      ru: "Что вы сделаете, если найдете потерявшегося первокурсника?"
    },
    answers: [
      {
        text: {
          en: "Personally escort them to their destination",
          zh: "亲自护送他们到目的地",
          ko: "직접 목적지까지 안내하기",
          ru: "Лично сопроводить их до места назначения"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "Give them detailed directions with landmarks",
          zh: "给他们详细的方向和地标",
          ko: "주요 건물을 포함한 자세한 길 안내하기",
          ru: "Дать подробные указания с ориентирами"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Tell them to figure it out themselves",
          zh: "让他们自己解决",
          ko: "스스로 해결하라고 하기",
          ru: "Сказать им разобраться самостоятельно"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Introduce them to other students going the same way",
          zh: "给他们介绍其他正在走相同路线的学生",
          ko: "같은 방향으로 가는 다른 학생들을 소개해주기",
          ru: "Познакомить их с другими студентами, идущими тем же путем"
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
      ko: "자유로운 오후를 보내는 이상적인 방법은 무엇입니까?",
      ru: "Как бы вы хотели провести свободный день?"
    },
    answers: [
      {
        text: {
          en: "Practicing dueling spells",
          zh: "练习决斗咒语",
          ko: "결투 주문 연습하기",
          ru: "Тренировать заклинания для дуэлей"
        },
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 4, hufflepuff: 3 }
      },
      {
        text: {
          en: "Reading in the library",
          zh: "在图书馆阅读",
          ko: "도서관에서 독서하기",
          ru: "Читать в библиотеке"
        },
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "Networking with influential people",
          zh: "与有影响力的人建立联系",
          ko: "영향력 있는 사람들과 인맥 쌓기",
          ru: "Общаться с влиятельными людьми"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Helping friends with their homework",
          zh: "帮助朋友们完成作业",
          ko: "친구들의 숙제 도와주기",
          ru: "Помогать друзьям с домашним заданием"
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
      ko: "호그와트에서 가장 좋아하는 과목은 무엇일까요?",
      ru: "Какой ваш любимый предмет в Хогвартсе?"
    },
    answers: [
      {
        text: {
          en: "Defense Against the Dark Arts",
          zh: "黑魔法防御术",
          ko: "어둠의 마법 방어술",
          ru: "Защита от темных искусств"
        },
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 4, hufflepuff: 3 }
      },
      {
        text: {
          en: "Ancient Runes",
          zh: "古代如尼文",
          ko: "고대 룬문자",
          ru: "Древние руны"
        },
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "Potions",
          zh: "药水学",
          ko: "마법약 수업",
          ru: "Зельеварение"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Care of Magical Creatures",
          zh: "神奇生物保护课",
          ko: "신비한 동물 돌보기",
          ru: "Уход за магическими существами"
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
      ko: "갈등을 해결하는 데 선호하는 방법은 무엇입니까?",
      ru: "Как вы предпочитаете решать конфликты?"
    },
    answers: [
      {
        text: {
          en: "Confront the issue directly",
          zh: "直接面对问题",
          ko: "문제에 직접 맞서기",
          ru: "Решить проблему напрямую"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Find a logical solution",
          zh: "找到逻辑解决方案",
          ko: "논리적인 해결책 찾기",
          ru: "Найти логическое решение"
        },
        scores: { gryffindor: 4, slytherin: 3, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "Use the situation to your advantage",
          zh: "利用情况来你的优势",
          ko: "상황을 자신에게 유리하게 이용하기",
          ru: "Использовать ситуацию в своих интересах"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Seek compromise and harmony",
          zh: "寻求妥协和和谐",
          ko: "타협과 조화를 추구하기",
          ru: "Искать компромисс и гармонию"
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
      ko: "당신의 가장 큰 장점은 무엇입니까?",
      ru: "Какая ваша самая сильная сторона?"
    },
    answers: [
      {
        text: {
          en: "Standing up for what's right",
          zh: "为正义而战",
          ko: "옳은 일을 위해 맞서기",
          ru: "Отстаивать то, что правильно"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "Quick learning and adaptation",
          zh: "快速学习和适应",
          ko: "빠른 학습과 적응력",
          ru: "Быстрое обучение и адаптация"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Achieving my goals at any cost",
          zh: "不惜任何代价实现我的目标",
          ko: "어떤 대가를 치르더라도 목표 달성하기",
          ru: "Достигать своих целей любой ценой"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Being there for others",
          zh: "为他人着想",
          ko: "타인을 위해 헌신하기",
          ru: "Поддерживать других"
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
      ko: "강력한 마법 유물을 발견한다면, 어떻게 하시겠습니까?",
      ru: "Что бы вы сделали, если бы нашли мощный магический артефакт?"
    },
    answers: [
      {
        text: {
          en: "Use it to protect others",
          zh: "用它来保护他人",
          ko: "다른 사람을 보호하는데 사용하기",
          ru: "Использовал(а) бы его для защиты других"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Study its properties and history",
          zh: "研究它的属性和历史",
          ko: "그것의 특성과 역사를 연구하기",
          ru: "Изучил(а) бы его свойства и историю"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "Keep it for future use",
          zh: "留待将来使用",
          ko: "미래에 사용하기 위해 보관하기",
          ru: "Сохранил(а) бы его для будущего использования"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Turn it in to the proper authorities",
          zh: "将其交给适当的权威机构",
          ko: "적절한 권위자에게 넘기기",
          ru: "Передал(а) бы его соответствующим властям"
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
      ko: "호그와트에 어떤 애완동물을 데려가고 싶으신가요?",
      ru: "Какого питомца вы бы взяли с собой в Хогвартс?"
    },
    answers: [
      {
        text: {
          en: "A brave and loyal owl",
          zh: "一只勇敢而忠诚的猫头鹰",
          ko: "용감하고 충성스러운 부엉이",
          ru: "Храбрая и преданная сова"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "A mysterious and intelligent cat",
          zh: "一只神秘而聪明的猫",
          ko: "신비롭고 영리한 고양이",
          ru: "Загадочный и умный кот"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "A rare and impressive creature",
          zh: "一种稀有而令人印象深刻的生物",
          ko: "희귀하고 인상적인 생물",
          ru: "Редкое и впечатляющее существо"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "A friendly and affectionate animal",
          zh: "一只友好而亲昵的动物",
          ko: "친근하고 애정이 넘치는 동물",
          ru: "Дружелюбное и ласковое животное"
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
      ko: "당신은 어떻게 기억되고 싶으신가요?",
      ru: "Как бы вы хотели, чтобы вас запомнили?"
    },
    answers: [
      {
        text: {
          en: "As a hero who fought for justice",
          zh: "作为一个为正义而战的英雄",
          ko: "정의를 위해 싸운 영웅으로",
          ru: "Как герой, сражавшийся за справедливость"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "As a brilliant mind who made discoveries",
          zh: "作为一个聪明的人，做出了发现",
          ko: "위대한 발견을 한 뛰어난 지성인으로",
          ru: "Как гениальный ум, совершивший открытия"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "As a powerful and influential leader",
          zh: "作为一个强大而有影响力的人",
          ko: "강력하고 영향력 있는 지도자로",
          ru: "Как сильный и влиятельный лидер"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "As someone who made others' lives better",
          zh: "作为一个让他人生活更好的人",
          ko: "다른 사람들의 삶을 더 나아지게 만든 사람으로",
          ru: "Как человек, который сделал жизнь других лучше"
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
      ko: "퀴디치 경기에서 당신은 어떻게 하시겠습니까?",
      ru: "Что бы вы сделали во время матча по квиддичу?"
    },
    answers: [
      {
        text: {
          en: "Play as an aggressive Chaser",
          zh: "作为积极的追球手",
          ko: "공격적인 추격꾼으로 플레이하기",
          ru: "Играть агрессивно в роли ловца"
        },
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 3, hufflepuff: 4 }
      },
      {
        text: {
          en: "Analyze the other team's strategy",
          zh: "分析其他队伍的策略",
          ko: "상대팀의 전략을 분석하기",
          ru: "Анализировать стратегию другой команды"
        },
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "Focus on winning at any cost",
          zh: "专注于胜利，不惜任何代价",
          ko: "어떤 대가를 치르더라도 승리에 집중하기",
          ru: "Сосредоточиться на победе любой ценой"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Support and encourage teammates",
          zh: "支持并鼓励队友",
          ko: "팀원들을 지지하고 격려하기",
          ru: "Поддерживать и вдохновлять товарищей по команде"
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
      ko: "누군가가 부정행위를 하는 것을 발견했다면, 어떻게 하시겠습니까?",
      ru: "Что бы вы сделали, если бы поймали кого-то на жульничестве?"
    },
    answers: [
      {
        text: {
          en: "Confront them immediately",
          zh: "立即面对他们",
          ko: "즉시 맞서 대면하기",
          ru: "Немедленно противостоять им"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "Gather evidence and report it",
          zh: "收集证据并报告",
          ko: "증거를 모아서 신고하기",
          ru: "Собрать доказательства и сообщить"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Use the information strategically",
          zh: "利用信息策略性地使用",
          ko: "정보를 전략적으로 활용하기",
          ru: "Использовать информацию стратегически"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Talk to them privately about it",
          zh: "私下与他们谈谈",
          ko: "개인적으로 대화를 나누기",
          ru: "Поговорить с ними наедине"
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
      ko: "공부하는 방식은 어떠신가요?",
      ru: "Какой ваш подход к учебе?"
    },
    answers: [
      {
        text: {
          en: "Practice until perfect",
          zh: "练习直到完美",
          ko: "완벽해질 때까지 연습하기",
          ru: "Тренироваться до совершенства"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Research thoroughly and take detailed notes",
          zh: "深入研究并做详细笔记",
          ko: "철저히 연구하고 자세한 노트 작성하기",
          ru: "Тщательно исследовать и делать подробные записи"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "Focus on what brings the best results",
          zh: "专注于带来最佳结果的事物",
          ko: "최고의 결과를 가져오는 것에 집중하기",
          ru: "Сосредоточиться на том, что дает лучшие результаты"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Study in groups to help each other",
          zh: "在小组中学习以帮助彼此",
          ko: "서로 도우며 그룹 학습하기",
          ru: "Учиться в группах, помогая друг другу"
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
      ko: "필요의 방을 어떻게 사용하시겠습니까?",
      ru: "Как бы вы использовали Комнату требований?"
    },
    answers: [
      {
        text: {
          en: "Create a training space for defense spells",
          zh: "创建防御咒语的训练空间",
          ko: "방어 마법 훈련을 위한 공간 만들기",
          ru: "Создать тренировочное пространство для защитных заклинаний"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Make it a vast library of knowledge",
          zh: "让它成为一个知识的广阔图书馆",
          ko: "광대한 지식의 도서관으로 만들기",
          ru: "Сделать ее огромной библиотекой знаний"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "Use it for your secret ambitions",
          zh: "用于你的秘密野心",
          ko: "자신의 비밀스러운 야망을 위해 사용하기",
          ru: "Использовать ее для своих тайных амбиций"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Create a comfortable space for friends",
          zh: "为朋友们创建一个舒适的空间",
          ko: "친구들을 위한 편안한 공간 만들기",
          ru: "Создать уютное пространство для друзей"
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
      ko: "소망의 거울에서 당신은 무엇을 보시겠습니까?",
      ru: "Что бы вы увидели в Зеркале Еиналеж?"
    },
    answers: [
      {
        text: {
          en: "Yourself as a celebrated hero",
          zh: "你自己作为一位著名的英雄",
          ko: "존경받는 영웅이 된 자신의 모습",
          ru: "Себя как прославленного героя"
        },
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 3, hufflepuff: 4 }
      },
      {
        text: {
          en: "Yourself discovering new magic",
          zh: "你自己发现新的魔法",
          ko: "새로운 마법을 발견하는 자신의 모습",
          ru: "Себя, открывающего новую магию"
        },
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: {
          en: "Yourself in a position of great power",
          zh: "你自己处于巨大的权力之中",
          ko: "큰 권력을 가진 자신의 모습",
          ru: "Себя в положении великой власти"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "Yourself surrounded by loved ones",
          zh: "你自己被爱包围",
          ko: "사랑하는 사람들에게 둘러싸인 자신의 모습",
          ru: "Себя в окружении любимых людей"
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
      ko: "당신의 패트로누스 기억은 무엇일까요?",
      ru: "Какое воспоминание стало бы вашим патронусом?"
    },
    answers: [
      {
        text: {
          en: "Overcoming a great challenge",
          zh: "克服巨大的挑战",
          ko: "큰 도전을 극복한 순간",
          ru: "Преодоление большого испытания"
        },
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: {
          en: "Making an important discovery",
          zh: "做出重要的发现",
          ko: "중요한 발견을 한 순간",
          ru: "Совершение важного открытия"
        },
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: {
          en: "Achieving a long-sought goal",
          zh: "实现长期追求的目标",
          ko: "오랫동안 추구해온 목표를 달성한 순간",
          ru: "Достижение долгожданной цели"
        },
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: {
          en: "A moment of perfect happiness with friends",
          zh: "与朋友们共度完美幸福的时刻",
          ko: "친구들과 함께한 완벽한 행복의 순간",
          ru: "Момент абсолютного счастья с друзьями"
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
      ko: "위험한 마법 생물을 어떻게 다루시겠습니까?",
      ru: "Как бы вы справились с опасным магическим существом?"
    },
    answers: [
      {
        text: {
          en: "Face it bravely and directly",
          zh: "勇敢地直接面对它",
          ko: "용감하게 직접 맞서기",
          ru: "Смело и прямо противостоять ему"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "Study its behavior patterns first",
          zh: "首先研究它的行为模式",
          ko: "먼저 행동 패턴을 연구하기",
          ru: "Сначала изучить его поведение"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Find a way to control it",
          zh: "找到控制它的方法",
          ko: "통제할 방법 찾기",
          ru: "Найти способ контролировать его"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Try to understand and befriend it",
          zh: "尝试理解和结交它",
          ko: "이해하고 친구가 되려고 노력하기",
          ru: "Попытаться понять и подружиться с ним"
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
      ko: "펠릭스 펠리시스(행운의 물약)를 어떻게 사용하시겠습니까?",
      ru: "Как бы вы использовали Фелицис (жидкую удачу)?"
    },
    answers: [
      {
        text: {
          en: "Use it for a noble cause",
          zh: "用于高尚的事业",
          ko: "고귀한 목적을 위해 사용하기",
          ru: "Использовать его для благородного дела"
        },
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: {
          en: "Study its effects and properties",
          zh: "研究它的效果和属性",
          ko: "효과와 특성을 연구하기",
          ru: "Изучить его эффекты и свойства"
        },
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: {
          en: "Save it for a crucial moment",
          zh: "留待关键时刻使用",
          ko: "중요한 순간을 위해 보관하기",
          ru: "Сохранить его для решающего момента"
        },
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: {
          en: "Share it with friends in need",
          zh: "与需要的朋友分享",
          ko: "도움이 필요한 친구들과 나누기",
          ru: "Поделиться с друзьями, нуждающимися в помощи"
        },
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  }
];

