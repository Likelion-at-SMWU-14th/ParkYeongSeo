import styled, { keyframes } from "styled-components";

const hoverBounce = keyframes`
  0% {
    transform: translateY(-50%) scale(1);
  }

  50% {
    transform: translateY(-50%) scale(1.08);
  }

  100% {
    transform: translateY(-50%) scale(1);
  }
`;

export const SlotButton = styled.button`
  position: absolute;

  top: 50%;

  /*
    화면 중앙 + 슬롯 본체 절반 + gap
    860px / 2 = 430px
    gap = 40px
  */
  left: calc(50% + 430px + 40px);

  width: 108px;
  height: 108px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  border: none;
  border-radius: 50%;

  background-color: #ff893a;
  color: #282828;

  font-size: 22px;
  font-weight: 700;

  cursor: pointer;

  transform: translateY(-50%);

  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.22);

  transition:
    transform 0.18s ease,
    filter 0.18s ease,
    box-shadow 0.18s ease;

  &:hover:not(:disabled) {
    animation: ${hoverBounce} 0.4s ease;
    filter: brightness(1.08);
    box-shadow: 0 12px 0 rgba(0, 0, 0, 0.22);
  }

  &:active:not(:disabled) {
    transform: translateY(calc(-50% + 5px)) scale(0.96);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.22);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    animation: none;
  }
`;