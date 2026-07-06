import QuantityStepper from '@/components/ui/cards/betPlaceCard/components/QuantityStepper';
import QuantityPresets from '@/components/ui/cards/betPlaceCard/components/QuantityPresets';
import PlaceBetButton from '@/components/ui/cards/betPlaceCard/components/PlaceBetButton';

const BetControls = ({
  quantity,
  onIncrease,
  onDecrease,
  presets,
  onSelectPreset,
  onPlaceBet,
}) => {
  return (
    <div className='bet-place-top'>
      <div className='change-quantity-container'>
        <QuantityStepper
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <QuantityPresets presets={presets} onSelect={onSelectPreset} />
      </div>
      <PlaceBetButton amount={quantity} onClick={onPlaceBet} />
    </div>
  );
};

export default BetControls;
