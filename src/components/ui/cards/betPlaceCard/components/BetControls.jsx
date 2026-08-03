import QuantityStepper from '@/components/ui/cards/betPlaceCard/components/QuantityStepper';
import QuantityPresets from '@/components/ui/cards/betPlaceCard/components/QuantityPresets';
import PlaceBetButton from '@/components/ui/cards/betPlaceCard/components/PlaceBetButton';

const BetControls = ({
  quantity,
  onIncrease,
  onDecrease,
  presets,
  onSelectPreset,
  buttonState,
  buttonAmount,
  onButtonClick,
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
      <PlaceBetButton state={buttonState} amount={buttonAmount} onClick={onButtonClick} />
    </div>
  );
};

export default BetControls;
