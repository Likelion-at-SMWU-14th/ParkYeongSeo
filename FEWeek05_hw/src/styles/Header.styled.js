import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 4.2rem;

  padding: 0 1.5rem;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 1000;

  background: transparent;
`;

export const LeftMenu = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const RightMenu = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const Menu = styled.button`
  color: #222;
  border: none;
  background: none;

  font-size: 0.75rem;
  font-weight: 100;

  cursor: pointer;
`;

export const Logo = styled.img`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: auto;
  height: 3.5rem;

  object-fit: contain;
  mix-blend-mode: difference;
`;