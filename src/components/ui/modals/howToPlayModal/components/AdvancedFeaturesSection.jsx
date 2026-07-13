import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import DefaultSwitch from '@/components/ui/switches/DefaultSwitch';
import HowToPlayExample from '@/components/ui/modals/howToPlayModal/components/HowToPlayExample';
import { BET_SETTINGS, STOP_CONDITIONS } from '@/utils/constants/howToPlayConstants';

import autoCashOutImg from '@/assets/webp/autoCashOut.webp';

const AdvancedFeaturesSection = () => {
  const [autoBet, setAutoBet] = useState(true);
  const autoBetSwitchLabelId = 'how-to-play-auto-bet-switch';
  const { t } = useTranslation();

  return (
    <>
      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__section-title'>
          {t("advancedFeatures")}
        </h3>
        <h4 className='how-to-play__modal__subsection-title'>
          {t("autoBet")}
        </h4>
        <p className='how-to-play__modal__subsection-text'>
          {t("autoBetText")}
        </p>
        <div className='how-to-play__modal__subsection-auto-bet'>
          <span id={autoBetSwitchLabelId}>{t("autoBet")}</span>
          <DefaultSwitch
            defaultChecked={autoBet}
            onChange={() => setAutoBet(!autoBet)}
            aria-labelledby={autoBetSwitchLabelId}
          />
        </div>
      </div>
      <div className='how-to-play__modal__subsection'>
        <h4 className='how-to-play__modal__subsection-title'>
          {t("autoCashOut")}
        </h4>
        <p className='how-to-play__modal__subsection-text'>
          {t("autoCashOutText")}
        </p>
        <div className='how-to-play__modal__subsection-auto-cash-out'>
          <img
            src={autoCashOutImg}
            alt={'Auto Cash-Out'}
            className='auto-cash-out-img'
          />
        </div>
      </div>

      <div className='how-to-play__modal__subsection'>
        <h4 className='how-to-play__modal__subsection-title'>
          {t("autoplayConfiguration")}
        </h4>
        <p className='how-to-play__modal__subsection-text'>
          {t("autoplayConfigurationText")}
        </p>
      </div>

      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__subsection-title'>
          {t("betSettings")}
        </h3>
        <HowToPlayExample steps={BET_SETTINGS} />
      </div>

      <div className='how-to-play__modal__subsection'>
        <h3 className='how-to-play__modal__subsection-title'>
          {t("stopConditions")}
        </h3>
        <HowToPlayExample steps={STOP_CONDITIONS} />
        <div className='how-to-play__modal__subsection-auto-cash-out'>
          <img
            src={autoCashOutImg}
            alt={'Auto Cash-Out'}
            className='auto-cash-out-img'
          />
        </div>
      </div>
    </>
  );
};

export default AdvancedFeaturesSection;
