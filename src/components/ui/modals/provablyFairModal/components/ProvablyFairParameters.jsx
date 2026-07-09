import { useTranslation } from 'react-i18next';

const PARAMS = [
  { label: 'roundNumberText', desc: 'roundNumberText' },
  { label: 'serverKeyText', desc: 'serverKeyText' },
  { label: 'crashPointText', desc: 'crashPointText' },
  { label: 'provablyFairHashText', desc: 'provablyFairHashText' },
];

const ProvablyFairParameters = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='modal__frame__1'>
        <h3 className='modal__subtitle'>{t('theFourParameters')}</h3>
        <span className='modal__frame__1__text'>{t('everyRoundUses')}</span>
        <div className='modal__ol'>
          {PARAMS.map((param, i) => (
            <div key={i} className='modal__ol__item'>
              <span className='modal__ol__number'>{i + 1}.</span>
              <p className='modal__list__label'>
                {t(param.label)}{' '}
                <span className='modal__list__desc'> – {t(param.desc)}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='modal__frame__1'>
        <h3 className='modal__subtitle'>{t('verificationFormula')}</h3>
        <div className='modal__frame__content'>
          <p className='modal__frame__1__text'>
            {t('provablyFairHashFormula')}
          </p>
        </div>
      </div>

      <div className='modal__frame__1'>
        <h3 className='modal__subtitle'>{t('example')}</h3>
        <div className='modal__frame__content'>
          <p className='modal__frame__1__text'>
            SHA512("7k9mX2pQ4nR8wL3vB6hJ5tY.2.45.1") =
            8f3a2b9c7d1e6f4a5b8c9d2e3f4a5b6c7d8e9f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a
          </p>
        </div>
      </div>
    </>
  );
};

export default ProvablyFairParameters;
