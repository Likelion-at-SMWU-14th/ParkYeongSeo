import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Background = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Logo = styled.img`
  position: absolute;
  top: 90%;
  left: 25%;
  transform: translate(-50%, -50%);

  width: auto;
  height: 10rem;
  object-fit: contain;

  filter: invert(1);
  z-index: 1;
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 60%;

  line-height: 1.8;
  font-size: 1rem;
  color: #fff;

  padding-right: 50px;
  z-index: 1;
`;