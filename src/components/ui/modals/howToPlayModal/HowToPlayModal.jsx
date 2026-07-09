import DefaultModal from '../DefaultModal'

const HowToPlayModal = ({ isOpen, onClose }) => {
  return (
    <DefaultModal isOpen={isOpen} onClose={onClose} className="modal--centered">
      <p>HowToPlayModal</p>
    </DefaultModal>
  )
}

export default HowToPlayModal
