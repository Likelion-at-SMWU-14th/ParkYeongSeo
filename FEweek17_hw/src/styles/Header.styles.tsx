import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 28px 24px 0;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  gap: 42px;
`;

export const Line = styled.div`
  flex: 1;

  height: 2px;
  background: #000;
`;

export const Tagline = styled.p`
  flex-shrink: 0;

  font-family: "Times New Roman", Times, serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 1;

  color: #000;
  white-space: nowrap;
`;

export const Logo = styled.h1`
  margin: 27px 0 37px;

  font-family: "Old London", serif;
  font-size: clamp(80px, 8vw, 128px);
  font-weight: 400;
  line-height: 0.9;

  color: #000;
  text-align: center;
  white-space: nowrap;
`;

export const DoubleLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 100%;

  span {
    width: 100%;
    background: #000;
  }

  span:first-child {
    height: 2px;
  }

  span:last-child {
    height: 4px;
  }
`;