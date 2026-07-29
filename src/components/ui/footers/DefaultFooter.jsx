import { useTranslation } from 'react-i18next';
import { LogoIcon, NetworkIcon } from '@/assets/icons/SvgTojsx';

const DefaultFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className='footer-container'>
      <div className='default-footer'>
        <div className='footer-content footer-left'>
          <span className='default-footer-text'>{t('poweredBy')}</span>
          <LogoIcon
            width={64}
            height={16}
            className='icon'
            style={{ '--icon-color': 'rgba(var(--icon-white))' }}
          />
        </div>
        <div className='footer-content footer-right'>
          <NetworkIcon
            width={18}
            height={18}
            className='icon'
            style={{ '--icon-color': 'rgba(var(--icon-green))' }}
          />
          <span className='default-footer-text'>{t('networkConnection')}</span>
          <span className='footer-seperator'></span>
          <span className='default-footer-text'>10 : 27 : 42</span>
        </div>
      </div>
    </footer>
  );
};

export default DefaultFooter;
