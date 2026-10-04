import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;

  background: #fff;
  color: #000;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  padding: 60px 13% 70px;

  min-height: calc(100vh - 250px);
`;

export const ArtworkArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ArtworkImage = styled.img`
  width: 345px;
  height: 668px;

  display: block;

  object-fit: cover;
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 82px;

  padding-left: 30px;
  padding-bottom: 30px;
`;

const Button = styled.button`
  width: 100%;
  max-width: 470px;
  height: 170px;

  border: 1px solid #000;
  border-radius: 4px;

  font-family: "Times New Roman", Times, serif;
  font-size: 54px;
  font-weight: 400;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;
`;

export const LoveButton = styled(Button)`
  background: #000;
  color: #fff;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const PassButton = styled(Button)`
  background: #fff;
  color: #000;

  &:hover {
    background: #000;
    color: #fff;
  }
`;