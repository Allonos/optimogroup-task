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
            className='icon'
            style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
          />
        }
      />
      <span>{quantity}</span>
      <ChangeQuantityButton
        onClick={onIncrease}
        icon={
          <PlusIcon
            className='icon'
            style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
          />
        }
      />
    </div>
  );
};

export default QuantityStepper;
