import { useTranslation } from 'react-i18next';

const BetsListFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className='bets-list-footer'>
      <div className='bets-list-footer__item'>
        <span className='bets-list-footer__label text-body-small-semibold'>
          {t('bets')}
        </span>
        <span className='bets-list-footer__value text-body-small-semibold'>
          25/80
        </span>
      </div>
      <div className='bets-list-footer__item'>
        <span className='bets-list-footer__label text-body-small-semibold'>
          {t('totalBets')}
        </span>
        <span className='bets-list-footer__value text-body-small-semibold'>
          125.50 USD
        </span>
      </div>
      <div className='bets-list-footer__item'>
        <span className='bets-list-footer__label text-body-small-semibold'>
          {t('totalWin')}
        </span>
        <span className='bets-list-footer__value text-body-small-semibold'>
          1.436.24 USD
        </span>
      </div>
    </footer>
  );
};

export default BetsListFooter;
