import styled from 'styled-components';
import { usePlaylistStore } from '../store/playlistStore';
import VideoCard from './VideoCard';

export default function PlaylistPanel() {
  const items = usePlaylistStore((s) => s.items);
  const removeItem = usePlaylistStore((s) => s.removeItem);
  const increasePriority = usePlaylistStore((s) => s.increasePriority);
  const decreasePriority = usePlaylistStore((s) => s.decreasePriority);
  const toggleLike = usePlaylistStore((s) => s.toggleLike);

  return (
    <Page>
      <h2>나만의 직캠 PLAYLIST ♩♪♬</h2>

      {items.map((item) => (
        <VideoCard
          key={item.id}
          {...item}
          liked={item.liked}
          onLikeClick={() => toggleLike(item.id)}
        >
          <QtyControl>
            <button onClick={() => decreasePriority(item.id)}>−</button>
            <span>{item.priority}</span>
            <button onClick={() => increasePriority(item.id)}>+</button>
          </QtyControl>
          <button onClick={() => removeItem(item.id)}>삭제</button>
        </VideoCard>
      ))}
    </Page>
  );
}


const Page = styled.section`
  background: #f2f6f9;
  border-radius: 20px;
  padding: 22px;
`;

const QtyControl = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  button {
    border: none;
    background: #eef4f8;
    width: 22px;
    height: 22px;
    border-radius: 6px;
    cursor: pointer;
  }
`;
