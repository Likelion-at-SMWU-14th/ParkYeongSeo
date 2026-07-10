import * as S from "../styles/SlotReel.styled";

const SlotReel = ({
  names,
  duration = 3,
  winner,
  isSpinning,
}) => {
  const repeatedNames = [...names, ...names];

  return (
    <S.ReelWindow>
      {isSpinning ? (
        <S.ReelList $duration={duration}>
          {repeatedNames.map((name, index) => (
            <S.ReelItem key={`${name}-${index}`}>
              {name}
            </S.ReelItem>
          ))}
        </S.ReelList>
      ) : (
        <S.WinnerItem>
          {winner}
        </S.WinnerItem>
      )}
    </S.ReelWindow>
  );
};

export default SlotReel;