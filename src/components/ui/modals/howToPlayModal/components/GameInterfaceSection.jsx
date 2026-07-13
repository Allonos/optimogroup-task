import { useTranslation } from 'react-i18next';

import HowToPlayExample from '@/components/ui/modals/howToPlayModal/components/HowToPlayExample';
import { BETTING_PANELS_STEPS, ACTION_BUTTONS_STEPS } from '@/utils/constants/howToPlayConstants';

import PlacingBetsImg from '@/assets/webp/placingBets.webp';


const GameInterfaceSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__subsection-title'>
          {t('gameInterfaceBalanceDisplayTitle')}
        </h3>
        <p className='how-to-play__modal__subsection-text'>
          {t('gameInterfaceBalanceDisplayText')}
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
        <h3 className='how-to-play__modal__subsection-title'>
          {t('gameInterfaceBettingPanelsTitle')}
        </h3>
        <p className='how-to-play__modal__subsection-text'>
          {t('gameInterfaceBettingPanelsText')}
        </p>
        <HowToPlayExample steps={BETTING_PANELS_STEPS} />
      </div>
      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__subsection-title'>
          {t('gameInterfaceActionButtonsTitle')}
        </h3>
        <HowToPlayExample steps={ACTION_BUTTONS_STEPS} />
        <img
          src={PlacingBetsImg}
          alt={t('placingBets')}
          className='placing-bets-img'
        />
      </div>
    </>
  );
};

export default GameInterfaceSection;
