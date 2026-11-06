
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import FortuneSelector from "./FortuneSelector";
import GoldButton from "./GoldButton";

export default function FortuneHome() {
  const router = useRouter();

  const [selectedFortune, setSelectedFortune] =
    useState("");

  const handleDraw = () => {
    if (!selectedFortune) return;

    router.push(
      `/draw?category=${selectedFortune}`
    );
  };

  return (
    <section className="fortune-home">
      <p className="fortune-question">
        어떤 운세가 궁금하신가요?
      </p>

      <FortuneSelector
        selected={selectedFortune}
        onSelect={setSelectedFortune}
      />

      <div className="draw-button-wrapper">
        <GoldButton
          onClick={handleDraw}
          disabled={!selectedFortune}
        >
          카드 뽑기 <span aria-hidden="true">→</span>
        </GoldButton>
      </div>
    </section>
  );
}
