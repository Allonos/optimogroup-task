import { useTranslation } from 'react-i18next';

const PlaceBetButton = ({ state = 'bet', amount, currency = 'USD', onClick }) => {
  const { t } = useTranslation();

  const stateClass = state !== 'bet' ? `bet-place-button--${state}` : '';

  const labelKeyMap = {
    bet: 'bet',
    cashout: 'cashOut',
    cancel: 'cancel',
    'free-bet': 'freeBet',
  };

  return (
    <button
      className={`bet-place-button${stateClass ? ` ${stateClass}` : ''}`}
      onClick={onClick}
    >
      <span className='bet-place-button__label'>{t(labelKeyMap[state] ?? 'bet')}</span>
      <span className='bet-place-button__amount'>
        {amount.toFixed(2)} {currency}
      </span>
    </button>
  );
};

export default PlaceBetButton;
