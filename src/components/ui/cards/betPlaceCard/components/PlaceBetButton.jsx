import { useTranslation } from 'react-i18next';

const PlaceBetButton = ({ amount, currency = 'USD', onClick }) => {
  const { t } = useTranslation();

  return (
    <button className='bet-place-button' onClick={onClick}>
      <span className='bet-place-button__label'>{t('bet')}</span>
      <span className='bet-place-button__amount'>
        {amount.toFixed(2)} {currency}
      </span>
    </button>
  );
};

export default PlaceBetButton;
