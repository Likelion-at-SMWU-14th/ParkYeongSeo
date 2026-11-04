import SlotReel from "./SlotReel";
import * as S from "../styles/SlotMachine.styled";

const SlotMachine = ({
  candidates,
  winner,
  stoppedReels,
}) => {
  const reels = [
    {
      names: candidates,
      duration: 2,
    },
    {
      names: [
        ...candidates.slice(2),
        ...candidates.slice(0, 2),
      ],
      duration: 2,
    },
    {
      names: [
        ...candidates.slice(4),
        ...candidates.slice(0, 4),
      ],
      duration: 2,
    },
  ];

  return (
    <S.ReelsContainer>
      {reels.map((reel, index) => (
        <SlotReel
          key={index}
          names={reel.names}
          duration={reel.duration}
          winner={winner}
          isStopped={index < stoppedReels}
        />
      ))}
    </S.ReelsContainer>
  );
};

export default SlotMachine;