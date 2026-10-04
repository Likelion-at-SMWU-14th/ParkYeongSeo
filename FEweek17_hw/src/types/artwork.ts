export interface ArtworkSearchResponse {
  total: number;
  objectIDs: number[];
}

export interface Artwork {
  objectID: number;

  title: string;
  artistDisplayName: string;
  objectDate: string;

  primaryImage: string;
  primaryImageSmall: string;

  isPublicDomain: boolean;
}

// Utility Type 사용
export type BlindArtwork = Pick<
  Artwork,
  "objectID" | "primaryImage" | "primaryImageSmall"
>;