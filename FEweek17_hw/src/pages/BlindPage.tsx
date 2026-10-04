import {
  useEffect,
  useState,
} from "react";

import Header from "../components/Header";

import {
  getArtwork,
  searchArtworks,
} from "../api/artworkApi";

import type {
  Artwork,
  BlindArtwork,
} from "../types/artwork";

import * as S from "../styles/Blind.styles";

const BlindPage = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        setIsLoading(true);
        setError("");

        // 1. 이미지가 있는 작품 ID 검색
        const searchResponse =
          await searchArtworks();

        const ids =
          searchResponse.objectIDs.slice(0, 20);

        // 2. 작품 상세 데이터 가져오기
        const results = await Promise.all(
          ids.map((id) => getArtwork(id))
        );

        // 3. 실제 이미지 URL이 있는 작품만 사용
        const artworksWithImages =
          results.filter(
            (artwork) =>
              artwork.primaryImageSmall !== "" ||
              artwork.primaryImage !== ""
          );

        console.log(
          "Met 작품:",
          artworksWithImages
        );

        setArtworks(artworksWithImages);
      } catch (error) {
        console.error(
          "작품을 불러오지 못했습니다.",
          error
        );

        setError(
          "Failed to load artwork."
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadArtworks();
  }, []);

  const currentArtwork =
    artworks[currentIndex];

  const handleImageError = () => {
    if (
      currentIndex <
      artworks.length - 1
    ) {
      setCurrentIndex(
        (prev) => prev + 1
      );
    } else {
      setError(
        "No more artworks available."
      );
    }
  };

  if (isLoading) {
    return (
      <S.Page>
        <Header />

        <S.Loading>
          Loading artwork...
        </S.Loading>
      </S.Page>
    );
  }

  if (
    error ||
    !currentArtwork
  ) {
    return (
      <S.Page>
        <Header />

        <S.Loading>
          {error ||
            "No artwork available."}
        </S.Loading>
      </S.Page>
    );
  }

  // Utility Type 실제 사용
  const blindArtwork: BlindArtwork = {
    objectID:
      currentArtwork.objectID,

    primaryImage:
      currentArtwork.primaryImage,

    primaryImageSmall:
      currentArtwork.primaryImageSmall,
  };

  const imageUrl =
    blindArtwork.primaryImageSmall ||
    blindArtwork.primaryImage;

  return (
    <S.Page>
      <Header />

      <S.Content>
        <S.ArtworkArea>
          <S.ArtworkImage
            key={
              blindArtwork.objectID
            }
            src={imageUrl}
            alt="Blind artwork"
            onError={
              handleImageError
            }
          />
        </S.ArtworkArea>

        <S.ButtonArea>
          <S.LoveButton
            type="button"
          >
            Love
          </S.LoveButton>

          <S.PassButton
            type="button"
          >
            Pass
          </S.PassButton>
        </S.ButtonArea>
      </S.Content>
    </S.Page>
  );
};

export default BlindPage;