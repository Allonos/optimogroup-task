import DefaultModal from '../DefaultModal'

const LimitsModal = ({ isOpen, onClose }) => {
  return (
    <DefaultModal isOpen={isOpen} onClose={onClose} className="modal--centered">
      <p>LimitsModal</p>
    </DefaultModal>
  )
}

export default LimitsModal
