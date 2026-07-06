import stats from '@/data/STATS.json';
import StatPill from '@/components/ui/StatPill/StatPill';

const GameInfoStatsList = () => {
  return (
    <section className='info-stat-container'>
      {stats.map((stat) => (
        <StatPill key={stat.id} value={stat.value} status={stat.status} />
      ))}
    </section>
  );
};

export default GameInfoStatsList;
