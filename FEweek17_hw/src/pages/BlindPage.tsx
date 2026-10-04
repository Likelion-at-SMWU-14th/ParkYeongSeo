import Header from "../components/Header";
import * as S from "../styles/Blind.styles";

import artwork from "../assets/images/madame-x.jpg";

const BlindPage = () => {
  return (
    <S.Page>
      <Header />

      <S.Content>
        <S.ArtworkArea>
          <S.ArtworkImage
            src={artwork}
            alt="Blind artwork"
          />
        </S.ArtworkArea>

        <S.ButtonArea>
          <S.LoveButton type="button">
            Love
          </S.LoveButton>

          <S.PassButton type="button">
            Pass
          </S.PassButton>
        </S.ButtonArea>
      </S.Content>
    </S.Page>
  );
};

export default BlindPage;