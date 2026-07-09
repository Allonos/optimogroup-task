const RecentMultipliers = () => {
  return (
    <div className='how-to-play__modal__subsection'>
      <h3 className='how-to-play__modal__section-title'>
        Game Interface Components
      </h3>
      <h4 className='how-to-play__modal__subsection-title'>
        Top Banner - Recent Multipliers
      </h4>
      <p className='how-to-play__modal__subsection-text'>
        Shows the last exploded comet multipliers. Use this history to observe
        trends and guess when the next crash may occur.
      </p>
      <div className='how-to-play__bet_example'>
        <div className='how-to-play__bet_example__multiplier'>
          <div
            className='how-to-play__multiplier multiplier-low'
            style={{
              borderColor: 'rgba(var(--stat-low-border))',
              backgroundColor: 'rgba(var(--stat-low-bg))',
            }}
          />
          <span className='how-to-play__multiplier-text'>1.00 - 2.00x</span>
        </div>
        <div className='how-to-play__bet_example__multiplier'>
          <div
            className='how-to-play__multiplier multiplier-medium'
            style={{
              borderColor: 'rgba(var(--stat-medium-border))',
              backgroundColor: 'rgba(var(--stat-medium-bg))',
            }}
          />
          <span className='how-to-play__multiplier-text'>2.00 - 10.00x</span>
        </div>
        <div className='how-to-play__bet_example__multiplier'>
          <div
            className='how-to-play__multiplier multiplier-high'
            style={{
              borderColor: 'rgba(var(--stat-high-border))',
              backgroundColor: 'rgba(var(--stat-high-bg))',
            }}
          />
          <span className='how-to-play__multiplier-text'>10.00 - 50.00x</span>
        </div>
        <div className='how-to-play__bet_example__multiplier'>
          <div
            className='how-to-play__multiplier multiplier-very-high'
            style={{
              borderColor: 'rgba(var(--stat-very-high-border))',
              backgroundColor: 'rgba(var(--stat-very-high-bg))',
            }}
          />
          <span className='how-to-play__multiplier-text'>50.00 - 100.00x</span>
        </div>
        <div className='how-to-play__bet_example__multiplier'>
          <div
            className='how-to-play__multiplier multiplier-ultra'
            style={{
              borderColor: 'rgba(var(--stat-ultra-border))',
              backgroundColor: 'rgba(var(--stat-ultra-bg))',
            }}
          />
          <span className='how-to-play__multiplier-text'>100.00x-25000x</span>
        </div>
      </div>
    </div>
  );
};

export default RecentMultipliers;
