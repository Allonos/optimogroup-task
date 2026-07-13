import HowToPlayExample from '@/components/ui/modals/howToPlayModal/components/HowToPlayExample';

import chartsViewImg from '@/assets/webp/chartsView.webp';
import listViewImg from '@/assets/webp/listView.webp';
import liveBetsImg from '@/assets/webp/liveBets.webp';
import historyImg from '@/assets/webp/history.webp';

const ROUND_BETS_STEPS = [
  { before: 'Active players' },
  { before: 'Bet amounts' },
  { before: 'Cash-out multipliers' },
  { before: 'Who cashed out and who is still riding the comet' }
]

const HISTORY_STEPS = [
  { highlight: 'Bet Amount: ', after: 'How much you wagered' },
  { highlight: 'Multiplier: ', after: 'What multiplier you cashed out at (or crash point if you lost)' },
  { highlight: 'Result: ', after: 'Win or loss' },
  { highlight: 'Payout: ', after: 'Total amount won' },
  { highlight: 'Profit/Loss: ', after: 'Net result of each bet' },
  { highlight: 'Timestamp: ', after: 'When each bet was placed' },
  { highlight: 'Round ID: ', after: 'Reference number for each game round' },
]

const AdvancedFeaturesListSection = () => {
  return (
    <div className='how-to-play__modal__subsection'>
      <h3 className='how-to-play__modal__section-title'>Advanced Features</h3>
      <h4 className='how-to-play__modal__subsection-title'>
        History - Charts View
      </h4>
      <p className='how-to-play__modal__subsection-text'>
        Graphical display of past comet explosion multipliers useful for reading
        volatility and patterns.
      </p>
      <div className='how-to-play__modal__subsection-charts-view'>
        <img
          src={chartsViewImg}
          alt='Charts View'
          className='charts-view-img'
        />
      </div>

      <h4 className='how-to-play__modal__subsection-title'>List View</h4>
      <p className='how-to-play__modal__subsection-text'>
        A compact list of recent crash points in chronological order.
      </p>
      <div className='how-to-play__modal__subsection-charts-view'>
        <img src={listViewImg} alt='List View' className='charts-view-img' />
      </div>

      <h4 className='how-to-play__modal__subsection-title'>
        Current Round Bets (Live Bets)
      </h4>
      <p className='how-to-play__modal__subsection-text advanced-features-text'>
        Real-time display of all active bets from players currently in the
        match:
      </p>
      <HowToPlayExample steps={ROUND_BETS_STEPS} />
      <p className='how-to-play__modal__subsection-text advanced-features-text'>
        Adds transparency, social interaction, and competitive excitement.
      </p>
      <div className='how-to-play__modal__subsection-charts-view'>
        <img src={liveBetsImg} alt='Live Bets' className='charts-view-img' />
      </div>

      <h4 className='how-to-play__modal__subsection-title'>
        My History (Personal Bet History)
      </h4>
      <p className='how-to-play__modal__subsection-text advanced-features-text'>
        Your personal record includes:
      </p>
      <HowToPlayExample steps={HISTORY_STEPS} />
      <p className='how-to-play__modal__subsection-text advanced-features-text'>
        Filter and sort your history to track performance, review strategies,
        and monitor your bankroll management.
      </p>
      <div className='how-to-play__modal__subsection-charts-view'>
        <img src={historyImg} alt='History' className='charts-view-img' />
      </div>
    </div>
  );
};

export default AdvancedFeaturesListSection;
