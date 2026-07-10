import styled, { keyframes } from "styled-components";

const rollUp = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-50%);
  }
`;

const winnerPop = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }

  65% {
    opacity: 1;
    transform: scale(1.12);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ReelWindow = styled.div`
  position: relative;

  width: 100%;
  height: 290px;

  overflow: hidden;

  background-color: #ffffff;
  border-radius: 28px;
`;

export const ReelList = styled.div`
  width: 100%;

  animation: ${rollUp}
    ${({ $duration }) => $duration}s
    linear
    infinite;
`;

export const ReelItem = styled.div`
  width: 100%;
  height: 88px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #282828;

  font-size: 30px;
  font-weight: 600;
  white-space: nowrap;
`;

export const WinnerItem = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-orange);

  font-size: 34px;
  font-weight: 700;
  white-space: nowrap;

  animation: ${winnerPop} 0.45s ease-out;
`;