import styled, { keyframes } from "styled-components";

const hoverBounce = keyframes`
  0% {
    transform: translateY(-50%) scale(1) rotate(0deg);
  }

  35% {
    transform: translateY(-50%) scale(1.08) rotate(-4deg);
  }

  65% {
    transform: translateY(-50%) scale(1.08) rotate(4deg);
  }

  100% {
    transform: translateY(-50%) scale(1.08) rotate(0deg);
  }
`;

export const SlotButton = styled.button`
  position: absolute;

  top: 50%;
  left: calc(50% + 430px + 56px);

  width: 120px;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  border: none;
  border-radius: 50%;

  background-color: #FF893A;
  color: #282828;

  font-size: 24px;
  font-weight: 700;

  cursor: pointer;

  transform: translateY(-50%);

  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.2);

  transition:
    transform 0.2s ease,
    filter 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    animation: ${hoverBounce} 0.45s ease forwards;
    filter: brightness(1.08);
    box-shadow: 0 12px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    animation: none;
    transform: translateY(calc(-50% + 6px)) scale(0.96);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
  }
`;