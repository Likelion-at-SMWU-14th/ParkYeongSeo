
"use client";

const fortuneTypes = [
  { id: "love", label: "연애운"},
  { id: "general", label: "종합운"},
  { id: "money", label: "금전운"},
];

export default function FortuneSelector({
  selected,
  onSelect,
}) {
  return (
    <div className="fortune-selector">
      {fortuneTypes.map((fortune) => (
        <button
          key={fortune.id}
          type="button"
          className={`fortune-option ${
            selected === fortune.id ? "selected" : ""
          }`}
          onClick={() => onSelect(fortune.id)}
          aria-pressed={selected === fortune.id}
        >
          <span>{fortune.label}</span>
        </button>
      ))}
    </div>
  );
}
