import { ThickArrowIcon } from '@/assets/icons/SvgTojsx';
import { useTranslation } from 'react-i18next';

const ActiveFreeBetContainer = ({
  type,
  betType,
  isFullPayoutOpen,
  setIsFullPayoutOpen,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`active-free-bets-container ${isFullPayoutOpen ? 'active' : ''}`}
    >
      <div className='active-free-bets-content'>
        <div className='active-free-bets-info active-free-bets-info--default'>
          <div className='inactive-free-bet-icon' />
          <div className='active-free-bets-info-content'>
            <span className='active-free-bets-info-label'>{t('type')}</span>
            <span className='active-free-bets-info-value'>{betType}</span>
          </div>
          {type !== 'bonusBalance' && (
            <div className='active-free-bets-info-content'>
              <span className='active-free-bets-info-label'>
                {t('betAmount')}
              </span>
              <span className='active-free-bets-info-value'>10/10</span>
            </div>
          )}
          <div
            className={`active-free-bets-info-content ${
              type === 'bonusBalance'
                ? 'right-alignment'
                : 'right-alignment-mobile'
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

        <div
          className='active-free-bets-action-swap-dropdown'
          style={{ width: '20px' }}
        >
          <button
            type='button'
            className={`active-free-bets-action-button ${isFullPayoutOpen ? 'active' : ''} action-swap-visible`}
            onClick={() => setIsFullPayoutOpen(!isFullPayoutOpen)}
          >
            <ThickArrowIcon
              className='icon thick-arrow-web'
              style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
            />
            <ThickArrowIcon
              className='icon thick-arrow-mobile'
              style={{ '--icon-color': 'rgba(var(--icon-white))' }}
            />
          </button>
        </div>
      </div>

      <div className='active-free-bets-expanded-content'>
        <div className='separator' />
        <div className='active-free-bets-expanded-content-item'>
          <span className='active-free-bets-expanded-content-item-label'>
            {t('accured')}
          </span>
          <span className='active-free-bets-expanded-content-item-value'>
            11 Feb, 2026 08:57
          </span>
        </div>
        <div className='separator' />
        <div className='active-free-bets-expanded-content-item'>
          <span className='active-free-bets-expanded-content-item-label'>
            {t('minWithdrawal')}
          </span>
          <span className='active-free-bets-expanded-content-item-value'>
            3.5x
          </span>
        </div>
        <div className='separator' />
        <div className='active-free-bets-expanded-content-item'>
          <span className='active-free-bets-expanded-content-item-label'>
            {t('expirationDate')}
          </span>
          <span className='active-free-bets-expanded-content-item-value'>
            09 feb, 2026 22:11
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActiveFreeBetContainer;
