const StatsTabs = ({ activeStatTab, setActiveStatTab }) => {
  return (
    <div className='stats-tabs'>
      <button
        className={`stats-tab ${activeStatTab === 'Stats' && 'active'}`}
        onClick={() => setActiveStatTab('Stats')}
      >
        Stats
      </button>
      <button
        className={`stats-tab ${activeStatTab === 'Chart' && 'active'}`}
        onClick={() => setActiveStatTab('Chart')}
      >
        Chart
      </button>
    </div>
  );
};

export default StatsTabs;
