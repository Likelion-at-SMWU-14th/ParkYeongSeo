
import Image from "next/image";
import Link from "next/link";

export default function TarotResult({
  card,
  reading,
  category,
  categoryName,
}) {
  return (
    <section className="tarot-result">
      {/* 왼쪽: 타로 카드 이미지 */}
      <div className="result-card-area">
        <div className="result-card-image">
          <Image
            src={card.image}
            alt={`${card.koreanName} 타로 카드`}
            fill
            sizes="(max-width: 768px) 75vw, 300px"
            priority
          />
        </div>
      </div>

      {/* 오른쪽: 운세 해석 */}
      <div className="result-content">
        <span className="result-category">
          {categoryName}
        </span>

        <h2 className="result-card-title">
          {card.name}
        </h2>

        <p className="result-card-korean">
          {card.koreanName}
        </p>

        <div className="result-divider" />

        <p className="result-description">
          {reading.description}
        </p>

        <div className="result-keywords">
          {reading.keywords.map((keyword) => (
            <span
              key={keyword}
              className="result-keyword"
            >
              {keyword}
            </span>
          ))}
        </div>

        <Link
          href={`/draw?category=${category}`}
          className="result-retry-button"
        >
          다시 뽑기 →
        </Link>
      </div>
    </section>
  );
}
