import styled from 'styled-components';
import { usePlaylistStore } from '../store/playlistStore';
import { useThemeStore } from '../store/themeStore';
import VideoCard from './VideoCard';

export default function PlaylistPanel() {
  const items = usePlaylistStore((s) => s.items);
  const toggleItem = usePlaylistStore((s) => s.toggleItem);
  const themeColor = useThemeStore((s) => s.themeColor);
  const setThemeColor = useThemeStore((s) => s.setThemeColor);

  return (
    <Page>
      <Header>
        <TitleBar>
          <Title>나만의 직캠 PLAYLIST ♩♪♬</Title>
        </TitleBar>

        <label>
          <ColorDot as="span" $color={themeColor} />
          <HiddenColorInput
            type="color"
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
          />
        </label>
      </Header>

      <ResultList>
        {items.map((video) => (
          <VideoCard
            key={video.id}
            {...video}
            liked={true}
            onLikeClick={() => toggleItem(video)}
          />
        ))}
      </ResultList>
    </Page>
  );
}


const Page = styled.section`
  background: #f2f6f9;
  border-radius: 4px 20px 20px 4px;
  padding: 22px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 48px;
`;

const TitleBar = styled.div`
  flex: 1;
  height: 48px;
  border-radius: 10px;
  background: var(--theme-color, #acd7f0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 14px;
`;

const ColorDot = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  min-width: 48px;
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

const ResultList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-right: 4px;
`;