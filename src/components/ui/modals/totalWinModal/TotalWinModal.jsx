import { useTranslation } from 'react-i18next';

import DefaultModal from '@/components/ui/modals/DefaultModal';
import BonusModalHeader from '@/components/ui/modals/bonusModal/components/BonusModalHeader';

const TotalWinModal = ({ onClose, isOpen }) => {
  const { t } = useTranslation();

  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      className='modal--centered'
      style={{
        maxWidth: 370,
        width: '100%',
        borderRadius: 16,
        padding: '24px 24px 68px 24px',
        border: '1px solid rgba(var(--line))',
        zIndex: 100,
      }}
    >
      <div className='total-win-modal-container' onClick={onClose}>
        <BonusModalHeader onClose={onClose} />
        <div className='total-win-modal-content'>
          <p>{t('youFinishedFreeBets')}</p>
          <h3 className='total-win-modal-total-win'>{t('totalWin')}</h3>
          <div className='total-win-modal-total-win-amount'>
            <h2>12.57</h2>
            <span>USD</span>
          </div>
          <p>{t('pressAnywhereToContinue')}</p>
        </div>
      </div>
    </DefaultModal>
  );
};

export default TotalWinModal;
