import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Header from "../components/Header";

import type { Artwork } from "../types/artwork";

import * as S from "../styles/Reveal.styles";

interface RevealLocationState {
  artwork: Artwork;
  artworks: Artwork[];
  currentIndex: number;
}

const RevealPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state =
    location.state as RevealLocationState | null;

  const artwork =
    state?.artwork;

  const artworks =
    state?.artworks ?? [];

  const currentIndex =
    state?.currentIndex ?? 0;

  if (!artwork) {
    return (
      <S.Page>
        <Header />

        <S.EmptyState>
          <S.EmptyText>
            No artwork selected.
          </S.EmptyText>

          <S.BackButton
            type="button"
            onClick={() =>
              navigate("/")
            }
          >
            Back
          </S.BackButton>
        </S.EmptyState>
      </S.Page>
    );
  }

  const imageUrl =
    artwork.primaryImageSmall ||
    artwork.primaryImage;

  const handleNext = () => {
    if (artworks.length === 0) {
      navigate("/");
      return;
    }

    const nextIndex =
      (currentIndex + 1) %
      artworks.length;

    navigate("/", {
      state: {
        artworks,
        currentIndex:
          nextIndex,
      },
    });
  };

  const handleFinish = () => {
    navigate(
      "/collections"
    );
  };

  return (
    <S.Page>
      <Header />

      <S.Content>
        <S.ArtworkArea>
          <S.ArtworkImage
            src={imageUrl}
            alt={artwork.title}
          />
        </S.ArtworkArea>

        <S.InfoArea>
          <S.Label>
            You loved
          </S.Label>

          <S.Title>
            {artwork.title}
          </S.Title>

          <S.Meta>
            <S.Artist>
              {artwork.artistDisplayName ||
                "Unknown Artist"}
            </S.Artist>

            <S.Year>
              {artwork.objectDate ||
                "Unknown Date"}
            </S.Year>
          </S.Meta>

          <S.ButtonArea>
            <S.FinishButton
              type="button"
              onClick={
                handleFinish
              }
            >
              Finish
            </S.FinishButton>

            <S.NextButton
              type="button"
              onClick={
                handleNext
              }
            >
              Next
            </S.NextButton>
          </S.ButtonArea>
        </S.InfoArea>
      </S.Content>
    </S.Page>
  );
};

export default RevealPage;