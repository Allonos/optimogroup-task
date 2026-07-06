import { useState } from 'react';
import BetsListTabs from '@/components/ui/tabs/betsListTabs/BetsListTabs';
import GameInfoHeader from '@/components/ui/headers/gameInfoHeader/GameInfoHeader';
import GameInfoList from '@/components/ui/lists/gameInfoList/GameInfoList';

import betList from '@/data/BET_LIST.json';
import MyBetList from "@/data/MY_BETS_LIST.json";
import BetsListFooter from '@/components/ui/footers/BetsListFooter';
import StatsTabs from '@/components/ui/tabs/statsTabs/components/StatsTabs';
import GameInfoStatsList from '@/components/ui/lists/gameInfoStatsList';
import StatsTab from '@/components/ui/tabs/statsTabs/StatsTab';


const BetsListSection = () => {
  const [activeTab, setActiveTab] = useState('All Bets');
  const [activeStatTab, setActiveStatTab] = useState('Stats')

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
        <>
          <StatsTab activeStatTab={activeStatTab} />
        </>
      )
    }
  }

  return (
    <section className='bets-list-tabs-container'>
      <BetsListTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab !== "Stats" && activeTab !== "Leaderboard" && <GameInfoHeader />}
      {activeTab === "Stats" && <StatsTabs activeStatTab={activeStatTab} setActiveStatTab={setActiveStatTab} />}
      <div className={`game-info-list ${activeTab !== "Stats" ? "no-scrollbar" : "custom-scroll"}`}>
        {renderList()}
      </div>
      
      <BetsListFooter />
    </section>
  );
};

export default BetsListSection;
