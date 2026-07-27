import { MinusIcon, PlusIcon } from '@/assets/icons/SvgTojsx';

const MultiplierStepper = ({
  autoCashoutEnabled,
  multiplier,
  onIncrease,
  onDecrease,
}) => {
  const isMinusActive = multiplier > 2.0 && autoCashoutEnabled === true;
  const isPlusActive = autoCashoutEnabled === true;

  return (
    <div className='multiplier-control'>
      <button
        className={`multiplier-btn ${!isMinusActive ? 'disabled' : ''}`}
        onClick={isMinusActive ? onDecrease : undefined}
      >
        <MinusIcon
          width={12}
          height={12}
          className='icon'
          style={{
            '--icon-color': isMinusActive
              ? 'rgba(var(--icon-white))'
              : 'rgba(var(--button-grey-2))',
          }}
        />
      </button>
      <span
        className={`switch-label ${autoCashoutEnabled === false && 'disabled'}`}
      >
        {multiplier.toFixed(2)}x
      </span>
      <button
        className={`multiplier-btn ${!isPlusActive ? 'disabled' : ''}`}
        onClick={isPlusActive ? onIncrease : undefined}
      >
        <PlusIcon
          width={12}
          height={12}
          className='icon'
          style={{
            '--icon-color': isPlusActive
              ? 'rgba(var(--icon-white))'
              : 'rgba(var(--button-grey-2))',
          }}
        />
      </button>
    </div>
  );
};

export default MultiplierStepper;
