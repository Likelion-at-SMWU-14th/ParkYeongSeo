
export default async function ResultPage({ params }) {
  const { id } = await params;

  return (
    <div className="page-container">
      <h1 className="page-title">
        타로 결과 페이지
      </h1>

      <p className="page-description">
        선택한 카드: {id}
      </p>
    </div>
  );
}
