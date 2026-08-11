import { useEffect } from 'react';
import styled from 'styled-components';
import SearchPanel from './components/SearchPanel';
import PlaylistPanel from './components/PlaylistPanel';
import { useThemeStore } from './store/themeStore';

const Notebook = styled.div`
  width: min(1200px, 100%);
  margin: 40px auto;
  background: var(--theme-color, #acd7f0);
  border-radius: 28px;
  padding: 18px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
`;

const Spine = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 40px;
  z-index: 2;
  pointer-events: none;
`;

export default function App() {
  const themeColor = useThemeStore((s) => s.themeColor);

  // 테마 컬러가 바뀔 때마다 CSS 변수를 갱신
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', themeColor);
  }, [themeColor]);

  return (
    <Notebook>
      <Spine src="/spine.png" alt="" />
      <SearchPanel />
      <PlaylistPanel />
    </Notebook>
  );
}