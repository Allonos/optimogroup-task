import DefaultBar from '@/components/ui/bars/defaultBar/DefaultBar';
import STATS_CHART from '@/data/STATS_CHART.json';
import React from 'react';

const StatsChart = () => {
  return (
    <div className='chart-container'>
      {STATS_CHART.map((stat) => (
        <React.Fragment key={stat.key}>
          <DefaultBar bet={stat.bet} percentage={stat.percentage} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatsChart;
