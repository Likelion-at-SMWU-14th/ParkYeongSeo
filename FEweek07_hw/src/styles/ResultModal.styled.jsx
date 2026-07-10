import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const winnerPop = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.75);
  }

  65% {
    opacity: 1;
    transform: scale(1.08);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(40, 40, 40, 0.9);

  z-index: 100;

  animation: ${fadeIn} 0.3s ease;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateY(20px);
`;

export const WinnerName = styled.h2`
  margin: 0;

  color: #fff;

  font-size: clamp(80px, 11vw, 170px);
  font-weight: 700;
  line-height: 1;

  white-space: nowrap;

  animation: ${winnerPop} 0.5s ease-out;
`;

export const CloseButton = styled.button`
  margin-top: 140px;
  padding: 12px 34px;

  border: none;
  border-radius: 999px;

  background-color: var(--color-orange);
  color: var(--color-black);

  font-size: 20px;
  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.18s ease,
    filter 0.18s ease;

  &:hover {
    transform: translateY(-3px) scale(1.04);
    filter: brightness(1.08);
  }

  &:active {
    transform: translateY(1px) scale(0.97);
  }
`;