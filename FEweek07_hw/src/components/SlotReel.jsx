const SlotReel = ({ names }) => {
  return (
    <div className="slot-reel">
      <div>{names[0]}</div>
      <div>{names[1]}</div>
      <div>{names[2]}</div>
      <div>{names[3]}</div>
      <div>{names[4]}</div>
    </div>
  );
};

export default SlotReel;