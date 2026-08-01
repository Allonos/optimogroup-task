import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useModal } from '@/store/contexts/ModalContext';

import DefaultModal from '@/components/ui/modals/DefaultModal';
import ModalHeader from '@/components/ui/headers/modalheader/ModalHeader';
import HowToPlaySection from './components/HowToPlaySection';
import HowToPlayExample from '@/components/ui/modals/howToPlayModal/components/HowToPlayExample';
import RecentMultipliers from '@/components/ui/modals/howToPlayModal/components/RecentMultipliers';
import AdvancedFeaturesSection from '@/components/ui/modals/howToPlayModal/components/AdvancedFeaturesSection';
import GameInterfaceSection from '@/components/ui/modals/howToPlayModal/components/GameInterfaceSection';
import AdvancedFeaturesListSection from '@/components/ui/modals/howToPlayModal/components/AdvancedFeaturesListSection';

import {
  PLACING_BETS_STEPS,
  CASHING_OUT_STEPS,
  EXAMPLE_STEPS,
} from '@/utils/constants/howToPlayConstants';

import betsImg from '@/assets/webp/bets.webp';
import placeBetImg from '@/assets/webp/placeBetImg.webp';
import homePageImg from '@/assets/webp/homePage.webp';
import homePageMobileImg from '@/assets/webp/HomeScreenMobile.webp';

const HowToPlayModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { setIsAnyModalOpen } = useModal();

  useEffect(() => {
    setIsAnyModalOpen(isOpen);
  }, [isOpen, setIsAnyModalOpen]);

  return (
    <DefaultModal
      isOpen={isOpen}
      onClose={onClose}
      className='modal--centered no-scrollbar how-to-play-modal'
    >
      <ModalHeader title={t('howToPlay')} onClose={onClose} />

      <section className='how-to-play__modal__section'>
        <HowToPlaySection titleKey='placingBets' steps={PLACING_BETS_STEPS} />
        <div className='how-to-play__modal__image'>
          <img src={betsImg} alt='Bets' className='bets-img' />
        </div>
        <div className='how-to-play__modal__image-mobile'>
          <img
            src={placeBetImg}
            alt='Place Bet'
            className='place-bet-img-mobile'
          />
        </div>
        <HowToPlaySection titleKey='cashingOut' steps={CASHING_OUT_STEPS} />
        <div className='how-to-play__modal__image'>
          <img src={homePageImg} alt='Home Page' className='home-page-img' />
        </div>
        <div className='how-to-play__modal__image-mobile'>
          <img
            src={homePageMobileImg}
            alt='Home Page'
            className='home-page-img-mobile'
          />
        </div>

        <div className='how-to-play__example'>
          <span>{t('example')}</span>
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
