import styled from 'styled-components';
import { usePlaylistStore } from '../store/playlistStore';
import { useThemeStore } from '../store/themeStore';
import VideoCard from './VideoCard';

const Page = styled.section`
  background: #f2f6f9;
  border-radius: 20px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 800;
`;

const ColorDot = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px #cfd9e0;
  background: ${(props) => props.$color};
  cursor: pointer;
  padding: 0;
`;

const HiddenColorInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
`;

export default function PlaylistPanel() {
  const items = usePlaylistStore((s) => s.items);
  const toggleItem = usePlaylistStore((s) => s.toggleItem);
  const themeColor = useThemeStore((s) => s.themeColor);
  const setThemeColor = useThemeStore((s) => s.setThemeColor);

  return (
    <Page>
      <Header>
        <Title>나만의 직캠 PLAYLIST ♩♪♬</Title>

        <label>
          <ColorDot as="span" $color={themeColor} />
          <HiddenColorInput
            type="color"
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
          />
        </label>
      </Header>

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