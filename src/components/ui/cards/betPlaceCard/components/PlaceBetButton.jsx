import { useTranslation } from 'react-i18next';

const PlaceBetButton = ({ amount, currency = 'USD', onClick }) => {
  const { t } = useTranslation();

  const temp = 'bet';

  const stateClass = temp !== 'bet' ? `bet-place-button--${temp}` : '';

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
      <span className='bet-place-button__label'>{t(labelKeyMap[temp])}</span>
      <span className='bet-place-button__amount'>
        {amount.toFixed(2)} {currency}
      </span>
    </button>
  );
};

export default PlaceBetButton;
