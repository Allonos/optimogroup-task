const GameInfoList = ({ playerName, bet, cashout, betWin, status }) => {
  const normalizedStatus = status || 'default';
  const itemClassName = `game-info-list-item game-info-list-item--${normalizedStatus}`;

  return (
    <li className={itemClassName}>
      <span className='game-info-list-item__player-name text-body-small-semibold'>
        {playerName}
      </span>
      <div className={`game-info-list-item__bet`}>
        <span className='text-body-small-semibold'>{bet}</span>
        {betWin !== '0.00X' && (
          <span className='game-info-win text-body-small-semibold'>
            {betWin}
          </span>
        )}
      </div>
      <span className='text-body-small-semibold'>{cashout}</span>
    </li>
  );
};

export default GameInfoList;
