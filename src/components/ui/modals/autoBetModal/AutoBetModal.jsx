import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useModal } from '@/store/contexts/ModalContext';

import DefaultModal from '@/components/ui/modals/DefaultModal';
import ModalHeader from '@/components/ui/headers/modalHeader/ModalHeader';
import BetRoundsButton from './components/BetRoundsButton';
import AutoPlayOnCard from './components/AutoPlayOnCard';

const AutoBetModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { setIsAnyModalOpen } = useModal();
  const [activeRound, setActiveRound] = useState(10);

  useEffect(() => {
    setIsAnyModalOpen(isOpen);
  }, [isOpen, setIsAnyModalOpen]);
  const [increasedQuantity, setIncreasedQuantity] = useState(0.0);
  const [decreasedQuantity, setDecreasedQuantity] = useState(0.0);
  const [singleWinExceedsQuantity, setSingleWinExceedsQuantity] = useState(0.0);

  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      className='modal--centered auto-bet-modal'
    >
      <ModalHeader title={t('autoBet')} onClose={onClose} />
      <div className='auto-bet-modal-container'>
        <div className='auto-bet-modal-rounds-content'>
          <div className='auto-bet-modal-rounds-btn-content'>
            <BetRoundsButton activeRound={activeRound} setActiveRound={() => setActiveRound(10)} value={10} />
            <BetRoundsButton activeRound={activeRound} setActiveRound={() => setActiveRound(20)} value={20} />
            <BetRoundsButton activeRound={activeRound} setActiveRound={() => setActiveRound(50)} value={50} />
            <BetRoundsButton activeRound={activeRound} setActiveRound={() => setActiveRound(100)} value={100} />
          </div>

          <div className='auto-bet-modal-rounds-content-footer'>
            <div>
              <span className='auto-bet-modal-bet-text'>{t('bet')}: <span>0.20 USD</span></span>
            </div>
            <div>
              <span className='auto-bet-modal-bet-text'>{t('total')}: <span>0.20 USD</span></span>
            </div>
          </div>
        </div>

        <div className='separator' />

        <div className='auto-play-container'>
          <h3>{t('stopAutoPlayOn')}</h3>
          <div className='auto-play-card-container'>
            <AutoPlayOnCard cardTitle={t('cashIncreasedBy')} quantity={increasedQuantity} setQuantity={setIncreasedQuantity} />
            <AutoPlayOnCard cardTitle={t('cashDecreasedBy')} quantity={decreasedQuantity} setQuantity={setDecreasedQuantity} />
            <AutoPlayOnCard cardTitle={t('singleWinExceeds')} quantity={singleWinExceedsQuantity} setQuantity={setSingleWinExceedsQuantity} />
          </div>
        </div>

        <div className='auto-bet-modal-actions'>
          <button className='auto-bet-modal-cancel' onClick={onClose}>{t('reset')}</button>
          <button className='auto-bet-modal-start' onClick={onClose}>{t('start')}</button>
        </div>
      </div>
    </DefaultModal>
  );
};

export default AutoBetModal;
