
import {
  drawRandomCards,
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

  const category = body?.category;

  // 운세 분야가 올바른지 확인
  if (!isValidCategory(category)) {
    return Response.json(
      {
        success: false,
        message: "올바른 운세 분야를 선택해 주세요.",
      },
      { status: 400 }
    );
  }

  // 랜덤 카드 3장 추첨
  const selectedCards = drawRandomCards();

  // 필요한 카드 정보만 반환
  const cards = selectedCards.map((card) => ({
    number: card.number,
    id: card.id,
    name: card.name,
    koreanName: card.koreanName,
    image: card.image,
  }));

  return Response.json({
    success: true,
    category,
    cards,
  });
}
