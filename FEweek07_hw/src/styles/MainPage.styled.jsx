import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #272727;
`;

export const MainTitle = styled.h1`
  margin: 0;

  color: #ff8738;
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

export const StartButton = styled.button`
  margin-top: 260px;
  padding: 12px 34px;

  border: none;
  border-radius: 999px;

  background-color: #ff8738;
  color: #272727;

  font-size: 20px;
  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    background-color: #ff9b5a;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;