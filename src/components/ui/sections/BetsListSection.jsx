import { useState } from 'react';
import BetsListTabs from '@/components/ui/tabs/betsListTabs/BetsListTabs';
import GameInfoHeader from '@/components/ui/headers/gameInfoHeader/GameInfoHeader';
import GameInfoList from '@/components/ui/lists/gameInfoList/GameInfoList';

import betList from '@/data/BET_LIST.json';
import MyBetList from "@/data/MY_BETS_LIST.json";
import BetsListFooter from '@/components/ui/footers/BetsListFooter';
import StatsTabs from '@/components/ui/tabs/statsTabs/StatsTabs';
import GameInfoStatsList from '@/components/ui/lists/gameInfoStatsList';


const BetsListSection = () => {
  const [activeTab, setActiveTab] = useState('All Bets');
  const [activeStatTab, setActiveStatTab] = useState("Stats")

  const renderList = () => {
    switch (activeTab){
      case "All Bets":
        return (
          <>
            {betList.map((player) => (
              <GameInfoList
                key={`${player.id}`}
                playerName={player.playerName}
                bet={player.bet}
                betWin={player.betWin}
                cashout={player.cashout}
                status={player.status}
                activeTab={activeTab}
              />
            ))}
          </>
        );
     case "My Bets":
      return (
        <>
          {MyBetList.map((bet) => (
            <GameInfoList
              key={`${bet.id}`}
              date={bet.date}
              time={bet.time}
              bet={bet.bet}
              betWin={bet.betWin}
              cashout={bet.cashout}
              status={bet.status}
              activeTab={activeTab}
            />
          ))}
        </>
      );
    case "Stats":
      return (
        <div className='stats-list-header'>
          <div className="stats-list-header-tabs">
            <StatsTabs activeStatTab={activeStatTab} setActiveStatTab={setActiveStatTab} />
            <div className="separator" style={{ '--separator-color': "rgba(var(--line))" }} />
          </div>
          <GameInfoStatsList />
        </div>
      )
    }
  }

  return (
    <section className='bets-list-tabs-container'>
      <BetsListTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab !== "Stats" && activeTab !== "Leaderboard" && <GameInfoHeader />}
      <ul className='game-info-list no-scrollbar'>
        {renderList()}
      </ul>
      <BetsListFooter />
    </section>
  );
};

export default BetsListSection;
