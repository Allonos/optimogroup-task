import { useState } from 'react';
import { MenuIcon, CloseIcon } from '@/assets/icons/SvgTojsx';
import DefaultModal from '@/components/ui/modals/DefaultModal';
import MenuModal from '../modals/menuModal/MenuModal';

const DefaultHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='header'>
      <div />
      <div className='header__right'>
        <div className='header__balance'>
          <p className='header__balance-label text-body-small-semibold'>
            Balance
          </p>
          <p className='header__balance-value'>452.20 USD</p>
        </div>

        <div className='header__menu-wrapper'>
          <button
            className={`header__menu-button${isMenuOpen ? ' active' : ''}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <CloseIcon className='icon' />
            ) : (
              <MenuIcon className='icon' />
            )}
          </button>
          <MenuModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;
