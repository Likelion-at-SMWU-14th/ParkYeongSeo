
import { redirect } from "next/navigation";

import PageHeader from "@/components/PageHeader";
import TarotDraw from "@/components/TarotDraw";
import { isValidCategory } from "@/lib/tarotData";

export default async function DrawPage({
  searchParams,
}) {
  const { category } = await searchParams;

  // 잘못된 운세 분야라면 메인으로 이동
  if (!isValidCategory(category)) {
    redirect("/");
  }

  const categoryNames = {
    love: "연애운",
    general: "종합운",
    money: "금전운",
  };

  return (
    <div className="page-container draw-page">
      <PageHeader
        title="카드를 선택하세요"
      />

      <TarotDraw category={category} />
    </div>
  );
}
