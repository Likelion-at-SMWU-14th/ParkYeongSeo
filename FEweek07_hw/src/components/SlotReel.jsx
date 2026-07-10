import * as S from "../styles/SlotReel.styled";

const SlotReel = ({
  names,
  duration = 3,
  winner,
  isStopped,
}) => {
  const repeatedNames = [...names, ...names];

  const winnerIndex = names.indexOf(winner);

  const previousName =
    winnerIndex >= 0
      ? names[(winnerIndex - 1 + names.length) % names.length]
      : "";

  const nextName =
    winnerIndex >= 0
      ? names[(winnerIndex + 1) % names.length]
      : "";

  return (
    <S.ReelWindow>
      {isStopped && winner ? (
        <S.StoppedList>
          <S.StoppedItem>{previousName}</S.StoppedItem>

          <S.WinnerItem>{winner}</S.WinnerItem>

          <S.StoppedItem>{nextName}</S.StoppedItem>
        </S.StoppedList>
      ) : (
        <S.ReelList $duration={duration}>
          {repeatedNames.map((name, index) => (
            <S.ReelItem key={`${name}-${index}`}>
              {name}
            </S.ReelItem>
          ))}
        </S.ReelList>
      )}
    </S.ReelWindow>
  );
};

export default SlotReel;