import { useEffect } from 'react';
import styled from 'styled-components';
import SearchPanel from './components/SearchPanel';
import PlaylistPanel from './components/PlaylistPanel';
import { useThemeStore } from './store/themeStore';

// 바깥 테두리(액자) — 테마 컬러
const Notebook = styled.div`
  width: min(1200px, 100%);
  height: 82vh;
  margin: 40px auto;
  background: var(--theme-color, #acd7f0);
  border-radius: 28px;
  padding: 18px;
`;

// 안쪽 판 — 항상 흰빛 고정, spine 여백까지 하나로 이어짐
const Sheet = styled.div`
  height: 100%;
  background: #f2f6f9;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 78px 1fr;
  align-items: stretch;
  overflow: hidden;
`;

const Spine = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  pointer-events: none;
`;

export default function App() {
  const themeColor = useThemeStore((s) => s.themeColor);

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', themeColor);
  }, [themeColor]);

  return (
    <Notebook>
      <Sheet>
        <SearchPanel />
        <Spine src="/spine.png" alt="" />
        <PlaylistPanel />
      </Sheet>
    </Notebook>
  );
}