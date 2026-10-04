import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;

  background: #fff;
  color: #000;
`;

export const CollectionHeader = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin: 0 5%;
  padding: 55px 0 28px;

  border-bottom: 1px solid #000;
`;

export const Title = styled.h2`
  margin: 0;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: clamp(
    64px,
    7vw,
    110px
  );

  font-weight: 400;
  line-height: 0.85;
`;

export const Count = styled.p`
  padding-bottom: 6px;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 18px;
  font-style: italic;
`;

export const Gallery = styled.section`
  margin: 0 5%;
  padding: 45px 0 80px;

  column-count: 4;
  column-gap: 24px;

  @media (max-width: 1200px) {
    column-count: 3;
  }

  @media (max-width: 850px) {
    column-count: 2;
  }

  @media (max-width: 560px) {
    column-count: 1;
  }
`;

export const ArtworkCard = styled.article`
  width: 100%;

  display: inline-block;

  margin: 0 0 38px;

  break-inside: avoid;
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;

  background: #fff;

  &:hover button {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ArtworkImage = styled.img`
  width: 100%;
  height: auto;

  display: block;

  object-fit: contain;

  transition:
    transform 0.35s ease;

  ${ImageWrapper}:hover & {
    transform: scale(1.015);
  }
`;

export const RemoveButton = styled.button`
  position: absolute;

  top: 12px;
  right: 12px;

  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #000;
  border-radius: 50%;

  background: #fff;
  color: #000;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 27px;
  line-height: 1;

  cursor: pointer;

  opacity: 0;

  transform: translateY(-5px);

  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const ArtworkInfo = styled.div`
  padding-top: 13px;
`;

export const ArtworkTitle = styled.h3`
  margin: 0 0 6px;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 22px;
  font-weight: 400;
  line-height: 1.05;
`;

export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 14px;
  font-style: italic;
  line-height: 1.2;

  span:last-child {
    flex-shrink: 0;
    text-align: right;
  }
`;

export const BottomArea = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 5% 70px;
`;

export const BackButton = styled.button`
  min-width: 250px;
  height: 72px;

  padding: 0 32px;

  border: 1px solid #000;
  border-radius: 4px;

  background: #fff;
  color: #000;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 23px;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 7px 7px 0 #000;
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: none;
  }
`;

export const EmptyState = styled.section`
  min-height: 430px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyTitle = styled.h3`
  margin-bottom: 10px;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 48px;
  font-weight: 400;
`;

export const EmptyDescription = styled.p`
  margin-bottom: 35px;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 18px;
  font-style: italic;
`;