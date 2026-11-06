
export default function PageHeader({
  title = "오늘의 타로",
  description,
}) {
  return (
    <header className="page-header">

      <h1 className="page-title">
        {title}
      </h1>

      {description && (
        <p className="page-description">
          {description}
        </p>
      )}
    </header>
  );
}
