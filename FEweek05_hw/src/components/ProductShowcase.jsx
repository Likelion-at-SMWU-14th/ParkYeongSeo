import * as S from "../styles/ProductShowcase.styled";
import { productData } from "../data/productData";

function ProductShowcase({ start, end }) {
  const products = productData.slice(start, end);

  return (
    <S.Section>
      {products.map((product) => (
        <S.Panel key={product.id}>
          <S.Image src={product.image} alt={product.title} />

          <S.TextBox>
            <S.Title>{product.title}</S.Title>
            <S.Description>{product.description}</S.Description>
          </S.TextBox>
        </S.Panel>
      ))}
    </S.Section>
  );
}

export default ProductShowcase;