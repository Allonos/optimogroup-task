import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import BetMoney from '@/components/ui/modals/freeBetModal/components/BetMoney';
import DefaultModal from '@/components/ui/modals/DefaultModal';
import ModalHeader from '@/components/ui/headers/modalHeader/ModalHeader';
import FreeBetsContainer from '@/components/ui/modals/freeBetModal/components/FreeBetsContainer';
import { HistoryIcon } from '@/assets/icons/SvgTojsx';

const FreeBetModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [isFullPayoutOpen, setIsFullPayoutOpen] = useState(false);
  const [isPureProfitOpen, setIsPureProfitOpen] = useState(false);
  const [isBonusBalanceOpen, setIsBonusBalanceOpen] = useState(false);

  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      className='modal--centered'
      style={{
        maxWidth: 542,
        width: '100%',
        borderRadius: 16,
        padding: 24,
        border: '1px solid rgba(var(--line))',
        zIndex: 100,
        // maxHeight: 929,
      }}
    >
      <ModalHeader title={t('freeBetsManagement')} onClose={onClose} />

      <BetMoney />
      <div className='free-bets-container'>
        <h4 className='active-free-bets-title'>{t('activeFreeBets')}</h4>
        <FreeBetsContainer
          type='fullPayout'
          betType={t('fullPayout')}
          isFullPayoutOpen={isFullPayoutOpen}
          setIsFullPayoutOpen={setIsFullPayoutOpen}
        />
        <FreeBetsContainer
          type='pureProfit'
          betType={t('pureProfit')}
          isFullPayoutOpen={isPureProfitOpen}
          setIsFullPayoutOpen={setIsPureProfitOpen}
        />
        <FreeBetsContainer
          type='bonusBalance'
          betType={t('bonusBalance')}
          isFullPayoutOpen={isBonusBalanceOpen}
          setIsFullPayoutOpen={setIsBonusBalanceOpen}
        />
      </div>

      <div className='free-bets-modal-actions'>
        <button className='free-bets-modal-actions-archive'>
          <HistoryIcon />
          <span>{t('archive')}</span>
        </button>
        <button className='free-bets-modal-actions-play'>
          <span>{t('playNow')}</span>
        </button>
      </div>
    </DefaultModal>
  );
};

export default FreeBetModal;
