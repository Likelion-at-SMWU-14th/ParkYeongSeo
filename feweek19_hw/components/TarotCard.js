
"use client";

import Image from "next/image";

export default function TarotCard({
  image,
  name = "Tarot Card",
  flipped = false,
  onClick,
  disabled = false,
}) {
  return (
    <button
      type="button"
      className={`tarot-card ${flipped ? "flipped" : ""}`}
      onClick={onClick}
      disabled={disabled || !onClick}
      aria-label={`${name} 타로 카드 선택`}
      aria-pressed={flipped}
    >
      <div className="tarot-card-inner">
        {/* 카드 뒷면 */}
        <div className="tarot-card-face tarot-card-back">
          <Image
            src="/images/tarot/card-back.png"
            alt="타로 카드 뒷면"
            fill
            sizes="(max-width: 768px) 28vw, 240px"
            priority
          />
        </div>

        {/* 카드 앞면 */}
        <div className="tarot-card-face tarot-card-front">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 28vw, 240px"
            />
          ) : (
            <div className="tarot-placeholder">✦</div>
          )}
        </div>
      </div>
    </button>
  );
}
