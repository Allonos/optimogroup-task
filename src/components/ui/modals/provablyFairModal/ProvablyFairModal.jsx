import React, { useEffect } from 'react'
import DefaultModal from '../DefaultModal'
import ProvablyFairInstructions from './ProvablyFairInstructions'
import RoundStateTable from './RoundStateTable'
import InfoBlock from './InfoBlock'
import ProvablyFairParameters from './ProvablyFairParameters'

const BEFORE_VALUES = ['1', 'hidden', 'Hidden', '8f3a2b9c7d1e…']
const AFTER_VALUES = ['1', '7k9mX2pQ4nR8wL…', '2.45x', '8f3a2b9c7d1e…']

const BEFORE_ITEMS = [
  { label: 'Round Number', desc: 'The current round identifier' },
  { label: 'Provably Fair Hash', desc: 'A cryptographic hash that proves the round outcome was predetermined' },
]

const AFTER_ITEMS = [
  { label: 'Server Key', desc: 'The random server-generated key' },
  { label: 'Crash Point', desc: 'The multiplier where the round ended' },
  { label: 'Provably Fair Hash', desc: 'Remains the same, proving nothing changed' },
]

const ProvablyFairModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return
    const header = document.querySelector('header')
    if (!header) return
    header.addEventListener('click', onClose)
    return () => header.removeEventListener('click', onClose)
  }, [isOpen, onClose])
  return (
    <DefaultModal isOpen={isOpen} onClose={onClose} className="modal--centered no-scrollbar" style={{ maxWidth: 1006, width: "100%", maxHeight: 581, overflowY: "auto", borderRadius: 16, padding: 24, border: '1px solid rgba(var(--line))', zIndex: 100 }}>
      <section className="provably__fair__modal__content">
        <h2 className="modal__title">Provably Fair</h2>
        <div className="modal__content">
          <ProvablyFairInstructions />
          <RoundStateTable title="Before the Round Starts (Hidden State)" values={BEFORE_VALUES} />
          <InfoBlock
            intro="Before the game begins, players can see:"
            items={BEFORE_ITEMS}
            footer="The Server Key and Crash Point remain hidden to ensure fairness."
          />
          <RoundStateTable title="After the Round Ends (Revealed State)" values={AFTER_VALUES} />
          <InfoBlock
            intro="Once the round completes, all parameters are revealed:"
            items={AFTER_ITEMS}
            footer="The Server Key and Crash Point remain hidden to ensure fairness."
          />
          <ProvablyFairParameters />
        </div>
      </section>
    </DefaultModal>
  )
}

export default ProvablyFairModal
