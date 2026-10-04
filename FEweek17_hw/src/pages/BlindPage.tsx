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

  // 이미 본 작품 ID 가져오기
  const getSeenArtworkIds = (): number[] => {
    const saved =
      localStorage.getItem("seenArtworks");

    if (!saved) {
      return [];
    }

    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  };

  // 작품을 "본 작품"으로 저장
  const markAsSeen = (
    objectID: number
  ) => {
    const seenIds =
      getSeenArtworkIds();

    if (!seenIds.includes(objectID)) {
      const updatedIds = [
        ...seenIds,
        objectID,
      ];

      localStorage.setItem(
        "seenArtworks",
        JSON.stringify(updatedIds)
      );
    }
  };

  useEffect(() => {
    // Reveal → Next로 돌아온 경우
    // 기존 작품 목록 재사용
    if (routeState?.artworks?.length) {
      return;
    }

    const loadArtworks = async () => {
      try {
        setIsLoading(true);
        setError("");

        const searchResponse =
          await searchArtworks();

        const seenIds =
          getSeenArtworkIds();

        // 이미 본 작품 제외
        const unseenIds =
          searchResponse.objectIDs.filter(
            (id) =>
              !seenIds.includes(id)
          );

        // 그중 12개만 상세 요청
        const ids =
          unseenIds.slice(0, 12);

        if (ids.length === 0) {
          setError(
            "You've seen all available artworks."
          );

          return;
        }

        const results =
          await Promise.all(
            ids.map((id) =>
              getArtwork(id)
            )
          );

        const artworksWithImages =
          results.filter(
            (artwork) =>
              artwork.primaryImageSmall !== "" ||
              artwork.primaryImage !== ""
          );

        setArtworks(
          artworksWithImages
        );

        setCurrentIndex(0);
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

  const goToNextArtwork = () => {
    if (!currentArtwork) {
      return;
    }

    // 현재 작품을 본 작품으로 기록
    markAsSeen(
      currentArtwork.objectID
    );

    if (
      currentIndex <
      artworks.length - 1
    ) {
      setCurrentIndex(
        (prev) => prev + 1
      );
    } else {
      // 현재 받아온 작품을 전부 본 경우
      // 다음 API 묶음을 받아오기 위해 새로 진입
      navigate("/", {
        replace: true,
      });

      window.location.reload();
    }
  };

  const handleLove = () => {
    if (!currentArtwork) {
      return;
    }

    // Love한 작품도 본 작품으로 기록
    markAsSeen(
      currentArtwork.objectID
    );

    const saved =
      localStorage.getItem(
        "lovedArtworks"
      );

    const lovedArtworks: Artwork[] =
      saved
        ? JSON.parse(saved)
        : [];

    const alreadyLoved =
      lovedArtworks.some(
        (artwork) =>
          artwork.objectID ===
          currentArtwork.objectID
      );

    if (!alreadyLoved) {
      const updatedLovedArtworks = [
        ...lovedArtworks,
        currentArtwork,
      ];

      localStorage.setItem(
        "lovedArtworks",
        JSON.stringify(
          updatedLovedArtworks
        )
      );
    }

    navigate("/reveal", {
      state: {
        artwork:
          currentArtwork,

        artworks,

        currentIndex,
      },
    });
  };

  const handlePass = () => {
    goToNextArtwork();
  };

  const handleImageError = () => {
    // 이미지가 깨진 작품도 다시 보여주지 않음
    goToNextArtwork();
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