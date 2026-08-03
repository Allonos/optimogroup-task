import React, { useState } from 'react'
import BetControls from '@/components/ui/cards/betPlaceCard/components/BetControls'
import AutoBetControls from '@/components/ui/cards/betPlaceCard/components/AutoBetControls'
import AutoBetModal from '@/components/ui/modals/autoBetModal/AutoBetModal'


const BetPlaceCard = () => {
  const [quantity, setQuantity] = useState(1.0)
  const presets = [2.0, 5.0, 10.0, 20.0]

  const [autoBetEnabled, setAutoBetEnabled] = useState(false)
  const [isAutoBetModalOpen, setIsAutoBetModalOpen] = useState(false)
  const [autoCashoutEnabled, setAutoCashoutEnabled] = useState(false)
  const [isAutoCashoutModalOpen, setIsAutoCashoutModalOpen] = useState(false)
  const [multiplier, setMultiplier] = useState(2.0)

  return (
    <div className='bet-place-container'>
      <BetControls
        quantity={quantity}
        onIncrease={() => setQuantity((q) => q + 1)}
        onDecrease={() => setQuantity((q) => Math.max(0, q - 1))}
        presets={presets}
        onSelectPreset={setQuantity}
        onPlaceBet={() => console.log('placing bet', quantity)}
      />

      <div className='bet-place-divider' />

      <AutoBetControls
        autoBetEnabled={autoBetEnabled}
        onToggleAutoBet={() => setAutoBetEnabled((v) => !v)}
        autoCashoutEnabled={autoCashoutEnabled}
        onToggleAutoCashout={() => setAutoCashoutEnabled((v) => !v)}
        multiplier={multiplier}
        onIncreaseMultiplier={() => setMultiplier((m) => +(m + 0.1).toFixed(2))}
        onDecreaseMultiplier={() =>
          setMultiplier((m) => {
            if (m <= 2.0) return m;
            return +(m - 0.1).toFixed(2);
          })
        }
        setIsAutoBetModalOpen={() => setIsAutoBetModalOpen(true)}
        setIsAutoCashoutModalOpen={() => setIsAutoCashoutModalOpen(true)}
      />

      <AutoBetModal
        isOpen={isAutoBetModalOpen}
        onClose={() => {
          setIsAutoBetModalOpen(false);
          setIsAutoCashoutModalOpen(false);
        }}
      />
    </div>
  )
}

export default BetPlaceCard