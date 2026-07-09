import { useTranslation } from 'react-i18next';
import { CloseIcon } from '@/assets/icons/SvgTojsx';
import '@/styles/headers/modalheader/ModalHeader.css';

const ModalHeader = ({ title, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className='modal__header'>
      <h2 className='modal__title'>{t(title)}</h2>
      <button onClick={onClose}>
        <CloseIcon
          className='icon'
          style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
        />
      </button>
    </div>
  );
};

export default ModalHeader;
