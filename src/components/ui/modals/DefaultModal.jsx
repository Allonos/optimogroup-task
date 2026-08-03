import { createPortal } from 'react-dom';
import '@/styles/modals/DefaultModal.css';

const DefaultModal = ({ isOpen, onClose, className = '', style, children }) => {
  return (
    <>
      {createPortal(
        <div
          className={`modal-backdrop${isOpen ? ' modal-backdrop--open' : ''}`}
          onClick={onClose}
        />,
        document.body,
      )}
      <div
        className={`modal${isOpen ? ' modal--open' : ''}${className ? ` ${className}` : ''}`}
        style={style}
      >
        {children}
      </div>
    </>
  );
};

export default DefaultModal;
