import { useTranslation } from 'react-i18next';

import DefaultModal from '@/components/ui/modals/DefaultModal';
import BonusModalHeader from '@/components/ui/modals/bonusModal/components/BonusModalHeader';

const TotalWinModal = ({ onClose, isOpen, amount = 0 }) => {
  const { t } = useTranslation();

  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      className='modal--centered total-win-modal'
    >
      <div className='total-win-modal-container' onClick={onClose}>
        <BonusModalHeader onClose={onClose} />
        <div className='total-win-modal-content'>
          <p>{t('youFinishedFreeBets')}</p>
          <h3 className='total-win-modal-total-win'>{t('totalWin')}</h3>
          <div className='total-win-modal-total-win-amount'>
            <h2>{amount.toFixed(2)}</h2>
            <span>USD</span>
          </div>
          <p>{t('pressAnywhereToContinue')}</p>
        </div>
      </div>
    </DefaultModal>
  );
};

export default TotalWinModal;
