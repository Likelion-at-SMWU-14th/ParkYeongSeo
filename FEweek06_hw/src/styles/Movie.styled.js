import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 40px;
  background-color: #ffffff;
  color: #111;
`;

export const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 700;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export const MovieCard = styled.div`
  overflow: hidden;
  border-radius: 16px;
  background-color: #1f1f1f;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
`;

export const Poster = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
`;

export const MovieInfo = styled.div`
  padding: 16px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;

export const Rating = styled.p`
  margin-bottom: 8px;
  color: #ffd166;
  font-size: 15px;
`;

export const Genre = styled.p`
  display: inline-block;
  margin-bottom: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: #ff7a2f;
  color: white;
  font-size: 13px;
  font-weight: 600;
`;

export const Description = styled.p`
  color: #cccccc;
  font-size: 14px;
  line-height: 1.5;
`;

export const ButtonGrid = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 999px;
  
  background-color: ${(props) =>
    props.$active ? "#ff7a2f" : "#f2f2f2"};
  color: ${(props) =>
    props.$active ? "#ffffff" : "#333333"};

  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ff7a2f;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 360px;
  padding: 12px 16px;
  margin-bottom: 24px;

  border: 2px solid #e5e5e5;
  border-radius: 999px;

  font-size: 15px;
  color: #333333;
  background-color: #ffffff;

  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    border-color: #ff7a2f;
    box-shadow: 0 0 0 4px rgba(255, 122, 47, 0.15);
  }
`;