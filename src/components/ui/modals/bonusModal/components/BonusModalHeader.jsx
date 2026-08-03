import { CloseIcon } from '@/assets/icons/SvgTojsx';

const BonusModalHeader = ({ onClose }) => {
  return (
    <button className='bonus-modal-header' onClick={onClose}>
      <CloseIcon
        className='icon bonus-modal-close__button-icon'
        style={{
          '--icon-color': 'rgba(var(--icon-grey))',
        }}
      />
    </button>
  );
};

export default BonusModalHeader;
