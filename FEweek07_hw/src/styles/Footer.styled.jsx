import styled, { keyframes } from "styled-components";

const moveToLeft = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;

export const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 68px;

  display: flex;
  align-items: center;

  overflow: hidden;

  background-color: #FF893A;
  color: #282828;

  z-index: 10;
`;

export const MarqueeTrack = styled.div`
  width: max-content;

  display: flex;
  flex-shrink: 0;

  animation: ${moveToLeft} 20s linear infinite;
`;

export const MarqueeGroup = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  flex-shrink: 0;

  padding-right: 48px;

  font-size: 26px;
  line-height: 1;
  white-space: nowrap;

  strong {
    font-weight: 700;
  }

  span {
    font-weight: 400;
  }
`;