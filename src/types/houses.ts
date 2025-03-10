export type HouseName = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff';

export interface House {
  name: HouseName;
  displayName: {
    en: string;
    zh: string;
    zhHant: string;
    ko: string;
    ru: string;
    jp: string;
    pt: string;
  };
  description: {
    en: string;
    zh: string;
    zhHant: string;
    ko: string;
    ru: string;
    jp: string;
    pt: string;
  };
  colors: {
    primary: string;
    secondary: string;
  };
}

export const HOUSES: Record<HouseName, House> = {
  gryffindor: {
    name: 'gryffindor',
    displayName: {
      en: 'Gryffindor',
      zh: '格兰芬多',
      zhHant: '葛萊芬多',
      ko: '그리핀도르',
      ru: 'Гриффиндор',
      jp: 'グリフィンドール',
      pt: 'Grifinória'
    },
    description: {
      en: 'Known for their courage, bravery, and determination. Gryffindors are natural leaders who stand up for what\'s right.',
      zh: '以勇气、勇敢和决心著称。格兰芬多的学生是天生的领袖，他们为正义而战。',
      zhHant: '以勇氣、勇敢和決心著稱。葛萊芬多的學生是天生的領袖，他們為正義而戰。',
      ko: '용기와 대담함, 그리고 결단력으로 유명합니다. 그리핀도르 학생들은 정의를 위해 싸우는 타고난 리더입니다.',
      ru: 'Известны своим мужеством, храбростью и решительностью. Гриффиндорцы - прирожденные лидеры, которые борются за справедливость.',
      jp: '勇気、勇敢さ、そして決意の心で知られています。グリフィンドールの生徒たちは、正義のために立ち上がる生まれながらのリーダーです。',
      pt: 'Conhecidos por sua coragem, bravura e determinação. Os Grifinórios são líderes naturais que lutam pelo que é certo.'
    },
    colors: {
      primary: '#740001',
      secondary: '#D3A625'
    }
  },
  slytherin: {
    name: 'slytherin',
    displayName: {
      en: 'Slytherin',
      zh: '斯莱特林',
      zhHant: '史萊哲林',
      ko: '슬리데린',
      ru: 'Слизерин',
      jp: 'スリザリン',
      pt: 'Sonserina'
    },
    description: {
      en: 'Characterized by ambition, cunning, and resourcefulness. Slytherins are natural leaders who achieve their goals.',
      zh: '以野心、狡黠和足智多谋为特征。斯莱特林的学生是天生的领袖，他们善于实现目标。',
      zhHant: '以野心、狡黠和足智多謀為特徵。史萊哲林的學生是天生的領袖，他們善於實現目標。',
      ko: '야망과 교활함, 그리고 임기응변으로 특징지어집니다. 슬리데린 학생들은 목표를 달성하는 타고난 리더입니다.',
      ru: 'Характеризуются амбициями, хитростью и находчивостью. Слизеринцы - прирожденные лидеры, которые достигают своих целей.',
      jp: '野心、狡猾さ、そして機転の利く性質が特徴です。スリザリンの生徒たちは、目標を達成する生まれながらのリーダーです。',
      pt: 'Caracterizados pela ambição, astúcia e desenvoltura. Os Sonserinos são líderes naturais que alcançam seus objetivos.'
    },
    colors: {
      primary: '#1A472A',
      secondary: '#5D5D5D'
    }
  },
  ravenclaw: {
    name: 'ravenclaw',
    displayName: {
      en: 'Ravenclaw',
      zh: '拉文克劳',
      zhHant: '雷文克勞',
      ko: '래번클로',
      ru: 'Когтевран',
      jp: 'レイブンクロー',
      pt: 'Corvinal'
    },
    description: {
      en: 'Valued for their intelligence, creativity, and wit. Ravenclaws are natural problem solvers with sharp minds.',
      zh: '以智慧、创造力和机智著称。拉文克劳的学生是天生的问题解决者，拥有敏锐的头脑。',
      zhHant: '以智慧、創造力和機智著稱。雷文克勞的學生是天生的問題解決者，擁有敏銳的頭腦。',
      ko: '지성과 창의성, 그리고 재치로 가치를 인정받습니다. 래번클로 학생들은 예리한 두뇌를 가진 타고난 문제 해결사입니다.',
      ru: 'Ценятся за ум, творчество и остроумие. Когтевранцы - прирожденные решатели проблем с острым умом.',
      jp: '知性、創造性、そして機知に富んでいることで評価されています。レイブンクローの生徒たちは、鋭い頭脳を持つ生まれながらの問題解決者です。',
      pt: 'Valorizados por sua inteligência, criatividade e sagacidade. Os Corvinais são solucionadores naturais de problemas com mentes afiadas.'
    },
    colors: {
      primary: '#0E1A40',
      secondary: '#946B2D'
    }
  },
  hufflepuff: {
    name: 'hufflepuff',
    displayName: {
      en: 'Hufflepuff',
      zh: '赫奇帕奇',
      zhHant: '赫夫帕夫',
      ko: '후플푸프',
      ru: 'Пуффендуй',
      jp: 'ハッフルパフ',
      pt: 'Lufa-Lufa'
    },
    description: {
      en: 'Prized for their loyalty, fairness, and hard work. Hufflepuffs are dependable friends who value justice.',
      zh: '以忠诚、公平和勤奋为荣。赫奇帕奇的学生是可靠的朋友，他们重视正义。',
      zhHant: '以忠誠、公平和勤奮為榮。赫夫帕夫的學生是可靠的朋友，他們重視正義。',
      ko: '충성심과 공정성, 그리고 근면성으로 존경받습니다. 후플푸프 학생들은 정의를 소중히 여기는 신뢰할 수 있는 친구입니다.',
      ru: 'Ценятся за верность, справедливость и трудолюбие. Пуффендуйцы - надежные друзья, которые ценят справедливость.',
      jp: '忠誠心、公平さ、そして勤勉さが評価されています。ハッフルパフの生徒たちは、正義を重んじる頼りになる友人です。',
      pt: 'Prezados por sua lealdade, justiça e trabalho árduo. Os Lufa-Lufas são amigos confiáveis que valorizam a justiça.'
    },
    colors: {
      primary: '#FFD800',
      secondary: '#000000'
    }
  }
};
