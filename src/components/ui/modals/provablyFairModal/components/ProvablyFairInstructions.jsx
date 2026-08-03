import { useTranslation } from 'react-i18next';

const ProvablyFairInstructions = () => {
  const { t } = useTranslation();
  return (
    <div className='modal__instructions'>
      <h3 className='modal__section__subtitle'>{t('howItWorks')}</h3>
      <p className='modal__text'>{t('howItWorksText')}</p>
    </div>
  );
};

export default ProvablyFairInstructions;
