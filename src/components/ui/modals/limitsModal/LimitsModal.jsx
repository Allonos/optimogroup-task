import { useTranslation } from 'react-i18next';

import ModalHeader from '@/components/ui/headers/modalheader/Modalheader';
import DefaultModal from '@/components/ui/modals/DefaultModal';

const LimitsModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      className='modal--centered limits__modal'
    >
      <ModalHeader title='Limits' onClose={onClose} />
      <div className='limits__modal__content'>
        <section className='limits__modal__section'>
          <h2 className='limits__modal__subtitle'>{t('maximumWin')}</h2>
          <p className='limits__modal__text'>{t('maximumWinText')}</p>
        </section>
        <section className='limits__modal__section'>
          <h2 className='limits__modal__subtitle'>{t('maximumCashOut')}</h2>
          <p className='limits__modal__text'>{t('maximumCashOutText')}</p>
        </section>
      </div>
    </DefaultModal>
  );
};

export default LimitsModal;
