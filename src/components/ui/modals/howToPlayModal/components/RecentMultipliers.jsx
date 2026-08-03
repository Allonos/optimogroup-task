import { useTranslation } from 'react-i18next';

const RecentMultipliers = () => {
  const { t } = useTranslation();

  return (
    <div className='how-to-play__modal__subsection'>
      <h3 className='how-to-play__modal__section-title'>
        {t('recentMultipliersSectionTitle')}
      </h3>
      <h4 className='how-to-play__modal__subsection-title'>
        {t('recentMultipliersTitle')}
      </h4>
      <p className='how-to-play__modal__subsection-text'>
        {t('recentMultipliersText')}
      </p>
      <div className='how-to-play__bet_example'>
        <div className='how-to-play__bet_example__multiplier'>
          <div
            className='how-to-play__multiplier multiplier-low'
            style={{
              borderColor: 'rgba(var(--stat-low-border))',
              backgroundColor: 'rgba(var(--stat-low-bg))',
            }}
          />
          <span className='how-to-play__multiplier-text'>
            {t('recentMultipliersRangeLow')}
          </span>
        </div>
        <div className='how-to-play__bet_example__multiplier'>
          <div
            className='how-to-play__multiplier multiplier-medium'
            style={{
              borderColor: 'rgba(var(--stat-medium-border))',
              backgroundColor: 'rgba(var(--stat-medium-bg))',
            }}
          />
          <span className='how-to-play__multiplier-text'>
            {t('recentMultipliersRangeMedium')}
          </span>
        </div>
        <div className='how-to-play__bet_example__multiplier'>
          <div
            className='how-to-play__multiplier multiplier-high'
            style={{
              borderColor: 'rgba(var(--stat-high-border))',
              backgroundColor: 'rgba(var(--stat-high-bg))',
            }}
          />
          <span className='how-to-play__multiplier-text'>
            {t('recentMultipliersRangeHigh')}
          </span>
        </div>
        <div className='how-to-play__bet_example__multiplier'>
          <div
            className='how-to-play__multiplier multiplier-very-high'
            style={{
              borderColor: 'rgba(var(--stat-very-high-border))',
              backgroundColor: 'rgba(var(--stat-very-high-bg))',
            }}
          />
          <span className='how-to-play__multiplier-text'>
            {t('recentMultipliersRangeVeryHigh')}
          </span>
        </div>
        <div className='how-to-play__bet_example__multiplier'>
          <div
            className='how-to-play__multiplier multiplier-ultra'
            style={{
              borderColor: 'rgba(var(--stat-ultra-border))',
              backgroundColor: 'rgba(var(--stat-ultra-bg))',
            }}
          />
          <span className='how-to-play__multiplier-text'>
            {t('recentMultipliersRangeUltra')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentMultipliers;
