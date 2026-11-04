import * as S from "../styles/Footer.styled";

const Footer = ({ excludedLion }) => {
  const footerItems = Array.from({ length: 8 });

  return (
    <S.FooterContainer>
      <S.MarqueeTrack>
        <S.MarqueeGroup>
          {footerItems.map((_, index) => (
            <S.FooterItem key={`first-${index}`}>
              <span>제외 사자</span>
              <strong>{excludedLion}</strong>
            </S.FooterItem>
          ))}
        </S.MarqueeGroup>

        <S.MarqueeGroup aria-hidden="true">
          {footerItems.map((_, index) => (
            <S.FooterItem key={`second-${index}`}>
              <span>제외 사자</span>
              <strong>{excludedLion}</strong>
            </S.FooterItem>
          ))}
        </S.MarqueeGroup>
      </S.MarqueeTrack>
    </S.FooterContainer>
  );
};

export default Footer;