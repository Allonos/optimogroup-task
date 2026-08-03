import QuantityPresets from '@/components/ui/cards/betPlaceCard/components/QuantityPresets';
import PlaceBetButton from '@/components/ui/cards/betPlaceCard/components/PlaceBetButton';
import QuantityStepper from './QuantityStepper';

const BetControls = ({
  quantity,
  onIncrease,
  onDecrease,
  presets,
  onSelectPreset,
  buttonState,
  buttonAmount,
  onButtonClick,
  isFreeBet,
  freeBetsCount,
  freeBetsTotal,
}) => {
  return (
    <div className='bet-place-top'>
      <div className='change-quantity-container'>
        {!isFreeBet && <QuantityStepper
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />}
        {isFreeBet && (
          <div className='free-bet-info-container'>
            <span>{quantity.toFixed(2)} USD</span>
            <span>{freeBetsCount}/{freeBetsTotal}</span>
          </div>
        )}
        <QuantityPresets presets={presets} onSelect={onSelectPreset} />
      </div>
      <PlaceBetButton
        state={buttonState}
        amount={buttonAmount}
        onClick={onButtonClick}
      />
    </div>
  );
};

export default BetControls;
