import { useTranslation } from 'react-i18next';

import HowToPlayExample from '@/components/ui/modals/howToPlayModal/components/HowToPlayExample';
import PlacingBetsImg from '@/assets/webp/placingBets.webp';

const BETTING_PANELS_STEPS = [
  { before: 'Set different bet amounts' },
  { before: 'Configure auto cahs-out multipliers independently' },
  { before: 'Place one or two bets simultaneously' },
  { before: 'Cancel pending bets before the round starts' },
];

const ACTION_BUTTONS_STEPS = [
  {
    highlight: 'BET (Purple):',
    after: 'Confirm your wager for the next round',
  },
  {
    highlight: 'CANCEL (Red):',
    after: 'Remove a pending bet before the round starts',
  },
  {
    highlight: 'CASH OUT:',
    after: 'Collect your winnings during an active round',
  },
  {
    highlight: 'x2 Button:',
    after: 'Double your current bet amount instantly',
  },
];

const GameInterfaceSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__subsection-title'>
          Balance Display
        </h3>
        <p className='how-to-play__modal__subsection-text'>
          Top-right live balance display showing your available funds.
        </p>
        <div className='how-to-play__balance-display'>
          <span className='how-to-play__balance-display-label'>
            {t('balance')}
          </span>
          <span className='how-to-play__balance-display-value'>
            2,439.49 USD
          </span>
        </div>
      </div>
      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__subsection-title'>Betting Panels</h3>
        <p className='how-to-play__modal__subsection-text'>
          Two independent betting panels (left and right) allow you to:
        </p>
        <HowToPlayExample steps={BETTING_PANELS_STEPS} />
      </div>
      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__subsection-title'>Action Buttons</h3>
        <HowToPlayExample steps={ACTION_BUTTONS_STEPS} />
        <img
          src={PlacingBetsImg}
          alt='Placing Bets'
          className='placing-bets-img'
        />
      </div>
    </>
  );
};

export default GameInterfaceSection;
