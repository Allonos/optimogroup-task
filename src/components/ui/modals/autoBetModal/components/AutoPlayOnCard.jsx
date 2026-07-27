import { CheckMarkIcon } from '@/assets/icons/SvgTojsx';

import MultiplierStepper from '@/components/ui/cards/betPlaceCard/components/MultiplierStepper';

const AutoPlayOnCard = ({ cardTitle, quantity, setQuantity }) => {
  return (
    <div className='auto-play-card'>
      <div className='auto-play-card-header'>
        <span>{cardTitle}</span>
        <label className='custom-checkbox'>
          <input type='checkbox' className='auto-play-card-header-checkbox' />
          <CheckMarkIcon className='custom-checkbox-icon' />
        </label>
      </div>
      <div className='multiplier-stepper-container'>
        <MultiplierStepper
          multiplier={quantity}
          onIncrease={() => setQuantity((q) => q + 1)}
          onDecrease={() => setQuantity((q) => Math.max(0, q - 1))}
        />
      </div>
    </div>
  );
};

export default AutoPlayOnCard;
