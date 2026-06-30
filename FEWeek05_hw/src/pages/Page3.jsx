import * as S from "../styles/Page3.styled";

import ProductCard from "../components/ProductCard";
import { productCardData } from "../data/productCardData";

function Page3() {
  return (
    <S.Wrapper>
      <S.Grid>
        {productCardData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </S.Grid>

      <S.MoreButton>
        MORE PRODUCT
      </S.MoreButton>
    </S.Wrapper>
  );
}

export default Page3;