import * as S from "../styles/InfoCard.styled";

function InfoCard({ title, description, badge, variant = "default", image }) {
  return (
    <S.Card $variant={variant}>
      {image ? <S.Image src={image} alt={title} /> : null}
      <S.Badge>{badge}</S.Badge>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Card>
  );
}

export default InfoCard;
