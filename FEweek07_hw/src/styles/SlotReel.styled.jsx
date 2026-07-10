import styled, { keyframes } from "styled-components";

const rollUp = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-50%);
  }
`;

export const ReelWindow = styled.div`
  width: 100%;
  height: 290px;

  overflow: hidden;

  background-color: #ffffff;
  border-radius: 28px;
`;

export const ReelList = styled.div`
  width: 100%;

  animation: ${rollUp} ${({ $duration }) => $duration}s linear infinite;
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