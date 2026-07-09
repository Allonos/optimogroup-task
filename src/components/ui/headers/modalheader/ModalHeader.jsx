import { useTranslation } from 'react-i18next';

import { CloseIcon } from '@/assets/icons/SvgTojsx';

const ModalHeader = ({ title, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className='provably__modal__header'>
      <h2 className='modal__title'>{t(title)}</h2>
      <button>
        <CloseIcon
          onClick={onClose}
          className='icon'
          style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
        />
      </button>
    </div>
  );
};

export default ModalHeader;
