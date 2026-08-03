export const STAT_STATUS_COLORS = {
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

export const DEFAULT_STAT_COLOR = STAT_STATUS_COLORS.low;

export const getStatColors = (status) =>
  STAT_STATUS_COLORS[status] ?? DEFAULT_STAT_COLOR;
