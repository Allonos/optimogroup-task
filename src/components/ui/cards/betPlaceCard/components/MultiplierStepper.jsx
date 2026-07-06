import { MinusIcon, PlusIcon } from '@/assets/icons/SvgTojsx';

const MultiplierStepper = ({ multiplier, onIncrease, onDecrease }) => {
  const isMinusActive = multiplier > 2.0;

  return (
    <div className='multiplier-control'>
      <button
        className={`multiplier-btn ${!isMinusActive ? 'disabled' : ''}`}
        onClick={onDecrease}
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
      <span className='switch-label'>{multiplier.toFixed(2)}x</span>
      <button className='multiplier-btn' onClick={onIncrease}>
        <PlusIcon
          width={12}
          height={12}
          className='icon'
          style={{ '--icon-color': 'rgba(var(--icon-white))' }}
        />
      </button>
    </div>
  );
};

export default MultiplierStepper;
