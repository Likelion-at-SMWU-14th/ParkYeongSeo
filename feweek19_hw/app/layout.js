
import "./globals.css";

export const metadata = {
  title: "오늘의 타로",
  description: "오늘의 운명을 타로 카드로 만나보세요.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
