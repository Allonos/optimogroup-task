import { useTranslation } from 'react-i18next';
import HowToPlayStep from './HowToPlayStep';

const HowToPlayExample = ({ titleKey, steps }) => {
  const { t } = useTranslation();
  return (
    <div className='how-to-play__steps'>
      {steps.map((step, i) => (
        <HowToPlayStep key={i} number={i + 1} {...step} />
      ))}
    </div>
  );
};

export default HowToPlayExample;
