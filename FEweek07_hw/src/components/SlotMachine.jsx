import SlotReel from "./SlotReel";

const SlotMachine = () => {
  const reels = [
    ["박서현", "박영서", "정다인", "최지우", "하지민"],
    ["최지우", "하지민", "박서현", "박영서", "정다인"],
    ["정다인", "박영서", "하지민", "최지우", "박서현"],
  ];

  return (
    <div className="slot-machine">
      {reels.map((names, index) => (
        <SlotReel key={index} names={names} />
      ))}
    </div>
  );
};

export default SlotMachine;