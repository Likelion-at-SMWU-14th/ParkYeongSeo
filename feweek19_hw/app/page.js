
"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import GoldButton from "@/components/GoldButton";
import FortuneSelector from "@/components/FortuneSelector";
import TarotCard from "@/components/TarotCard";

export default function Home() {
  const [selected, setSelected] = useState("");
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="page-container" style={{ gap: "40px" }}>
      <PageHeader
        title="오늘의 타로"
        description="오늘 어떤 운세가 궁금하신가요?"
      />

      <FortuneSelector
        selected={selected}
        onSelect={setSelected}
      />

      <GoldButton disabled={!selected}>
        카드 뽑기 →
      </GoldButton>

      <TarotCard
        name="테스트 카드"
        flipped={flipped}
        onClick={() => setFlipped(!flipped)}
      />
    </div>
  );
}
