
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

  // 페이지 이동 타이머 및 중복 실행 방지
  const timerRef = useRef(null);
  const isNavigatingRef = useRef(false);

  // 페이지 진입 시 랜덤 카드 3장 요청
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

        const data = await response.json();

        if (!response.ok || !data.success) {
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
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // 카드 선택
  const handleCardClick = (card) => {
    if (selectedCard !== null) return;

    setSelectedCard(card.id);
  };

  // 카드 뒤집기 완료 후 1.5초 기다렸다가 이동
  const handleFlipEnd = (event, card) => {
    if (
      selectedCard !== card.id ||
      event.propertyName !== "transform" ||
      event.target !== event.currentTarget.querySelector(
        ".tarot-card-inner"
      ) ||
      isNavigatingRef.current
    ) {
      return;
    }

    // 중복 실행 방지
    isNavigatingRef.current = true;
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
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="tarot-card-wrapper"
            onTransitionEnd={(event) =>
              handleFlipEnd(event, card)
            }
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
