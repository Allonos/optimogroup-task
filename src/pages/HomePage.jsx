import { useEffect, useState } from 'react';
import { useModal } from '@/store/contexts/ModalContext';
import DefaultFooter from '@/components/ui/footers/DefaultFooter';
import GameLayout from '@/components/ui/layouts/GameLayout';
import BetsListSection from '@/components/ui/sections/BetsListSection';
import GameHeader from '@/components/ui/headers/gameHeader/GameHeader';
import background from '@/assets/webp/background.webp';
import GameActionsSection from '@/components/ui/sections/gameActionsSection/GameActionsSection';
import BonusModal from '@/components/ui/modals/bonusModal/BonusModal';
import TotalWinModal from '@/components/ui/modals/totalWinModal/TotalWinModal';
import PhaserGame from '../game/PhaserGame';

const ROUND_DURATION_MS = 5000;

const HomePage = () => {
  const [isGetBonusBet, setIsGetBonusBet] = useState(false);
  const [isGetFreeBet, setGetIsFreeBet] = useState(false);
  const [totalFreeBetWin, setTotalFreeBetWin] = useState(false);

  const [isRoundActive, setIsRoundActive] = useState(true);

  const { isAnyModalOpen } = useModal();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRoundActive(false);
    }, ROUND_DURATION_MS);

    console.log(timer)

    return () => clearTimeout(timer);
  }, []);

  return (
    <GameLayout>
      <div className='home-page-footer'>
        <DefaultFooter />
      </div>
      <BetsListSection />
      <div className='home-page-content'>
        <GameHeader />
        <PhaserGame className='background-img' isRoundActive={isRoundActive} />
        <GameActionsSection />
      </div>

      <BonusModal
        isOpen={isGetBonusBet}
        onClose={() => setIsGetBonusBet(false)}
        type='bonus'
      />
      <BonusModal
        isOpen={isGetFreeBet}
        onClose={() => setGetIsFreeBet(false)}
        type='free'
      />
      <TotalWinModal
        isOpen={totalFreeBetWin}
        onClose={() => setTotalFreeBetWin(false)}
      />
    </GameLayout>
  );
};

export default HomePage;