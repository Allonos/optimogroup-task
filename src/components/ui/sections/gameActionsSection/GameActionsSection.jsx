import BetPlaceCard from '@/components/ui/cards/betPlaceCard/BetPlaceCard';

const GameActionsSection = ({
  bets,
  gameMultiplier,
  freeBetsCount,
  freeBetsTotal,
  freeBetActive,
  onPlaceBet,
  onCancelBet,
  onCashout,
  onSetQuantity,
}) => {
  return (
    <section className='action-section'>
      {bets.map((bet, i) => (
        <BetPlaceCard
          key={i}
          betState={bet.state}
          quantity={bet.quantity}
          gameMultiplier={gameMultiplier}
          winAmount={bet.winAmount}
          isFree={bet.isFree ?? false}
          freeBetsCount={freeBetsCount}
          freeBetsTotal={freeBetsTotal}
          freeBetActive={freeBetActive}
          onPlaceBet={() => onPlaceBet(i)}
          onCancelBet={() => onCancelBet(i)}
          onCashout={() => onCashout(i)}
          onSetQuantity={(qty) => onSetQuantity(i, qty)}
        />
      ))}
    </section>
  );
};

export default GameActionsSection;
