import styled from "styled-components";

export const Card = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left center;

  transition: opacity 0.4s ease;
`;

export const HoverImage = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left center;

  opacity: 0;
  transition: opacity 0.4s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const Name = styled.h3`
  margin-top: 0.75rem;

  font-size: 0.9rem;
  font-weight: 400;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  margin-top: 0.25rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  margin-top: 0.25rem;

  font-size: 0.8rem;
`;

export const Option = styled.span`
  display: ${({ $hasOption }) => ($hasOption ? "inline" : "none")};

  color: ${({ $hasOption }) => ($hasOption ? "#999" : "transparent")};
  font-size: 0.75rem;
  font-weight: 300;
`;

export const OriginalPrice = styled.span`
  font-size: 0.8rem;
  color: #777;
  text-decoration: line-through;
`;

export const SalePrice = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #e85b45;
`;