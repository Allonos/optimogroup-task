import BetsListTabs from '@/components/ui/tabs/betsListTabs/BetsListTabs';
import GameInfoHeader from '@/components/ui/headers/gameInfoHeader/GameInfoHeader';
import GameInfoList from '@/components/ui/lists/gameInfoList/GameInfoList';
import betList from '@/data/BET_LIST.json';

const BetsListSection = () => {
  return (
    <section className='bets-list-tabs-container'>
      <BetsListTabs />
      <GameInfoHeader />
      <ul className='game-info-list no-scrollbar'>
        {betList.map((player) => (
          <GameInfoList
            key={`${player.id}`}
            playerName={player.playerName}
            bet={player.bet}
            betWin={player.betWin}
            cashout={player.cashout}
            status={player.status}
          />
        ))}
      </ul>
      <footer className='bets-list-footer'>
        <div className='bets-list-footer__item'>
          <span className='bets-list-footer__label text-body-small-semibold'>
            Bets
          </span>
          <span className='bets-list-footer__value text-body-small-semibold'>
            25/80
          </span>
        </div>
        <div className='bets-list-footer__item'>
          <span className='bets-list-footer__label text-body-small-semibold'>
            Total Bets
          </span>
          <span className='bets-list-footer__value text-body-small-semibold'>
            125.50 USD
          </span>
        </div>
        <div className='bets-list-footer__item'>
          <span className='bets-list-footer__label text-body-small-semibold'>
            Total Win
          </span>
          <span className='bets-list-footer__value text-body-small-semibold'>
            1.436.24 USD
          </span>
        </div>
      </footer>
    </section>
  );
};

export default BetsListSection;
