import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../styles/Movie.styled";

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("전체");
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8000/movies")
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                console.error("에러 발생:", err);
            });
    }, []);

    const genres = ["전체", "로맨스", "드라마", "범죄", "스릴러", "SF", "공포"];
    
    return (
        <S.Container>
                <S.Title>무비차트</S.Title>

                <S.FilterContainer>

                <S.ButtonGrid>
                    {genres.map((genre) => (
                        <S.Button
                            key={genre}
                            onClick={() => setSelectedGenre(genre)}
                            $active={selectedGenre === genre}
                        >
                        {genre}
                        </S.Button>
                    ))}
                </S.ButtonGrid>

                <S.SearchInput
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="영화 제목 검색"
                />
                </S.FilterContainer>

                <S.MovieGrid>
                    {movies
                    .filter((movie) => selectedGenre === "전체" || movie.genre === selectedGenre)
                    .filter((movie) => movie.title.includes(searchKeyword))
                    .map((movie) => (
                        <S.MovieCard key={movie.id}>
                            <S.Poster src={movie.poster} alt={movie.title} />

                            <S.MovieInfo>
                                <S.MovieTitle>{movie.title}</S.MovieTitle>
                                <S.Rating>⭐ {movie.rating}</S.Rating>
                                <S.Genre>{movie.genre}</S.Genre>
                                <S.Description>{movie.description}</S.Description>
                            </S.MovieInfo>
                        </S.MovieCard>
                    ))}
                </S.MovieGrid>
        </S.Container>
    );
};


export default Movie;
