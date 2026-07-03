import { useState } from 'react';
import BetsListTabs from '@/components/ui/tabs/betsListTabs/BetsListTabs';
import GameInfoHeader from '@/components/ui/headers/gameInfoHeader/GameInfoHeader';
import GameInfoList from '@/components/ui/lists/gameInfoList/GameInfoList';

import betList from '@/data/BET_LIST.json';
import MyBetList from "@/data/MY_BETS_LIST.json";


const BetsListSection = () => {
  const [activeTab, setActiveTab] = useState('All Bets');

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
    }
  }

  return (
    <section className='bets-list-tabs-container'>
      <BetsListTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <GameInfoHeader />
      <ul className='game-info-list no-scrollbar'>
        {renderList()}
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
