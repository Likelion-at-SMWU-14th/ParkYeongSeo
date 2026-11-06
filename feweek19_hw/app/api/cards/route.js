
import { tarotCards } from "@/lib/tarotData";

export async function GET() {
  const cards = tarotCards.map((card) => ({
    number: card.number,
    id: card.id,
    name: card.name,
    koreanName: card.koreanName,
    image: card.image,
  }));

  return Response.json({
    success: true,
    count: cards.length,
    cards: cards,
  });
}
