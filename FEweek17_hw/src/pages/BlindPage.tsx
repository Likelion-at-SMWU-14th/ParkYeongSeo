import {
  useEffect,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

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

interface BlindLocationState {
  artworks?: Artwork[];
  currentIndex?: number;
}

const BlindPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routeState =
    location.state as BlindLocationState | null;

  const [artworks, setArtworks] = useState<Artwork[]>(
    routeState?.artworks ?? []
  );

  const [currentIndex, setCurrentIndex] = useState(
    routeState?.currentIndex ?? 0
  );

  const [isLoading, setIsLoading] = useState(
    !routeState?.artworks?.length
  );

  const [error, setError] = useState("");

  useEffect(() => {
    // RevealPage에서 기존 작품 목록을 넘겨받았다면
    // API를 다시 호출하지 않음
    if (routeState?.artworks?.length) {
      return;
    }

    const loadArtworks = async () => {
      try {
        setIsLoading(true);
        setError("");

        const searchResponse =
          await searchArtworks();

        // 너무 많은 상세 요청을 동시에 보내지 않도록
        // 12개만 사용
        const ids =
          searchResponse.objectIDs.slice(0, 12);

        const results = await Promise.all(
          ids.map((id) => getArtwork(id))
        );

        const artworksWithImages =
          results.filter(
            (artwork) =>
              artwork.primaryImageSmall !== "" ||
              artwork.primaryImage !== ""
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

  const handleLove = () => {
    if (!currentArtwork) {
      return;
    }

    // 기존 Collection 가져오기
    const saved =
      localStorage.getItem(
        "lovedArtworks"
      );

    const lovedArtworks: Artwork[] =
      saved
        ? JSON.parse(saved)
        : [];

    // 같은 작품 중복 저장 방지
    const alreadyLoved =
      lovedArtworks.some(
        (artwork) =>
          artwork.objectID ===
          currentArtwork.objectID
      );

    if (!alreadyLoved) {
      lovedArtworks.push(
        currentArtwork
      );

      localStorage.setItem(
        "lovedArtworks",
        JSON.stringify(
          lovedArtworks
        )
      );
    }

    navigate("/reveal", {
      state: {
        artwork: currentArtwork,
        artworks,
        currentIndex,
      },
    });
  };

  const handlePass = () => {
    if (artworks.length === 0) {
      return;
    }

    setCurrentIndex(
      (prev) =>
        (prev + 1) %
        artworks.length
    );
  };

  const handleImageError = () => {
    handlePass();
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
            onClick={handleLove}
          >
            Love
          </S.LoveButton>

          <S.PassButton
            type="button"
            onClick={handlePass}
          >
            Pass
          </S.PassButton>
        </S.ButtonArea>
      </S.Content>
    </S.Page>
  );
};

export default BlindPage;