import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

import type { Artwork } from "../types/artwork";

import * as S from "../styles/Collection.styles";

const CollectionPage = () => {
  const navigate = useNavigate();

  const [lovedArtworks, setLovedArtworks] =
    useState<Artwork[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem("lovedArtworks");

    if (!saved) {
      return;
    }

    try {
      const parsed: Artwork[] =
        JSON.parse(saved);

      setLovedArtworks(parsed);
    } catch (error) {
      console.error(
        "Collection 데이터를 불러오지 못했습니다.",
        error
      );
    }
  }, []);

  const handleRemove = (
    objectID: number
  ) => {
    const updatedArtworks =
      lovedArtworks.filter(
        (artwork) =>
          artwork.objectID !== objectID
      );

    setLovedArtworks(updatedArtworks);

    localStorage.setItem(
      "lovedArtworks",
      JSON.stringify(updatedArtworks)
    );
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <S.Page>
      <Header />

      <S.CollectionHeader>
        <S.Title>
          Collections
        </S.Title>

        <S.Count>
          {lovedArtworks.length}
          {" "}
          {lovedArtworks.length === 1
            ? "artwork"
            : "artworks"}
        </S.Count>
      </S.CollectionHeader>

      {lovedArtworks.length === 0 ? (
        <S.EmptyState>
          <S.EmptyTitle>
            Nothing here yet.
          </S.EmptyTitle>

          <S.EmptyDescription>
            Fall in love with some art first.
          </S.EmptyDescription>

          <S.BackButton
            type="button"
            onClick={handleBack}
          >
            Find Art
          </S.BackButton>
        </S.EmptyState>
      ) : (
        <>
          <S.Gallery>
            {lovedArtworks.map(
              (artwork) => {
                const imageUrl =
                  artwork.primaryImage ||
                  artwork.primaryImageSmall;

                return (
                  <S.ArtworkCard
                    key={artwork.objectID}
                  >
                    <S.ImageWrapper>
                      <S.ArtworkImage
                        src={imageUrl}
                        alt={artwork.title}
                      />

                      <S.RemoveButton
                        type="button"
                        onClick={() =>
                          handleRemove(
                            artwork.objectID
                          )
                        }
                        aria-label={`Remove ${artwork.title}`}
                      >
                        ×
                      </S.RemoveButton>
                    </S.ImageWrapper>

                    <S.ArtworkInfo>
                      <S.ArtworkTitle>
                        {artwork.title}
                      </S.ArtworkTitle>

                      <S.Meta>
                        <span>
                          {artwork.artistDisplayName ||
                            "Unknown Artist"}
                        </span>

                        <span>
                          {artwork.objectDate ||
                            "Unknown Date"}
                        </span>
                      </S.Meta>
                    </S.ArtworkInfo>
                  </S.ArtworkCard>
                );
              }
            )}
          </S.Gallery>

          <S.BottomArea>
            <S.BackButton
              type="button"
              onClick={handleBack}
            >
              Back to Blind Date
            </S.BackButton>
          </S.BottomArea>
        </>
      )}
    </S.Page>
  );
};

export default CollectionPage;