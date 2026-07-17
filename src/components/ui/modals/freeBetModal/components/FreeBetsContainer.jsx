import { ThickArrowIcon } from '@/assets/icons/SvgTojsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FreeBetsContainer = ({ type, betType, isFullPayoutOpen, setIsFullPayoutOpen }) => {
  const { t } = useTranslation();

  return (
    <div className={`active-free-bets-container ${isFullPayoutOpen ? 'active' : ''}`}>
      <div className='active-free-bets-content'>
        <div className='inactive-free-bet-icon' />
        <div className='active-free-bets-info'>
          <div className='active-free-bets-info-content'>
            <span className='active-free-bets-info-label'>{t('type')}</span>
            <span className='active-free-bets-info-value'>{betType}</span>
          </div>
          {type !== "bonusBalance" && (
            <div className='active-free-bets-info-content'>
              <span className='active-free-bets-info-label'>{t('betAmount')}</span>
              <span className='active-free-bets-info-value'>10/10</span>
            </div>
          )}
          <div className={`active-free-bets-info-content ${type === "bonusBalance" ? 'right-alignment' : ''}`}>
            <span className='active-free-bets-info-label'>{type === "bonusBalance" ? t('betAmount') : t('betPrice')}</span>
            <span className='active-free-bets-info-value'>{type === "bonusBalance" ? '30 USD' : '0.5 USD'}</span>
          </div>
        </div>
        <button className={`active-free-bets-action-button ${isFullPayoutOpen ? 'active' : ''}`} onClick={() => setIsFullPayoutOpen(!isFullPayoutOpen)}>
          <ThickArrowIcon />
        </button>
      </div>
      <div className="active-free-bets-expanded-content">
        <div className="separator" />
        <div className="active-free-bets-expanded-content-item">
          <span className="active-free-bets-expanded-content-item-label">{t('accured')}</span>
          <span className="active-free-bets-expanded-content-item-value">11 Feb, 2026 08:57</span>
        </div>
        <div className="separator" />
        <div className="active-free-bets-expanded-content-item">
          <span className="active-free-bets-expanded-content-item-label">{t('minWithdrawal')}</span>
          <span className="active-free-bets-expanded-content-item-value">3.5x</span>
        </div>
        <div className="separator" />
        <div className="active-free-bets-expanded-content-item">
          <span className="active-free-bets-expanded-content-item-label">{t('expirationDate')}</span>
          <span className="active-free-bets-expanded-content-item-value">09 feb, 2026 22:11</span>
        </div>
      </div>
    </div>
  );
};

export default FreeBetsContainer;
