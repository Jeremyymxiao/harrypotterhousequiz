import { Language } from '@/utils/language';
import { PatronusScores } from '@/types/patronus';

export interface PatronusAnswer {
  text: {
    en: string;
    zh: string;
    zhHant: string;
    ko: string;
    ru: string;
    jp: string;
    pt: string;
  };
  scores: PatronusScores;
}

export interface PatronusQuestion {
  id: number;
  text: {
    en: string;
    zh: string;
    zhHant: string;
    ko: string;
    ru: string;
    jp: string;
    pt: string;
  };
  image: string; // 每个问题配有小插图
  answers: PatronusAnswer[];
}

export const patronusQuestions: PatronusQuestion[] = [
  {
    id: 1,
    text: {
      en: "Which natural environment do you prefer?",
      zh: "你更喜欢什么自然环境？",
      zhHant: "你更喜歡什麼自然環境？",
      ko: "어떤 자연환경을 선호하십니까?",
      ru: "Какую природную среду вы предпочитаете?",
      jp: "どのような自然環境が好きですか？",
      pt: "Qual ambiente natural você prefere?"
    },
    image: "/images/patronus/question-nature.png",
    answers: [
      {
        text: {
          en: "Mountains",
          zh: "山川",
          zhHant: "山川",
          ko: "산",
          ru: "Горы",
          jp: "山々",
          pt: "Montanhas"
        },
        scores: { strength: 10, wisdom: 5, protection: 3, agility: 2 }
      },
      {
        text: {
          en: "Forest",
          zh: "森林",
          zhHant: "森林",
          ko: "숲",
          ru: "Лес",
          jp: "森",
          pt: "Floresta"
        },
        scores: { strength: 3, wisdom: 10, protection: 5, agility: 2 }
      },
      {
        text: {
          en: "Ocean",
          zh: "海洋",
          zhHant: "海洋",
          ko: "바다",
          ru: "Океан",
          jp: "海",
          pt: "Oceano"
        },
        scores: { strength: 4, wisdom: 3, protection: 2, agility: 10 }
      },
      {
        text: {
          en: "Plains",
          zh: "草原",
          zhHant: "草原",
          ko: "평원",
          ru: "Равнины",
          jp: "草原",
          pt: "Planícies"
        },
        scores: { strength: 2, wisdom: 3, protection: 10, agility: 5 }
      }
    ]
  },
  {
    id: 2,
    text: {
      en: "What weather do you prefer?",
      zh: "你偏好什么天气？",
      zhHant: "你偏好什麼天氣？",
      ko: "어떤 날씨를 선호하십니까?",
      ru: "Какую погоду вы предпочитаете?",
      jp: "どんな天気が好きですか？",
      pt: "Que clima você prefere?"
    },
    image: "/images/patronus/question-weather.png",
    answers: [
      {
        text: {
          en: "Sunny",
          zh: "阳光明媚",
          zhHant: "陽光明媚",
          ko: "맑은 날",
          ru: "Солнечно",
          jp: "晴れ",
          pt: "Ensolarado"
        },
        scores: { strength: 10, wisdom: 3, protection: 4, agility: 5 }
      },
      {
        text: {
          en: "Rainy",
          zh: "下雨天",
          zhHant: "下雨天",
          ko: "비 오는 날",
          ru: "Дождливо",
          jp: "雨",
          pt: "Chuvoso"
        },
        scores: { strength: 3, wisdom: 5, protection: 10, agility: 4 }
      },
      {
        text: {
          en: "Snowy",
          zh: "雪天",
          zhHant: "雪天",
          ko: "눈 오는 날",
          ru: "Снежно",
          jp: "雪",
          pt: "Nevado"
        },
        scores: { strength: 4, wisdom: 5, protection: 3, agility: 10 }
      },
      {
        text: {
          en: "Cloudy with a breeze",
          zh: "多云微风",
          zhHant: "多雲微風",
          ko: "구름 많고 산들바람 부는 날",
          ru: "Облачно с ветерком",
          jp: "曇りで風がそよぐ",
          pt: "Nublado com brisa"
        },
        scores: { strength: 3, wisdom: 10, protection: 5, agility: 4 }
      }
    ]
  },
  {
    id: 3,
    text: {
      en: "What time of day makes you feel most comfortable?",
      zh: "什么时间段让你感觉最舒适？",
      zhHant: "什麼時間段讓你感覺最舒適？",
      ko: "하루 중 어느 시간대가 가장 편안하게 느껴지나요?",
      ru: "В какое время суток вы чувствуете себя наиболее комфортно?",
      jp: "一日のうちでどの時間帯が最も快適に感じますか？",
      pt: "Que período do dia faz você se sentir mais confortável?"
    },
    image: "/images/patronus/question-time.png",
    answers: [
      {
        text: {
          en: "Dawn",
          zh: "黎明",
          zhHant: "黎明",
          ko: "새벽",
          ru: "Рассвет",
          jp: "夜明け",
          pt: "Amanhecer"
        },
        scores: { strength: 10, wisdom: 5, protection: 8, agility: 3 }
      },
      {
        text: {
          en: "Noon",
          zh: "正午",
          zhHant: "正午",
          ko: "정오",
          ru: "Полдень",
          jp: "正午",
          pt: "Meio-dia"
        },
        scores: { strength: 7, wisdom: 3, protection: 3, agility: 10 }
      },
      {
        text: {
          en: "Dusk",
          zh: "黄昏",
          zhHant: "黃昏",
          ko: "해질녘",
          ru: "Закат",
          jp: "黄昏",
          pt: "Crepúsculo"
        },
        scores: { strength: 3, wisdom: 10, protection: 8, agility: 5 }
      },
      {
        text: {
          en: "Night",
          zh: "夜晚",
          zhHant: "夜晚",
          ko: "밤",
          ru: "Ночь",
          jp: "夜",
          pt: "Noite"
        },
        scores: { strength: 4, wisdom: 7, protection: 3, agility: 8 }
      }
    ]
  },
  {
    id: 4,
    text: {
      en: "Which color group do you prefer?",
      zh: "你更喜欢哪种颜色？",
      zhHant: "你更喜歡哪種顏色？",
      ko: "어떤 색상 그룹을 선호하시나요?",
      ru: "Какую группу цветов вы предпочитаете?",
      jp: "どの色のグループが好きですか？",
      pt: "Qual grupo de cores você prefere?"
    },
    image: "/images/patronus/question-colors.png",
    answers: [
      {
        text: {
          en: "Red/Gold",
          zh: "红色/金色系",
          zhHant: "紅色/金色系",
          ko: "빨간색/금색",
          ru: "Красный/Золотой",
          jp: "赤/金",
          pt: "Vermelho/Dourado"
        },
        scores: { strength: 10, wisdom: 3, protection: 4, agility: 5 }
      },
      {
        text: {
          en: "Blue/Silver",
          zh: "蓝色/银色系",
          zhHant: "藍色/銀色系",
          ko: "파란색/은색",
          ru: "Синий/Серебряный",
          jp: "青/銀",
          pt: "Azul/Prateado"
        },
        scores: { strength: 4, wisdom: 10, protection: 3, agility: 5 }
      },
      {
        text: {
          en: "Green/Brown",
          zh: "绿色/棕色系",
          zhHant: "綠色/棕色系",
          ko: "녹색/갈색",
          ru: "Зеленый/Коричневый",
          jp: "緑/茶色",
          pt: "Verde/Marrom"
        },
        scores: { strength: 3, wisdom: 4, protection: 10, agility: 5 }
      },
      {
        text: {
          en: "Black/White",
          zh: "黑色/白色系",
          zhHant: "黑色/白色系",
          ko: "검정색/흰색",
          ru: "Черный/Белый",
          jp: "黒/白",
          pt: "Preto/Branco"
        },
        scores: { strength: 3, wisdom: 5, protection: 4, agility: 10 }
      }
    ]
  },
  {
    id: 5,
    text: {
      en: "When facing a challenge, what is your first reaction?",
      zh: "当面对挑战时，你的第一反应是？",
      zhHant: "當面對挑戰時，你的第一反應是？",
      ko: "도전에 직면했을 때, 당신의 첫 반응은 무엇인가요?",
      ru: "Какова ваша первая реакция при столкновении с трудностями?",
      jp: "課題に直面したとき、あなたの最初の反応は？",
      pt: "Ao enfrentar um desafio, qual é sua primeira reação?"
    },
    image: "/images/patronus/question-challenge.png",
    answers: [
      {
        text: {
          en: "Face it directly",
          zh: "直接面对",
          zhHant: "直接面對",
          ko: "직접 맞서기",
          ru: "Встретить его напрямую",
          jp: "直接立ち向かう",
          pt: "Enfrentá-lo diretamente"
        },
        scores: { strength: 10, wisdom: 3, protection: 4, agility: 5 }
      },
      {
        text: {
          en: "Think carefully",
          zh: "仔细思考",
          zhHant: "仔細思考",
          ko: "신중하게 생각하기",
          ru: "Тщательно обдумать",
          jp: "慎重に考える",
          pt: "Pensar cuidadosamente"
        },
        scores: { strength: 3, wisdom: 10, protection: 5, agility: 3 }
      },
      {
        text: {
          en: "Seek help",
          zh: "寻求帮助",
          zhHant: "尋求幫助",
          ko: "도움 요청하기",
          ru: "Искать помощи",
          jp: "助けを求める",
          pt: "Buscar ajuda"
        },
        scores: { strength: 3, wisdom: 5, protection: 10, agility: 3 }
      },
      {
        text: {
          en: "Observe the situation",
          zh: "观察情况",
          zhHant: "觀察情況",
          ko: "상황 관찰하기",
          ru: "Наблюдать за ситуацией",
          jp: "状況を観察する",
          pt: "Observar a situação"
        },
        scores: { strength: 4, wisdom: 6, protection: 2, agility: 10 }
      }
    ]
  },
  {
    id: 6,
    text: {
      en: "Which element do you prefer?",
      zh: "你更喜欢哪种元素？",
      zhHant: "你更喜歡哪種元素？",
      ko: "어떤 원소를 선호하시나요?",
      ru: "Какую стихию вы предпочитаете?",
      jp: "どの元素が好きですか？",
      pt: "Qual elemento você prefere?"
    },
    image: "/images/patronus/question-elements.png",
    answers: [
      {
        text: {
          en: "Fire",
          zh: "火",
          zhHant: "火",
          ko: "불",
          ru: "Огонь",
          jp: "火",
          pt: "Fogo"
        },
        scores: { strength: 10, wisdom: 4, protection: 2, agility: 5 }
      },
      {
        text: {
          en: "Water",
          zh: "水",
          zhHant: "水",
          ko: "물",
          ru: "Вода",
          jp: "水",
          pt: "Água"
        },
        scores: { strength: 3, wisdom: 5, protection: 4, agility: 10 }
      },
      {
        text: {
          en: "Air",
          zh: "风",
          zhHant: "風",
          ko: "공기",
          ru: "Воздух",
          jp: "風",
          pt: "Ar"
        },
        scores: { strength: 4, wisdom: 10, protection: 2, agility: 6 }
      },
      {
        text: {
          en: "Earth",
          zh: "地",
          zhHant: "地",
          ko: "땅",
          ru: "Земля",
          jp: "土",
          pt: "Terra"
        },
        scores: { strength: 5, wisdom: 3, protection: 10, agility: 2 }
      }
    ]
  },
  {
    id: 7,
    text: {
      en: "If you had to choose one ability, what would it be?",
      zh: "如果你必须选择一种能力，你会选？",
      zhHant: "如果你必須選擇一種能力，你會選？",
      ko: "하나의 능력을 선택해야 한다면, 무엇을 선택하시겠습니까?",
      ru: "Если бы вам пришлось выбрать одну способность, какой бы она была?",
      jp: "一つの能力を選ばなければならないとしたら、何を選びますか？",
      pt: "Se você tivesse que escolher uma habilidade, qual seria?"
    },
    image: "/images/patronus/question-ability.png",
    answers: [
      {
        text: {
          en: "Strength",
          zh: "力量",
          zhHant: "力量",
          ko: "힘",
          ru: "Сила",
          jp: "力",
          pt: "Força"
        },
        scores: { strength: 10, wisdom: 2, protection: 4, agility: 3 }
      },
      {
        text: {
          en: "Wisdom",
          zh: "智慧",
          zhHant: "智慧",
          ko: "지혜",
          ru: "Мудрость",
          jp: "知恵",
          pt: "Sabedoria"
        },
        scores: { strength: 3, wisdom: 10, protection: 5, agility: 2 }
      },
      {
        text: {
          en: "Speed",
          zh: "速度",
          zhHant: "速度",
          ko: "속도",
          ru: "Скорость",
          jp: "速さ",
          pt: "Velocidade"
        },
        scores: { strength: 4, wisdom: 3, protection: 2, agility: 10 }
      },
      {
        text: {
          en: "Stealth",
          zh: "隐藏",
          zhHant: "隱藏",
          ko: "은신",
          ru: "Скрытность",
          jp: "隠密",
          pt: "Furtividade"
        },
        scores: { strength: 2, wisdom: 5, protection: 10, agility: 5 }
      }
    ]
  },
  {
    id: 8,
    text: {
      en: "What sound do you like the most?",
      zh: "你喜欢的声音是？",
      zhHant: "你喜歡的聲音是？",
      ko: "가장 좋아하는 소리는 무엇인가요?",
      ru: "Какой звук вам нравится больше всего?",
      jp: "最も好きな音は何ですか？",
      pt: "Qual som você mais gosta?"
    },
    image: "/images/patronus/question-sound.png",
    answers: [
      {
        text: {
          en: "Thunder",
          zh: "雷声",
          zhHant: "雷聲",
          ko: "천둥소리",
          ru: "Гром",
          jp: "雷",
          pt: "Trovão"
        },
        scores: { strength: 10, wisdom: 4, protection: 3, agility: 5 }
      },
      {
        text: {
          en: "Flowing water",
          zh: "流水声",
          zhHant: "流水聲",
          ko: "흐르는 물소리",
          ru: "Текущая вода",
          jp: "流れる水の音",
          pt: "Água corrente"
        },
        scores: { strength: 3, wisdom: 5, protection: 4, agility: 10 }
      },
      {
        text: {
          en: "Wind",
          zh: "风声",
          zhHant: "風聲",
          ko: "바람소리",
          ru: "Ветер",
          jp: "風の音",
          pt: "Vento"
        },
        scores: { strength: 4, wisdom: 10, protection: 3, agility: 5 }
      },
      {
        text: {
          en: "Silence",
          zh: "寂静",
          zhHant: "寂靜",
          ko: "고요함",
          ru: "Тишина",
          jp: "静寂",
          pt: "Silêncio"
        },
        scores: { strength: 3, wisdom: 6, protection: 10, agility: 3 }
      }
    ]
  }
]; 