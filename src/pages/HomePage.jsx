import GameLayout from '@/components/ui/layouts/GameLayout';
import BetsListSection from '@/components/ui/sections/BetsListSection';
import GameHeader from '@/components/ui/headers/gameHeader/GameHeader';
import background from '@/assets/webp/background.webp';
import GameActionsSection from '@/components/ui/sections/gameActionsSection/GameActionsSection';

const HomePage = () => {
  return (
    <GameLayout>
      <BetsListSection />
      <div className='home-page-content'>
        <GameHeader />
        <div>
          <img src={background} alt='background' className='background-img' />
        </div>
        <GameActionsSection />
      </div>
    </GameLayout>
  );
};

export default HomePage;
