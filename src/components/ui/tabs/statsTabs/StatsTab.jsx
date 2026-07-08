import GameInfoStatsList from '@/components/ui/lists/gameInfoStatsList';
import StatsChart from '@/components/ui/tabs/statsTabs/components/StatsChart';
import { useTranslation } from 'react-i18next';

const StatsTab = ({ activeStatTab }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className='stats-list-header'>
        <div
          className='separator'
          style={{ '--separator-color': 'rgba(var(--line))' }}
        />
      </div>
      {activeStatTab === 'stats' && <GameInfoStatsList />}
      {activeStatTab === 'chart' && <StatsChart />}
    </>
  );
};

export default StatsTab;
