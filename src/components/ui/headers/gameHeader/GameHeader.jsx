import stats from '@/data/STATS.json';
import StatPill from '@/components/ui/StatPill/StatPill';

const GameHeader = () => {
  return (
    <div className='game-header'>
      <div className='game-header-track'>
        {stats.map((stat) => (
          <StatPill
            key={stat.id}
            value={stat.value}
            status={stat.status}
            size='lg'
          />
        ))}
        {stats.map((stat) => (
          <StatPill
            key={`${stat.id}-dup`}
            value={stat.value}
            status={stat.status}
            size='lg'
          />
        ))}
      </div>
    </div>
  );
};

export default GameHeader;
