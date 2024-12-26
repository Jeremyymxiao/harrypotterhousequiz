export interface Answer {
  text: string;
  scores: {
    gryffindor: number;
    slytherin: number;
    ravenclaw: number;
    hufflepuff: number;
  };
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "When facing a challenge, what would you most likely do?",
    answers: [
      {
        text: "Face it head-on with immediate action",
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: "Analyze the situation and make a detailed plan",
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: "Find the most advantageous solution",
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: "Work together with others to solve it",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 2,
    text: "Which quality do you value most?",
    answers: [
      {
        text: "Courage",
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: "Wisdom",
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: "Ambition",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: "Loyalty",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 3,
    text: "If you could have one magical ability, you would choose:",
    answers: [
      {
        text: "The power to protect others",
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: "The ability to gain knowledge",
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: "The power to achieve your goals",
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: "The ability to help others",
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 4,
    text: "In a group project, what role do you usually take?",
    answers: [
      {
        text: "The leader who takes charge",
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 3, hufflepuff: 4 }
      },
      {
        text: "The researcher who gathers information",
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: "The strategist who plans everything",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: "The mediator who keeps everyone happy",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 5,
    text: "What would you do if you found a lost first-year student?",
    answers: [
      {
        text: "Personally escort them to their destination",
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: "Give them detailed directions with landmarks",
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: "Tell them to figure it out themselves",
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: "Introduce them to other students going the same way",
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 6,
    text: "What's your ideal way to spend a free afternoon?",
    answers: [
      {
        text: "Practicing dueling spells",
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 4, hufflepuff: 3 }
      },
      {
        text: "Reading in the library",
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: "Networking with influential people",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: "Helping friends with their homework",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 7,
    text: "What would be your favorite subject at Hogwarts?",
    answers: [
      {
        text: "Defense Against the Dark Arts",
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 4, hufflepuff: 3 }
      },
      {
        text: "Ancient Runes",
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: "Potions",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: "Care of Magical Creatures",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 8,
    text: "How do you prefer to solve conflicts?",
    answers: [
      {
        text: "Confront the issue directly",
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: "Find a logical solution",
        scores: { gryffindor: 4, slytherin: 3, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: "Use the situation to your advantage",
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: "Seek compromise and harmony",
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 9,
    text: "What's your greatest strength?",
    answers: [
      {
        text: "Standing up for what's right",
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: "Quick learning and adaptation",
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: "Achieving my goals at any cost",
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: "Being there for others",
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 10,
    text: "What would you do if you found a powerful magical artifact?",
    answers: [
      {
        text: "Use it to protect others",
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: "Study its properties and history",
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: "Keep it for future use",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: "Turn it in to the proper authorities",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 11,
    text: "What kind of pet would you bring to Hogwarts?",
    answers: [
      {
        text: "A brave and loyal owl",
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: "A mysterious and intelligent cat",
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: "A rare and impressive creature",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: "A friendly and affectionate animal",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 12,
    text: "How would you like to be remembered?",
    answers: [
      {
        text: "As a hero who fought for justice",
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: "As a brilliant mind who made discoveries",
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: "As a powerful and influential leader",
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: "As someone who made others' lives better",
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 13,
    text: "What would you do during a Quidditch match?",
    answers: [
      {
        text: "Play as an aggressive Chaser",
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 3, hufflepuff: 4 }
      },
      {
        text: "Analyze the other team's strategy",
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: "Focus on winning at any cost",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: "Support and encourage teammates",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 14,
    text: "What would you do if you caught someone cheating?",
    answers: [
      {
        text: "Confront them immediately",
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: "Gather evidence and report it",
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: "Use the information strategically",
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: "Talk to them privately about it",
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 15,
    text: "What's your approach to studying?",
    answers: [
      {
        text: "Practice until perfect",
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: "Research thoroughly and take detailed notes",
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: "Focus on what brings the best results",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: "Study in groups to help each other",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 16,
    text: "What would you do with the Room of Requirement?",
    answers: [
      {
        text: "Create a training space for defense spells",
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: "Make it a vast library of knowledge",
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: "Use it for your secret ambitions",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: "Create a comfortable space for friends",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 17,
    text: "What would you see in the Mirror of Erised?",
    answers: [
      {
        text: "Yourself as a celebrated hero",
        scores: { gryffindor: 10, slytherin: 5, ravenclaw: 3, hufflepuff: 4 }
      },
      {
        text: "Yourself discovering new magic",
        scores: { gryffindor: 3, slytherin: 4, ravenclaw: 10, hufflepuff: 5 }
      },
      {
        text: "Yourself in a position of great power",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: "Yourself surrounded by loved ones",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 18,
    text: "What would be your patronus memory?",
    answers: [
      {
        text: "Overcoming a great challenge",
        scores: { gryffindor: 10, slytherin: 4, ravenclaw: 3, hufflepuff: 5 }
      },
      {
        text: "Making an important discovery",
        scores: { gryffindor: 3, slytherin: 5, ravenclaw: 10, hufflepuff: 4 }
      },
      {
        text: "Achieving a long-sought goal",
        scores: { gryffindor: 4, slytherin: 10, ravenclaw: 5, hufflepuff: 3 }
      },
      {
        text: "A moment of perfect happiness with friends",
        scores: { gryffindor: 5, slytherin: 3, ravenclaw: 4, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 19,
    text: "How would you handle a dangerous magical creature?",
    answers: [
      {
        text: "Face it bravely and directly",
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: "Study its behavior patterns first",
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: "Find a way to control it",
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: "Try to understand and befriend it",
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  },
  {
    id: 20,
    text: "What would you do with Felix Felicis (liquid luck)?",
    answers: [
      {
        text: "Use it for a noble cause",
        scores: { gryffindor: 10, slytherin: 3, ravenclaw: 4, hufflepuff: 5 }
      },
      {
        text: "Study its effects and properties",
        scores: { gryffindor: 4, slytherin: 5, ravenclaw: 10, hufflepuff: 3 }
      },
      {
        text: "Save it for a crucial moment",
        scores: { gryffindor: 3, slytherin: 10, ravenclaw: 5, hufflepuff: 4 }
      },
      {
        text: "Share it with friends in need",
        scores: { gryffindor: 5, slytherin: 4, ravenclaw: 3, hufflepuff: 10 }
      }
    ]
  }
];
