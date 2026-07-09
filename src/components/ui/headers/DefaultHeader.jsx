import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuIcon, CloseIcon } from '@/assets/icons/SvgTojsx';
import MenuModal from '../modals/menuModal/MenuModal';
import ProvablyFairModal from '../modals/provablyFairModal/ProvablyFairModal';

const DefaultHeader = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='header'>
      <div />
      <div className='header__right'>

        <div className='header__balance'>
          <p className='header__balance-label text-body-small-semibold'>
            {t('balance')}
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
