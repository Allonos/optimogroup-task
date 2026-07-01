const gameInfoHeaders = [
  { id: 1, title: 'Player' },
  { id: 2, title: 'Bet(USD)' },
  { id: 3, title: 'Cashout (USD)' },
];

const GameInfoHeader = () => {
  return (
    <div className='game-info-header'>
      {gameInfoHeaders.map((header) => (
        <span
          key={header.id}
          className='game-info-header-item text-body-small-semibold'
        >
          {header.title}
        </span>
      ))}
    </div>
  );
};

export default GameInfoHeader;
