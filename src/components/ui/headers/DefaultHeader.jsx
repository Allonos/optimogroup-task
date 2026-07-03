import { MenuIcon } from '@/assets/icons/SvgTojsx';

const DefaultHeader = () => {
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
        <button className='header__menu-button'>
          <MenuIcon
            className='icon'
            style={{ '--icon-color': 'rgba(var(--icon-grey))' }}
          />
        </button>
      </div>
    </header>
  );
};

export default DefaultHeader;
