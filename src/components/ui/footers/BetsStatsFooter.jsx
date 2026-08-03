import { useState } from 'react';

const BetsStatsFooter = () => {
  const [activeRounds, setActiveRounds] = useState('50');

  const rounds = ['50', '100', '200', '300'];

  return (
    <div className='bets-stats-footer'>
      <span>Rounds</span>
      <div className='bets-stats-footer__rounds'>
        {rounds.map((round) => (
          <button
            key={round}
            className={`label-rounds ${activeRounds === round ? 'label-rounds--active' : ''}`}
            onClick={() => setActiveRounds(round)}
          >
            <span>{round}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BetsStatsFooter;
