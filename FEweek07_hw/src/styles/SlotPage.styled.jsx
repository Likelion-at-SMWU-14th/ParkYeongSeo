import styled from "styled-components";

export const SlotPageContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 72px;
  padding-bottom: 68px;

  background-color: #272727;
  overflow: hidden;
`;

export const SlotTitle = styled.h1`
  margin: 0;

  color: #FF893A;
  font-size: 64px;
  line-height: 1.3;
  text-align: center;

  span {
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SlotMachineArea = styled.section`
  position: relative;

  width: min(960px, 80vw);
  margin-top: 90px;
`;

export const SlotBackground = styled.img`
  display: block;

  width: 100%;
  height: auto;

  user-select: none;
  pointer-events: none;
`;