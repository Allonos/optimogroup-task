import { useTranslation } from 'react-i18next';

import DefaultModal from '@/components/ui/modals/DefaultModal';
import ModalHeader from '@/components/ui/headers/modalheader/ModalHeader';
import HowToPlaySection from './components/HowToPlaySection';
import HowToPlayExample from '@/components/ui/modals/howToPlayModal/components/HowToPlayExample';
import RecentMultipliers from '@/components/ui/modals/howToPlayModal/components/RecentMultipliers';
import DefaultSwitch from '@/components/ui/switches/DefaultSwitch';
import AdvancedFeaturesSection from '@/components/ui/modals/howToPlayModal/components/AdvancedFeaturesSection';
import GameInterfaceSection from '@/components/ui/modals/howToPlayModal/components/GameInterfaceSection';
import AdvancedFeaturesListSection from '@/components/ui/modals/howToPlayModal/components/AdvancedFeaturesListSection';

import betsImg from '@/assets/webp/bets.webp';
import homePageImg from '@/assets/webp/homePage.webp';


const PLACING_BETS_STEPS = [
  { highlight: 'placingBetsStep1Highlight', after: 'placingBetsStep1After' },
  { before: 'placingBetsStep2Before', highlight: 'placingBetsStep2Highlight', after: 'placingBetsStep2After' },
  { before: 'placingBetsStep3Before', highlight: 'placingBetsStep3Highlight', after: 'placingBetsStep3After' },
  { highlight: 'placingBetsStep4Highlight', after: 'placingBetsStep4After' },
  { before: 'placingBetsStep5Before', highlight: 'placingBetsStep5Highlight', after: 'placingBetsStep5After' },
];

const CASHING_OUT_STEPS = [
  { before: 'cashingOutStep1Before', highlight: 'cashingOutStep1Highlight', after: 'cashingOutStep1After' },
  { before: 'cashingOutStep2Before', highlight: 'cashingOutStep2Highlight' },
  { text: 'cashingOutStep3' },
  { before: 'cashingOutStep4Before', highlight: 'cashingOutStep4Highlight' },
  { text: 'cashingOutStep5' },
];

const EXAMPLE_STEPS = [
  { before: 'youBet', highlight: 'youBetHighlight' },
  { before: 'youCashOutAt', highlight: 'youCashOutAtHighlight' },
  { before: 'youWin', highlight: "youWinHighlight" },
];


const HowToPlayModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      className='modal--centered no-scrollbar'
      style={{
        maxWidth: 768,
        width: '100%',
        maxHeight: 731,
        overflowY: 'auto',
        borderRadius: 16,
        padding: 24,
        border: '1px solid rgba(var(--line))',
        zIndex: 100,
      }}
    >
      <ModalHeader title={t('howToPlay')} onClose={onClose} />

      <section className='how-to-play__modal__section'>
        <HowToPlaySection titleKey='placingBets' steps={PLACING_BETS_STEPS} />
        <div className='how-to-play__modal__image'>
          <img src={betsImg} alt='Bets' className='bets-img' />
        </div>
        <HowToPlaySection titleKey='cashingOut' steps={CASHING_OUT_STEPS} />
        <div className='how-to-play__modal__image'>
          <img src={homePageImg} alt='Home Page' className='home-page-img' />
        </div>

        <div className='how-to-play__example'>
          <span>{t("example")}</span>
          <HowToPlayExample steps={EXAMPLE_STEPS} />
        </div>
        <RecentMultipliers />

        <GameInterfaceSection />
        <AdvancedFeaturesSection />     
        <AdvancedFeaturesListSection />
        
      </section>
    </DefaultModal>
  );
};

export default HowToPlayModal;
