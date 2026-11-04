import axios from "axios";

import type {
  Artwork,
  ArtworkSearchResponse,
} from "../types/artwork";

const BASE_URL =
  "https://collectionapi.metmuseum.org/public/collection";

// Generic 함수
const fetchData = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url);

  return response.data;
};

// 이미지가 있는 회화 작품 검색
export const searchArtworks =
  async (): Promise<ArtworkSearchResponse> => {
    return fetchData<ArtworkSearchResponse>(
      `${BASE_URL}/v1.1/search?` +
        `hasImages=true&` +
        `medium=Paintings&` +
        `isHighlight=true&` +
        `limit=50`
    );
  };

// 작품 하나의 상세 정보 가져오기
export const getArtwork = async (
  objectID: number
): Promise<Artwork> => {
  return fetchData<Artwork>(
    `${BASE_URL}/v1/objects/${objectID}`
  );
};