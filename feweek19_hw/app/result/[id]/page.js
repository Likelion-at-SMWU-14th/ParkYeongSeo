
import { notFound, redirect } from "next/navigation";

import PageHeader from "@/components/PageHeader";
import TarotResult from "@/components/TarotResult";

import {
  getTarotCard,
  isValidCategory,
} from "@/lib/tarotData";

const categoryNames = {
  love: "연애운",
  general: "종합운",
  money: "금전운",
};

export default async function ResultPage({
  params,
  searchParams,
}) {
  // Dynamic Route의 카드 ID
  const { id } = await params;

  // URL의 운세 분야
  const { category } = await searchParams;

  // 잘못된 운세 분야면 메인으로 이동
  if (!isValidCategory(category)) {
    redirect("/");
  }

  // 카드 ID로 데이터 조회
  const card = getTarotCard(id);

  // 존재하지 않는 카드면 404
  if (!card) {
    notFound();
  }

  // 선택한 분야의 운세 해석
  const reading = card.readings[category];

  return (
    <div className="page-container result-page">
      <TarotResult
        card={card}
        reading={reading}
        category={category}
        categoryName={categoryNames[category]}
      />
    </div>
  );
}
