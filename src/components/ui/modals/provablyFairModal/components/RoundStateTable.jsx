import { useTranslation } from 'react-i18next';

const HEADERS = ['roundNumber', 'serverKey', 'crashPoint', 'provablyFairHash'];

const RoundStateTable = ({ title, values }) => {
  const { t } = useTranslation();

  return (
    <div className='modal__frame'>
      <h3 className='modal__subtitle'>{title}</h3>
      <div className='modal__frame__content'>
        <div className='modal__frame__row--header'>
          {HEADERS.map((h) => (
            <span key={h}>{t(h)}</span>
          ))}
        </div>
        <div className='modal__separator'></div>
        <div className='modal__frame__row--content'>
          {values.map((v, i) => (
            <span key={i}>{t(v)}</span>
          ))}
        </div>
      </div>
      <div className='modal__frame__content__flex'>
        {HEADERS.map((h, i) => (
          <div
            className={`modal__frame__flex__row ${i === HEADERS.length - 1 ? 'last' : ''}`}
            key={h}
          >
            <span className='modal__frame__flex__key'>{t(h)}</span>
            <span className='modal__frame__flex__value'>{t(values[i])}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundStateTable;
