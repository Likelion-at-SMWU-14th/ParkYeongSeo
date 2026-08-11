import styled from 'styled-components';
import { useSearchStore } from '../store/searchStore';
import { usePlaylistStore } from '../store/playlistStore';
import VideoCard from './VideoCard';

const Page = styled.section`
  background: #f2f6f9;
  border-radius: 20px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SearchBar = styled.form`
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    padding: 12px 16px;
    border-radius: 10px;
    border: 1px solid #d5e2ea;
    font-size: 15px;
  }

  button {
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    background: #7fb8e0;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default function SearchPanel() {
  const query = useSearchStore((s) => s.query);
  const setQuery = useSearchStore((s) => s.setQuery);
  const search = useSearchStore((s) => s.search);
  const results = useSearchStore((s) => s.results);
  const loading = useSearchStore((s) => s.loading);
  const error = useSearchStore((s) => s.error);

  const items = usePlaylistStore((s) => s.items);
  const toggleItem = usePlaylistStore((s) => s.toggleItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <Page>
      <SearchBar onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="예: 있지 예지"
        />
        <button type="submit">검색</button>
      </SearchBar>

      {loading && <p>검색 중...</p>}
      {error && <p>{error}</p>}

      {results.map((video) => {
        const saved = items.some((i) => i.id === video.id);
        return (
          <VideoCard
            key={video.id}
            {...video}
            liked={saved}
            onLikeClick={() => toggleItem(video)}
          />
        );
      })}
    </Page>
  );
}