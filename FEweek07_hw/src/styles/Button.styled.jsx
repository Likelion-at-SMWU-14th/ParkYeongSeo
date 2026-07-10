import styled, { keyframes } from "styled-components";

const hoverBounce = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }
`;

export const SlotButton = styled.button`
  width: 120px;
  height: 120px;

  border: none;
  border-radius: 50%;

  background-color: #ff893a;
  color: #272727;

  font-size: 24px;
  font-weight: 700;

  cursor: pointer;

  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    animation: ${hoverBounce} 0.45s ease;
    filter: brightness(1.08);
    box-shadow: 0 12px 0 rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(6px);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;