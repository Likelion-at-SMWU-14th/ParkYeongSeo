import styled, { keyframes } from "styled-components";

const rollUp = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-50%);
  }
`;

const stopPop = keyframes`
  0% {
    transform: scale(1.18);
    opacity: 0.6;
  }

  100% {
    transform: scale(1);
    opacity: 1;
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

export const StoppedList = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(3, 1fr);

  animation: ${stopPop} 0.2s ease-out;
`;

export const StoppedItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #282828;

  font-size: 28px;
  font-weight: 600;
  white-space: nowrap;
`;

export const WinnerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ff893a;

  font-size: 34px;
  font-weight: 700;
  white-space: nowrap;
`;