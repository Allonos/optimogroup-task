import { useTranslation } from 'react-i18next';
import { LogoIcon, NetworkIcon } from '@/assets/icons/SvgTojsx';

const DefaultFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className='footer-container'>
      <div className='default-footer'>
        <div className='footer-content footer-left'>
          <span className='text-body-small-semibold'>{t('poweredBy')}</span>
          <LogoIcon
            className='icon'
            style={{ '--icon-color': 'rgba(var(--icon-white))' }}
          />
        </div>
        <div className='footer-content footer-right'>
          <NetworkIcon
            className='icon'
            style={{ '--icon-color': 'rgba(var(--icon-green))' }}
          />
          <span className='text-body-small-semibold'>{t('networkConnection')}</span>
          <span className='footer-seperator'></span>
          <span className='text-body-small-semibold'>10 : 27 : 42</span>
        </div>
      </div>
    </footer>
  );
};

export default DefaultFooter;
