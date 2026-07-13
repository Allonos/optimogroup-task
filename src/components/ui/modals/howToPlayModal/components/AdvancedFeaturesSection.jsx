import { useState } from 'react';

import DefaultSwitch from '@/components/ui/switches/DefaultSwitch';
import HowToPlayExample from '@/components/ui/modals/howToPlayModal/components/HowToPlayExample';

import autoCashOutImg from '@/assets/webp/autoCashOut.webp';

const BET_SETTINGS = [
  { before: 'Number of rounds to play' },
  { before: 'Bet Amount for each round' },
];

const STOP_CONDITIONS = [
  {
    before: 'Stop on Total Win: ',
    highlight: 'End autoplay once total profit passes your limit',
  },
  {
    before: 'Stop on Total Loss: ',
    highlight: 'End autoplay once total loss exceeds your limit',
  },
  {
    before: 'Stop on Single Win: ',
    highlight: 'Stop after any bet wins above a certain amount',
  },
];

const AdvancedFeaturesSection = () => {
  const [autoBet, setAutoBet] = useState(true);
  return (
    <>
      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__section-title'>Advanced Features</h3>
        <h4 className='how-to-play__modal__subsection-title'>Auto Bet</h4>
        <p className='how-to-play__modal__subsection-text'>
          Enable automatic betting by turning on the "Auto" switch. The system
          will place your chosen bet amount automatically each round without
          manual input.
        </p>
        <div className='how-to-play__modal__subsection-auto-bet'>
          <span>Auto Bet</span>
          <DefaultSwitch
            defaultChecked={autoBet}
            onChange={() => setAutoBet(!autoBet)}
          />
        </div>
      </div>
      <div className='how-to-play__modal__subsection'>
        <h4 className='how-to-play__modal__subsection-title'>Auto Cash-Out</h4>
        <p className='how-to-play__modal__subsection-text'>
          Set a target multiplier (e.g., 2.00x or 5.00x). The game will
          automatically cash out when the comet reaches that point. Perfect for
          consistent and disciplined play.
        </p>
        <div className='how-to-play__modal__subsection-auto-cash-out'>
          <img
            src={autoCashOutImg}
            alt='Auto Cash-Out'
            className='auto-cash-out-img'
          />
        </div>
      </div>

      <div className='how-to-play__modal__subsection'>
        <h4 className='how-to-play__modal__subsection-title'>
          Autoplay Configuration
        </h4>
        <p className='how-to-play__modal__subsection-text'>
          Use advanced autoplay settings for hands-free gameplay:
        </p>
      </div>

      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__subsection-title'>Bet Settings</h3>
        <HowToPlayExample steps={BET_SETTINGS} />
      </div>

      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__subsection-title'>
          Stop Conditions (Optional)
        </h3>
        <HowToPlayExample steps={STOP_CONDITIONS} />
        <div className='how-to-play__modal__subsection-auto-cash-out'>
          <img
            src={autoCashOutImg}
            alt='Auto Cash-Out'
            className='auto-cash-out-img'
          />
        </div>
      </div>
    </>
  );
};

export default AdvancedFeaturesSection;
