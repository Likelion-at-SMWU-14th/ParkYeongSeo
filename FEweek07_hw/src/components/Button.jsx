import * as S from "../styles/Button.styled";

const Button = ({
  onClick,
  disabled = false,
}) => {
  return (
    <S.SlotButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label="슬롯 시작"
    >
      Pick!
    </S.SlotButton>
  );
};

export default Button;