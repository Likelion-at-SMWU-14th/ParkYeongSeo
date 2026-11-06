
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import TarotCard from "./TarotCard";

export default function TarotDraw({ category }) {
  const router = useRouter();

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const isNavigatingRef = useRef(false);
  const timerRef = useRef(null);

  // 랜덤 카드 3장 가져오기
  useEffect(() => {
    const controller = new AbortController();

    async function fetchCards() {
      try {
        const response = await fetch("/api/draw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category }),
          signal: controller.signal,
        });

        // HTTP 오류를 먼저 확인
        if (!response.ok) {
          throw new Error("카드를 불러오지 못했습니다.");
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(
            data.message || "카드를 불러오지 못했습니다."
          );
        }

        setCards(data.cards);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchCards();

    return () => controller.abort();
  }, [category]);

  // 페이지를 벗어나면 타이머 정리
  useEffect(() => {
    const timer = timerRef;

    return () => {
      if (timer.current !== null) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  // 카드 클릭
  const handleCardClick = (card) => {
    // 중복 클릭 방지
    if (isNavigatingRef.current) return;

    isNavigatingRef.current = true;

    // 카드 뒤집기 시작
    setSelectedCard(card.id);

    // 0.8초 뒤집기 + 앞면 1초 감상
    timerRef.current = setTimeout(() => {
      router.push(
        `/result/${card.id}?category=${category}`
      );
    }, 1800);
  };

  if (loading) {
    return (
      <p className="page-description">
        운명의 카드를 준비하고 있어요...
      </p>
    );
  }

  if (error) {
    return (
      <p className="page-description">
        {error}
      </p>
    );
  }

  return (
    <section className="tarot-draw">
      <div className="tarot-card-list">
        {cards.map((card) => (
          <div
            key={card.id}
            className="tarot-card-wrapper"
          >
            <TarotCard
              image={card.image}
              name={card.name}
              flipped={selectedCard === card.id}
              disabled={selectedCard !== null}
              onClick={() => handleCardClick(card)}
            />
          </div>
        ))}
      </div>

      <p className="draw-instruction">
        {selectedCard
          ? "당신의 운명을 확인하고 있어요..."
          : "마음이 이끄는 카드 한 장을 선택해 보세요."}
      </p>
    </section>
  );
}
