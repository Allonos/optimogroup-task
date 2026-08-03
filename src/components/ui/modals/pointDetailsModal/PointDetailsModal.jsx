import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/store/contexts/ModalContext';

import ProvablyFairModal from '@/components/ui/modals/provablyFairModal/ProvablyFairModal';
import DefaultModal from '@/components/ui/modals/DefaultModal';
import ModalHeader from '@/components/ui/headers/modalheader/ModalHeader';
import { RocketIcon, CheckIcon, CopyIcon } from '@/assets/icons/SvgTojsx';

const ROUND_HASH = '5435a2567s424k12310afed4';
const SERVER_SEED = '5435a2567s424k12310afed4';

const PointDetailsModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { setIsAnyModalOpen } = useModal();
  const [isProvablyFairModalOpen, setIsProvablyFairModalOpen] = useState(false);

  useEffect(() => {
    setIsAnyModalOpen(isOpen);
  }, [isOpen, setIsAnyModalOpen]);

  const handleProvablyFairModalOpen = () => {
    onClose();
    setIsProvablyFairModalOpen(true);
  };

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <DefaultModal
        isOpen={isOpen}
        onClose={onClose}
        className='modal--centered point-details-modal'
      >
        <ModalHeader title={t('pointDetails')} onClose={onClose} />
        <div className='point-details-modal-container'>
          <div className='point-details-round-id'>
            <span className='point-details-round-id-label'>{t('roundId')}</span>
            <span className='point-details-round-id-value'>1153219</span>
          </div>
          <div className='point-details-content'>
            <div className='point-details-content__bet'>
              <div className='point-details-content__rocket-icon'>
                <RocketIcon
                  className='point-details-content__rocket-icon-svg icon'
                  style={{ '--icon-color': 'rgba(var(--text-white))' }}
                />
              </div>
              <span>24.53x</span>
            </div>
            <div className='point-details-content__info'>
              <span className='point-details-content__secondary-text'>
                01 Feb, 2025 4:00
              </span>
              <div className='point-details-content__hash'>
                <CheckIcon
                  className='icon'
                  style={{ '--icon-color': 'rgba(var(--green))' }}
                />
                <span className='point-details-content__hash-value sm'>
                  {ROUND_HASH}
                </span>
                <button
                  type='button'
                  className='point-details-content__copy-btn'
                  onClick={() => handleCopy(ROUND_HASH)}
                  aria-label='Copy round hash'
                >
                  <CopyIcon
                    className='icon'
                    style={{ '--icon-color': 'rgba(var(--text-grey))' }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className='point-details-content__info-footer'>
            <span className='point-details-content__secondary-text'>
              {t('serverSeed')}
            </span>
            <div className='point-details-content__hash'>
              <span className='point-details-content__hash-value lg'>
                {SERVER_SEED}
              </span>
              <button
                type='button'
                className='point-details-content__copy-btn'
                onClick={() => handleCopy(SERVER_SEED)}
                aria-label='Copy server seed'
              >
                <CopyIcon
                  className='icon'
                  style={{ '--icon-color': 'rgba(var(--text-grey))' }}
                />
              </button>
            </div>
          </div>

          <button
            className='point-details-content__provably-fair-btn'
            onClick={handleProvablyFairModalOpen}
          >
            {t('meaningOfProvablyFair')}
          </button>
        </div>
      </DefaultModal>

      <ProvablyFairModal
        isOpen={isProvablyFairModalOpen}
        onClose={() => setIsProvablyFairModalOpen(false)}
      />
    </>
  );
};

export default PointDetailsModal;
