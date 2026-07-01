import DefaultFooter from '@/components/ui/footers/DefaultFooter';
import DefaultHeader from '@/components/ui/headers/DefaultHeader';

const GameLayout = ({ children }) => {
  return (
    <main className='game-layout'>
      <DefaultHeader />
      <section>{children}</section>
      <DefaultFooter />
    </main>
  );
};

export default GameLayout;
