export type PatronusType = 'strength' | 'wisdom' | 'protection' | 'agility';

export type PatronusName = 
  // 力量型守护神
  | 'stag' | 'lion' | 'bear' | 'wolf' | 'phoenix' | 'dragon' | 'eagle'  
  // 智慧型守护神
  | 'owl' | 'fox' | 'raven' | 'cat' | 'crow' | 'lynx' | 'snake'
  // 守护型守护神
  | 'dog' | 'badger' | 'unicorn' | 'horse' | 'elephant' | 'boar' | 'buffalo'
  // 敏捷型守护神
  | 'rabbit' | 'dolphin' | 'cheetah' | 'swallow' | 'otter' | 'deer' | 'hummingbird';

export interface Patronus {
  name: PatronusName;
  type: PatronusType;
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
  traits: {
    en: string[];
    zh: string[];
    zhHant: string[];
    ko: string[];
    ru: string[];
    jp: string[];
    pt: string[];
  };
  famousWizards: {
    en: string[];
    zh: string[];
    zhHant: string[];
    ko: string[];
    ru: string[];
    jp: string[];
    pt: string[];
  };
  // 用于前端呈现的颜色
  colors: {
    primary: string;
    secondary: string;
  };
}

export type PatronusScores = {
  [Key in PatronusType]: number;
};

export type PatronusesByType = {
  [Key in PatronusType]: PatronusName[];
}; 