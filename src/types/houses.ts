export type HouseName = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff';

export interface House {
  name: HouseName;
  displayName: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

export const HOUSES: Record<HouseName, House> = {
  gryffindor: {
    name: 'gryffindor',
    displayName: 'Gryffindor',
    description: 'Known for their courage, bravery, and determination. Gryffindors are natural leaders who stand up for what\'s right.',
    colors: {
      primary: '#740001',
      secondary: '#D3A625'
    }
  },
  slytherin: {
    name: 'slytherin',
    displayName: 'Slytherin',
    description: 'Characterized by ambition, cunning, and resourcefulness. Slytherins are natural leaders who achieve their goals.',
    colors: {
      primary: '#1A472A',
      secondary: '#5D5D5D'
    }
  },
  ravenclaw: {
    name: 'ravenclaw',
    displayName: 'Ravenclaw',
    description: 'Valued for their intelligence, creativity, and wit. Ravenclaws are natural problem solvers with sharp minds.',
    colors: {
      primary: '#0E1A40',
      secondary: '#946B2D'
    }
  },
  hufflepuff: {
    name: 'hufflepuff',
    displayName: 'Hufflepuff',
    description: 'Prized for their loyalty, fairness, and hard work. Hufflepuffs are dependable friends who value justice.',
    colors: {
      primary: '#FFD800',
      secondary: '#000000'
    }
  }
};
