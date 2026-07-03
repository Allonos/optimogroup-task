import { CheckIcon } from '@/assets/icons/SvgTojsx';

const GameInfoList = ({
  playerName,
  date,
  time,
  bet,
  cashout,
  betWin,
  status,
  activeTab,
}) => {
  const isMyBets = !playerName;
  const normalizedStatus = isMyBets
    ? status === 'win'
      ? 'my-win'
      : 'default'
    : status || 'default';
  const itemClassName = `game-info-list-item game-info-list-item--${normalizedStatus}`;

  return (
    <li className={itemClassName}>
      <span className='game-info-list-item__player-name text-body-small-semibold'>
        {isMyBets ? `${date} ${time}` : playerName}
      </span>
      <div className={`game-info-list-item__bet`}>
        <span className='text-body-small-semibold'>{bet}</span>
        {betWin !== '0.00X' && (
          <span className='game-info-win text-body-small-semibold'>
            {betWin}
          </span>
        )}
      </div>
      <div>
        <span className='text-body-small-semibold'>{cashout}</span>
        {betWin !== '0.00X' && activeTab === 'My Bets' && (
          <CheckIcon
            className='icon'
            style={{ '--icon-color': 'rgba(var(--icon-green))' }}
          />
        )}
      </div>
    </li>
  );
};

export default GameInfoList;
