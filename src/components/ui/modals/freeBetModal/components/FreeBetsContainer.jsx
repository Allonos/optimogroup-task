import { ThickArrowIcon } from '@/assets/icons/SvgTojsx';
import { useTranslation } from 'react-i18next';

const FreeBetsContainer = ({
  type,
  betType,
  isFullPayoutOpen,
  setIsFullPayoutOpen,
  isArchive = false,
}) => {
  const { t } = useTranslation();
  const isExpanded = !isArchive && isFullPayoutOpen;

  return (
    <div className={`active-free-bets-container ${isExpanded ? 'active' : ''}`}>
      <div className='active-free-bets-content'>
        <div
          className={`inactive-free-bet-icon ${isArchive ? 'inactive-free-bet-icon--hidden' : ''}`}
        />
        <div
          className='active-free-bets-info'
          style={{ width: isArchive ? '356px' : '394px' }}
        >
          <div className='active-free-bets-info-content'>
            <span className='active-free-bets-info-label'>{t('type')}</span>
            <span className='active-free-bets-info-value'>{betType}</span>
          </div>
          {type !== 'bonusBalance' && (
            <div className='active-free-bets-info-content'>
              <span className='active-free-bets-info-label'>{t('betAmount')}</span>
              <span className='active-free-bets-info-value'>10/10</span>
            </div>
          )}
          <div
            className={`active-free-bets-info-content ${
              type === 'bonusBalance' && !isArchive ? 'right-alignment' : ''
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

        <div className='active-free-bets-action-swap' style={{ width: isArchive ? '72px' : '20px' }}>
          <span
            className={`active-free-bets-archive-value ${
              isArchive ? 'action-swap-visible' : 'action-swap-hidden'
            }`}
          >
            102.40 USD
          </span>
          <button
            type='button'
            className={`active-free-bets-action-button ${isExpanded ? 'active' : ''} ${
              !isArchive ? 'action-swap-visible' : 'action-swap-hidden'
            }`}
            onClick={() => setIsFullPayoutOpen(!isFullPayoutOpen)}
            tabIndex={isArchive ? -1 : 0}
            aria-hidden={isArchive}
          >
            <ThickArrowIcon
              className='icon'
              style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
            />
          </button>
        </div>
      </div>
      
      <div className='active-free-bets-expanded-content'>
        <div className='separator' />
        <div className='active-free-bets-expanded-content-item'>
          <span className='active-free-bets-expanded-content-item-label'>{t('accured')}</span>
          <span className='active-free-bets-expanded-content-item-value'>11 Feb, 2026 08:57</span>
        </div>
        <div className='separator' />
        <div className='active-free-bets-expanded-content-item'>
          <span className='active-free-bets-expanded-content-item-label'>{t('minWithdrawal')}</span>
          <span className='active-free-bets-expanded-content-item-value'>3.5x</span>
        </div>
        <div className='separator' />
        <div className='active-free-bets-expanded-content-item'>
          <span className='active-free-bets-expanded-content-item-label'>{t('expirationDate')}</span>
          <span className='active-free-bets-expanded-content-item-value'>09 feb, 2026 22:11</span>
        </div>
      </div>
    </div>
  );
};

export default FreeBetsContainer;