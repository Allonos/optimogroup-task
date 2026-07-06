import GameInfoStatsList from '@/components/ui/lists/gameInfoStatsList';
import { useState } from 'react';
import StatsChart from '@/components/ui/tabs/statsTabs/components/StatsChart';

const StatsTab = ({ activeStatTab }) => {
  return (
    <>
      <div className='stats-list-header'>
        <div
          className='separator'
          style={{ '--separator-color': 'rgba(var(--line))' }}
        />
      </div>
      {activeStatTab === "Stats" && <GameInfoStatsList />}
      {activeStatTab === "Chart" && <StatsChart />}
    </>
  );
};

export default StatsTab;
