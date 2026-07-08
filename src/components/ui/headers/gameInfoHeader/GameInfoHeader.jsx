import { useTranslation } from 'react-i18next';

const GameInfoHeader = () => {
  const { t } = useTranslation();

  const gameInfoHeaders = [
    { id: 1, title: t('player') },
    { id: 2, title: t('betUsd') },
    { id: 3, title: t('cashoutUsd') },
  ];

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
