import SlotReel from "./SlotReel";
import * as S from "../styles/SlotMachine.styled";

const SlotMachine = ({ candidates }) => {
  const reels = [
    {
      names: candidates,
      duration: 2.6,
    },
    {
      names: [...candidates.slice(2), ...candidates.slice(0, 2)],
      duration: 2.9,
    },
    {
      names: [...candidates.slice(4), ...candidates.slice(0, 4)],
      duration: 3.2,
    },
  ];

  return (
    <S.ReelsContainer>
      {reels.map((reel, index) => (
        <SlotReel
          key={index}
          names={reel.names}
          duration={reel.duration}
        />
      ))}
    </S.ReelsContainer>
  );
};

export default SlotMachine;