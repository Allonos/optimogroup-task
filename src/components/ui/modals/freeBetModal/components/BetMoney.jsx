import { useTranslation } from 'react-i18next';

const BetMoney = () => {
  const { t } = useTranslation();
  return (
    <div className='bet-money-container'>
      <div className='bet-money-icon'>
        <div className='bet-money-icon-inner' />
      </div>
      <h3 className='bet-money-text'>{t('playWithRealMoney')}</h3>
    </div>
  );
};

export default BetMoney;
