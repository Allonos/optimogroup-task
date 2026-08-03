import ChangeQuantityButton from '@/components/ui/buttons/changeQuantityButton/ChangeQuantityButton';
import { MinusIcon } from '@/assets/icons/SvgTojsx';
import { PlusIcon } from '@/assets/icons/SvgTojsx';

const QuantityStepper = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className='change-by-actions'>
      <ChangeQuantityButton
        onClick={onDecrease}
        icon={
          <MinusIcon
            className='icon quantity-icon'
            style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
          />
        }
      />
      <span>{quantity.toFixed(2)}</span>
      <ChangeQuantityButton
        onClick={onIncrease}
        icon={
          <PlusIcon
            className='icon quantity-icon'
            style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
          />
        }
      />
    </div>
  );
};

export default QuantityStepper;
