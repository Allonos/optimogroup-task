import { useTranslation } from 'react-i18next';

const BetRoundsButton = ({ setActiveRound, activeRound, value }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={setActiveRound}
      className={`auto-bet-modal-rounds-btn ${activeRound === value ? 'active' : ''}`}
    >
      <span className='auto-bet-modal-rounds-number'>{value}</span>
      <span className='auto-bet-modal-rounds-text'>{t('rounds')}</span>
    </button>
  );
};

export default BetRoundsButton;
