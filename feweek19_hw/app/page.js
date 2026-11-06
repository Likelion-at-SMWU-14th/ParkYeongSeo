
import PageHeader from "@/components/PageHeader";
import FortuneHome from "@/components/FortuneHome";

export default function Home() {
  return (
    <div className="page-container home-page">
      <PageHeader
        title="오늘의 타로"
      />

      <FortuneHome />
    </div>
  );
}
