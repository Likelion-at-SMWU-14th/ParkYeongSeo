import * as S from "../styles/ProductCard.styled";
import type { ProductCard as ProductCardType } from "../types/product";

interface ProductCardProps {
  product: ProductCardType;
}


function ProductCard({ product }: ProductCardProps) {
  return (
    <S.Card href={product.url} target="_self" $hasOption={!!product.option}>
      <S.ImageBox>
        <S.Image src={product.image} alt={product.name} />
        <S.HoverImage src={product.hoverImage} alt={product.name} />
      </S.ImageBox>

      <S.Name>{product.name}</S.Name>

      <S.InfoRow>
        {product.option && (
          <S.Option $hasOption={!!product.option}>
            {product.option}
          </S.Option>
        )}

        <S.OriginalPrice>{product.originalPrice}</S.OriginalPrice>
        <S.SalePrice>{product.salePrice}</S.SalePrice>
      </S.InfoRow>
    </S.Card>
  );
}

export default ProductCard;