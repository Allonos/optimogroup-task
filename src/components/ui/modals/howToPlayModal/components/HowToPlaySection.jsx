import { useTranslation } from 'react-i18next';
import HowToPlayStep from './HowToPlayStep';

const HowToPlaySection = ({ titleKey, steps }) => {
  const { t } = useTranslation();
  return (
    <div className='how-to-play__modal__content'>
      <h2 className='how-to-play__subtitle'>{t(titleKey)}</h2>
      <div className='how-to-play__steps'>
        {steps.map((step, i) => (
          <HowToPlayStep key={i} number={i + 1} {...step} />
        ))}
      </div>
    </div>
  );
};

export default HowToPlaySection;
