import { useTranslation } from 'react-i18next';

import DefaultModal from '@/components/ui/modals/DefaultModal';
import BonusModalHeader from '@/components/ui/modals/bonusModal/components/BonusModalHeader';

const BonusModal = ({ type, isOpen, onClose }) => {
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
      <div className='bonus-modal-container'>
        <BonusModalHeader onClose={onClose} />
        <div className='bonus-modal-content'>
          <h3 className='bonus-modal-you__get'>{t('youGet')}</h3>
          <h2>10{type === 'bonus' && <span>USD</span>}</h2>
          {type === 'free' && (
            <h3 className='bonus-modal-free__bet'>{t('freeBet')}</h3>
          )}
          <p>{t('bonusBetAvailableFor7Days')}</p>
        </div>
        <button className='bonus-modal-play__button' onClick={onClose}>
          {t('playNow')}
        </button>
      </div>
    </DefaultModal>
  );
};

export default BonusModal;
