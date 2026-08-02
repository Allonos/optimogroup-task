import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useModal } from '@/store/contexts/ModalContext';

import BetMoney from '@/components/ui/modals/freeBetModal/components/BetMoney';
import DefaultModal from '@/components/ui/modals/DefaultModal';
import ModalHeader from '@/components/ui/headers/modalHeader/ModalHeader';
import FreeBetsContainer from '@/components/ui/modals/freeBetModal/components/FreeBetsContainer';
import { HistoryIcon, LongArrowIcon } from '@/assets/icons/SvgTojsx';

const FreeBetModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { setIsAnyModalOpen } = useModal();
  const [isFullPayoutOpen, setIsFullPayoutOpen] = useState(false);

  useEffect(() => {
    setIsAnyModalOpen(isOpen);
  }, [isOpen, setIsAnyModalOpen]);
  const [isPureProfitOpen, setIsPureProfitOpen] = useState(false);
  const [isBonusBalanceOpen, setIsBonusBalanceOpen] = useState(false);

  const [isArchive, setIsArchive] = useState(false);

  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      className='modal--centered free-bet-modal no-scrollbar'
    >
      {isArchive ? (
        <ModalHeader
          prefix={
            <button onClick={() => setIsArchive(false)}>
              <LongArrowIcon
                className='icon'
                style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
              />
            </button>
          }
          title={t('archive')}
          onClose={onClose}
        />
      ) : (
        <>
          <ModalHeader title={t('freeBetsManagement')} onClose={onClose} />
          <BetMoney />
        </>
      )}

      <div className='free-bets-container'>
        {isArchive ? null : (
          <h4 className='active-free-bets-title'>{t('activeFreeBets')}</h4>
        )}
        <FreeBetsContainer
          type='fullPayout'
          betType={t('fullPayout')}
          isFullPayoutOpen={isFullPayoutOpen}
          setIsFullPayoutOpen={setIsFullPayoutOpen}
          isArchive={isArchive}
          archiveValue='4.90 USD'
        />
        <FreeBetsContainer
          type='pureProfit'
          betType={t('pureProfit')}
          isFullPayoutOpen={isPureProfitOpen}
          setIsFullPayoutOpen={setIsPureProfitOpen}
          isArchive={isArchive}
          archiveValue='4.90 USD'
        />
        <FreeBetsContainer
          type='bonusBalance'
          betType={t('bonusBalance')}
          isFullPayoutOpen={isBonusBalanceOpen}
          setIsFullPayoutOpen={setIsBonusBalanceOpen}
          isArchive={isArchive}
          archiveValue='4.90 USD'
        />
      </div>

      {!isArchive && (
        <div className='free-bets-modal-actions'>
          <button
            className='free-bets-modal-actions-archive'
            onClick={() => setIsArchive(true)}
          >
            <HistoryIcon
              className='icon'
              style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
            />
            <span>{t('archive')}</span>
          </button>
          <button className='free-bets-modal-actions-play' onClick={onClose}>
            <span>{t('playNow')}</span>
          </button>
        </div>
      )}
    </DefaultModal>
  );
};

export default FreeBetModal;
