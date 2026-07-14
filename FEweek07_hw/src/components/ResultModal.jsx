import * as S from "../styles/ResultModal.styled";

const ResultModal = ({ winner, onClose }) => {
  if (!winner) {
    return null;
  }

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.WinnerName>{winner}</S.WinnerName>

        <S.CloseButton type="button" onClick={onClose}>
          닫기
        </S.CloseButton>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default ResultModal;