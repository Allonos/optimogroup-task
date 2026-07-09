import { useTranslation } from 'react-i18next';

const InfoBlock = ({ intro, items, footer }) => {
  const { t } = useTranslation();

  return (
    <div className='modal__frame__1'>
      <span className='modal__frame__1__text'>{t(intro)}</span>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <p className='modal__list__label'>
              {t(item.label)}{' '}
              <span className='modal__list__desc'> – {t(item.desc)}</span>
            </p>
          </li>
        ))}
      </ul>
      {footer && <span className='modal__frame__1__text'>{t(footer)}</span>}
    </div>
  );
};

export default InfoBlock;
