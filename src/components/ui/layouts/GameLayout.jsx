import DefaultHeader from '../header/DefaultHeader';

const GameLayout = ({ children }) => {
  return (
    <main className='game-layout'>
      <DefaultHeader />
      <section>{children}</section>
    </main>
  );
};

export default GameLayout;
