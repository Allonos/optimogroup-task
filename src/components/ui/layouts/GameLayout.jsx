import DefaultFooter from '@/components/ui/footers/DefaultFooter';
import DefaultHeader from '@/components/ui/headers/DefaultHeader';

const GameLayout = ({ children }) => {
  return (
    <main className='game-layout'>
      <DefaultHeader />
      <section className='game-layout-children'>{children}</section>
      <DefaultFooter />
    </main>
  );
};

export default GameLayout;
