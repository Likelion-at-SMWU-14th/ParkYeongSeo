import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Panel = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);

  width: 90%;
  text-align: right;
  color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 0.75rem;

  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -3%;

`;

export const Description = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
`;