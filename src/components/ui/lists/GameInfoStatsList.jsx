import stats from '@/data/STATS.json';

const STAT_STATUS_COLORS = {
  low: {
    border: 'rgba(var(--stat-low-border))',
    background: 'rgba(var(--stat-low-bg))',
  },
  medium: {
    border: 'rgba(var(--stat-medium-border))',
    background: 'rgba(var(--stat-medium-bg))',
  },
  high: {
    border: 'rgba(var(--stat-high-border))',
    background: 'rgba(var(--stat-high-bg))',
  },
  'very high': {
    border: 'rgba(var(--stat-very-high-border))',
    background: 'rgba(var(--stat-very-high-bg))',
  },
  ultra: {
    border: 'rgba(var(--stat-ultra-border))',
    background: 'rgba(var(--stat-ultra-bg))',
  },
};

const DEFAULT_STAT_COLOR = STAT_STATUS_COLORS.low;

const GameInfoStatsList = () => {
  return (
    <section className='info-stat-container'>
      {stats.map((stat) => {
        const { border, background } =
          STAT_STATUS_COLORS[stat.status] ?? DEFAULT_STAT_COLOR;

        return (
          <div
            key={stat.id}
            className='info-stat'
            style={{
              '--stat-border-color': border,
              '--stat-bg-color': background,
            }}
          >
            <span className='info-stat-value'>{stat.value}</span>
          </div>
        );
      })}
    </section>
  );
};

export default GameInfoStatsList;
