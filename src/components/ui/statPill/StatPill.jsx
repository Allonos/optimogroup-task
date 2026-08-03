import { getStatColors } from '@/utils/statColors';

const StatPill = ({ value, status, size = 'sm' }) => {
  const { border, background } = getStatColors(status);

  return (
    <div
      className={`info-stat info-stat--${size}`}
      style={{
        '--stat-border-color': border,
        '--stat-bg-color': background,
      }}
    >
      <span className='info-stat-value'>{value}</span>
    </div>
  );
};

export default StatPill;
