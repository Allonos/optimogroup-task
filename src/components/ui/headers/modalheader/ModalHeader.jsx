import { useTranslation } from 'react-i18next';
import { CloseIcon } from '@/assets/icons/SvgTojsx';
import '@/styles/headers/modalheader/ModalHeader.css';

const ModalHeader = ({ prefix, title, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className='modal__header'>
      <div className='modal__header-left'>
        {prefix}
        <h2 className='modal__header__title'>{t(title)}</h2>
      </div>
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
