import HomePage from '@/pages/HomePage';
import { ModalProvider } from '@/store/contexts/ModalContext';

function App() {
  return (
    <>
      <ModalProvider>
        <HomePage />
      </ModalProvider>
    </>
  );
}

export default App;
