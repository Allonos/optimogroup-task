import React, { useState } from 'react'
import BetControls from '@/components/ui/cards/betPlaceCard/components/BetControls'

const BetPlaceCard = () => {
  const [quantity, setQuantity] = useState(1.0)
  const presets = [2.0, 5.0, 10.0, 20.0]

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
    </div>
  )
}

export default BetPlaceCard