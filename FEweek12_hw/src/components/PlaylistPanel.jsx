import styled from 'styled-components';
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

const Title = styled.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 800;
`;

export default function PlaylistPanel() {
  const items = usePlaylistStore((s) => s.items);
  const toggleItem = usePlaylistStore((s) => s.toggleItem);

  return (
    <Page>
      <Title>나만의 직캠 PLAYLIST ♩♪♬</Title>

      {items.length === 0 && <p>왼쪽에서 하트를 눌러 직캠을 담아보세요.</p>}

      {items.map((video) => (
        <VideoCard
          key={video.id}
          {...video}
          liked={true}
          onLikeClick={() => toggleItem(video)}
        />
      ))}
    </Page>
  );
}