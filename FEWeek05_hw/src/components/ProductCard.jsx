import * as S from "../styles/ProductCard.styled";

function ProductCard({ product }) {
  return (
    <S.Card href={product.url} target="_self">
      <S.ImageBox>
        <S.Image src={product.image} alt={product.name} />
        <S.HoverImage src={product.hoverImage} alt={product.name} />
      </S.ImageBox>

      <S.Name>{product.name}</S.Name>

      <S.PriceBox>
        <S.OriginalPrice>{product.originalPrice}</S.OriginalPrice>
        <S.SalePrice>{product.salePrice}</S.SalePrice>
      </S.PriceBox>
    </S.Card>
  );
}

export default ProductCard;