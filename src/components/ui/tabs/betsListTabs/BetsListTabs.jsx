import { useState, useRef, useLayoutEffect, useCallback } from 'react';
import DefaultTab from '../defaultTab/DefaultTab';

const TABS = ['All Bets', 'My Bets', 'Leaderboard', 'Stats'];

const BetsListTabs = ({ activeTab, setActiveTab }) => {
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

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className='bets-list-tabs' ref={containerRef}>
      <div
        className='bets-list-tabs__indicator'
        style={{
          transform: `translateX(${indicator.x}px)`,
          width: `${indicator.width}px`,
        }}
      />
      {TABS.map((tab) => (
        <DefaultTab
          key={tab}
          ref={(el) => (tabRefs.current[tab] = el)}
          label={tab}
          active={activeTab === tab}
          onClick={() => handleTabClick(tab)}
        />
      ))}
    </div>
  );
};

export default BetsListTabs;