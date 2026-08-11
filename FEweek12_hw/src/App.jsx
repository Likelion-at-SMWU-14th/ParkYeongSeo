import styled from 'styled-components';
import SearchPanel from './components/SearchPanel';
import PlaylistPanel from './components/PlaylistPanel';

export default function App() {
  return (
    <Notebook>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;