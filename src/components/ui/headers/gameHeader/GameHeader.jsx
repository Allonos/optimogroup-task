import { useState, useRef } from 'react';
import stats from '@/data/STATS.json';
import StatPill from '@/components/ui/StatPill/StatPill';
import { ArrowIcon } from '@/assets/icons/SvgTojsx';
import PointDetailsModal from '@/components/ui/modals/pointDetailsModal/PointDetailsModal';

const GameHeader = () => {
  const [open, setOpen] = useState(false);
  const [pointDetailsModalOpen, setPointDetailsModalOpen] = useState(false);
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
          <button className='game-header-track-item' key={stat.id} onClick={() => setPointDetailsModalOpen(true)}>
            <StatPill value={stat.value} status={stat.status} size='sm' />
          </button>
        ))}
      </div>
      <button
        className={`game-header-arrow${open ? ' game-header-arrow--open' : ''}`}
        onClick={handleToggle}
      >
        <ArrowIcon className='icon' style={{ '--icon-color': 'rgba(var(--text-grey))' }} />
      </button>
      <PointDetailsModal isOpen={pointDetailsModalOpen} onClose={() => setPointDetailsModalOpen(false)} />
    </div>
  );
};

export default GameHeader;
