import { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import DefaultTab from '../defaultTab/DefaultTab';

const TABS = [
  { key: 'allBets', label: 'allBets' },
  { key: 'myBets', label: 'myBets' },
  { key: 'leaderboard', label: 'leaderboard' },
  { key: 'stats', label: 'stats' },
];

const BetsListTabs = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();
  const tabRefs = useRef({});
  const containerRef = useRef(null);
  const [indicator, setIndicator] = useState({ x: 0, width: 0 });

  const updateIndicator = useCallback((tab) => {
    const el = tabRefs.current[tab];
    const container = containerRef.current;
    if (!el || !container) return;

    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setIndicator({
      x: elRect.left - containerRect.left,
      width: elRect.width,
    });
  }, []);

  useLayoutEffect(() => {
    updateIndicator(activeTab);
  }, [activeTab, updateIndicator]);

  useLayoutEffect(() => {
    const handleResize = () => updateIndicator(activeTab);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab, updateIndicator]);

  return (
    <div className='bets-list-tabs' ref={containerRef}>
      <div
        className='bets-list-tabs__indicator'
        style={{
          transform: `translateX(${indicator.x}px)`,
          width: `${indicator.width}px`,
        }}
      />
      {TABS.map(({ key, label }) => (
        <DefaultTab
          key={key}
          ref={(el) => (tabRefs.current[key] = el)}
          label={t(label)}
          active={activeTab === key}
          onClick={() => setActiveTab(key)}
        />
      ))}
    </div>
  );
};

export default BetsListTabs;
