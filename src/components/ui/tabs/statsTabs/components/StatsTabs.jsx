import { useTranslation } from 'react-i18next';

const StatsTabs = ({ activeStatTab, setActiveStatTab }) => {
  const { t } = useTranslation();

  return (
    <div className='stats-tabs'>
      <button
        className={`stats-tab ${activeStatTab === 'stats' && 'active'}`}
        onClick={() => setActiveStatTab('stats')}
      >
        {t('stats')}
      </button>
      <button
        className={`stats-tab ${activeStatTab === 'chart' && 'active'}`}
        onClick={() => setActiveStatTab('chart')}
      >
        {t('chart')}
      </button>
    </div>
  );
};

export default StatsTabs;
