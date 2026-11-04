
import Image from "next/image";

export default function TarotResult({
  card,
  reading,
}) {
  if (!card || !reading) {
    return <p>타로 결과를 불러올 수 없습니다.</p>;
  }

  return (
    <section className="tarot-result">
      <div className="result-image">
        <Image
          src={card.image}
          alt={card.name}
          fill
          sizes="(max-width: 768px) 70vw, 300px"
        />
      </div>

      <div className="result-content">
        <h2>{card.name}</h2>
        <h3>{card.koreanName}</h3>

        <p className="result-description">
          {reading.description}
        </p>

        <div className="result-keywords">
          {reading.keywords.map((keyword) => (
            <span key={keyword}>
              ✦ {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
