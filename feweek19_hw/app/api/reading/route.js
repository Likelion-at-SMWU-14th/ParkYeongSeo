
import {
  getTarotCard,
  isValidCategory,
} from "@/lib/tarotData";

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        success: false,
        message: "잘못된 요청 형식입니다.",
      },
      { status: 400 }
    );
  }

  const { cardId, category } = body ?? {};

  // 운세 분야 검사
  if (!isValidCategory(category)) {
    return Response.json(
      {
        success: false,
        message: "올바른 운세 분야를 선택해 주세요.",
      },
      { status: 400 }
    );
  }

  // 카드 조회
  const card = getTarotCard(cardId);

  if (!card) {
    return Response.json(
      {
        success: false,
        message: "존재하지 않는 타로 카드입니다.",
      },
      { status: 404 }
    );
  }

  // 선택 분야에 맞는 해석
  const reading = card.readings[category];

  const categoryNames = {
    love: "연애운",
    general: "종합운",
    money: "금전운",
  };

  return Response.json({
    success: true,
    category,
    categoryName: categoryNames[category],
    card: {
      number: card.number,
      id: card.id,
      name: card.name,
      koreanName: card.koreanName,
      image: card.image,
    },
    reading,
  });
}
