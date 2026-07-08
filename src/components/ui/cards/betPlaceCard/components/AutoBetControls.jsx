import { useTranslation } from 'react-i18next';
import DefaultSwitch from '@/components/ui/switches/DefaultSwitch';
import MultiplierStepper from '@/components/ui/cards/betPlaceCard/components/MultiplierStepper';

const AutoBetControls = ({
  autoBetEnabled,
  onToggleAutoBet,
  autoCashoutEnabled,
  onToggleAutoCashout,
  multiplier,
  onIncreaseMultiplier,
  onDecreaseMultiplier,
}) => {
  const { t } = useTranslation();

  return (
    <div className='bet-place-bottom'>
      <div className='switch-group'>
        <span className='switch-label'>{t('autoBet')}</span>
        <DefaultSwitch
          defaultChecked={autoBetEnabled}
          onChange={onToggleAutoBet}
        />
      </div>
      <div className='auto-cashout-container'>
        <div className='switch-group switch-group--cashout'>
          <span className='switch-label'>{t('autoCashOut')}</span>
          <DefaultSwitch
            defaultChecked={autoCashoutEnabled}
            onChange={onToggleAutoCashout}
          />
        </div>
        <MultiplierStepper
          multiplier={multiplier}
          onIncrease={onIncreaseMultiplier}
          onDecrease={onDecreaseMultiplier}
        />
      </div>
    </div>
  );
};

export default AutoBetControls;
