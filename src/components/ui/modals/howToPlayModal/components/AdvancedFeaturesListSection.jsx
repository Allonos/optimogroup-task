import { useTranslation } from 'react-i18next';

import HowToPlayExample from '@/components/ui/modals/howToPlayModal/components/HowToPlayExample';
import { ROUND_BETS_STEPS, HISTORY_STEPS } from '@/utils/constants/howToPlayConstants';

import chartsViewImg from '@/assets/webp/chartsView.webp';
import listViewImg from '@/assets/webp/listView.webp';
import liveBetsImg from '@/assets/webp/liveBets.webp';
import historyImg from '@/assets/webp/history.webp';


const AdvancedFeaturesListSection = () => {
  const { t } = useTranslation();

  return (
    <div className='how-to-play__modal__subsection'>
      <h3 className='how-to-play__modal__section-title'>
        {t('advancedFeatures')}
      </h3>
      <h4 className='how-to-play__modal__subsection-title'>
        {t('advancedFeaturesListHistoryChartsViewTitle')}
      </h4>
      <p className='how-to-play__modal__subsection-text'>
        {t('advancedFeaturesListHistoryChartsViewText')}
      </p>
      <div className='how-to-play__modal__subsection-charts-view'>
        <img
          src={chartsViewImg}
          alt={t('advancedFeaturesListChartsViewAlt')}
          className='charts-view-img'
        />
      </div>

      <h4 className='how-to-play__modal__subsection-title'>
        {t('advancedFeaturesListListViewTitle')}
      </h4>
      <p className='how-to-play__modal__subsection-text'>
        {t('advancedFeaturesListListViewText')}
      </p>
      <div className='how-to-play__modal__subsection-charts-view'>
        <img
          src={listViewImg}
          alt={t('advancedFeaturesListListViewAlt')}
          className='charts-view-img'
        />
      </div>

      <h4 className='how-to-play__modal__subsection-title'>
        {t('advancedFeaturesListCurrentRoundBetsTitle')}
      </h4>
      <p className='how-to-play__modal__subsection-text advanced-features-text'>
        {t('advancedFeaturesListCurrentRoundBetsText')}
      </p>
      <HowToPlayExample steps={ROUND_BETS_STEPS} />
      <p className='how-to-play__modal__subsection-text advanced-features-text'>
        {t('advancedFeaturesListCurrentRoundBetsFooter')}
      </p>
      <div className='how-to-play__modal__subsection-charts-view'>
        <img
          src={liveBetsImg}
          alt={t('advancedFeaturesListLiveBetsAlt')}
          className='charts-view-img'
        />
      </div>

      <h4 className='how-to-play__modal__subsection-title'>
        {t('advancedFeaturesListMyHistoryTitle')}
      </h4>
      <p className='how-to-play__modal__subsection-text advanced-features-text'>
        {t('advancedFeaturesListMyHistoryText')}
      </p>
      <HowToPlayExample steps={HISTORY_STEPS} />
      <p className='how-to-play__modal__subsection-text advanced-features-text'>
        {t('advancedFeaturesListMyHistoryFooter')}
      </p>
      <div className='how-to-play__modal__subsection-charts-view'>
        <img
          src={historyImg}
          alt={t('advancedFeaturesListHistoryAlt')}
          className='charts-view-img'
        />
      </div>
    </div>
  );
};

export default AdvancedFeaturesListSection;
