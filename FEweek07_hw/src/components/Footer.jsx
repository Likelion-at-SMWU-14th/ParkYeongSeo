import * as S from "../styles/Footer.styled";

const Footer = ({ excludedLion }) => {
  const footerItems = Array.from({ length: 8 });

  return (
    <S.FooterContainer>
      <S.MarqueeTrack>
        <S.MarqueeGroup>
          {footerItems.map((_, index) => (
            <S.FooterItem key={`first-${index}`}>
              <strong>제외 사자</strong>
              <span>{excludedLion}</span>
            </S.FooterItem>
          ))}
        </S.MarqueeGroup>

        <S.MarqueeGroup aria-hidden="true">
          {footerItems.map((_, index) => (
            <S.FooterItem key={`second-${index}`}>
              <strong>제외 사자</strong>
              <span>{excludedLion}</span>
            </S.FooterItem>
          ))}
        </S.MarqueeGroup>
      </S.MarqueeTrack>
    </S.FooterContainer>
  );
};

export default Footer;