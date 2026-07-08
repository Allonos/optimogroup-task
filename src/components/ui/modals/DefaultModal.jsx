import { createPortal } from 'react-dom';
import '@/styles/modals/DefaultModal.css';

const DefaultModal = ({ isOpen, onClose, style, children }) => {
  return (
    <>
      {createPortal(
        <div
          className={`modal-backdrop${isOpen ? ' modal-backdrop--open' : ''}`}
          onClick={onClose}
        />,
        document.body,
      )}
      <div className={`modal${isOpen ? ' modal--open' : ''}`} style={style}>
        {children}
      </div>
    </>
  );
};

export default DefaultModal;
