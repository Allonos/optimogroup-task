import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BetsListTabs from '@/components/ui/tabs/betsListTabs/BetsListTabs';
import GameInfoHeader from '@/components/ui/headers/gameInfoHeader/GameInfoHeader';
import GameInfoList from '@/components/ui/lists/gameInfoList/GameInfoList';

import betList from '@/data/BET_LIST.json';
import MyBetList from "@/data/MY_BETS_LIST.json";
import BetsListFooter from '@/components/ui/footers/BetsListFooter';
import StatsTabs from '@/components/ui/tabs/statsTabs/components/StatsTabs';
import StatsTab from '@/components/ui/tabs/statsTabs/StatsTab';


const BetsListSection = () => {
  const [activeTab, setActiveTab] = useState('allBets');
  const [activeStatTab, setActiveStatTab] = useState('stats');

  const renderList = () => {
    switch (activeTab) {
      case 'allBets':
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
      case 'myBets':
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
      case 'stats':
        return <StatsTab activeStatTab={activeStatTab} />;
    }
  };

  return (
    <section className='bets-list-tabs-container'>
      <BetsListTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab !== 'stats' && activeTab !== 'leaderboard' && <GameInfoHeader />}
      {activeTab === 'stats' && (
        <StatsTabs activeStatTab={activeStatTab} setActiveStatTab={setActiveStatTab} />
      )}
      <div className={`game-info-list ${activeTab !== 'stats' ? 'no-scrollbar' : 'custom-scroll game-info-list-stat'}`}>
        {renderList()}
      </div>

      <BetsListFooter />
    </section>
  );
};

export default BetsListSection;
