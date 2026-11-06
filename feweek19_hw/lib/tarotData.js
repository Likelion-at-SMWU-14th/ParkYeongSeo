
export const tarotCards = [
  {
    number: 0,
    id: "fool",
    name: "The Fool",
    koreanName: "바보",
    image: "/images/tarot/fool.png",
    readings: {
      general: {
        description: "두려움 없이 내딛는 첫걸음이 예상치 못한 행운을 불러올 거예요.",
        keywords: ["🌱 새로운 시작", "모험", "자유"],
      },
      love: {
        description: "예상하지 못한 순간에 새로운 인연이 찾아올 수 있어요. 열린 마음으로 사랑을 맞이해 보세요.",
        keywords: ["💗 새로운 인연", "설렘", "자유"],
      },
      money: {
        description: "새로운 금전적 기회가 찾아올 수 있지만, 충동적인 선택보다는 신중한 판단이 필요해요.",
        keywords: ["🍀 새로운 기회", "도전", "신중함"],
      },
    },
  },
  {
    number: 1,
    id: "magician",
    name: "The Magician",
    koreanName: "마법사",
    image: "/images/tarot/magician.png",
    readings: {
      general: {
        description: "당신이 가진 능력을 믿으세요. 원하는 것을 현실로 만들 순간이에요.",
        keywords: ["✨ 자신감", "가능성", "실행력"],
      },
      love: {
        description: "당신의 매력이 빛나는 순간이에요. 솔직한 표현이 관계를 한 단계 발전시킬 수 있어요.",
        keywords: ["💗 매력", "자신감", "소통"],
      },
      money: {
        description: "지금까지 쌓아온 능력이 금전적인 성과로 이어질 수 있어요. 적극적으로 기회를 활용해 보세요.",
        keywords: ["💰 능력", "기회", "성과"],
      },
    },
  },
  {
    number: 2,
    id: "high-priestess",
    name: "The High Priestess",
    koreanName: "여사제",
    image: "/images/tarot/high-priestess.png",
    readings: {
      general: {
        description: "서두르지 말고 내면의 목소리에 귀 기울이면 답이 보일 거예요.",
        keywords: ["🌙 직관", "지혜", "내면의 평화"],
      },
      love: {
        description: "상대방의 마음을 서둘러 판단하지 마세요. 조용히 서로를 이해하는 시간이 필요해요.",
        keywords: ["💗 이해", "직관", "기다림"],
      },
      money: {
        description: "지금은 큰 결정보다 정보를 충분히 살펴볼 때예요. 신중함이 좋은 결과를 가져올 거예요.",
        keywords: ["💰 분석", "신중함", "지혜"],
      },
    },
  },
  {
    number: 6,
    id: "lovers",
    name: "The Lovers",
    koreanName: "연인",
    image: "/images/tarot/lovers.png",
    readings: {
      general: {
        description: "진심을 담은 선택이 소중한 인연을 더욱 깊게 만들어 줄 거예요.",
        keywords: ["💗 사랑", "조화", "중요한 선택"],
      },
      love: {
        description: "서로의 진심이 통하는 하루예요. 소중한 사람과의 관계가 더욱 깊어질 수 있어요.",
        keywords: ["💗 사랑", "교감", "인연"],
      },
      money: {
        description: "혼자 결정하기보다 믿을 만한 사람과 의견을 나눠보세요. 협력이 좋은 기회를 만들 수 있어요.",
        keywords: ["💰 협력", "선택", "균형"],
      },
    },
  },
  {
    number: 10,
    id: "wheel-of-fortune",
    name: "Wheel of Fortune",
    koreanName: "운명의 수레바퀴",
    image: "/images/tarot/wheel-of-fortune.png",
    readings: {
      general: {
        description: "예상하지 못한 변화가 찾아와도, 그 끝에는 새로운 기회가 기다리고 있어요.",
        keywords: ["🍀 행운", "전환점", "기회"],
      },
      love: {
        description: "예상치 못한 만남이나 관계의 변화가 찾아올 수 있어요. 새로운 흐름을 자연스럽게 받아들여 보세요.",
        keywords: ["💗 운명", "변화", "새로운 만남"],
      },
      money: {
        description: "금전적인 흐름에 변화가 생길 수 있어요. 기회를 살피되 무리한 결정은 피하세요.",
        keywords: ["💰 전환점", "기회", "변화"],
      },
    },
  },
  {
    number: 13,
    id: "death",
    name: "Death",
    koreanName: "죽음",
    image: "/images/tarot/death.png",
    readings: {
      general: {
        description: "끝이라고 생각했던 순간이 사실은 새로운 시작의 문일 수 있어요.",
        keywords: ["🦋 변화", "정리", "재탄생"],
      },
      love: {
        description: "오래된 감정이나 관계의 방식을 정리할 때예요. 변화는 더 건강한 사랑을 위한 시작일 수 있어요.",
        keywords: ["💗 변화", "정리", "새로운 시작"],
      },
      money: {
        description: "기존의 소비 습관을 돌아보고 불필요한 지출을 정리해 보세요. 새로운 재정 계획이 도움이 될 거예요.",
        keywords: ["💰 정리", "전환", "재정비"],
      },
    },
  },
  {
    number: 19,
    id: "sun",
    name: "The Sun",
    koreanName: "태양",
    image: "/images/tarot/sun.png",
    readings: {
      general: {
        description: "당신의 노력이 빛을 발하며 기쁨과 좋은 에너지가 가득한 하루가 될 거예요.",
        keywords: ["☀️ 성공", "행복", "긍정"],
      },
      love: {
        description: "따뜻하고 밝은 에너지가 사랑에 가득해요. 솔직한 마음이 행복한 순간을 만들어 줄 거예요.",
        keywords: ["💗 행복", "따뜻함", "진심"],
      },
      money: {
        description: "꾸준히 노력한 일이 좋은 성과로 이어질 수 있어요. 작은 성취도 기쁘게 받아들여 보세요.",
        keywords: ["💰 성과", "풍요", "자신감"],
      },
    },
  },
  {
    number: 21,
    id: "world",
    name: "The World",
    koreanName: "세계",
    image: "/images/tarot/world.png",
    readings: {
      general: {
        description: "오랫동안 바라온 일이 결실을 맺고, 더 넓은 세상이 당신을 기다리고 있어요.",
        keywords: ["🌍 완성", "성취", "새로운 단계"],
      },
      love: {
        description: "서로를 깊이 이해하며 관계가 안정적으로 발전할 수 있어요. 지금까지의 마음이 결실을 맺을 때예요.",
        keywords: ["💗 완성", "안정", "성숙"],
      },
      money: {
        description: "오랫동안 준비해 온 일이 성과로 이어질 수 있어요. 목표를 점검하고 다음 단계를 준비해 보세요.",
        keywords: ["💰 성취", "결실", "확장"],
      },
    },
  },
];

// 카드 ID로 데이터 조회
export function getTarotCard(id) {
  return tarotCards.find((card) => card.id === id);
}

// 운세 분야가 유효한지 확인
export function isValidCategory(category) {
  return ["love", "general", "money"].includes(category);
}

// 중복 없이 카드 3장 랜덤 추첨
export function drawRandomCards() {
  const shuffled = [...tarotCards];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] =
      [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, 3);
}
