import styled from "styled-components";

export const Wrapper = styled.section`
  height: 80%;
  width: fit-content;
  
  margin-left: 5rem;
  margin-right: 5rem;

  display: flex;
  flex-direction: column;
  transform: translateY(30%);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20rem);
  gap: 1rem;
`;

export const MoreButton = styled.button`
  width: 100%;
  height: 2rem;

  margin-top: 1.5rem;
  padding: 0.5rem 1rem;

  border: 1px solid #222;
  background: transparent;

  font-size: 0.75rem;
  letter-spacing: 0.05em;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: #222;
    color: #fff;
  }
`;