
export default async function DrawPage({
  searchParams,
}) {
  const { category } = await searchParams;

  const fortuneNames = {
    love: "연애운",
    general: "종합운",
    money: "금전운",
  };

  return (
    <div className="page-container">
      <h1 className="page-title">
        카드를 선택하세요
      </h1>

      <p className="page-description">
        선택한 운세: {
          fortuneNames[category] || "선택되지 않음"
        }
      </p>
    </div>
  );
}
