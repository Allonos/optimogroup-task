const GameInfoList = ({ playerName, bet, cashout, betWin, status }) => {
  const normalizedStatus = status || 'default';
  const itemClassName = `game-info-list-item game-info-list-item--${normalizedStatus}`;

  return (
    <li className={itemClassName}>
      <span className='game-info-list-item__player-name'>{playerName}</span>
      <div className={`game-info-list-item__bet`}>
        <span>{bet}</span>
        {betWin !== '0.00X' && <span className='game-info-win'>{betWin}</span>}
      </div>
      <span>{cashout}</span>
    </li>
  );
};

export default GameInfoList;
