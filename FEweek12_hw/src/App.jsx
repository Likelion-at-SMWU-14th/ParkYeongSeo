import styled from 'styled-components';
import SearchPanel from './components/SearchPanel';
import PlaylistPanel from './components/PlaylistPanel';

export default function App() {
  return (
    <Notebook>
      <Spine src="/spine.png" alt="" />
      <SearchPanel />
      <PlaylistPanel />
    </Notebook>
  );
}


const Notebook = styled.div`
  width: min(1200px, 100%);
  margin: 40px auto;
  background: #bfe0f5;
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