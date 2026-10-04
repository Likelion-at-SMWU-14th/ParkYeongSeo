import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
  height: 100vh;

  background: #fff;
  color: #000;

  overflow: hidden;
`;

export const Content = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(470px, 1fr);
  align-items: center;

  column-gap: 100px;

  /*
   * Header 아래부터 화면 하단까지의 영역.
   * 좌우 여백은 Header의 선이 끝에서 떨어진 정도와 맞춤.
   */
  padding: 58px 5% 45px;

  height: calc(100vh - 220px);
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
  /*
   * 작품 원본 비율 유지
   */
  width: auto;
  height: auto;

  /*
   * 화면보다 긴 작품은 자동으로 축소
   */
  max-width: 100%;
  max-height: calc(100vh - 330px);

  display: block;

  /*
   * 작품을 자르지 않음
   */
  object-fit: contain;
`;

export const ButtonArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  gap: 80px;

  /*
   * 버튼을 오른쪽으로 배치
   */
  padding-left: 40px;
  padding-right: 4%;
`;

const Button = styled.button`
  width: 100%;
  max-width: 470px;
  height: 170px;

  flex-shrink: 0;

  border: 1px solid #000;
  border-radius: 4px;

  font-family: "Times New Roman", Times, serif;
  font-size: 54px;
  font-weight: 400;

  cursor: pointer;

  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:active {
    transform: translate(4px, 4px);
  }
`;

export const LoveButton = styled(Button)`
  background: #000;
  color: #fff;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translate(-6px, -6px);

    box-shadow:
      8px 8px 0 #fff,
      9px 9px 0 #000,
      7px 9px 0 #000,
      9px 7px 0 #000;
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: none;
  }
`;

export const PassButton = styled(Button)`
  background: #fff;
  color: #000;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translate(-6px, -6px);
    box-shadow: 8px 8px 0 #000;
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: none;
  }
`;

export const Loading = styled.p`
  margin-top: 100px;

  font-family: "Times New Roman", Times, serif;
  font-size: 32px;

  text-align: center;
`;