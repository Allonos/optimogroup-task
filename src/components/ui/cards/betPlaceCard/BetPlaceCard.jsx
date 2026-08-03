import React, { useState } from 'react'
import BetControls from '@/components/ui/cards/betPlaceCard/components/BetControls'
import AutoBetControls from '@/components/ui/cards/betPlaceCard/components/AutoBetControls'
import AutoBetModal from '@/components/ui/modals/autoBetModal/AutoBetModal'

const BUTTON_STATE_MAP = { idle: 'bet', queued: 'cancel', active: 'cashout', cashedout: 'bet', lost: 'bet' };

const BetPlaceCard = ({
  betState = 'idle',
  quantity = 1.0,
  gameMultiplier = 1,
  winAmount = null,
  isFree = false,
  freeBetsCount = 0,
  freeBetsTotal = 0,
  freeBetActive = false,
  onPlaceBet,
  onCancelBet,
  onCashout,
  onSetQuantity,
}) => {
  const presets = [2.0, 5.0, 10.0, 20.0]
  const lockedByFreeBetSession = freeBetActive && !isFree;
  const isLocked = betState === 'queued' || betState === 'active' || isFree || lockedByFreeBetSession;

  const [autoBetEnabled, setAutoBetEnabled] = useState(false)
  const [isAutoBetModalOpen, setIsAutoBetModalOpen] = useState(false)
  const [autoCashoutEnabled, setAutoCashoutEnabled] = useState(false)
  const [isAutoCashoutModalOpen, setIsAutoCashoutModalOpen] = useState(false)
  const [autoCashoutMultiplier, setAutoCashoutMultiplier] = useState(2.0)

  const idleButtonState = isFree ? 'free-bet' : 'bet';

  const buttonState = isFree
    ? (betState === 'active' ? 'cashout' : 'free-bet') 
    : (betState === 'idle' ? idleButtonState : (BUTTON_STATE_MAP[betState] ?? 'bet'));

  const buttonAmount = betState === 'active'
    ? +(quantity * gameMultiplier).toFixed(2)
    : betState === 'cashedout' ? (winAmount ?? quantity)
    : quantity;

  const canPlaceBet = (betState === 'idle' || betState === 'cashedout') && !lockedByFreeBetSession && !isFree;
  const handleButtonClick = betState === 'queued' && !isFree ? onCancelBet   // added `&& !isFree`
    : betState === 'active' ? onCashout
    : canPlaceBet ? onPlaceBet
    : undefined;

  return (
    <div className={`bet-place-container ${isFree ? 'bet-place-container--free-bet' : ''}${lockedByFreeBetSession ? ' bet-place-container--locked' : ''}`}>
      <BetControls
        quantity={quantity}
        onIncrease={() => !isLocked && onSetQuantity(quantity + 1)}
        onDecrease={() => !isLocked && onSetQuantity(Math.max(0, quantity - 1))}
        presets={presets}
        onSelectPreset={(q) => !isLocked && onSetQuantity(q)}
        buttonState={buttonState}
        buttonAmount={buttonAmount}
        onButtonClick={handleButtonClick}
        isFreeBet={isFree}
        freeBetsCount={freeBetsCount}
        freeBetsTotal={freeBetsTotal}
      />

      <div className='bet-place-divider' />

      <AutoBetControls
        autoBetEnabled={autoBetEnabled}
        onToggleAutoBet={() => setAutoBetEnabled((v) => !v)}
        autoCashoutEnabled={autoCashoutEnabled}
        onToggleAutoCashout={() => setAutoCashoutEnabled((v) => !v)}
        multiplier={autoCashoutMultiplier}
        onIncreaseMultiplier={() => setAutoCashoutMultiplier((m) => +(m + 0.1).toFixed(2))}
        onDecreaseMultiplier={() =>
          setAutoCashoutMultiplier((m) => {
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