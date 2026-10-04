import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
  height: 100vh;

  overflow: hidden;

  background: #fff;
  color: #000;
`;

export const Content = styled.section`
  width: 100%;
  height: calc(100vh - 220px);

  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    minmax(520px, 1fr);

  align-items: center;

  column-gap: 100px;

  padding: 58px 5% 45px;
`;

export const ArtworkArea = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  min-width: 0;
  min-height: 0;
`;

export const ArtworkImage = styled.img`
  display: block;

  width: auto;
  height: auto;

  max-width: 100%;
  max-height: calc(100vh - 330px);

  object-fit: contain;
`;

export const InfoArea = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 40px;
  padding-right: 4%;
`;

export const Label = styled.p`
  margin-bottom: 16px;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 24px;
  font-style: italic;
`;

export const Title = styled.h2`
  max-width: 600px;

  margin: 0 0 26px;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: clamp(
    54px,
    5vw,
    88px
  );

  font-weight: 400;
  line-height: 0.95;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  margin-bottom: 70px;
`;

export const Artist = styled.p`
  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 22px;
`;

export const Year = styled.p`
  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 22px;
  font-style: italic;
`;

export const ButtonArea = styled.div`
  width: 100%;
  max-width: 520px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 20px;
`;

const Button = styled.button`
  height: 90px;

  border: 1px solid #000;
  border-radius: 4px;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 30px;
  font-weight: 400;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
`;

export const FinishButton = styled(Button)`
  background: #fff;
  color: #000;

  &:hover {
    transform:
      translate(-5px, -5px);

    box-shadow:
      7px 7px 0 #000;
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: none;
  }
`;

export const NextButton = styled(Button)`
  background: #000;
  color: #fff;

  &:hover {
    transform:
      translate(-5px, -5px);

    box-shadow:
      7px 7px 0 #fff,
      8px 8px 0 #000,
      6px 8px 0 #000,
      8px 6px 0 #000;
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: none;
  }
`;

export const EmptyState = styled.div`
  min-height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;
`;

export const EmptyText = styled.p`
  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 32px;
`;

export const BackButton = styled.button`
  width: 180px;
  height: 60px;

  border: 1px solid #000;

  background: #000;
  color: #fff;

  font-family:
    "Times New Roman",
    Times,
    serif;

  font-size: 22px;

  cursor: pointer;
`;