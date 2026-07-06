import GameLayout from '@/components/ui/layouts/GameLayout';
import BetsListSection from '@/components/ui/sections/BetsListSection';
import GameHeader from '../components/ui/headers/gameHeader/GameHeader';

const HomePage = () => {
  return (
    <GameLayout>
      <BetsListSection />
      <div>
        <GameHeader />
      </div>
    </GameLayout>
  );
};

export default HomePage;
