import styled, { css } from "styled-components";

const variants = {
  default: css`
    background: #f7f2ea;
    color: #222;
  `,
  dark: css`
    background: #1c1c1c;
    color: #fff;
  `,
  accent: css`
    background: #e85b45;
    color: #fff;
  `,
};

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  ${(props) => variants[props.$variant] || variants.default}
`;

export const Image = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 0.75rem;
`;

export const Badge = styled.span`
  width: fit-content;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.9;
`;
