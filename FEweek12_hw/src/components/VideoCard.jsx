import styled from 'styled-components';

export default function VideoCard({
  thumbnail,
  title,
  channelTitle,
  liked,
  onLikeClick,
  children,
}) {
  return (
    <Card>
      <Thumb>{thumbnail && <img src={thumbnail} alt={title} loading="lazy" />}</Thumb>
      <Body>
        <div>
          <Title>{title}</Title>
          {channelTitle && <Channel>{channelTitle}</Channel>}
        </div>
        <Footer>
          {children}
          {onLikeClick && (
            <HeartButton $liked={liked} onClick={onLikeClick} aria-label="좋아요">
              {liked ? '♥' : '♡'}
            </HeartButton>
          )}
        </Footer>
      </Body>
    </Card>
  );
}


const Card = styled.div`
  display: flex;
  gap: 14px;
  background: #fff;
  border-radius: 14px;
  padding: 10px;
  border: 1px solid #e3ebf1;
`;

const Thumb = styled.div`
  width: 150px;
  min-width: 150px;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  background: #dbe8f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`;

const Title = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--text-color);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Channel = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: var(--text-color);
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

const HeartButton = styled.button`
  border: none;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) =>
    props.$liked ? 'var(--theme-color)' : '#c2cdd5'};
`;