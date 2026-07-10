import * as S from "../styles/SlotReel.styled";

const SlotReel = ({ names, duration = 3 }) => {
  const repeatedNames = [...names, ...names];

  return (
    <S.ReelWindow>
      <S.ReelList $duration={duration}>
        {repeatedNames.map((name, index) => (
          <S.ReelItem key={`${name}-${index}`}>
            {name}
          </S.ReelItem>
        ))}
      </S.ReelList>
    </S.ReelWindow>
  );
};

export default SlotReel;