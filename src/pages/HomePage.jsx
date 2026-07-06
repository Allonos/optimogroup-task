import GameLayout from '@/components/ui/layouts/GameLayout';
import BetsListSection from '@/components/ui/sections/BetsListSection';
import GameHeader from '@/components/ui/headers/gameHeader/GameHeader';
import gameImg from '@/assets/webp/gameImg.webp';
import GameActionsSection from '@/components/ui/sections/gameActionsSection/GameActionsSection';

const HomePage = () => {
  return (
    <GameLayout>
      <BetsListSection />
      <div className='home-page-content'>
        <GameHeader />
        <div>
          <img src={gameImg} alt='game-img' className='game-img' />
        </div>
        <GameActionsSection />
      </div>
    </GameLayout>
  );
};

export default HomePage;
