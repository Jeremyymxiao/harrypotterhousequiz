import { Patronus, PatronusName, PatronusType, PatronusesByType } from '@/types/patronus';

// 按类型分类的守护神
export const PATRONUSES_BY_TYPE: PatronusesByType = {
  strength: ['stag', 'lion', 'bear', 'wolf', 'phoenix', 'dragon', 'eagle'],
  wisdom: ['owl', 'fox', 'raven', 'cat', 'crow', 'lynx', 'snake'],
  protection: ['dog', 'badger', 'unicorn', 'horse', 'elephant', 'boar', 'buffalo'],
  agility: ['rabbit', 'dolphin', 'cheetah', 'swallow', 'otter', 'deer', 'hummingbird']
};

// 守护神详细信息
export const PATRONUSES: Record<string, Patronus> = {
  // 力量型守护神
  stag: {
    name: 'stag',
    type: 'strength',
    displayName: {
      en: 'Stag',
      zh: '牡鹿',
      zhHant: '牡鹿',
      ko: '수사슴',
      ru: 'Олень',
      jp: '牡鹿',
      pt: 'Cervo'
    },
    description: {
      en: 'The stag patronus represents nobility, courage, and protection. Those with this patronus often show great leadership and are willing to protect others at all costs.',
      zh: '牡鹿守护神代表着高贵、勇气和保护。拥有这个守护神的人通常表现出卓越的领导能力，愿意不惜一切代价保护他人。',
      zhHant: '牡鹿守護神代表著高貴、勇氣和保護。擁有這個守護神的人通常表現出卓越的領導能力，願意不惜一切代價保護他人。',
      ko: '수사슴 패트로누스는 고귀함, 용기, 보호를 상징합니다. 이 패트로누스를 가진 사람들은 종종 뛰어난 리더십을 보여주며 다른 사람들을 보호하기 위해 모든 것을 희생할 준비가 되어 있습니다.',
      ru: 'Патронус оленя олицетворяет благородство, храбрость и защиту. Люди с этим патронусом часто проявляют выдающиеся лидерские качества и готовы защищать других любой ценой.',
      jp: '牡鹿の守護霊は高貴さ、勇気、保護を表します。この守護霊を持つ人は優れたリーダーシップを発揮し、他者を守るためなら何でもする覚悟があります。',
      pt: 'O patrono do cervo representa nobreza, coragem e proteção. Aqueles com este patrono frequentemente demonstram grande liderança e estão dispostos a proteger os outros a todo custo.'
    },
    traits: {
      en: ['Brave', 'Noble', 'Protective', 'Loyal', 'Proud'],
      zh: ['勇敢', '高贵', '保护', '忠诚', '骄傲'],
      zhHant: ['勇敢', '高貴', '保護', '忠誠', '驕傲'],
      ko: ['용감함', '고귀함', '보호적', '충성스러움', '자랑스러움'],
      ru: ['Храбрый', 'Благородный', 'Защищающий', 'Верный', 'Гордый'],
      jp: ['勇敢', '高貴', '保護的', '忠実', '誇り高い'],
      pt: ['Corajoso', 'Nobre', 'Protetor', 'Leal', 'Orgulhoso']
    },
    famousWizards: {
      en: ['Harry Potter', 'James Potter'],
      zh: ['哈利·波特', '詹姆·波特'],
      zhHant: ['哈利·波特', '詹姆·波特'],
      ko: ['해리 포터', '제임스 포터'],
      ru: ['Гарри Поттер', 'Джеймс Поттер'],
      jp: ['ハリー・ポッター', 'ジェームズ・ポッター'],
      pt: ['Harry Potter', 'James Potter']
    },
    colors: {
      primary: '#6E3B14',
      secondary: '#C9A66B'
    }
  },
  lion: {
    name: 'lion',
    type: 'strength',
    displayName: {
      en: 'Lion',
      zh: '狮子',
      zhHant: '獅子',
      ko: '사자',
      ru: 'Лев',
      jp: 'ライオン',
      pt: 'Leão'
    },
    description: {
      en: 'The lion patronus symbolizes bravery, strength, and leadership. Those with this patronus often have a natural ability to lead others and face challenges head-on.',
      zh: '狮子守护神象征着勇气、力量和领导力。拥有这个守护神的人通常有天生的领导才能，能够直面挑战。',
      zhHant: '獅子守護神象徵著勇氣、力量和領導力。擁有這個守護神的人通常有天生的領導才能，能夠直面挑戰。',
      ko: '사자 패트로누스는 용감함, 힘, 리더십을 상징합니다. 이 패트로누스를 가진 사람들은 종종 타인을 이끌고 도전에 정면으로 맞설 수 있는 타고난 능력을 가지고 있습니다.',
      ru: 'Патронус льва символизирует храбрость, силу и лидерство. Люди с этим патронусом часто обладают природным умением вести за собой других и решительно встречать трудности.',
      jp: 'ライオンの守護霊は勇気、強さ、リーダーシップを象徴します。この守護霊を持つ人は生まれつきのリーダーシップがあり、課題に直面しても臆することがありません。',
      pt: 'O patrono do leão simboliza bravura, força e liderança. Aqueles com este patrono frequentemente têm uma habilidade natural para liderar outros e enfrentar desafios de frente.'
    },
    traits: {
      en: ['Bold', 'Strong', 'Authoritative', 'Fearless', 'Determined'],
      zh: ['大胆', '强壮', '权威', '无畏', '坚定'],
      zhHant: ['大膽', '強壯', '權威', '無畏', '堅定'],
      ko: ['대담함', '강함', '권위적', '두려움 없음', '결단력'],
      ru: ['Смелый', 'Сильный', 'Властный', 'Бесстрашный', 'Решительный'],
      jp: ['大胆', '強い', '権威のある', '恐れ知らず', '決断力のある'],
      pt: ['Ousado', 'Forte', 'Autoritário', 'Destemido', 'Determinado']
    },
    famousWizards: {
      en: ['Godric Gryffindor', 'Luna Lovegood'],
      zh: ['戈德里克·格兰芬多', '卢娜·洛夫古德'],
      zhHant: ['戈德里克·葛萊芬多', '露娜·洛夫古德'],
      ko: ['고드릭 그리핀도르', '루나 러브굿'],
      ru: ['Годрик Гриффиндор', 'Полумна Лавгуд'],
      jp: ['ゴドリック・グリフィンドール', 'ルーナ・ラブグッド'],
      pt: ['Godric Gryffindor', 'Luna Lovegood']
    },
    colors: {
      primary: '#C5973A',
      secondary: '#740001'
    }
  },
  bear: {
    name: 'bear',
    type: 'strength',
    displayName: {
      en: 'Bear',
      zh: '熊',
      zhHant: '熊',
      ko: '곰',
      ru: 'Медведь',
      jp: '熊',
      pt: 'Urso'
    },
    description: {
      en: 'The bear patronus embodies strength, endurance, and protection. Those with this patronus often exhibit immense inner power and resilience when facing challenges.',
      zh: '熊守护神体现了力量、耐力和保护。拥有这个守护神的人在面对挑战时往往表现出巨大的内在力量和韧性。',
      zhHant: '熊守護神體現了力量、耐力和保護。擁有這個守護神的人在面對挑戰時往往表現出巨大的內在力量和韌性。',
      ko: '곰 패트로누스는 힘, 지구력 및 보호를 상징합니다. 이 패트로누스를 가진 사람들은 도전에 직면했을 때 종종 엄청난 내면의 힘과 회복력을 보여줍니다.',
      ru: 'Патронус медведя воплощает силу, выносливость и защиту. Люди с этим патронусом часто проявляют огромную внутреннюю силу и стойкость при столкновении с трудностями.',
      jp: '熊の守護霊は強さ、忍耐力、そして保護を象徴します。この守護霊を持つ人は、困難に直面した時に巨大な内なる力と回復力を示すことがよくあります。',
      pt: 'O patrono do urso incorpora força, resistência e proteção. Aqueles com este patrono frequentemente exibem imenso poder interior e resiliência ao enfrentar desafios.'
    },
    traits: {
      en: ['Powerful', 'Protective', 'Resilient', 'Grounded', 'Courageous'],
      zh: ['强大', '保护', '坚韧', '踏实', '勇敢'],
      zhHant: ['強大', '保護', '堅韌', '踏實', '勇敢'],
      ko: ['강력함', '보호적', '회복력이 강한', '현실적인', '용감한'],
      ru: ['Мощный', 'Защищающий', 'Стойкий', 'Приземленный', 'Отважный'],
      jp: ['強力', '保護的', '回復力のある', '地に足のついた', '勇敢'],
      pt: ['Poderoso', 'Protetor', 'Resiliente', 'Realista', 'Corajoso']
    },
    famousWizards: {
      en: ['Hagrid', 'Neville Longbottom'],
      zh: ['海格', '纳威·隆巴顿'],
      zhHant: ['海格', '奈威·隆巴頓'],
      ko: ['해그리드', '네빌 롱바텀'],
      ru: ['Хагрид', 'Невилл Долгопупс'],
      jp: ['ハグリッド', 'ネビル・ロングボトム'],
      pt: ['Hagrid', 'Neville Longbottom']
    },
    colors: {
      primary: '#593E1A',
      secondary: '#8B5A2B'
    }
  },
  wolf: {
    name: 'wolf',
    type: 'strength',
    displayName: {
      en: 'Wolf',
      zh: '狼',
      zhHant: '狼',
      ko: '늑대',
      ru: 'Волк',
      jp: '狼',
      pt: 'Lobo'
    },
    description: {
      en: 'The wolf patronus represents loyalty, instinct, and fierce independence. Those with this patronus often possess strong familial bonds and exceptional intuition.',
      zh: '狼守护神代表着忠诚、直觉和强烈的独立性。拥有这个守护神的人通常拥有强烈的家庭纽带和非凡的直觉。',
      zhHant: '狼守護神代表著忠誠、直覺和強烈的獨立性。擁有這個守護神的人通常擁有強烈的家庭紐帶和非凡的直覺。',
      ko: '늑대 패트로누스는 충성심, 본능 및 강한 독립성을 상징합니다. 이 패트로누스를 가진 사람들은 종종 강한 가족 유대와 뛰어난 직관력을 가지고 있습니다.',
      ru: 'Патронус волка олицетворяет верность, инстинкт и сильную независимость. Люди с этим патронусом часто обладают крепкими семейными узами и исключительной интуицией.',
      jp: '狼の守護霊は忠誠心、本能、そして激しい独立心を表しています。この守護霊を持つ人は強い家族の絆と卓越した直感を持っていることが多いです。',
      pt: 'O patrono do lobo representa lealdade, instinto e independência feroz. Aqueles com este patrono frequentemente possuem fortes laços familiares e intuição excepcional.'
    },
    traits: {
      en: ['Loyal', 'Intuitive', 'Independent', 'Fierce', 'Protective'],
      zh: ['忠诚', '直觉', '独立', '凶猛', '保护'],
      zhHant: ['忠誠', '直覺', '獨立', '兇猛', '保護'],
      ko: ['충성스러운', '직관적인', '독립적인', '사나운', '보호적인'],
      ru: ['Верный', 'Интуитивный', 'Независимый', 'Свирепый', 'Защищающий'],
      jp: ['忠実', '直感的', '独立', '激しい', '保護的'],
      pt: ['Leal', 'Intuitivo', 'Independente', 'Feroz', 'Protetor']
    },
    famousWizards: {
      en: ['Remus Lupin', 'Tonks'],
      zh: ['莱姆斯·卢平', '唐克斯'],
      zhHant: ['萊姆斯·路平', '東施'],
      ko: ['리무스 루핀', '통스'],
      ru: ['Ремус Люпин', 'Тонкс'],
      jp: ['リーマス・ルーピン', 'トンクス'],
      pt: ['Remus Lupin', 'Tonks']
    },
    colors: {
      primary: '#4E4E4E',
      secondary: '#8D9196'
    }
  },
  phoenix: {
    name: 'phoenix',
    type: 'strength',
    displayName: {
      en: 'Phoenix',
      zh: '凤凰',
      zhHant: '鳳凰',
      ko: '피닉스',
      ru: 'Феникс',
      jp: 'フェニックス',
      pt: 'Fênix'
    },
    description: {
      en: 'The phoenix patronus symbolizes rebirth, transformation, and eternal hope. Those with this rare patronus often possess an extraordinary resilience and the ability to rise from the ashes of defeat.',
      zh: '凤凰守护神象征着重生、转变和永恒的希望。拥有这个罕见守护神的人通常具有非凡的韧性和从失败的灰烬中重生的能力。',
      zhHant: '鳳凰守護神象徵著重生、轉變和永恆的希望。擁有這個罕見守護神的人通常具有非凡的韌性和從失敗的灰燼中重生的能力。',
      ko: '피닉스 패트로누스는 재탄생, 변형 및 영원한 희망을 상징합니다. 이런 희귀한 패트로누스를 가진 사람들은 종종 놀라운 회복력과 패배의 잿더미에서 일어날 수 있는 능력을 가지고 있습니다.',
      ru: 'Патронус феникса символизирует возрождение, трансформацию и вечную надежду. Люди с этим редким патронусом часто обладают необычайной стойкостью и способностью возрождаться из пепла поражения.',
      jp: 'フェニックスの守護霊は再生、変容、そして永遠の希望を象徴しています。この珍しい守護霊を持つ人は、しばしば並外れた回復力と敗北の灰から立ち上がる能力を持っています。',
      pt: 'O patrono da fênix simboliza renascimento, transformação e esperança eterna. Aqueles com este patrono raro frequentemente possuem uma resiliência extraordinária e a capacidade de ressurgir das cinzas da derrota.'
    },
    traits: {
      en: ['Resilient', 'Transformative', 'Hopeful', 'Enduring', 'Magical'],
      zh: ['坚韧', '变革', '充满希望', '持久', '神奇'],
      zhHant: ['堅韌', '變革', '充滿希望', '持久', '神奇'],
      ko: ['회복력 있는', '변화시키는', '희망적인', '인내하는', '마법적인'],
      ru: ['Стойкий', 'Преобразующий', 'Полный надежды', 'Выносливый', 'Магический'],
      jp: ['回復力のある', '変容的', '希望に満ちた', '永続的', '魔法的'],
      pt: ['Resiliente', 'Transformador', 'Esperançoso', 'Duradouro', 'Mágico']
    },
    famousWizards: {
      en: ['Albus Dumbledore', 'Fawkes (Phoenix)'],
      zh: ['阿不思·邓布利多', '福克斯(凤凰)'],
      zhHant: ['阿不思·鄧不利多', '福克斯(鳳凰)'],
      ko: ['알버스 덤블도어', '폭스(피닉스)'],
      ru: ['Альбус Дамблдор', 'Фоукс (Феникс)'],
      jp: ['アルバス・ダンブルドア', 'フォークス（フェニックス）'],
      pt: ['Albus Dumbledore', 'Fawkes (Fênix)']
    },
    colors: {
      primary: '#FF5733',
      secondary: '#FFD700'
    }
  },
  dragon: {
    name: 'dragon',
    type: 'strength',
    displayName: {
      en: 'Dragon',
      zh: '龙',
      zhHant: '龍',
      ko: '드래곤',
      ru: 'Дракон',
      jp: 'ドラゴン',
      pt: 'Dragão'
    },
    description: {
      en: 'The dragon patronus embodies supreme power, majesty, and elemental force. Those with this extremely rare patronus often possess a commanding presence and remarkable magical abilities.',
      zh: '龙守护神体现了至高无上的力量、威严和元素之力。拥有这种极为罕见的守护神的人通常拥有威严的存在感和非凡的魔法能力。',
      zhHant: '龍守護神體現了至高無上的力量、威嚴和元素之力。擁有這種極為罕見的守護神的人通常擁有威嚴的存在感和非凡的魔法能力。',
      ko: '드래곤 패트로누스는 최고의 힘, 위엄 및 원소력을 상징합니다. 이 매우 희귀한 패트로누스를 가진 사람들은 종종 위압적인 존재감과 놀라운 마법 능력을 보유하고 있습니다.',
      ru: 'Патронус дракона воплощает высшую силу, величие и элементарную мощь. Люди с этим чрезвычайно редким патронусом часто обладают повелительным присутствием и замечательными магическими способностями.',
      jp: 'ドラゴンの守護霊は至高の力、威厳、そして元素の力を象徴しています。この非常に珍しい守護霊を持つ人は、しばしば人を引き付ける存在感と顕著な魔法能力を持っています。',
      pt: 'O patrono do dragão incorpora poder supremo, majestade e força elemental. Aqueles com este patrono extremamente raro frequentemente possuem uma presença dominante e habilidades mágicas notáveis.'
    },
    traits: {
      en: ['Powerful', 'Majestic', 'Fierce', 'Commanding', 'Ancient'],
      zh: ['强大', '威严', '凶猛', '有威严', '古老'],
      zhHant: ['強大', '威嚴', '兇猛', '有威嚴', '古老'],
      ko: ['강력한', '위엄 있는', '사나운', '명령적인', '고대의'],
      ru: ['Мощный', 'Величественный', 'Свирепый', 'Повелительный', 'Древний'],
      jp: ['強力', '威厳のある', '獰猛', '威厳のある', '古代の'],
      pt: ['Poderoso', 'Majestoso', 'Feroz', 'Dominante', 'Antigo']
    },
    famousWizards: {
      en: ['Merlin', 'Charlie Weasley'],
      zh: ['梅林', '查理·韦斯莱'],
      zhHant: ['梅林', '查理·衛斯理'],
      ko: ['멀린', '찰리 위즐리'],
      ru: ['Мерлин', 'Чарли Уизли'],
      jp: ['マーリン', 'チャーリー・ウィーズリー'],
      pt: ['Merlin', 'Charlie Weasley']
    },
    colors: {
      primary: '#A31621',
      secondary: '#3D0B11'
    }
  },
  eagle: {
    name: 'eagle',
    type: 'strength',
    displayName: {
      en: 'Eagle',
      zh: '鹰',
      zhHant: '鷹',
      ko: '독수리',
      ru: 'Орёл',
      jp: '鷲',
      pt: 'Águia'
    },
    description: {
      en: 'The eagle patronus represents vision, freedom, and courage from a higher perspective. Those with this patronus often possess sharp insight and the ability to rise above challenges with grace.',
      zh: '鹰守护神代表着视野、自由和从更高角度看待的勇气。拥有这个守护神的人常常拥有敏锐的洞察力，能够优雅地超越挑战。',
      zhHant: '鷹守護神代表著視野、自由和從更高角度看待的勇氣。擁有這個守護神的人常常擁有敏銳的洞察力，能夠優雅地超越挑戰。',
      ko: '독수리 패트로누스는 비전, 자유 및 높은 관점에서의 용기를 상징합니다. 이 패트로누스를 가진 사람들은 종종 날카로운 통찰력과 우아하게 도전을 극복할 수 있는 능력을 가지고 있습니다.',
      ru: 'Патронус орла олицетворяет видение, свободу и храбрость с более высокой перспективы. Люди с этим патронусом часто обладают острым проницательностью и способностью изящно подниматься над трудностями.',
      jp: '鷲の守護霊は、視野、自由、そしてより高い視点からの勇気を表しています。この守護霊を持つ人は、鋭い洞察力と優雅に困難を乗り越える能力を持つことが多いです。',
      pt: 'O patrono da águia representa visão, liberdade e coragem de uma perspectiva mais elevada. Aqueles com este patrono frequentemente possuem percepção aguçada e a capacidade de se elevar acima dos desafios com graça.'
    },
    traits: {
      en: ['Sharp-sighted', 'Free-spirited', 'Courageous', 'Determined', 'Intelligent'],
      zh: ['目光敏锐', '自由精神', '勇敢', '坚定', '聪明'],
      zhHant: ['目光敏銳', '自由精神', '勇敢', '堅定', '聰明'],
      ko: ['날카로운 시력', '자유로운 정신', '용감한', '단호한', '지적인'],
      ru: ['Острый взгляд', 'Свободолюбивый', 'Смелый', 'Решительный', 'Умный'],
      jp: ['鋭い視力', '自由な精神', '勇敢', '決然', '知的'],
      pt: ['Visão aguçada', 'Espírito livre', 'Corajoso', 'Determinado', 'Inteligente']
    },
    famousWizards: {
      en: ['Rowena Ravenclaw', 'Garrick Ollivander'],
      zh: ['罗伊纳·拉文克劳', '加里克·奥利凡德'],
      zhHant: ['羅伊納·雷文克勞', '加里克·奧利凡德'],
      ko: ['로웨나 래번클로', '개릭 올리밴더'],
      ru: ['Кандида Когтевран', 'Гаррик Олливандер'],
      jp: ['ロウェナ・レイブンクロー', 'ガリック・オリバンダー'],
      pt: ['Rowena Ravenclaw', 'Garrick Olivaras']
    },
    colors: {
      primary: '#0E1A40',
      secondary: '#946B2D'
    }
  },
  // 智慧型守护神
  owl: {
    name: 'owl',
    type: 'wisdom',
    displayName: {
      en: 'Owl',
      zh: '猫头鹰',
      zhHant: '貓頭鷹',
      ko: '올빼미',
      ru: 'Сова',
      jp: 'フクロウ',
      pt: 'Coruja'
    },
    description: {
      en: 'The owl patronus symbolizes wisdom, intuition, and silent knowledge. Those with this patronus often possess great intellectual depth and observation skills.',
      zh: '猫头鹰守护神象征着智慧、直觉和无声的知识。拥有这个守护神的人通常拥有深厚的知识和观察能力。',
      zhHant: '貓頭鷹守護神象徵著智慧、直覺和無聲的知識。擁有這個守護神的人通常擁有深厚的知識和觀察能力。',
      ko: '올빼미 패트로누스는 지혜, 직관 및 조용한 지식을 상징합니다. 이 패트로누스를 가진 사람들은 종종 뛰어난 지적 깊이와 관찰 능력을 가지고 있습니다.',
      ru: 'Патронус совы символизирует мудрость, интуицию и молчаливое знание. Люди с этим патронусом часто обладают большой интеллектуальной глубиной и навыками наблюдения.',
      jp: 'フクロウの守護霊は知恵、直感、そして沈黙の知識を象徴しています。この守護霊を持つ人は、しばしば優れた知的な深みと観察力を持っています。',
      pt: 'O patrono da coruja simboliza sabedoria, intuição e conhecimento silencioso. Aqueles com este patrono frequentemente possuem grande profundidade intelectual e habilidades de observação.'
    },
    traits: {
      en: ['Wise', 'Perceptive', 'Patient', 'Observant', 'Mysterious'],
      zh: ['聪明', '洞察力强', '耐心', '善于观察', '神秘'],
      zhHant: ['聰明', '洞察力強', '耐心', '善於觀察', '神秘'],
      ko: ['현명한', '통찰력 있는', '인내심 있는', '관찰력 있는', '신비로운'],
      ru: ['Мудрый', 'Проницательный', 'Терпеливый', 'Наблюдательный', 'Таинственный'],
      jp: ['賢明', '知覚力の鋭い', '忍耐強い', '観察力のある', '神秘的'],
      pt: ['Sábio', 'Perceptivo', 'Paciente', 'Observador', 'Misterioso']
    },
    famousWizards: {
      en: ['Hermione Granger', 'Professor McGonagall'],
      zh: ['赫敏·格兰杰', '麦格教授'],
      zhHant: ['妙麗·格蘭傑', '麥教授'],
      ko: ['헤르미온느 그레인저', '맥고나걸 교수'],
      ru: ['Гермиона Грейнджер', 'Профессор Макгонагалл'],
      jp: ['ハーマイオニー・グレンジャー', 'マクゴナガル教授'],
      pt: ['Hermione Granger', 'Professora McGonagall']
    },
    colors: {
      primary: '#6C7A89',
      secondary: '#D2D7D3'
    }
  },
  fox: {
    name: 'fox',
    type: 'wisdom',
    displayName: {
      en: 'Fox',
      zh: '狐狸',
      zhHant: '狐狸',
      ko: '여우',
      ru: 'Лиса',
      jp: '狐',
      pt: 'Raposa'
    },
    description: {
      en: 'The fox patronus represents cunning, adaptability, and quick thinking. Those with this patronus often possess high intelligence and remarkable problem-solving abilities.',
      zh: '狐狸守护神代表着机智、适应性和敏捷的思考能力。拥有这个守护神的人通常拥有高智商和卓越的解决问题的能力。',
      zhHant: '狐狸守護神代表著機智、適應性和敏捷的思考能力。擁有這個守護神的人通常擁有高智商和卓越的解決問題的能力。',
      ko: '여우 패트로누스는 교활함, 적응력 및 빠른 사고를 나타냅니다. 이 패트로누스를 가진 사람들은 종종 높은 지능과 놀라운 문제 해결 능력을 보유하고 있습니다.',
      ru: 'Патронус лисы олицетворяет хитрость, приспособляемость и быстрое мышление. Люди с этим патронусом часто обладают высоким интеллектом и замечательными способностями к решению проблем.',
      jp: '狐の守護霊は賢さ、適応力、そして素早い思考力を象徴しています。この守護霊を持つ人は、高い知性と優れた問題解決能力を持つことが多いです。',
      pt: 'O patrono da raposa representa astúcia, adaptabilidade e raciocínio rápido. Aqueles com este patrono frequentemente possuem alta inteligência e notáveis habilidades de resolução de problemas.'
    },
    traits: {
      en: ['Clever', 'Adaptable', 'Quick-minded', 'Strategic', 'Resourceful'],
      zh: ['聪明', '适应性强', '思维敏捷', '有策略', '足智多谋'],
      zhHant: ['聰明', '適應性強', '思維敏捷', '有策略', '足智多謀'],
      ko: ['영리한', '적응력 있는', '사고가 빠른', '전략적인', '자원이 풍부한'],
      ru: ['Умный', 'Адаптивный', 'Быстро соображающий', 'Стратегический', 'Находчивый'],
      jp: ['利口', '適応力がある', '頭の回転が速い', '戦略的', '機知に富んだ'],
      pt: ['Esperto', 'Adaptável', 'Mente rápida', 'Estratégico', 'Engenhoso']
    },
    famousWizards: {
      en: ['Seraphina Picquery', 'Percy Weasley'],
      zh: ['瑟拉菲娜·皮奎里', '珀西·韦斯莱'],
      zhHant: ['瑟拉菲娜·皮奎里', '珀西·衛斯理'],
      ko: ['세라피나 피쿼리', '퍼시 위즐리'],
      ru: ['Серафина Пиквери', 'Перси Уизли'],
      jp: ['セラフィナ・ピッカリー', 'パーシー・ウィーズリー'],
      pt: ['Seraphina Picquery', 'Percy Weasley']
    },
    colors: {
      primary: '#D35400',
      secondary: '#F39C12'
    }
  },
  raven: {
    name: 'raven',
    type: 'wisdom',
    displayName: {
      en: 'Raven',
      zh: '渡鸦',
      zhHant: '烏鴉',
      ko: '까마귀',
      ru: 'Ворон',
      jp: 'カラス',
      pt: 'Corvo'
    },
    description: {
      en: 'The raven patronus signifies mystery, intelligence, and magical transformation. Those with this patronus often possess deep insight and the ability to navigate between different worlds of knowledge.',
      zh: '渡鸦守护神标志着神秘、智慧和魔法转变。拥有这个守护神的人通常拥有深刻的洞察力和在不同知识世界之间穿梭的能力。',
      zhHant: '烏鴉守護神標誌著神秘、智慧和魔法轉變。擁有這個守護神的人通常擁有深刻的洞察力和在不同知識世界之間穿梭的能力。',
      ko: '까마귀 패트로누스는 신비, 지능 및 마법적 변형을 의미합니다. 이 패트로누스를 가진 사람들은 종종 깊은 통찰력과 지식의 다른 세계 사이를 탐색하는 능력을 가지고 있습니다.',
      ru: 'Патронус ворона означает тайну, интеллект и магическую трансформацию. Люди с этим патронусом часто обладают глубоким пониманием и способностью перемещаться между разными мирами знаний.',
      jp: 'カラスの守護霊は神秘性、知性、そして魔法的な変容を象徴しています。この守護霊を持つ人は、深い洞察力と様々な知識の世界を行き来する能力を持っていることが多いです。',
      pt: 'O patrono do corvo significa mistério, inteligência e transformação mágica. Aqueles com este patrono frequentemente possuem profunda percepção e a capacidade de navegar entre diferentes mundos de conhecimento.'
    },
    traits: {
      en: ['Intelligent', 'Mystical', 'Transformative', 'Insightful', 'Magical'],
      zh: ['聪明', '神秘', '变革', '有洞察力', '神奇'],
      zhHant: ['聰明', '神秘', '變革', '有洞察力', '神奇'],
      ko: ['지적인', '신비한', '변화시키는', '통찰력 있는', '마법적인'],
      ru: ['Умный', 'Мистический', 'Трансформирующий', 'Проницательный', 'Магический'],
      jp: ['知的', '神秘的', '変容的', '洞察力のある', '魔法的'],
      pt: ['Inteligente', 'Místico', 'Transformador', 'Perspicaz', 'Mágico']
    },
    famousWizards: {
      en: ['Ravena Ravenclaw', 'Helena Ravenclaw'],
      zh: ['拉文纳·拉文克劳', '海伦娜·拉文克劳'],
      zhHant: ['拉文納·雷文克勞', '海倫娜·雷文克勞'],
      ko: ['라베나 래번클로', '헬레나 래번클로'],
      ru: ['Кандида Когтевран', 'Елена Когтевран'],
      jp: ['ロウェナ・レイブンクロー', 'ヘレナ・レイブンクロー'],
      pt: ['Rowena Ravenclaw', 'Helena Ravenclaw']
    },
    colors: {
      primary: '#24252A',
      secondary: '#5D535E'
    }
  },
  cat: {
    name: 'cat',
    type: 'wisdom',
    displayName: {
      en: 'Cat',
      zh: '猫',
      zhHant: '貓',
      ko: '고양이',
      ru: 'Кошка',
      jp: '猫',
      pt: 'Gato'
    },
    description: {
      en: 'The cat patronus embodies independence, intuition, and precise observation. Those with this patronus often possess a graceful intellect and the ability to see what others miss.',
      zh: '猫守护神体现了独立、直觉和精确的观察能力。拥有这个守护神的人通常拥有优雅的智慧和看到他人忽略事物的能力。',
      zhHant: '貓守護神體現了獨立、直覺和精確的觀察能力。擁有這個守護神的人通常擁有優雅的智慧和看到他人忽略事物的能力。',
      ko: '고양이 패트로누스는 독립성, 직관력 및 정확한 관찰력을 상징합니다. 이 패트로누스를 가진 사람들은 종종 우아한 지성과 다른 사람들이 놓치는 것을 볼 수 있는 능력을 보유하고 있습니다.',
      ru: 'Патронус кошки воплощает независимость, интуицию и точное наблюдение. Люди с этим патронусом часто обладают изящным интеллектом и способностью видеть то, что другие упускают.',
      jp: '猫の守護霊は独立性、直感、そして精密な観察力を体現しています。この守護霊を持つ人は、優雅な知性と他人が見落とすものを見る能力を持っていることが多いです。',
      pt: 'O patrono do gato incorpora independência, intuição e observação precisa. Aqueles com este patrono frequentemente possuem um intelecto gracioso e a capacidade de ver o que outros perdem.'
    },
    traits: {
      en: ['Independent', 'Intuitive', 'Observant', 'Graceful', 'Mysterious'],
      zh: ['独立', '直觉', '善于观察', '优雅', '神秘'],
      zhHant: ['獨立', '直覺', '善於觀察', '優雅', '神秘'],
      ko: ['독립적인', '직관적인', '관찰력 있는', '우아한', '신비로운'],
      ru: ['Независимый', 'Интуитивный', 'Наблюдательный', 'Изящный', 'Таинственный'],
      jp: ['独立', '直感的', '観察力のある', '優雅', '神秘的'],
      pt: ['Independente', 'Intuitivo', 'Observador', 'Gracioso', 'Misterioso']
    },
    famousWizards: {
      en: ['Minerva McGonagall', 'Dolores Umbridge'],
      zh: ['米勒娃·麦格', '多洛雷斯·乌姆里奇'],
      zhHant: ['米奈娃·麥教授', '多洛雷斯·恩不里奇'],
      ko: ['미네르바 맥고나걸', '돌로레스 엄브릿지'],
      ru: ['Минерва Макгонагалл', 'Долорес Амбридж'],
      jp: ['ミネルバ・マクゴナガル', 'ドローレス・アンブリッジ'],
      pt: ['Minerva McGonagall', 'Dolores Umbridge']
    },
    colors: {
      primary: '#6A5D63',
      secondary: '#C4B2BC'
    }
  },
  crow: {
    name: 'crow',
    type: 'wisdom',
    displayName: {
      en: 'Crow',
      zh: '乌鸦',
      zhHant: '烏鴉',
      ko: '까마귀',
      ru: 'Ворона',
      jp: 'カラス',
      pt: 'Gralha'
    },
    description: {
      en: 'The crow patronus symbolizes intelligence, adaptability, and the ability to see hidden truths. Those with this patronus often possess sharp minds and a knack for navigating complex situations.',
      zh: '乌鸦守护神象征着智慧、适应性和看到隐藏真相的能力。拥有这个守护神的人通常拥有敏锐的思维和驾驭复杂情况的诀窍。',
      zhHant: '烏鴉守護神象徵著智慧、適應性和看到隱藏真相的能力。擁有這個守護神的人通常擁有敏銳的思維和駕馭複雜情況的訣竅。',
      ko: '까마귀 패트로누스는 지능, 적응력 및 숨겨진 진실을 볼 수 있는 능력을 상징합니다. 이 패트로누스를 가진 사람들은 종종 예리한 두뇌와 복잡한 상황을 탐색하는 재능을 가지고 있습니다.',
      ru: 'Патронус вороны символизирует интеллект, приспособляемость и способность видеть скрытые истины. Люди с этим патронусом часто обладают острым умом и умением ориентироваться в сложных ситуациях.',
      jp: 'カラスの守護霊は知性、適応力、そして隠された真実を見抜く能力を象徴しています。この守護霊を持つ人は鋭い頭脳と複雑な状況をうまく乗り切るコツを持っていることが多いです。',
      pt: 'O patrono da gralha simboliza inteligência, adaptabilidade e a capacidade de ver verdades ocultas. Aqueles com este patrono frequentemente possuem mentes afiadas e um talento para navegar em situações complexas.'
    },
    traits: {
      en: ['Clever', 'Adaptable', 'Perceptive', 'Resourceful', 'Transformative'],
      zh: ['聪明', '适应力强', '敏锐', '足智多谋', '变革'],
      zhHant: ['聰明', '適應力強', '敏銳', '足智多謀', '變革'],
      ko: ['영리한', '적응력 있는', '통찰력 있는', '자원이 풍부한', '변혁적인'],
      ru: ['Умный', 'Адаптивный', 'Проницательный', 'Находчивый', 'Трансформирующий'],
      jp: ['賢い', '適応力がある', '知覚力の鋭い', '機知に富んだ', '変容的'],
      pt: ['Esperto', 'Adaptável', 'Perspicaz', 'Engenhoso', 'Transformador']
    },
    famousWizards: {
      en: ['Filius Flitwick', 'Moaning Myrtle'],
      zh: ['菲利乌斯·弗立维', '哭泣的桃金娘'],
      zhHant: ['菲力屋·孚立維', '哭泣的麥朵'],
      ko: ['필리우스 플리트윅', '울보 머틀'],
      ru: ['Филиус Флитвик', 'Плакса Миртл'],
      jp: ['フィリウス・フリットウィック', '嘆きのマートル'],
      pt: ['Filius Flitwick', 'Murta Que Geme']
    },
    colors: {
      primary: '#1C1C1C',
      secondary: '#3C3C3C'
    }
  },
  lynx: {
    name: 'lynx',
    type: 'wisdom',
    displayName: {
      en: 'Lynx',
      zh: '猞猁',
      zhHant: '猞猁',
      ko: '스라소니',
      ru: 'Рысь',
      jp: 'オオヤマネコ',
      pt: 'Lince'
    },
    description: {
      en: 'The lynx patronus represents heightened awareness, intuition, and the revelation of hidden knowledge. Those with this patronus often possess exceptional perceptive abilities and secret wisdom.',
      zh: '猞猁守护神代表着高度的觉察力、直觉和隐藏知识的揭示。拥有这个守护神的人通常拥有非凡的感知能力和秘密的智慧。',
      zhHant: '猞猁守護神代表著高度的覺察力、直覺和隱藏知識的揭示。擁有這個守護神的人通常擁有非凡的感知能力和秘密的智慧。',
      ko: '스라소니 패트로누스는 고도의 인식, 직관력 및 숨겨진 지식의 계시를 나타냅니다. 이 패트로누스를 가진 사람들은 종종 뛰어난 인지 능력과 비밀스러운 지혜를 가지고 있습니다.',
      ru: 'Патронус рыси олицетворяет повышенную осведомленность, интуицию и раскрытие скрытых знаний. Люди с этим патронусом часто обладают исключительными восприимчивыми способностями и тайной мудростью.',
      jp: 'オオヤマネコの守護霊は高められた意識、直感、そして隠された知識の啓示を表しています。この守護霊を持つ人は、例外的な知覚能力と秘密の知恵を持っていることが多いです。',
      pt: 'O patrono do lince representa consciência elevada, intuição e revelação de conhecimento oculto. Aqueles com este patrono frequentemente possuem habilidades perceptivas excepcionais e sabedoria secreta.'
    },
    traits: {
      en: ['Intuitive', 'Perceptive', 'Secretive', 'Patient', 'Discerning'],
      zh: ['直觉', '敏锐', '保密', '耐心', '有辨别力'],
      zhHant: ['直覺', '敏銳', '保密', '耐心', '有辨別力'],
      ko: ['직관적인', '통찰력 있는', '비밀스러운', '인내심 있는', '분별력 있는'],
      ru: ['Интуитивный', 'Проницательный', 'Скрытный', 'Терпеливый', 'Разборчивый'],
      jp: ['直観的', '鋭敏', '秘密', '忍耐強い', '識別力のある'],
      pt: ['Intuitivo', 'Perceptivo', 'Reservado', 'Paciente', 'Perspicaz']
    },
    famousWizards: {
      en: ['Kingsley Shacklebolt', 'Sybill Trelawney'],
      zh: ['金斯莱·沙克尔', '西比尔·特里劳妮'],
      zhHant: ['金利·俠克柏', '西碧·崔勞妮'],
      ko: ['킹슬리 샤클볼트', '시빌 트릴로니'],
      ru: ['Кингсли Шеклболт', 'Сивилла Трелони'],
      jp: ['キングズリー・シャックルボルト', 'シビル・トレローニー'],
      pt: ['Kingsley Shacklebolt', 'Sibila Trelawney']
    },
    colors: {
      primary: '#6B5B4C',
      secondary: '#9F8170'
    }
  },
  snake: {
    name: 'snake',
    type: 'wisdom',
    displayName: {
      en: 'Snake',
      zh: '蛇',
      zhHant: '蛇',
      ko: '뱀',
      ru: 'Змея',
      jp: '蛇',
      pt: 'Serpente'
    },
    description: {
      en: 'The snake patronus embodies wisdom, transformation, and healing knowledge. Those with this patronus often possess subtle intelligence and the capacity for profound personal transformation.',
      zh: '蛇守护神体现了智慧、转变和治愈知识。拥有这个守护神的人通常拥有微妙的智慧和深刻个人转变的能力。',
      zhHant: '蛇守護神體現了智慧、轉變和治癒知識。擁有這個守護神的人通常擁有微妙的智慧和深刻個人轉變的能力。',
      ko: '뱀 패트로누스는 지혜, 변형 및 치유 지식을 상징합니다. 이 패트로누스를 가진 사람들은 종종 미묘한 지능과 깊은 개인적 변화의 능력을 보유하고 있습니다.',
      ru: 'Патронус змеи воплощает мудрость, трансформацию и исцеляющие знания. Люди с этим патронусом часто обладают тонким интеллектом и способностью к глубокому личностному преобразованию.',
      jp: '蛇の守護霊は知恵、変容、そして癒しの知識を体現しています。この守護霊を持つ人は、微妙な知性と深い個人的変容の能力を持っていることが多いです。',
      pt: 'O patrono da serpente incorpora sabedoria, transformação e conhecimento de cura. Aqueles com este patrono frequentemente possuem inteligência sutil e capacidade de profunda transformação pessoal.'
    },
    traits: {
      en: ['Wise', 'Transformative', 'Healing', 'Subtle', 'Enigmatic'],
      zh: ['聪明', '变革', '治愈', '微妙', '神秘'],
      zhHant: ['聰明', '變革', '治癒', '微妙', '神秘'],
      ko: ['현명한', '변화시키는', '치유하는', '미묘한', '수수께끼 같은'],
      ru: ['Мудрый', 'Трансформирующий', 'Исцеляющий', 'Тонкий', 'Загадочный'],
      jp: ['賢明', '変容的', '癒し', '微妙', '謎めいた'],
      pt: ['Sábio', 'Transformador', 'Curativo', 'Sutil', 'Enigmático']
    },
    famousWizards: {
      en: ['Severus Snape', 'Salazar Slytherin'],
      zh: ['西弗勒斯·斯内普', '萨拉查·斯莱特林'],
      zhHant: ['賽佛勒斯·石內卜', '薩拉札·史萊哲林'],
      ko: ['세베루스 스네이프', '살라자르 슬리데린'],
      ru: ['Северус Снегг', 'Салазар Слизерин'],
      jp: ['セブルス・スネイプ', 'サラザール・スリザリン'],
      pt: ['Severo Snape', 'Salazar Sonserina']
    },
    colors: {
      primary: '#1A472A',
      secondary: '#5D5D5D'
    }
  },
  // 守护型守护神
  dog: {
    name: 'dog',
    type: 'protection',
    displayName: {
      en: 'Dog',
      zh: '狗',
      zhHant: '狗',
      ko: '개',
      ru: 'Собака',
      jp: '犬',
      pt: 'Cão'
    },
    description: {
      en: 'The dog patronus symbolizes loyalty, protection, and unwavering friendship. Those with this patronus often possess a steadfast heart and an instinct to protect those they cherish.',
      zh: '狗守护神象征着忠诚、保护和坚定的友谊。拥有这个守护神的人通常拥有坚定的心和保护他们珍视之人的本能。',
      zhHant: '狗守護神象徵著忠誠、保護和堅定的友誼。擁有這個守護神的人通常擁有堅定的心和保護他們珍視之人的本能。',
      ko: '개 패트로누스는 충성심, 보호 및 흔들리지 않는 우정을 상징합니다. 이 패트로누스를 가진 사람들은 종종 확고한 마음과 소중히 여기는 사람들을 보호하는 본능을 가지고 있습니다.',
      ru: 'Патронус собаки символизирует верность, защиту и неизменную дружбу. Люди с этим патронусом часто обладают стойким сердцем и инстинктом защищать тех, кого они ценят.',
      jp: '犬の守護霊は忠誠心、保護、そして揺るぎない友情を象徴しています。この守護霊を持つ人は、不動の心と大切な人を守る本能を持っていることが多いです。',
      pt: 'O patrono do cão simboliza lealdade, proteção e amizade inabalável. Aqueles com este patrono frequentemente possuem um coração firme e um instinto para proteger aqueles que estimam.'
    },
    traits: {
      en: ['Loyal', 'Protective', 'Friendly', 'Steadfast', 'Courageous'],
      zh: ['忠诚', '保护', '友好', '坚定', '勇敢'],
      zhHant: ['忠誠', '保護', '友好', '堅定', '勇敢'],
      ko: ['충성스러운', '보호적인', '친근한', '확고한', '용감한'],
      ru: ['Верный', 'Защищающий', 'Дружелюбный', 'Стойкий', 'Отважный'],
      jp: ['忠実', '保護的', '親しみやすい', '確固たる', '勇敢'],
      pt: ['Leal', 'Protetor', 'Amigável', 'Firme', 'Corajoso']
    },
    famousWizards: {
      en: ['Sirius Black', 'Ron Weasley'],
      zh: ['小天狼星·布莱克', '罗恩·韦斯莱'],
      zhHant: ['天狼星·布萊克', '榮恩·衛斯理'],
      ko: ['시리우스 블랙', '론 위즐리'],
      ru: ['Сириус Блэк', 'Рон Уизли'],
      jp: ['シリウス・ブラック', 'ロン・ウィーズリー'],
      pt: ['Sirius Black', 'Rony Weasley']
    },
    colors: {
      primary: '#7D6968',
      secondary: '#D8C5B4'
    }
  },
  badger: {
    name: 'badger',
    type: 'protection',
    displayName: {
      en: 'Badger',
      zh: '獾',
      zhHant: '獾',
      ko: '오소리',
      ru: 'Барсук',
      jp: 'アナグマ',
      pt: 'Texugo'
    },
    description: {
      en: 'The badger patronus represents tenacity, protection of home, and unwavering persistence. Those with this patronus often possess strong determination and are fiercely loyal to their communities.',
      zh: '獾守护神代表着坚韧、保护家园和不屈不挠的坚持。拥有这个守护神的人通常拥有坚强的决心，对自己的社区忠心耿耿。',
      zhHant: '獾守護神代表著堅韌、保護家園和不屈不撓的堅持。擁有這個守護神的人通常擁有堅強的決心，對自己的社區忠心耿耿。',
      ko: '오소리 패트로누스는 끈기, 집 보호 및 흔들리지 않는 인내를 나타냅니다. 이 패트로누스를 가진 사람들은 종종 강한 결단력을 가지고 있으며 자신의 커뮤니티에 충성합니다.',
      ru: 'Патронус барсука олицетворяет мужество, силу и яростную защиту. Люди с этим патронусом часто обладают огромной стойкостью и неуклонной волей защищать свою позицию при защите других.',
      jp: 'アナグマの守護霊は粘り強さ、家の保護、そして揺るぎない持続性を表しています。この守護霊を持つ人は、強い決意を持ち、自分のコミュニティに熱心に忠実であることが多いです。',
      pt: 'O patrono do texugo representa tenacidade, proteção do lar e persistência inabalável. Aqueles com este patrono frequentemente possuem forte determinação e são ferozmente leais às suas comunidades.'
    },
    traits: {
      en: ['Tenacious', 'Protective', 'Persistent', 'Loyal', 'Hard-working'],
      zh: ['坚韧', '保护', '持久', '忠诚', '勤奋'],
      zhHant: ['堅韌', '保護', '持久', '忠誠', '勤奮'],
      ko: ['끈질긴', '보호적인', '지속적인', '충성스러운', '근면한'],
      ru: ['Упорный', 'Защищающий', 'Настойчивый', 'Верный', 'Трудолюбивый'],
      jp: ['粘り強い', '保護的', '持続的', '忠実', '勤勉'],
      pt: ['Tenaz', 'Protetor', 'Persistente', 'Leal', 'Trabalhador']
    },
    famousWizards: {
      en: ['Helga Hufflepuff', 'Newt Scamander'],
      zh: ['赫尔加·赫奇帕奇', '纽特·斯卡曼德'],
      zhHant: ['赫爾加·赫夫帕夫', '紐特·斯卡曼德'],
      ko: ['헬가 후플푸프', '뉴트 스캐맨더'],
      ru: ['Хельга Пуффендуй', 'Ньют Скамандер'],
      jp: ['ヘルガ・ハッフルパフ', 'ニュート・スキャマンダー'],
      pt: ['Helga Hufflepuff', 'Newt Scamander']
    },
    colors: {
      primary: '#FFD800',
      secondary: '#000000'
    }
  },
  unicorn: {
    name: 'unicorn',
    type: 'protection',
    displayName: {
      en: 'Unicorn',
      zh: '独角兽',
      zhHant: '獨角獸',
      ko: '유니콘',
      ru: 'Единорог',
      jp: 'ユニコーン',
      pt: 'Unicórnio'
    },
    description: {
      en: 'The unicorn patronus signifies purity, innocence, and healing grace. Those with this rare patronus often possess a gentle spirit and the power to bring light to even the darkest situations.',
      zh: '独角兽守护神象征着纯洁、天真和治愈的优雅。拥有这个罕见守护神的人通常拥有温柔的精神和能够在最黑暗的情况下带来光明的力量。',
      zhHant: '獨角獸守護神象徵著純潔、天真和治癒的優雅。擁有這個罕見守護神的人通常擁有溫柔的精神和能夠在最黑暗的情況下帶來光明的力量。',
      ko: '유니콘 패트로누스는 순수함, 무죄함 및 치유의 은혜를 의미합니다. 이 희귀한 패트로누스를 가진 사람들은 종종 부드러운 정신과 가장 어두운 상황에서도 빛을 가져올 수 있는 힘을 보유하고 있습니다.',
      ru: 'Патронус единорога означает чистоту, невинность и исцеляющую благодать. Люди с этим редким патронусом часто обладают нежным духом и силой приносить свет даже в самые темные ситуации.',
      jp: 'ユニコーンの守護霊は再生、変容、そして永遠の希望を象徴しています。この珍しい守護霊を持つ人は、しばしば並外れた回復力と敗北の灰から立ち上がる能力を持っています。',
      pt: 'O patrono da fênix simboliza renascimento, transformação e esperança eterna. Aqueles com este patrono raro frequentemente possuem uma resiliência extraordinária e a capacidade de ressurgir das cinzas da derrota.'
    },
    traits: {
      en: ['Pure', 'Healing', 'Gentle', 'Magical', 'Protective'],
      zh: ['纯洁', '治愈', '温柔', '神奇', '保护'],
      zhHant: ['純潔', '治癒', '溫柔', '神奇', '保護'],
      ko: ['순수한', '치유하는', '부드러운', '마법적인', '보호적인'],
      ru: ['Чистый', 'Исцеляющий', 'Нежный', 'Магический', 'Защищающий'],
      jp: ['純粋', '癒し', '優しい', '魔法的', '保護的'],
      pt: ['Puro', 'Curativo', 'Gentil', 'Mágico', 'Protetor']
    },
    famousWizards: {
      en: ['Lily Potter', 'Cedric Diggory'],
      zh: ['莉莉·波特', '塞德里克·迪戈里'],
      zhHant: ['莉莉·波特', '西追·迪哥里'],
      ko: ['릴리 포터', '세드릭 디고리'],
      ru: ['Лили Поттер', 'Седрик Диггори'],
      jp: ['リリー・ポッター', 'セドリック・ディゴリー'],
      pt: ['Lily Potter', 'Cedrico Diggory']
    },
    colors: {
      primary: '#FFFFFF',
      secondary: '#D1CDDC'
    }
  },
  horse: {
    name: 'horse',
    type: 'protection',
    displayName: {
      en: 'Horse',
      zh: '马',
      zhHant: '馬',
      ko: '말',
      ru: 'Лошадь',
      jp: '馬',
      pt: 'Cavalo'
    },
    description: {
      en: 'The horse patronus embodies freedom, loyalty, and steadfast power. Those with this patronus often possess remarkable endurance and the ability to carry others through difficult journeys.',
      zh: '马守护神体现了自由、忠诚和坚定的力量。拥有这个守护神的人通常拥有非凡的耐力和能够带领他人度过艰难旅程的能力。',
      zhHant: '馬守護神體現了自由、忠誠和堅定的力量。擁有這個守護神的人通常擁有非凡的耐力和能夠帶領他人度過艱難旅程的能力。',
      ko: '말 패트로누스는 자유, 충성심 및 확고한 힘을 상징합니다. 이 패트로누스를 가진 사람들은 종종 놀라운 인내력과 어려운 여정을 통해 다른 사람들을 이끌 수 있는 능력을 보유하고 있습니다.',
      ru: 'Патронус лошади воплощает свободу, верность и стойкую силу. Люди с этим патронусом часто обладают замечательной выносливостью и способностью проводить других через трудные путешествия.',
      jp: '馬の守護霊は強さ、忍耐力、そして揺るぎない力を体現しています。この守護霊を持つ人は、非凡な忍耐力と困難な旅を通じて他の人々を導く能力を持っていることが多いです。',
      pt: 'O patrono do cavalo incorpora liberdade, lealdade e poder inabalável. Aqueles com este patrono frequentemente possuem notável resistência e a capacidade de carregar outros através de jornadas difíceis.'
    },
    traits: {
      en: ['Free-spirited', 'Loyal', 'Enduring', 'Powerful', 'Supportive'],
      zh: ['自由奔放', '忠诚', '持久', '强大', '支持'],
      zhHant: ['自由奔放', '忠誠', '持久', '強大', '支持'],
      ko: ['자유로운 정신', '충성스러운', '인내하는', '강력한', '지지하는'],
      ru: ['Свободолюбивый', 'Верный', 'Выносливый', 'Мощный', 'Поддерживающий'],
      jp: ['自由奔放', '忠実', '耐久力のある', '強力', '支持的'],
      pt: ['Espírito livre', 'Leal', 'Resistente', 'Poderoso', 'Apoiador']
    },
    famousWizards: {
      en: ['Ginny Weasley', 'Cho Chang'],
      zh: ['金妮·韦斯莱', '张秋'],
      zhHant: ['金妮·衛斯理', '張秋'],
      ko: ['지니 위즐리', '초 챙'],
      ru: ['Джинни Уизли', 'Чжоу Чанг'],
      jp: ['ジニー・ウィーズリー', 'チョウ・チャン'],
      pt: ['Gina Weasley', 'Cho Chang']
    },
    colors: {
      primary: '#8B4513',
      secondary: '#D2B48C'
    }
  },
  elephant: {
    name: 'elephant',
    type: 'protection',
    displayName: {
      en: 'Elephant',
      zh: '大象',
      zhHant: '大象',
      ko: '코끼리',
      ru: 'Слон',
      jp: '象',
      pt: 'Elefante'
    },
    description: {
      en: 'The elephant patronus symbolizes wisdom, strength, and familial protection. Those with this patronus often possess remarkable memory and a natural ability to lead and protect their community.',
      zh: '大象守护神象征着智慧、力量和家族保护。拥有这个守护神的人通常拥有惊人的记忆力和领导和保护其社区的天生能力。',
      zhHant: '大象守護神象徵著智慧、力量和家族保護。擁有這個守護神的人通常擁有驚人的記憶力和領導和保護其社區的天生能力。',
      ko: '코끼리 패트로누스는 지혜, 힘 및 가족 보호를 상징합니다. 이 패트로누스를 가진 사람들은 종종 놀라운 기억력과 공동체를 지원하고 보호하는 타고난 능력을 보유하고 있습니다.',
      ru: 'Патронус слона символизирует мудрость, силу и семейную защиту. Люди с этим патронусом часто обладают замечательной памятью и природными способностями руководить и защищать свое сообщество.',
      jp: '象の守護霊は知恵、強さ、そして家族の保護を象徴しています。この守護霊を持つ人は、驚くべき記憶力とコミュニティを導き保護する生来の能力を持っていることが多いです。',
      pt: 'O patrono do elefante simboliza sabedoria, força e proteção familiar. Aqueles com este patrono frequentemente possuem memória notável e uma habilidade natural para liderar e proteger sua comunidade.'
    },
    traits: {
      en: ['Wise', 'Strong', 'Protective', 'Loyal', 'Communal'],
      zh: ['聪明', '强大', '保护', '忠诚', '群体'],
      zhHant: ['聰明', '強大', '保護', '忠誠', '群體'],
      ko: ['현명한', '강한', '보호적인', '충성스러운', '공동체적인'],
      ru: ['Мудрый', 'Сильный', 'Защищающий', 'Верный', 'Общинный'],
      jp: ['賢明', '強い', '保護的', '忠実', '共同体的'],
      pt: ['Sábio', 'Forte', 'Protetor', 'Leal', 'Comunitário']
    },
    famousWizards: {
      en: ['Pomona Sprout', 'Hannah Abbott'],
      zh: ['庞弗雷·斯普劳特', '汉娜·艾博'],
      zhHant: ['潘芙蕾·斯普勞特', '漢娜·艾博'],
      ko: ['포모나 스프라우트', '한나 애보트'],
      ru: ['Помона Стебль', 'Ханна Эббот'],
      jp: ['ポモーナ・スプラウト', 'ハンナ・アボット'],
      pt: ['Pomona Sprout', 'Ana Abbott']
    },
    colors: {
      primary: '#9A9A9A',
      secondary: '#F0F0F0'
    }
  },
  boar: {
    name: 'boar',
    type: 'protection',
    displayName: {
      en: 'Boar',
      zh: '野猪',
      zhHant: '野豬',
      ko: '멧돼지',
      ru: 'Кабан',
      jp: '猪',
      pt: 'Javali'
    },
    description: {
      en: 'The boar patronus represents courage, strength, and fierce protection. Those with this patronus often possess tremendous fortitude and an unwavering will to stand their ground when defending others.',
      zh: '野猪守护神代表着勇气、力量和凶猛的保护。拥有这个守护神的人通常拥有巨大的坚韧和保护他人时坚定不移的意志。',
      zhHant: '野豬守護神代表著勇氣、力量和兇猛的保護。擁有這個守護神的人通常擁有巨大的堅韌和保護他人時堅定不移的意志。',
      ko: '멧돼지 패트로누스는 용기, 힘 및 격렬한 보호를 나타냅니다. 이 패트로누스를 가진 사람들은 종종 엄청난 불굴의 정신과 다른 사람을 보호할 때 흔들리지 않는 의지를 보유하고 있습니다.',
      ru: 'Патронус кабана олицетворяет мужество, силу и яростную защиту. Люди с этим патронусом часто обладают огромной стойкостью и неуклонной волей защищать свою позицию при защите других.',
      jp: '猪の守護霊は勇気、強さ、そして激しい保護を表しています。この守護霊を持つ人は、強靭な忍耐力と他者を守る際に立ち向かう揺るぎない意志を持っていることが多いです。',
      pt: 'O patrono do javali representa coragem, força e proteção feroz. Aqueles com este patrono frequentemente possuem tremenda fortaleza e uma vontade inabalável de manter sua posição ao defender os outros.'
    },
    traits: {
      en: ['Courageous', 'Strong', 'Protective', 'Determined', 'Grounded'],
      zh: ['勇敢', '强壮', '保护', '坚定', '踏实'],
      zhHant: ['勇敢', '強壯', '保護', '堅定', '踏實'],
      ko: ['용감한', '강한', '보호적인', '단호한', '현실적인'],
      ru: ['Смелый', 'Сильный', 'Защищающий', 'Решительный', 'Приземленный'],
      jp: ['勇敢', '強い', '保護的', '断固とした', '現実的'],
      pt: ['Corajoso', 'Forte', 'Protetor', 'Determinado', 'Realista']
    },
    famousWizards: {
      en: ['Ernie Macmillan', 'Susan Bones'],
      zh: ['厄尼·麦克米兰', '苏珊·博恩斯'],
      zhHant: ['厄尼·麥克米蘭', '蘇珊·朋'],
      ko: ['어니 맥밀런', '수잔 본즈'],
      ru: ['Эрни Макмиллан', 'Сьюзан Боунс'],
      jp: ['アーネスト・マクミラン', 'スーザン・ボーンズ'],
      pt: ['Ernesto Macmillan', 'Susana Bones']
    },
    colors: {
      primary: '#6A3B00',
      secondary: '#A67953'
    }
  },
  buffalo: {
    name: 'buffalo',
    type: 'protection',
    displayName: {
      en: 'Buffalo',
      zh: '水牛',
      zhHant: '水牛',
      ko: '버팔로',
      ru: 'Буйвол',
      jp: '水牛',
      pt: 'Búfalo'
    },
    description: {
      en: 'The buffalo patronus embodies steadfast protection, endurance, and sacred strength. Those with this patronus often possess deep resilience and an innate ability to support and protect their community.',
      zh: '水牛守护神体现了坚定的保护、耐力和神圣的力量。拥有这个守护神的人通常拥有深厚的韧性和支持和保护其社区的先天能力。',
      zhHant: '水牛守護神體現了堅定的保護、耐力和神聖的力量。擁有這個守護神的人通常擁有深厚的韌性和支持和保護其社區的先天能力。',
      ko: '버팔로 패트로누스는 확고한 보호, 인내력 및 신성한 힘을 상징합니다. 이 패트로누스를 가진 사람들은 종종 깊은 회복력과 공동체를 지원하고 보호하는 타고난 능력을 보유하고 있습니다.',
      ru: 'Патронус буйвола воплощает непоколебимую защиту, выносливость и священную силу. Люди с этим патронусом часто обладают глубокой стойкостью и врожденной способностью поддерживать и защищать свое сообщество.',
      jp: '水牛の守護霊は揺るぎない保護、耐久力、そして神聖な力を象徴しています。この守護霊を持つ人は、深い回復力とコミュニティを支え守る生来の能力を持っていることが多いです。',
      pt: 'O patrono do búfalo incorpora proteção inabalável, resistência e força sagrada. Aqueles com este patrono frequentemente possuem profunda resiliência e uma capacidade inata de apoiar e proteger sua comunidade.'
    },
    traits: {
      en: ['Steadfast', 'Enduring', 'Protective', 'Communal', 'Powerful'],
      zh: ['坚定', '持久', '保护', '群体', '强大'],
      zhHant: ['堅定', '持久', '保護', '群體', '強大'],
      ko: ['확고한', '인내하는', '보호적인', '공동체적인', '강력한'],
      ru: ['Стойкий', 'Выносливый', 'Защищающий', 'Общинный', 'Мощный'],
      jp: ['揺るぎない', '持続的', '保護的', '共同体的', '強力'],
      pt: ['Firme', 'Resistente', 'Protetor', 'Comunitário', 'Poderoso']
    },
    famousWizards: {
      en: ['Pomona Sprout', 'Justin Finch-Fletchley'],
      zh: ['庞弗雷·斯普劳特', '贾斯廷·芬列里'],
      zhHant: ['潘芙蕾·斯普勞特', '賈斯汀·芬列里'],
      ko: ['포모나 스프라우트', '저스틴 핀치플레틀리'],
      ru: ['Помона Стебль', 'Джастин Финч-Флетчли'],
      jp: ['ポモーナ・スプラウト', 'ジャスティン・フィンチ＝フレッチリー'],
      pt: ['Pomona Sprout', 'Justino Finch-Fletchley']
    },
    colors: {
      primary: '#654321',
      secondary: '#8B4513'
    }
  },
  // 敏捷型守护神
  rabbit: {
    name: 'rabbit',
    type: 'agility',
    displayName: {
      en: 'Rabbit',
      zh: '兔子',
      zhHant: '兔子',
      ko: '토끼',
      ru: 'Кролик',
      jp: 'ウサギ',
      pt: 'Coelho'
    },
    description: {
      en: 'The rabbit patronus symbolizes swiftness, intuition, and fertility of mind. Those with this patronus often possess quick reflexes and an inherent ability to navigate through challenges with grace.',
      zh: '兔子守护神象征着敏捷、直觉和思想的肥沃。拥有这个守护神的人通常拥有快速的反应能力和优雅地驾驭挑战的内在能力。',
      zhHant: '兔子守護神象徵著敏捷、直覺和思想的肥沃。擁有這個守護神的人通常擁有快速的反應能力和優雅地駕馭挑戰的內在能力。',
      ko: '토끼 패트로누스는 민첩함, 직관력 및 풍부한 사고를 상징합니다. 이 패트로누스를 가진 사람들은 종종 빠른 반사 신경과 우아하게 도전을 헤쳐 나갈 수 있는 타고난 능력을 보유하고 있습니다.',
      ru: 'Патронус кролика символизирует быстроту, интуицию и плодовитость ума. Люди с этим патронусом часто обладают быстрыми рефлексами и врожденной способностью изящно преодолевать трудности.',
      jp: 'ウサギの守護霊は素早さ、直感、そして思考の豊かさを象徴しています。この守護霊を持つ人は、素早い反射神経と優雅に困難を乗り切る生来の能力を持っていることが多いです。',
      pt: 'O patrono do coelho simboliza rapidez, intuição e fertilidade de mente. Aqueles com este patrono frequentemente possuem reflexos rápidos e uma capacidade inerente de navegar por desafios com graça.'
    },
    traits: {
      en: ['Quick', 'Intuitive', 'Creative', 'Nimble', 'Observant'],
      zh: ['快速', '直觉', '创造力', '敏捷', '善于观察'],
      zhHant: ['快速', '直覺', '創造力', '敏捷', '善於觀察'],
      ko: ['빠른', '직관적인', '창의적인', '민첩한', '관찰력 있는'],
      ru: ['Быстрый', 'Интуитивный', 'Творческий', 'Проворный', 'Наблюдательный'],
      jp: ['素早い', '直感的', '創造的', '敏捷', '観察力のある'],
      pt: ['Rápido', 'Intuitivo', 'Criativo', 'Ágil', 'Observador']
    },
    famousWizards: {
      en: ['Luna Lovegood', 'Fred Weasley'],
      zh: ['卢娜·洛夫古德', '弗雷德·韦斯莱'],
      zhHant: ['露娜·洛夫古德', '弗雷德·衛斯理'],
      ko: ['루나 러브굿', '프레드 위즐리'],
      ru: ['Полумна Лавгуд', 'Фред Уизли'],
      jp: ['ルーナ・ラブグッド', 'フレッド・ウィーズリー'],
      pt: ['Luna Lovegood', 'Fred Weasley']
    },
    colors: {
      primary: '#D3D3D3',
      secondary: '#FFFFFF'
    }
  },
  dolphin: {
    name: 'dolphin',
    type: 'agility',
    displayName: {
      en: 'Dolphin',
      zh: '海豚',
      zhHant: '海豚',
      ko: '돌고래',
      ru: 'Дельфин',
      jp: 'イルカ',
      pt: 'Golfinho'
    },
    description: {
      en: 'The dolphin patronus represents playfulness, intelligence, and emotional balance. Those with this patronus often possess remarkable social intuition and the ability to find joy even in challenging circumstances.',
      zh: '海豚守护神代表着顽皮、智慧和情感平衡。拥有这个守护神的人通常拥有非凡的社交直觉和在困难环境中找到快乐的能力。',
      zhHant: '海豚守護神代表著頑皮、智慧和情感平衡。擁有這個守護神的人通常擁有非凡的社交直覺和在困難環境中找到快樂的能力。',
      ko: '돌고래 패트로누스는 장난기, 지능 및 감정적 균형을 나타냅니다. 이 패트로누스를 가진 사람들은 종종 놀라운 사회적 직관력과 어려운 상황에서도 기쁨을 찾을 수 있는 능력을 보유하고 있습니다.',
      ru: 'Патронус дельфина олицетворяет игривость, интеллект и эмоциональный баланс. Люди с этим патронусом часто обладают замечательной социальной интуицией и способностью находить радость даже в трудных обстоятельствах.',
      jp: 'イルカの守護霊は遊び心、知性、そして感情のバランスを表しています。この守護霊を持つ人は、優れた社会的直感と困難な状況でも喜びを見つける能力を持っていることが多いです。',
      pt: 'O patrono do golfinho representa brincadeira, inteligência e equilíbrio emocional. Aqueles com este patrono frequentemente possuem notável intuição social e a capacidade de encontrar alegria mesmo em circunstâncias desafiadoras.'
    },
    traits: {
      en: ['Playful', 'Intelligent', 'Social', 'Adaptive', 'Joyful'],
      zh: ['顽皮', '聪明', '社交', '适应', '快乐'],
      zhHant: ['頑皮', '聰明', '社交', '適應', '快樂'],
      ko: ['장난스러운', '지적인', '사교적인', '적응력 있는', '즐거운'],
      ru: ['Игривый', 'Умный', 'Социальный', 'Адаптивный', 'Радостный'],
      jp: ['遊び心のある', '知的', '社交的', '適応力のある', '喜びに満ちた'],
      pt: ['Brincalhão', 'Inteligente', 'Social', 'Adaptável', 'Alegre']
    },
    famousWizards: {
      en: ['Tonks', 'George Weasley'],
      zh: ['唐克斯', '乔治·韦斯莱'],
      zhHant: ['東施', '喬治·衛斯理'],
      ko: ['통스', '조지 위즐리'],
      ru: ['Тонкс', 'Джордж Уизли'],
      jp: ['トンクス', 'ジョージ・ウィーズリー'],
      pt: ['Tonks', 'Jorge Weasley']
    },
    colors: {
      primary: '#4682B4',
      secondary: '#87CEEB'
    }
  },
  cheetah: {
    name: 'cheetah',
    type: 'agility',
    displayName: {
      en: 'Cheetah',
      zh: '猎豹',
      zhHant: '獵豹',
      ko: '치타',
      ru: 'Гепард',
      jp: 'チーター',
      pt: 'Guepardo'
    },
    description: {
      en: 'The cheetah patronus embodies speed, focus, and precise action. Those with this patronus often possess remarkable decisiveness and the ability to achieve goals with swift precision.',
      zh: '猎豹守护神体现了速度、专注和精确行动。拥有这个守护神的人通常拥有非凡的决断力和能够以迅速的精确度实现目标的能力。',
      zhHant: '獵豹守護神體現了速度、專注和精確行動。擁有這個守護神的人通常擁有非凡的決斷力和能夠以迅速的精確度實現目標的能力。',
      ko: '치타 패트로누스는 속도, 집중력 및 정확한 행동을 상징합니다. 이 패트로누스를 가진 사람들은 종종 놀라운 결단력과 빠른 정확성으로 목표를 달성할 수 있는 능력을 보유하고 있습니다.',
      ru: 'Патронус гепарда воплощает скорость, сосредоточенность и точное действие. Люди с этим патронусом часто обладают замечательной решительностью и способностью достигать целей с быстрой точностью.',
      jp: 'チーターの守護霊は速さ、集中力、そして正確な行動を象徴しています。この守護霊を持つ人は、優れた決断力と素早い精度で目標を達成する能力を持っていることが多いです。',
      pt: 'O patrono do guepardo incorpora velocidade, foco e ação precisa. Aqueles com este patrono frequentemente possuem notável capacidade de decisão e a habilidade de alcançar objetivos com rápida precisão.'
    },
    traits: {
      en: ['Fast', 'Focused', 'Decisive', 'Precise', 'Goal-oriented'],
      zh: ['快速', '专注', '果断', '精确', '目标导向'],
      zhHant: ['快速', '專注', '果斷', '精確', '目標導向'],
      ko: ['빠른', '집중적인', '결단력 있는', '정확한', '목표 지향적인'],
      ru: ['Быстрый', 'Сосредоточенный', 'Решительный', 'Точный', 'Целеустремленный'],
      jp: ['速い', '集中', '断固とした', '正確', '目標志向'],
      pt: ['Rápido', 'Focado', 'Decisivo', 'Preciso', 'Orientado a objetivos']
    },
    famousWizards: {
      en: ['Viktor Krum', 'Katie Bell'],
      zh: ['威克多尔·克鲁姆', '凯蒂·贝尔'],
      zhHant: ['維克多·喀浪', '凱蒂·鈴'],
      ko: ['빅토르 크룸', '케이티 벨'],
      ru: ['Виктор Крам', 'Кэти Белл'],
      jp: ['ヴィクトール・クラム', 'ケイティ・ベル'],
      pt: ['Vítor Krum', 'Katie Bell']
    },
    colors: {
      primary: '#D9A362',
      secondary: '#000000'
    }
  },
  swallow: {
    name: 'swallow',
    type: 'agility',
    displayName: {
      en: 'Swallow',
      zh: '燕子',
      zhHant: '燕子',
      ko: '제비',
      ru: 'Ласточка',
      jp: 'ツバメ',
      pt: 'Andorinha'
    },
    description: {
      en: "The swallow patronus represents agility, freedom, and the returning of hope. Those with this patronus often possess a light spirit and the ability to navigate life's challenges with graceful movement.",
      zh: '燕子守护神代表着敏捷、自由和希望的回归。拥有这个守护神的人通常拥有轻盈的精神和能够以优雅的移动驾驭生活挑战的能力。',
      zhHant: '燕子守護神代表著敏捷、自由和希望的回歸。擁有這個守護神的人通常擁有輕盈的精神和能夠以優雅的移動駕馭生活挑戰的能力。',
      ko: '제비 패트로누스는 민첩성, 자유 및 희망의 귀환을 나타냅니다. 이 패트로누스를 가진 사람들은 종종 가벼운 정신과 우아한 움직임으로 삶의 도전을 헤쳐 나갈 수 있는 능력을 보유하고 있습니다.',
      ru: 'Патронус ласточки олицетворяет ловкость, свободу и возвращение надежды. Люди с этим патронусом часто обладают легким духом и способностью справляться с жизненными трудностями с изящным движением.',
      jp: 'ツバメの守護霊は敏捷性、自由、そして希望の帰還を表しています。この守護霊を持つ人は、軽やかな精神と優雅な動きで人生の困難を乗り切る能力を持っていることが多いです。',
      pt: 'O patrono da andorinha representa agilidade, liberdade e o retorno da esperança. Aqueles com este patrono frequentemente possuem um espírito leve e a capacidade de navegar pelos desafios da vida com movimento gracioso.'
    },
    traits: {
      en: ['Agile', 'Free', 'Hopeful', 'Graceful', 'Adaptive'],
      zh: ['敏捷', '自由', '充满希望', '优雅', '适应'],
      zhHant: ['敏捷', '自由', '充滿希望', '優雅', '適應'],
      ko: ['민첩한', '자유로운', '희망적인', '우아한', '적응력 있는'],
      ru: ['Ловкий', 'Свободный', 'Полный надежды', 'Изящный', 'Адаптивный'],
      jp: ['敏捷', '自由', '希望に満ちた', '優雅', '適応力のある'],
      pt: ['Ágil', 'Livre', 'Esperançoso', 'Gracioso', 'Adaptável']
    },
    famousWizards: {
      en: ['Cho Chang', 'Oliver Wood'],
      zh: ['张秋', '奥利弗·伍德'],
      zhHant: ['張秋', '奧利佛·伍德'],
      ko: ['초 챙', '올리버 우드'],
      ru: ['Чжоу Чанг', 'Оливер Вуд'],
      jp: ['チョウ・チャン', 'オリバー・ウッド'],
      pt: ['Cho Chang', 'Olívio Wood']
    },
    colors: {
      primary: '#4A6D8C',
      secondary: '#DCDCDC'
    }
  },
  otter: {
    name: 'otter',
    type: 'agility',
    displayName: {
      en: 'Otter',
      zh: '水獭',
      zhHant: '水獺',
      ko: '수달',
      ru: 'Выдра',
      jp: 'カワウソ',
      pt: 'Lontra'
    },
    description: {
      en: 'The otter patronus symbolizes joy, playfulness, and quick-thinking. Those with this patronus often possess an adventurous spirit and the ability to find creative solutions to complex problems.',
      zh: '水獭守护神象征着欢乐、顽皮和快速思考。拥有这个守护神的人通常拥有冒险精神和找到复杂问题创造性解决方案的能力。',
      zhHant: '水獺守護神象徵著歡樂、頑皮和快速思考。擁有這個守護神的人通常擁有冒險精神和找到複雜問題創造性解決方案的能力。',
      ko: '수달 패트로누스는 기쁨, 장난기 및 빠른 사고를 상징합니다. 이 패트로누스를 가진 사람들은 종종 모험심과 복잡한 문제에 대한 창의적인 해결책을 찾는 능력을 보유하고 있습니다.',
      ru: 'Патронус выдры символизирует радость, игривость и быстрое мышление. Люди с этим патронусом часто обладают авантюрным духом и способностью находить творческие решения сложных проблем.',
      jp: 'カワウソの守護霊は喜び、遊び心、そして素早い思考を象徴しています。この守護霊を持つ人は、冒険心と複雑な問題に対する創造的な解決策を見つける能力を持っていることが多いです。',
      pt: 'O patrono da lontra simboliza alegria, brincadeira e pensamento rápido. Aqueles com este patrono frequentemente possuem um espírito aventureiro e a capacidade de encontrar soluções criativas para problemas complexos.'
    },
    traits: {
      en: ['Playful', 'Quick-thinking', 'Creative', 'Adaptable', 'Curious'],
      zh: ['顽皮', '思考快速', '创造力', '适应力强', '好奇'],
      zhHant: ['頑皮', '思考快速', '創造力', '適應力強', '好奇'],
      ko: ['장난스러운', '빠른 사고', '창의적인', '적응력 있는', '호기심 많은'],
      ru: ['Игривый', 'Быстромыслящий', 'Творческий', 'Адаптивный', 'Любопытный'],
      jp: ['遊び心のある', '素早い思考', '創造的', '適応力のある', '好奇心旺盛'],
      pt: ['Brincalhão', 'Pensamento rápido', 'Criativo', 'Adaptável', 'Curioso']
    },
    famousWizards: {
      en: ['Hermione Granger'],
      zh: ['赫敏·格兰杰'],
      zhHant: ['妙麗·格蘭傑'],
      ko: ['헤르미온느 그레인저'],
      ru: ['Гермиона Грейнджер'],
      jp: ['ハーマイオニー・グレンジャー'],
      pt: ['Hermione Granger']
    },
    colors: {
      primary: '#8B4513',
      secondary: '#D2B48C'
    }
  },
  deer: {
    name: 'deer',
    type: 'agility',
    displayName: {
      en: 'Deer',
      zh: '鹿',
      zhHant: '鹿',
      ko: '사슴',
      ru: 'Олень',
      jp: '鹿',
      pt: 'Cervo'
    },
    description: {
      en: 'The deer patronus represents gentleness, intuition, and swift movement. Those with this patronus often possess heightened awareness and the ability to navigate difficult terrain with grace and precision.',
      zh: '鹿守护神代表着温柔、直觉和迅捷的移动。拥有这个守护神的人通常拥有更高的意识和能够以优雅和精确的方式在困难地形中导航的能力。',
      zhHant: '鹿守護神代表著溫柔、直覺和迅捷的移動。擁有這個守護神的人通常擁有更高的意識和能夠以優雅和精確的方式在困難地形中導航的能力。',
      ko: '사슴 패트로누스는 부드러움, 직관 및 빠른 움직임을 나타냅니다. 이 패트로누스를 가진 사람들은 종종 향상된 인식과 우아함과 정확성으로 어려운 지형을 탐색할 수 있는 능력을 보유하고 있습니다.',
      ru: 'Патронус оленя олицетворяет нежность, интуицию и быстрое движение. Люди с этим патронусом часто обладают повышенной осознанностью и способностью ориентироваться в сложной местности с изяществом и точностью.',
      jp: '鹿の守護霊は優しさ、直感、そして素早い動きを表しています。この守護霊を持つ人は、高い意識と優雅さと精度で困難な地形を進む能力を持っていることが多いです。',
      pt: 'O patrono do cervo representa gentileza, intuição e movimento rápido. Aqueles com este patrono frequentemente possuem consciência elevada e a capacidade de navegar por terrenos difíceis com graça e precisão.'
    },
    traits: {
      en: ['Gentle', 'Intuitive', 'Swift', 'Aware', 'Graceful'],
      zh: ['温柔', '直觉', '迅速', '意识清晰', '优雅'],
      zhHant: ['溫柔', '直覺', '迅速', '意識清晰', '優雅'],
      ko: ['부드러운', '직관적인', '빠른', '인식력 있는', '우아한'],
      ru: ['Нежный', 'Интуитивный', 'Быстрый', 'Осознанный', 'Изящный'],
      jp: ['優しい', '直感的', '素早い', '意識の高い', '優雅'],
      pt: ['Gentil', 'Intuitivo', 'Rápido', 'Consciente', 'Gracioso']
    },
    famousWizards: {
      en: ['Lily Potter', 'James Potter'],
      zh: ['莉莉·波特', '詹姆斯·波特'],
      zhHant: ['莉莉·波特', '詹姆·波特'],
      ko: ['릴리 포터', '제임스 포터'],
      ru: ['Лили Поттер', 'Джеймс Поттер'],
      jp: ['リリー・ポッター', 'ジェームズ・ポッター'],
      pt: ['Lílian Potter', 'Tiago Potter']
    },
    colors: {
      primary: '#A0522D',
      secondary: '#DEB887'
    }
  },
  hummingbird: {
    name: 'hummingbird',
    type: 'agility',
    displayName: {
      en: 'Hummingbird',
      zh: '蜂鸟',
      zhHant: '蜂鳥',
      ko: '벌새',
      ru: 'Колибри',
      jp: 'ハチドリ',
      pt: 'Beija-flor'
    },
    description: {
      en: 'The hummingbird patronus embodies energy, resilience, and remarkable agility. Those with this patronus often possess boundless determination and the ability to accomplish extraordinary feats despite their seemingly small stature.',
      zh: '蜂鸟守护神体现了能量、韧性和非凡的敏捷性。拥有这个守护神的人通常拥有无限的决心和能够在看似渺小的身材下完成非凡壮举的能力。',
      zhHant: '蜂鳥守護神體現了能量、韌性和非凡的敏捷性。擁有這個守護神的人通常擁有無限的決心和能夠在看似渺小的身材下完成非凡壯舉的能力。',
      ko: '벌새 패트로누스는 에너지, 회복력 및 놀라운 민첩성을 상징합니다. 이 패트로누스를 가진 사람들은 종종 무한한 결단력과 작은 체구에도 불구하고 비범한 업적을 달성할 수 있는 능력을 보유하고 있습니다.',
      ru: 'Патронус колибри воплощает энергию, устойчивость и удивительную ловкость. Люди с этим патронусом часто обладают безграничной решимостью и способностью совершать необычайные подвиги, несмотря на их кажущийся маленький рост.',
      jp: 'ハチドリの守護霊はエネルギー、回復力、そして驚くべき敏捷性を象徴しています。この守護霊を持つ人は、無限の決意と一見小さな体格にもかかわらず、非凡な偉業を成し遂げる能力を持っていることが多いです。',
      pt: 'O patrono do beija-flor incorpora energia, resiliência e notável agilidade. Aqueles com este patrono frequentemente possuem determinação ilimitada e a capacidade de realizar feitos extraordinários apesar de sua aparente pequena estatura.'
    },
    traits: {
      en: ['Energetic', 'Resilient', 'Agile', 'Determined', 'Adaptable'],
      zh: ['精力充沛', '有韧性', '敏捷', '坚定', '适应性强'],
      zhHant: ['精力充沛', '有韌性', '敏捷', '堅定', '適應性強'],
      ko: ['활기찬', '회복력 있는', '민첩한', '결단력 있는', '적응력 있는'],
      ru: ['Энергичный', 'Устойчивый', 'Проворный', 'Решительный', 'Адаптивный'],
      jp: ['精力的', '回復力のある', '敏捷', '決意', '適応力のある'],
      pt: ['Energético', 'Resiliente', 'Ágil', 'Determinado', 'Adaptável']
    },
    famousWizards: {
      en: ['Ginny Weasley', 'Angelina Johnson'],
      zh: ['金妮·韦斯莱', '安吉丽娜·约翰逊'],
      zhHant: ['金妮·衛斯理', '安潔莉娜·強森'],
      ko: ['지니 위즐리', '안젤리나 존슨'],
      ru: ['Джинни Уизли', 'Анджелина Джонсон'],
      jp: ['ジニー・ウィーズリー', 'アンジェリーナ・ジョンソン'],
      pt: ['Gina Weasley', 'Angelina Johnson']
    },
    colors: {
      primary: '#FF1493',
      secondary: '#7CFC00'
    }
  },
  // 添加更多守护神数据...
};

// 随机选择一个守护神
export function getRandomPatronusByType(type: PatronusType): PatronusName {
  const patronusesOfType = PATRONUSES_BY_TYPE[type];
  const randomIndex = Math.floor(Math.random() * patronusesOfType.length);
  return patronusesOfType[randomIndex];
} 