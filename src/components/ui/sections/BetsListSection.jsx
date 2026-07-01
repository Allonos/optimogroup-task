import BetsListTabs from '@/components/ui/tabs/betsListTabs/BetsListTabs';
import GameInfoHeader from '@/components/ui/headers/gameInfoHeader/GameInfoHeader';
import GameInfoList from '@/components/ui/lists/gameInfoList/GameInfoList';
import betList from '@/data/BET_LIST.json';

const BetsListSection = () => {
  return (
    <div className='bets-list-tabs-container'>
      <BetsListTabs />
      <GameInfoHeader />
      <ul className='game-info-list no-scrollbar'>
        {betList.map((player, index) => (
          <GameInfoList
            key={`${player.playerName}-${player.bet}-${index}`}
            playerName={player.playerName}
            bet={player.bet}
            betWin={player.betWin}
            cashout={player.cashout}
            status={player.status}
          />
        ))}
      </ul>
    </div>
  );
};

export default BetsListSection;
