import { useTranslation } from 'react-i18next';

const ArchiveBetContainer = ({ type, betType }) => {
  const { t } = useTranslation();

  return (
    <div className='archive-free-bets-container'>
      <div className='active-free-bets-content'>
        <div className='inactive-free-bet-icon inactive-free-bet-icon--hidden' />
        <div className='active-free-bets-info active-free-bets-info--archive'>
          <div className='active-free-bets-info-content'>
            <span className='active-free-bets-info-label'>{t('type')}</span>
            <span className='active-free-bets-info-value'>{betType}</span>
          </div>
          {type !== 'bonusBalance' && (
            <div className='active-free-bets-info-content active-free-bets-info-content-mobile'>
              <span className='active-free-bets-info-label'>
                {t('betAmount')}
              </span>
              <span className='active-free-bets-info-value'>10/10</span>
            </div>
          )}
          <div
            className={`active-free-bets-info-content ${
              type !== 'bonusBalance' ? 'right-alignment-mobile' : ''
            }`}
          >
            <span className='active-free-bets-info-label'>
              {type === 'bonusBalance' ? t('betAmount') : t('betPrice')}
            </span>
            <span className='active-free-bets-info-value'>
              {type === 'bonusBalance' ? '30 USD' : '0.5 USD'}
            </span>
          </div>
        </div>

        <div className='active-free-bets-action-swap' style={{ width: '72px' }}>
          <span className='active-free-bets-archive-value action-swap-visible'>
            102.40 USD
          </span>
        </div>
      </div>
      <div className='active-free-bets-info-price'>
        <span className='active-free-bets-archive-value-mobile'>
          102.40 USD
        </span>
      </div>
    </div>
  );
};

export default ArchiveBetContainer;
