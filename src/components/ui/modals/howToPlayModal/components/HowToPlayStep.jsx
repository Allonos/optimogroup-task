import { useTranslation } from 'react-i18next';

const HowToPlayStep = ({ number, before, highlight, after, text }) => {
  const { t } = useTranslation();
  return (
    <div className='how-to-play__step'>
      <span>{number}.</span>
      <p>
        {text ? (
          t(text)
        ) : (
          <>
            {before && t(before)}
            {highlight && <span>{t(highlight)}</span>}
            {after && t(after)}
          </>
        )}
      </p>
    </div>
  );
};

export default HowToPlayStep;
