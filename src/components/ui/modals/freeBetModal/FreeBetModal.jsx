import DefaultModal from '../DefaultModal'

const FreeBetModal = ({ isOpen, onClose }) => {
  return (
    <DefaultModal isOpen={isOpen} onClose={onClose} className="modal--centered">
      <p>FreeBetModal</p>
    </DefaultModal>
  )
}

export default FreeBetModal
