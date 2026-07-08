import { useState, useRef } from 'react';
import stats from '@/data/STATS.json';
import StatPill from '@/components/ui/StatPill/StatPill';
import { ArrowIcon } from '../../../../assets/icons/SvgTojsx';

const GameHeader = () => {
  const [open, setOpen] = useState(false);
  const trackRef = useRef(null);

  const handleToggle = () => {
    if (!open && trackRef.current) {
      trackRef.current.style.setProperty('--expanded-height', trackRef.current.scrollHeight + 'px');
    }
    setOpen((o) => !o);
  };

  return (
    <div className={`game-header${open ? ' game-header--open' : ''}`}>
      <div className='game-header-track' ref={trackRef}>
        {stats.map((stat) => (
          <div className='game-header-track-item' key={stat.id}>
            <StatPill value={stat.value} status={stat.status} size='sm' />
          </div>
        ))}
      </div>
      <button
        className={`game-header-arrow${open ? ' game-header-arrow--open' : ''}`}
        onClick={handleToggle}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default GameHeader;
