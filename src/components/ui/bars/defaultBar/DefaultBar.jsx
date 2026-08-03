const DefaultBar = ({ bet, percentage }) => {
  return (
    <div>
      <div className='bar-info'>
        <span className='bar-info-bet'>{bet}</span>
        <span className='bar-info-percentage'>{percentage}</span>
      </div>
      <div className='bar-container'>
        <div className='bar' style={{ width: `${percentage}` }} />
      </div>
    </div>
  );
};

export default DefaultBar;
